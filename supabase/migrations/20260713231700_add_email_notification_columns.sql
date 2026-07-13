ALTER TABLE public.site_leads
  ADD COLUMN IF NOT EXISTS email_notification_sent boolean NOT NULL DEFAULT false;

ALTER TABLE public.site_leads
  ADD COLUMN IF NOT EXISTS email_notification_sent_at timestamp with time zone;

ALTER TABLE public.site_leads
  ADD COLUMN IF NOT EXISTS email_notification_error text;
