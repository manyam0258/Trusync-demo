import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://supabase.trusync.cloud'
const supabaseAnonKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc2MTE1NjAwMCwiZXhwIjo0OTE2ODI5NjAwLCJyb2xlIjoiYW5vbiJ9.-QMXM4M6Jpr2IYdpqd2QcUioKRz4b3N90c1Rxk_RUIM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)