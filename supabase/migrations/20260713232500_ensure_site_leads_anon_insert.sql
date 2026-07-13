ALTER TABLE public.site_leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_can_insert_site_leads" ON public.site_leads;
CREATE POLICY "public_can_insert_site_leads" ON public.site_leads
  FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admins_can_select_site_leads" ON public.site_leads;
CREATE POLICY "admins_can_select_site_leads" ON public.site_leads
  FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "admins_can_update_site_leads" ON public.site_leads;
CREATE POLICY "admins_can_update_site_leads" ON public.site_leads
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admins_can_delete_site_leads" ON public.site_leads;
CREATE POLICY "admins_can_delete_site_leads" ON public.site_leads
  FOR DELETE TO authenticated USING (true);
