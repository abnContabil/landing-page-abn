import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { createClient } from 'jsr:@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const authHeader = req.headers.get('Authorization')
    if (!authHeader) throw new Error('Missing Authorization header')
    const token = authHeader.replace('Bearer ', '')
    const {
      data: { user },
      error: authError,
    } = await supabaseAdmin.auth.getUser(token)
    if (authError || !user) throw new Error('Unauthorized')

    const body = await req.json()
    const { empresa_id } = body
    if (!empresa_id) throw new Error('empresa_id is required')

    const { data: link, error: linkError } = await supabaseAdmin
      .from('usuarios_empresas')
      .select('perfil')
      .eq('empresa_id', empresa_id)
      .eq('usuario_id', user.id)
      .single()

    if (linkError || link?.perfil !== 'admin') {
      const { data: link2, error: link2Error } = await supabaseAdmin
        .from('usuarios_empresas')
        .select('perfil')
        .eq('empresa_id', empresa_id)
        .eq('user_id', user.id)
        .single()
      if (link2Error || link2?.perfil !== 'admin') {
        throw new Error('Forbidden: Admins only')
      }
    }

    if (req.method === 'POST') {
      const { email, name, role } = body
      if (!email) throw new Error('Email is required')

      const { data, error } = await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
        data: { name },
      })
      if (error) throw error

      if (data.user) {
        await supabaseAdmin.from('perfis_usuarios').upsert(
          {
            id: data.user.id,
            email: email,
            nome: name,
            nome_completo: name,
          },
          { onConflict: 'id' },
        )

        await supabaseAdmin.from('usuarios_empresas').upsert({
          usuario_id: data.user.id,
          user_id: data.user.id,
          empresa_id: empresa_id,
          perfil: role || 'operador',
          status: 'Pendente',
          convidado_por: user.id,
          data_convite: new Date().toISOString(),
        })
      }

      return new Response(JSON.stringify({ user: data.user }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    if (req.method === 'PATCH') {
      const { id, role, status } = body
      if (!id) throw new Error('id is required')

      const updates: any = {}
      if (role !== undefined) updates.perfil = role
      if (status !== undefined) updates.status = status

      if (Object.keys(updates).length > 0) {
        await supabaseAdmin
          .from('usuarios_empresas')
          .update(updates)
          .eq('usuario_id', id)
          .eq('empresa_id', empresa_id)
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    if (req.method === 'DELETE') {
      const { id } = body
      if (!id) throw new Error('id is required')

      await supabaseAdmin
        .from('usuarios_empresas')
        .delete()
        .eq('usuario_id', id)
        .eq('empresa_id', empresa_id)

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response('Method not allowed', { status: 405, headers: corsHeaders })
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
