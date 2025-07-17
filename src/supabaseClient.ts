import { createClient } from '@supabase/supabase-js'

// 환경변수 가져오기 및 검증
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 환경변수 검증
if (!supabaseUrl) {
  throw new Error('VITE_SUPABASE_URL이 .env.local 파일에 설정되지 않았습니다.')
}

if (!supabaseAnonKey) {
  throw new Error('VITE_SUPABASE_ANON_KEY가 .env.local 파일에 설정되지 않았습니다.')
}

// Supabase 클라이언트 생성
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// 타입 정의 (필요시 확장 가능)
export type Database = {
  public: {
    Tables: {
      // 여기에 테이블 타입을 추가할 수 있습니다
      // 예: todos: { ... }
    }
  }
}

// 기본 내보내기
export default supabase

// 개발 환경에서 연결 상태 확인 (선택사항)
if (import.meta.env.DEV) {
  console.log('🚀 Supabase 클라이언트가 초기화되었습니다!')
  console.log('📍 URL:', supabaseUrl)
} 