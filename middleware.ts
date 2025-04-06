import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // api, _next/static, _next/image로 시작하거나, .png로 끝나는 경로를 제외한 모든 경로에서
  // 인증 체크를 수행합니다.
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};