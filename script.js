// ========================================
// 개발자 웹 이력서 - 메인 JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {

  // ========================================
  // 모듈 1: 모바일 햄버거 메뉴 초기화
  // ========================================
  function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('a');

    // 햄버거 버튼 클릭 시 메뉴 토글
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');

      if (isHidden) {
        // 메뉴 열기
        mobileMenu.classList.remove('hidden');
        menuBtn.setAttribute('aria-expanded', 'true');
        // body 스크롤 잠금 (선택사항)
        // document.body.style.overflow = 'hidden';
      } else {
        // 메뉴 닫기
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        // document.body.style.overflow = 'auto';
      }
    });

    // 메뉴 링크 클릭 시 자동 닫기
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        // document.body.style.overflow = 'auto';
      });
    });
  }

  // ========================================
  // 모듈 2: 스크롤 시 네비게이션 스타일 변경
  // ========================================
  function initScrollNavStyle() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    // Passive 이벤트 리스너로 성능 최적화
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // 스크롤 50px 이상일 때 그림자 추가
      if (scrollTop > 50) {
        navbar.classList.add('shadow-scroll');
      } else {
        navbar.classList.remove('shadow-scroll');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });
  }

  // ========================================
  // 모듈 3: 부드러운 스크롤 네비게이션
  // ========================================
  function initSmoothScroll() {
    // 모든 앵커 링크에 대해
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        // 기본 동작 방지
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // 부드러운 스크롤로 이동
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // 모바일 메뉴가 열려있으면 닫기
          const mobileMenu = document.getElementById('mobile-menu');
          const menuBtn = document.getElementById('menu-btn');
          if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });
  }

  // ========================================
  // 모듈 4: Intersection Observer - 섹션 페이드인 애니메이션
  // ========================================
  function initFadeInAnimation() {
    // Intersection Observer 생성
    const observerOptions = {
      threshold: 0.15, // 요소의 15%가 보일 때 트리거
      rootMargin: '0px 0px -50px 0px' // 아래쪽 여유 공간
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 요소가 뷰포트에 진입할 때
          entry.target.classList.add('is-visible');
          // 한 번만 실행하도록 옵저버 제거
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // 모든 fade-in-section 요소 관찰
    document.querySelectorAll('.fade-in-section').forEach(element => {
      observer.observe(element);
    });
  }

  // ========================================
  // 모듈 5: 스킬 바 애니메이션
  // ========================================
  function initSkillBarAnimation() {
    const skillsSection = document.getElementById('skills');

    if (skillsSection) {
      const skillObserverOptions = {
        threshold: 0.3, // 섹션의 30%가 보일 때
      };

      const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // skills 섹션이 보이면 모든 스킬바에 animate 클래스 추가
            document.querySelectorAll('.skill-bar-fill').forEach(bar => {
              bar.classList.add('animate');
            });
            // 한 번만 실행
            skillObserver.unobserve(entry.target);
          }
        });
      }, skillObserverOptions);

      skillObserver.observe(skillsSection);
    }
  }

  // ========================================
  // 모듈 6: 스크롤 스파이 (Scrollspy)
  // ========================================
  function initScrollSpy() {
    const sections = document.querySelectorAll('main section, footer');
    const navLinks = document.querySelectorAll('.nav-link');

    // Intersection Observer를 사용한 스크롤스파이
    const scrollSpyOptions = {
      threshold: 0.25, // 섹션의 25%가 보일 때 활성화
      rootMargin: '-64px 0px -66% 0px' // 고정 네비(64px) 고려한 마진
    };

    const scrollSpyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          // 모든 네비 링크의 active 클래스 제거
          navLinks.forEach(link => {
            link.classList.remove('active');
          });

          // 현재 섹션에 해당하는 네비 링크에 active 클래스 추가
          const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }, scrollSpyOptions);

    // 모든 섹션 관찰
    sections.forEach(section => {
      scrollSpyObserver.observe(section);
    });
  }

  // ========================================
  // 모듈 7: 다크/라이트 테마 토글
  // ========================================
  function initThemeToggle() {
    const htmlEl = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('theme-icon-sun');
    const iconMoon = document.getElementById('theme-icon-moon');

    // 테마 적용 함수
    function applyTheme(theme) {
      if (theme === 'dark') {
        htmlEl.classList.add('dark');
        iconSun?.classList.remove('hidden');
        iconMoon?.classList.add('hidden');
      } else {
        htmlEl.classList.remove('dark');
        iconMoon?.classList.remove('hidden');
        iconSun?.classList.add('hidden');
      }
      localStorage.setItem('theme', theme);
    }

    // 저장된 테마 적용 (기본값: dark)
    applyTheme(localStorage.getItem('theme') || 'dark');

    // 토글 버튼 클릭 시
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const isDark = htmlEl.classList.contains('dark');

        // 회전 애니메이션 추가
        toggleBtn.classList.add('animate-spin-once');
        toggleBtn.addEventListener('animationend', () => {
          toggleBtn.classList.remove('animate-spin-once');
        }, { once: true });

        // 테마 전환
        applyTheme(isDark ? 'light' : 'dark');
      });
    }
  }

  // ========================================
  // 모듈 8: 연도 자동 업데이트 (푸터 저작권)
  // ========================================
  function initCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      // 현재 연도를 자동으로 설정
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // ========================================
  // 모든 기능 초기화 실행
  // ========================================

  // 테마 토글 (최초 실행 - FOUC 방지)
  initThemeToggle();

  // 메뉴 토글
  initMobileMenu();

  // 스크롤 네비 스타일
  initScrollNavStyle();

  // 부드러운 스크롤
  initSmoothScroll();

  // 페이드인 애니메이션
  initFadeInAnimation();

  // 스킬 바 애니메이션
  initSkillBarAnimation();

  // 스크롤 스파이
  initScrollSpy();

  // 연도 업데이트
  initCurrentYear();

  // 개발용 콘솔 로그
  console.log('개발자 웹 이력서 - 모든 스크립트 초기화 완료 ✓');
});

// ========================================
// 보너스: 성능 모니터링 (개발 환경용)
// ========================================

// 페이지 로드 시간 측정
window.addEventListener('load', () => {
  if (window.performance) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`📊 페이지 로드 시간: ${pageLoadTime}ms`);
  }
});
