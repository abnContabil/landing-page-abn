// AVOID UPDATING THIS FILE DIRECTLY. It is automatically generated.
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.5'
  }
  public: {
    Tables: {
      categorias: {
        Row: {
          created_at: string
          empresa_id: string
          id: string
          nome: string
          tipo: string
        }
        Insert: {
          created_at?: string
          empresa_id: string
          id?: string
          nome: string
          tipo: string
        }
        Update: {
          created_at?: string
          empresa_id?: string
          id?: string
          nome?: string
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: 'categorias_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
        ]
      }
      categorias_financeiras: {
        Row: {
          classificacao_dre: string | null
          created_at: string
          criado_por: string | null
          descricao: string | null
          empresa_id: string
          entra_dre: boolean | null
          grupo: string | null
          grupo_dre: string | null
          id: string
          natureza_resultado: string | null
          nome: string
          ordem_dre: number | null
          status: string | null
          tipo: string
          updated_at: string | null
        }
        Insert: {
          classificacao_dre?: string | null
          created_at?: string
          criado_por?: string | null
          descricao?: string | null
          empresa_id: string
          entra_dre?: boolean | null
          grupo?: string | null
          grupo_dre?: string | null
          id?: string
          natureza_resultado?: string | null
          nome: string
          ordem_dre?: number | null
          status?: string | null
          tipo: string
          updated_at?: string | null
        }
        Update: {
          classificacao_dre?: string | null
          created_at?: string
          criado_por?: string | null
          descricao?: string | null
          empresa_id?: string
          entra_dre?: boolean | null
          grupo?: string | null
          grupo_dre?: string | null
          id?: string
          natureza_resultado?: string | null
          nome?: string
          ordem_dre?: number | null
          status?: string | null
          tipo?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'categorias_financeiras_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
        ]
      }
      clientes: {
        Row: {
          created_at: string
          criado_por: string | null
          documento: string | null
          documento_normalizado: string | null
          email: string | null
          empresa_id: string
          endereco: string | null
          id: string
          nome: string
          nome_razao_social: string | null
          observacoes: string | null
          status: string | null
          telefone: string | null
          tipo_documento: string | null
          tipo_pessoa: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          criado_por?: string | null
          documento?: string | null
          documento_normalizado?: string | null
          email?: string | null
          empresa_id: string
          endereco?: string | null
          id?: string
          nome: string
          nome_razao_social?: string | null
          observacoes?: string | null
          status?: string | null
          telefone?: string | null
          tipo_documento?: string | null
          tipo_pessoa?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          criado_por?: string | null
          documento?: string | null
          documento_normalizado?: string | null
          email?: string | null
          empresa_id?: string
          endereco?: string | null
          id?: string
          nome?: string
          nome_razao_social?: string | null
          observacoes?: string | null
          status?: string | null
          telefone?: string | null
          tipo_documento?: string | null
          tipo_pessoa?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'clientes_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
        ]
      }
      contas_bancarias: {
        Row: {
          created_at: string
          empresa_id: string
          id: string
          nome: string
          tipo: string | null
        }
        Insert: {
          created_at?: string
          empresa_id: string
          id?: string
          nome: string
          tipo?: string | null
        }
        Update: {
          created_at?: string
          empresa_id?: string
          id?: string
          nome?: string
          tipo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'contas_bancarias_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
        ]
      }
      contas_financeiras: {
        Row: {
          agencia: string | null
          banco: string | null
          conta: string | null
          created_at: string
          criado_por: string | null
          data_saldo_inicial: string | null
          empresa_id: string
          id: string
          nome: string
          saldo_inicial: number | null
          status: string | null
          tipo: string
          updated_at: string | null
        }
        Insert: {
          agencia?: string | null
          banco?: string | null
          conta?: string | null
          created_at?: string
          criado_por?: string | null
          data_saldo_inicial?: string | null
          empresa_id: string
          id?: string
          nome: string
          saldo_inicial?: number | null
          status?: string | null
          tipo: string
          updated_at?: string | null
        }
        Update: {
          agencia?: string | null
          banco?: string | null
          conta?: string | null
          created_at?: string
          criado_por?: string | null
          data_saldo_inicial?: string | null
          empresa_id?: string
          id?: string
          nome?: string
          saldo_inicial?: number | null
          status?: string | null
          tipo?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'contas_financeiras_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
        ]
      }
      contas_recorrentes: {
        Row: {
          ativo: boolean | null
          created_at: string
          descricao: string | null
          dia_vencimento: number | null
          empresa_id: string
          id: string
          nome: string
          tipo: string | null
          valor: number | null
        }
        Insert: {
          ativo?: boolean | null
          created_at?: string
          descricao?: string | null
          dia_vencimento?: number | null
          empresa_id: string
          id?: string
          nome: string
          tipo?: string | null
          valor?: number | null
        }
        Update: {
          ativo?: boolean | null
          created_at?: string
          descricao?: string | null
          dia_vencimento?: number | null
          empresa_id?: string
          id?: string
          nome?: string
          tipo?: string | null
          valor?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'contas_recorrentes_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
        ]
      }
      empresas: {
        Row: {
          atualizado_em: string | null
          cidade: string | null
          cnpj: string | null
          cnpj_normalizado: string | null
          created_at: string
          criado_em: string | null
          criado_por: string | null
          email: string | null
          endereco: string | null
          estado: string | null
          id: string
          nome: string
          nome_fantasia: string | null
          razao_social: string | null
          status: string | null
          telefone: string | null
          tipo_cnpj: string | null
        }
        Insert: {
          atualizado_em?: string | null
          cidade?: string | null
          cnpj?: string | null
          cnpj_normalizado?: string | null
          created_at?: string
          criado_em?: string | null
          criado_por?: string | null
          email?: string | null
          endereco?: string | null
          estado?: string | null
          id?: string
          nome: string
          nome_fantasia?: string | null
          razao_social?: string | null
          status?: string | null
          telefone?: string | null
          tipo_cnpj?: string | null
        }
        Update: {
          atualizado_em?: string | null
          cidade?: string | null
          cnpj?: string | null
          cnpj_normalizado?: string | null
          created_at?: string
          criado_em?: string | null
          criado_por?: string | null
          email?: string | null
          endereco?: string | null
          estado?: string | null
          id?: string
          nome?: string
          nome_fantasia?: string | null
          razao_social?: string | null
          status?: string | null
          telefone?: string | null
          tipo_cnpj?: string | null
        }
        Relationships: []
      }
      fornecedores: {
        Row: {
          created_at: string
          criado_por: string | null
          documento: string | null
          documento_normalizado: string | null
          email: string | null
          empresa_id: string
          endereco: string | null
          id: string
          nome_razao_social: string
          observacoes: string | null
          status: string | null
          telefone: string | null
          tipo_documento: string | null
          tipo_pessoa: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          criado_por?: string | null
          documento?: string | null
          documento_normalizado?: string | null
          email?: string | null
          empresa_id: string
          endereco?: string | null
          id?: string
          nome_razao_social: string
          observacoes?: string | null
          status?: string | null
          telefone?: string | null
          tipo_documento?: string | null
          tipo_pessoa?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          criado_por?: string | null
          documento?: string | null
          documento_normalizado?: string | null
          email?: string | null
          empresa_id?: string
          endereco?: string | null
          id?: string
          nome_razao_social?: string
          observacoes?: string | null
          status?: string | null
          telefone?: string | null
          tipo_documento?: string | null
          tipo_pessoa?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'fornecedores_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
        ]
      }
      importacoes_ofx: {
        Row: {
          banco: string | null
          conta_financeira_id: string
          criado_em: string
          empresa_id: string
          id: string
          importado_por: string | null
          mensagem_erro: string | null
          nome_arquivo: string
          periodo_fim: string | null
          periodo_inicio: string | null
          status: Database['public']['Enums']['status_importacao_ofx'] | null
          total_ignoradas: number | null
          total_importadas: number | null
          total_transacoes: number | null
        }
        Insert: {
          banco?: string | null
          conta_financeira_id: string
          criado_em?: string
          empresa_id: string
          id?: string
          importado_por?: string | null
          mensagem_erro?: string | null
          nome_arquivo: string
          periodo_fim?: string | null
          periodo_inicio?: string | null
          status?: Database['public']['Enums']['status_importacao_ofx'] | null
          total_ignoradas?: number | null
          total_importadas?: number | null
          total_transacoes?: number | null
        }
        Update: {
          banco?: string | null
          conta_financeira_id?: string
          criado_em?: string
          empresa_id?: string
          id?: string
          importado_por?: string | null
          mensagem_erro?: string | null
          nome_arquivo?: string
          periodo_fim?: string | null
          periodo_inicio?: string | null
          status?: Database['public']['Enums']['status_importacao_ofx'] | null
          total_ignoradas?: number | null
          total_importadas?: number | null
          total_transacoes?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'importacoes_ofx_conta_financeira_id_fkey'
            columns: ['conta_financeira_id']
            isOneToOne: false
            referencedRelation: 'contas_financeiras'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'importacoes_ofx_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
        ]
      }
      lancamentos_financeiros: {
        Row: {
          categoria_id: string
          cliente_id: string | null
          conta_financeira_id: string | null
          created_at: string | null
          criado_por: string | null
          data_competencia: string
          data_pagamento: string | null
          data_vencimento: string
          descricao: string
          empresa_id: string
          forma_pagamento: string | null
          fornecedor_id: string | null
          id: string
          numero_documento: string | null
          observacoes: string | null
          origem: string | null
          recorrente: boolean | null
          servico_produto_id: string | null
          status: string
          tipo: string
          updated_at: string | null
          valor_desconto: number | null
          valor_final: number
          valor_juros: number | null
          valor_multa: number | null
          valor_original: number
          valor_pago: number | null
        }
        Insert: {
          categoria_id: string
          cliente_id?: string | null
          conta_financeira_id?: string | null
          created_at?: string | null
          criado_por?: string | null
          data_competencia: string
          data_pagamento?: string | null
          data_vencimento: string
          descricao: string
          empresa_id: string
          forma_pagamento?: string | null
          fornecedor_id?: string | null
          id?: string
          numero_documento?: string | null
          observacoes?: string | null
          origem?: string | null
          recorrente?: boolean | null
          servico_produto_id?: string | null
          status?: string
          tipo: string
          updated_at?: string | null
          valor_desconto?: number | null
          valor_final?: number
          valor_juros?: number | null
          valor_multa?: number | null
          valor_original?: number
          valor_pago?: number | null
        }
        Update: {
          categoria_id?: string
          cliente_id?: string | null
          conta_financeira_id?: string | null
          created_at?: string | null
          criado_por?: string | null
          data_competencia?: string
          data_pagamento?: string | null
          data_vencimento?: string
          descricao?: string
          empresa_id?: string
          forma_pagamento?: string | null
          fornecedor_id?: string | null
          id?: string
          numero_documento?: string | null
          observacoes?: string | null
          origem?: string | null
          recorrente?: boolean | null
          servico_produto_id?: string | null
          status?: string
          tipo?: string
          updated_at?: string | null
          valor_desconto?: number | null
          valor_final?: number
          valor_juros?: number | null
          valor_multa?: number | null
          valor_original?: number
          valor_pago?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'lancamentos_financeiros_categoria_id_fkey'
            columns: ['categoria_id']
            isOneToOne: false
            referencedRelation: 'categorias_financeiras'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lancamentos_financeiros_cliente_id_fkey'
            columns: ['cliente_id']
            isOneToOne: false
            referencedRelation: 'clientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lancamentos_financeiros_conta_financeira_id_fkey'
            columns: ['conta_financeira_id']
            isOneToOne: false
            referencedRelation: 'contas_financeiras'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lancamentos_financeiros_criado_por_perfis_fkey'
            columns: ['criado_por']
            isOneToOne: false
            referencedRelation: 'perfis_usuarios'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lancamentos_financeiros_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lancamentos_financeiros_fornecedor_id_fkey'
            columns: ['fornecedor_id']
            isOneToOne: false
            referencedRelation: 'fornecedores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lancamentos_financeiros_servico_produto_id_fkey'
            columns: ['servico_produto_id']
            isOneToOne: false
            referencedRelation: 'servicos_produtos'
            referencedColumns: ['id']
          },
        ]
      }
      ordem_itens: {
        Row: {
          created_at: string
          empresa_id: string
          id: string
          ordem_id: string
          preco_unitario: number
          quantidade: number
          servico_produto_id: string | null
        }
        Insert: {
          created_at?: string
          empresa_id: string
          id?: string
          ordem_id: string
          preco_unitario?: number
          quantidade?: number
          servico_produto_id?: string | null
        }
        Update: {
          created_at?: string
          empresa_id?: string
          id?: string
          ordem_id?: string
          preco_unitario?: number
          quantidade?: number
          servico_produto_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'ordem_itens_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'ordem_itens_ordem_id_fkey'
            columns: ['ordem_id']
            isOneToOne: false
            referencedRelation: 'ordens_vendas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'ordem_itens_servico_produto_id_fkey'
            columns: ['servico_produto_id']
            isOneToOne: false
            referencedRelation: 'servicos_produtos'
            referencedColumns: ['id']
          },
        ]
      }
      ordens_vendas: {
        Row: {
          cliente_id: string | null
          created_at: string
          data_pesagem: string | null
          data_venda: string
          empresa_id: string
          id: string
          status: string | null
          total: number
        }
        Insert: {
          cliente_id?: string | null
          created_at?: string
          data_pesagem?: string | null
          data_venda?: string
          empresa_id: string
          id?: string
          status?: string | null
          total?: number
        }
        Update: {
          cliente_id?: string | null
          created_at?: string
          data_pesagem?: string | null
          data_venda?: string
          empresa_id?: string
          id?: string
          status?: string | null
          total?: number
        }
        Relationships: [
          {
            foreignKeyName: 'ordens_vendas_cliente_id_fkey'
            columns: ['cliente_id']
            isOneToOne: false
            referencedRelation: 'clientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'ordens_vendas_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
        ]
      }
      pagamentos: {
        Row: {
          categoria_id: string | null
          conta_id: string | null
          created_at: string
          data_pagamento: string
          descricao: string
          empresa_id: string
          id: string
          ordem_id: string | null
          status: string
          tipo: string
          valor: number
        }
        Insert: {
          categoria_id?: string | null
          conta_id?: string | null
          created_at?: string
          data_pagamento: string
          descricao: string
          empresa_id: string
          id?: string
          ordem_id?: string | null
          status: string
          tipo: string
          valor?: number
        }
        Update: {
          categoria_id?: string | null
          conta_id?: string | null
          created_at?: string
          data_pagamento?: string
          descricao?: string
          empresa_id?: string
          id?: string
          ordem_id?: string | null
          status?: string
          tipo?: string
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: 'pagamentos_categoria_id_fkey'
            columns: ['categoria_id']
            isOneToOne: false
            referencedRelation: 'categorias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'pagamentos_conta_id_fkey'
            columns: ['conta_id']
            isOneToOne: false
            referencedRelation: 'contas_bancarias'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'pagamentos_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'pagamentos_ordem_id_fkey'
            columns: ['ordem_id']
            isOneToOne: false
            referencedRelation: 'ordens_vendas'
            referencedColumns: ['id']
          },
        ]
      }
      perfis_usuarios: {
        Row: {
          atualizado_em: string | null
          created_at: string
          criado_em: string | null
          email: string | null
          id: string
          is_admin: boolean | null
          logo_url: string | null
          nome: string | null
          nome_completo: string | null
          role: string | null
          theme_color: string | null
          user_id: string | null
        }
        Insert: {
          atualizado_em?: string | null
          created_at?: string
          criado_em?: string | null
          email?: string | null
          id: string
          is_admin?: boolean | null
          logo_url?: string | null
          nome?: string | null
          nome_completo?: string | null
          role?: string | null
          theme_color?: string | null
          user_id?: string | null
        }
        Update: {
          atualizado_em?: string | null
          created_at?: string
          criado_em?: string | null
          email?: string | null
          id?: string
          is_admin?: boolean | null
          logo_url?: string | null
          nome?: string | null
          nome_completo?: string | null
          role?: string | null
          theme_color?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      servicos_produtos: {
        Row: {
          created_at: string
          criado_por: string | null
          descricao: string | null
          empresa_id: string
          id: string
          nome: string
          preco: number
          preco_base: number | null
          status: string | null
          tipo: string | null
          unidade: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          criado_por?: string | null
          descricao?: string | null
          empresa_id: string
          id?: string
          nome: string
          preco?: number
          preco_base?: number | null
          status?: string | null
          tipo?: string | null
          unidade?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          criado_por?: string | null
          descricao?: string | null
          empresa_id?: string
          id?: string
          nome?: string
          preco?: number
          preco_base?: number | null
          status?: string | null
          tipo?: string | null
          unidade?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'servicos_produtos_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
        ]
      }
      site_admins: {
        Row: {
          ativo: boolean
          created_at: string
          email: string | null
          id: string
          nome: string | null
          role: string
          user_id: string
        }
        Insert: {
          ativo?: boolean
          created_at?: string
          email?: string | null
          id?: string
          nome?: string | null
          role?: string
          user_id: string
        }
        Update: {
          ativo?: boolean
          created_at?: string
          email?: string | null
          id?: string
          nome?: string | null
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      site_leads: {
        Row: {
          created_at: string
          email: string | null
          email_notification_error: string | null
          email_notification_sent: boolean
          email_notification_sent_at: string | null
          empresa: string | null
          faturamento_mensal: string | null
          id: string
          mensagem: string | null
          nome: string
          observacoes_internas: string | null
          origem: string
          regime: string | null
          status: string
          updated_at: string
          whatsapp: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          email_notification_error?: string | null
          email_notification_sent?: boolean
          email_notification_sent_at?: string | null
          empresa?: string | null
          faturamento_mensal?: string | null
          id?: string
          mensagem?: string | null
          nome: string
          observacoes_internas?: string | null
          origem?: string
          regime?: string | null
          status?: string
          updated_at?: string
          whatsapp: string
        }
        Update: {
          created_at?: string
          email?: string | null
          email_notification_error?: string | null
          email_notification_sent?: boolean
          email_notification_sent_at?: string | null
          empresa?: string | null
          faturamento_mensal?: string | null
          id?: string
          mensagem?: string | null
          nome?: string
          observacoes_internas?: string | null
          origem?: string
          regime?: string | null
          status?: string
          updated_at?: string
          whatsapp?: string
        }
        Relationships: []
      }
      transacoes_ofx: {
        Row: {
          categoria_id: string | null
          cliente_id: string | null
          conta_financeira_id: string
          criado_em: string
          data_transacao: string
          descricao_normalizada: string | null
          descricao_original: string
          documento: string | null
          empresa_id: string
          fitid: string | null
          fornecedor_id: string | null
          hash_transacao: string
          id: string
          importacao_ofx_id: string
          lancamento_financeiro_id: string | null
          status: Database['public']['Enums']['status_transacao_ofx'] | null
          tipo_movimento: Database['public']['Enums']['tipo_movimento_ofx']
          updated_at: string
          valor: number
        }
        Insert: {
          categoria_id?: string | null
          cliente_id?: string | null
          conta_financeira_id: string
          criado_em?: string
          data_transacao: string
          descricao_normalizada?: string | null
          descricao_original: string
          documento?: string | null
          empresa_id: string
          fitid?: string | null
          fornecedor_id?: string | null
          hash_transacao: string
          id?: string
          importacao_ofx_id: string
          lancamento_financeiro_id?: string | null
          status?: Database['public']['Enums']['status_transacao_ofx'] | null
          tipo_movimento: Database['public']['Enums']['tipo_movimento_ofx']
          updated_at?: string
          valor: number
        }
        Update: {
          categoria_id?: string | null
          cliente_id?: string | null
          conta_financeira_id?: string
          criado_em?: string
          data_transacao?: string
          descricao_normalizada?: string | null
          descricao_original?: string
          documento?: string | null
          empresa_id?: string
          fitid?: string | null
          fornecedor_id?: string | null
          hash_transacao?: string
          id?: string
          importacao_ofx_id?: string
          lancamento_financeiro_id?: string | null
          status?: Database['public']['Enums']['status_transacao_ofx'] | null
          tipo_movimento?: Database['public']['Enums']['tipo_movimento_ofx']
          updated_at?: string
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: 'transacoes_ofx_categoria_id_fkey'
            columns: ['categoria_id']
            isOneToOne: false
            referencedRelation: 'categorias_financeiras'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transacoes_ofx_cliente_id_fkey'
            columns: ['cliente_id']
            isOneToOne: false
            referencedRelation: 'clientes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transacoes_ofx_conta_financeira_id_fkey'
            columns: ['conta_financeira_id']
            isOneToOne: false
            referencedRelation: 'contas_financeiras'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transacoes_ofx_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transacoes_ofx_fornecedor_id_fkey'
            columns: ['fornecedor_id']
            isOneToOne: false
            referencedRelation: 'fornecedores'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transacoes_ofx_importacao_ofx_id_fkey'
            columns: ['importacao_ofx_id']
            isOneToOne: false
            referencedRelation: 'importacoes_ofx'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'transacoes_ofx_lancamento_financeiro_id_fkey'
            columns: ['lancamento_financeiro_id']
            isOneToOne: false
            referencedRelation: 'lancamentos_financeiros'
            referencedColumns: ['id']
          },
        ]
      }
      usuarios_empresas: {
        Row: {
          aceite_em: string | null
          atualizado_em: string | null
          convidado_por: string | null
          created_at: string
          criado_em: string | null
          data_convite: string | null
          empresa_id: string
          id: string | null
          perfil: string | null
          status: string | null
          user_id: string | null
          usuario_id: string
        }
        Insert: {
          aceite_em?: string | null
          atualizado_em?: string | null
          convidado_por?: string | null
          created_at?: string
          criado_em?: string | null
          data_convite?: string | null
          empresa_id: string
          id?: string | null
          perfil?: string | null
          status?: string | null
          user_id?: string | null
          usuario_id: string
        }
        Update: {
          aceite_em?: string | null
          atualizado_em?: string | null
          convidado_por?: string | null
          created_at?: string
          criado_em?: string | null
          data_convite?: string | null
          empresa_id?: string
          id?: string | null
          perfil?: string | null
          status?: string | null
          user_id?: string | null
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'usuarios_empresas_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresas'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      vw_site_leads_resumo: {
        Row: {
          primeiro_lead: string | null
          quantidade: number | null
          status: string | null
          ultimo_lead: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      abn_criar_site_lead: {
        Args: {
          p_email?: string
          p_empresa?: string
          p_faturamento_mensal?: string
          p_mensagem?: string
          p_nome: string
          p_regime?: string
          p_whatsapp: string
        }
        Returns: string
      }
      get_user_empresas: { Args: { p_uid: string }; Returns: string[] }
    }
    Enums: {
      status_importacao_ofx: 'processada' | 'parcial' | 'erro'
      status_transacao_ofx: 'pendente' | 'importada' | 'ignorada' | 'duplicada'
      tipo_movimento_ofx: 'credito' | 'debito'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      status_importacao_ofx: ['processada', 'parcial', 'erro'],
      status_transacao_ofx: ['pendente', 'importada', 'ignorada', 'duplicada'],
      tipo_movimento_ofx: ['credito', 'debito'],
    },
  },
} as const
