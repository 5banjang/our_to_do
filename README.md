# Our To-Do App

Vite + React + TypeScript + TailwindCSS로 구성된 모던 웹 프로젝트입니다.

## 🚀 기술 스택

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Code Quality**: ESLint

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

개발 서버가 시작되면 `http://localhost:5173`에서 앱을 확인할 수 있습니다.

### 3. 프로덕션 빌드
```bash
npm run build
```

### 4. 빌드 결과 미리보기
```bash
npm run preview
```

### 5. 코드 린팅
```bash
npm run lint
```

## 📁 프로젝트 구조

```
our_to_do/
├── public/
├── src/
│   ├── App.tsx          # 메인 컴포넌트
│   ├── main.tsx         # 앱 진입점
│   └── index.css        # Tailwind 스타일
├── index.html           # HTML 템플릿
├── package.json
├── vite.config.ts       # Vite 설정
├── tailwind.config.ts   # Tailwind 설정
├── tsconfig.json        # TypeScript 설정
└── .eslintrc.cjs       # ESLint 설정
```

## ✨ 주요 기능

- ⚡ Vite로 빠른 HMR(Hot Module Replacement)
- 🎨 TailwindCSS로 유틸리티 기반 스타일링
- 📘 TypeScript로 타입 안정성
- 🔍 ESLint로 코드 품질 관리
- 📱 반응형 디자인

## 🛠️ 개발 가이드

### Tailwind 사용법
프로젝트에서는 TailwindCSS만을 사용하여 스타일링합니다. CSS 파일을 직접 작성하지 않고 클래스명으로 스타일을 적용하세요.

```tsx
<button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
  버튼
</button>
```

### TypeScript 활용
모든 컴포넌트와 함수에 적절한 타입을 지정하여 개발하세요.

```tsx
interface Props {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: Props) => {
  return <button onClick={onClick}>{title}</button>
}
``` 