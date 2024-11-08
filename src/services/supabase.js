import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xozeoagsuniedxwishgm.supabase.co";
const supabaseKey =
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvemVvYWdzdW5pZWR4d2lzaGdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxNjkwNDAsImV4cCI6MjA0MTc0NTA0MH0
    .oQg7orlN7qZOT0pLab2CzisvIZIGvtLQTehAcGS4ykA;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
