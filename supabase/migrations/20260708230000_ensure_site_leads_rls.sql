ALTER TABLE public.site_leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_can_insert_site_leads" ON public.site_leads;
CREATE POLICY "public_can_insert_site_leads" ON public.site_leads
  FOR INSERT TO anon, authenticated WITH CHECK (true);
