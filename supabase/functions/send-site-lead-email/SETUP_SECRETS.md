# Configure RESEND_API_KEY Secret

The `send-site-lead-email` edge function requires the `RESEND_API_KEY` secret to be set in your Supabase project.

## Using Supabase CLI

```bash
supabase secrets set RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Using Supabase Dashboard

1. Go to your Supabase project dashboard.
2. Navigate to **Edge Functions** > **Secrets**.
3. Add a new secret:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (starts with `re_`)
4. Save and redeploy the `send-site-lead-email` function.

## Verification

After setting the secret, submit a test lead via the form. Check the `site_leads` table:

- `email_notification_sent` should be `true`
- `email_notification_sent_at` should have a timestamp
- `email_notification_error` should be `null`
