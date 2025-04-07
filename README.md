## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

---
프로젝트의 폴더 구조를 확인하고 분석해보겠습니다.



Ran tool

Ran tool
프로젝트 구조도와 각 요소의 역할을 정리하겠습니다:

```
nextjs-dashboard/
├── app/                      # Next.js 13+ App Router 구조
│   ├── dashboard/           # 대시보드 관련 페이지
│   ├── login/              # 로그인 관련 페이지
│   ├── ui/                 # UI 컴포넌트
│   ├── lib/                # 유틸리티 함수 및 상수
│   ├── seed/               # 데이터베이스 시딩 관련
│   ├── query/              # 데이터 쿼리 관련
│   ├── layout.tsx          # 전체 레이아웃
│   └── page.tsx            # 루트 페이지
├── public/                  # 정적 파일
├── .next/                   # Next.js 빌드 결과물
├── node_modules/           # 의존성 패키지
├── .env                    # 환경 변수
├── auth.ts                 # 인증 관련 설정
├── middleware.ts           # 미들웨어 설정
├── auth.config.ts          # 인증 설정
├── next.config.ts          # Next.js 설정
├── tailwind.config.ts      # Tailwind CSS 설정
├── tsconfig.json           # TypeScript 설정
└── package.json            # 프로젝트 의존성 및 스크립트
```

각 구조적 요소의 역할:

1. **app/**
   - Next.js 13+의 App Router 구조
   - 페이지 라우팅과 컴포넌트를 포함
   - 각 디렉토리는 자동으로 라우트가 됨

2. **app/dashboard/**
   - 대시보드 메인 페이지와 관련 컴포넌트
   - 사용자 인터페이스와 데이터 표시

3. **app/login/**
   - 로그인 관련 페이지와 컴포넌트
   - 사용자 인증 처리

4. **app/ui/**
   - 재사용 가능한 UI 컴포넌트
   - 버튼, 카드, 폼 등 공통 컴포넌트

5. **app/lib/**
   - 유틸리티 함수
   - 상수 데이터
   - 타입 정의

6. **app/seed/**
   - 데이터베이스 초기 데이터 설정
   - 테스트 데이터 생성

7. **app/query/**
   - 데이터베이스 쿼리 관련 로직
   - API 호출 함수

8. **public/**
   - 정적 파일 (이미지, 폰트 등)
   - 직접 접근 가능한 리소스

9. **환경 설정 파일들**
   - `.env`: 환경 변수 (API 키, 데이터베이스 URL 등)
   - `auth.ts`, `auth.config.ts`: 인증 관련 설정
   - `middleware.ts`: 미들웨어 설정 (인증, 리다이렉션 등)
   - `next.config.ts`: Next.js 설정
   - `tailwind.config.ts`: Tailwind CSS 설정
   - `tsconfig.json`: TypeScript 설정

10. **package.json**
    - 프로젝트 의존성 관리
    - 스크립트 명령어 정의
    - 프로젝트 메타데이터

이 구조는 Next.js 13+의 App Router를 사용하는 모던 웹 애플리케이션의 전형적인 구조입니다. 각 디렉토리와 파일은 명확한 책임을 가지고 있으며, 코드의 재사용성과 유지보수성을 높이도록 설계되어 있습니다.
