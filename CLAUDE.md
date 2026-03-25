# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 프로젝트 개요

**개발자 웹 이력서 포트폴리오** - HTML, CSS, JavaScript, TailwindCSS를 사용하여 개인 포트폴리오 웹사이트를 개발하는 프로젝트입니다.

### 핵심 기술 스택
- **마크업**: HTML5 (시맨틱 구조)
- **스타일**: TailwindCSS (유틸리티 기반 CSS)
- **로직**: Vanilla JavaScript (반응형 인터랙션)
- **추가**: Git 버전 관리

---

## 언어 및 커뮤니케이션 규칙

### 기본 응답 언어
- **Claude의 응답**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화 (마크다운)**: 한국어로 작성

### 코드 네이밍 컨벤션
- **변수명**: camelCase (영어)
- **함수명**: camelCase (영어)
- **클래스명**: PascalCase (영어)
- **상수명**: UPPER_SNAKE_CASE (영어)

**예시**:
```javascript
// 올바른 방식
const userProfile = {
  firstName: 'Kim',
  jobTitle: 'Frontend Developer'
};

function toggleNavMenu() {
  // 한국어 주석: 네비게이션 메뉴 토글 기능
}
```

---

## 프로젝트 구조

```
claude-code-mastery/
├── index.html              # 메인 HTML 파일
├── styles.css             # 커스텀 CSS (필요시)
├── script.js              # JavaScript 인터랙션
├── assets/                # 이미지 및 리소스
│   └── profile.jpg        # 프로필 사진
├── ROADMAP.md             # 개발 로드맵
├── CLAUDE.md              # 이 파일
└── README.md              # 프로젝트 설명 (배포 후)
```

### 주요 파일 설명

| 파일 | 목적 |
|------|------|
| `index.html` | 전체 이력서 페이지의 마크업 구조 |
| `styles.css` | TailwindCSS로 충분하지 않은 커스텀 스타일 |
| `script.js` | 부드러운 스크롤, 메뉴 토글, 애니메이션 등 인터랙션 |
| `assets/` | 프로필 이미지 및 기타 미디어 파일 |

---

## 개발 가이드

### 개발 환경 설정

1. **TailwindCSS 설정**
   - CDN을 통한 빠른 설정 (개발 초기)
   - 또는 npm을 통한 전체 설정 (최적화)

2. **로컬 개발 서버** (선택사항)
   ```bash
   # Python 사용
   python -m http.server 8000

   # 또는 Node.js 사용
   npx http-server
   ```

### 주요 개발 구간

| Phase | 담당 영역 |
|-------|---------|
| 1-2 | HTML 구조 및 기본 마크업 작성 |
| 3-4 | 콘텐츠 섹션 (경력, 기술, 프로젝트) 구현 |
| 5 | TailwindCSS를 통한 스타일링 및 반응형 디자인 |
| 6 | JavaScript 인터랙션 추가 |
| 7 | 최적화 및 배포 |

자세한 내용은 [ROADMAP.md](./ROADMAP.md)를 참조하세요.

---

## HTML 구조 패턴

모든 섹션은 다음과 같은 의미론적 구조를 따릅니다:

```html
<section id="section-name" class="py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">섹션 제목</h2>
    <!-- 섹션 콘텐츠 -->
  </div>
</section>
```

### 섹션 ID 규칙
- `#hero` - 헤더/소개
- `#about` - 프로필/자기소개
- `#experience` - 경력사항
- `#skills` - 기술 스택
- `#projects` - 프로젝트
- `#education` - 교육/자격증
- `#contact` - 연락처/푸터

---

## TailwindCSS 사용 규칙

### 색상 팔레트
- **주색**: `dark:bg-blue-900` (다크 블루)
- **배경**: `bg-white` / `dark:bg-gray-900`
- **텍스트**: `text-gray-800` / `dark:text-gray-100`
- **강조색**: `text-blue-600` / `hover:text-blue-700`

### 일반적인 클래스 조합
```html
<!-- 카드 스타일 -->
<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">

<!-- 텍스트 -->
<p class="text-gray-700 dark:text-gray-300 leading-relaxed">

<!-- 버튼 -->
<a class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
```

---

## JavaScript 인터랙션 패턴

### 기본 패턴
```javascript
// 부드러운 스크롤 네비게이션
function smoothScroll(targetId) {
  const element = document.getElementById(targetId);
  element?.scrollIntoView({ behavior: 'smooth' });
}

// 네비게이션 메뉴 토글 (모바일)
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu?.classList.toggle('hidden');
}
```

### 권장 라이브러리
- **Intersection Observer API** - Fade-in 애니메이션
- **requestAnimationFrame** - 부드러운 스크롤 애니메이션

---

## 배포 준비

### 최적화 체크리스트
- [ ] 이미지 최적화 (WebP 포맷, 적절한 크기)
- [ ] CSS/JS 최소화 (필요시)
- [ ] 메타 태그 설정 (SEO)
- [ ] 모바일 반응형 테스트 (320px ~ 1920px)
- [ ] 브라우저 호환성 테스트 (최신 2개 버전)

### 배포 옵션
1. **GitHub Pages** - 무료, GitHub 저장소 필요
2. **Netlify** - 무료 플랜 제공, CI/CD 자동화
3. **Vercel** - Next.js 최적화 (정적 사이트도 가능)

---

## 커밋 메시지 규칙

### 형식
```
[타입] 제목

본문 (필요시)
```

### 타입 분류
- `feat` - 새로운 기능
- `fix` - 버그 수정
- `style` - 스타일링 변경
- `refactor` - 코드 리팩토링
- `docs` - 문서 수정
- `chore` - 설정/도구 변경

### 예시
```
[feat] 네비게이션 메뉴 토글 기능 추가

모바일 환경에서 해머거 메뉴 토글 기능을 구현했습니다.
JavaScript의 classList API를 사용하여 클릭 시 숨김 상태를 전환합니다.
```

---

## 추가 도움말

- 반응형 테스트: 브라우저 개발자 도구의 Device Emulation 사용
- TailwindCSS 유틸리티: [공식 문서](https://tailwindcss.com)
- HTML 시맨틱 가이드: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Semantic_HTML)
