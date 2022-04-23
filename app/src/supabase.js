import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
export const supabase = createClient('https://rbuknbtxdlofhfdstoss.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJidWtuYnR4ZGxvZmhmZHN0b3NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTAzNTM2NDIsImV4cCI6MTk2NTkyOTY0Mn0.LFd4K9s2AEap_dbXKZBuD9H9eKwXszyJBEjp0V0wsOU'
)