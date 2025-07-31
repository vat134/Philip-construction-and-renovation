// ========================================================================
// 1. TRANSLATION STORAGE
// ========================================================================

const translations = {
  en: {
    // Header & Navigation
    navHome: "Home",
    navTile_work: "Tile work",
    navPainting_work: "Painting work",
    navFacade_work: "Facade work",
    navMobTile_work: "Tile work page",
    navMobPainting_work: "Painting work page",
    navMobFacade_work: "Facade work page",
    navWork: "My Work",
    navGallery: "Gallery",
    navAbout: "About",
    navContact: "Contact",
    langMenuTitle: "Language / Valoda / Язык:",
    // Hero Section
    heroTitle: `<span class="highlight">Professional master Philip</span> will make repairs of any difficulty`,
    heroSubtitle: "All kinds of repair and construction and finishing works: works on regipsu plastering works insulation and noise insulation leveling of floors and walls laying laminate and tile installation of door blocks painting works spackle painting wallpaper wallpaper facade works",
    viewWorkBtn: "View My Work",
    featureExperience: "15+ Years Experience",
    featureCraftsmanship: "Quality Craftsmanship",
    // Works Section
    worksTitle: "Key Service Areas",
    worksSubtitle: "Explore the core areas of my work. Click on any category to view the gallery.",
    work1_badge: "Tile Work",
    work1_title: "Precision Tile Installation for Kitchens",
    work1_desc: "Aesthetic kitchen tiling installed with meticulous, millimeter-level precision to ensure a perfect finish and lasting practicality.",
    work2_badge: "Painting Work",
    work2_title: "Impeccable Interior Painting",
    work2_desc: "An even application of paint and precise work on all joints result in a flawlessly smooth surface with no imperfections.",
    work3_badge: "Facade work",
    work3_title: "Complete Facade Transformation",
    work3_desc: "An example of how expert facade finishing transforms a house, boosting its aesthetic appeal and providing durable protection.",
    // Gallery Section
    galleryTitle: "Project Gallery",
    gallerySubtitle: "Take a look at my finished work",
    // About Section
    aboutTitle: "About Me",
    aboutExperienceBadge: "Years Experience",
    aboutPara1: "Based in Riga, Latvia, I am a seasoned construction and renovation specialist with decades of hands-on experience. As a trusted professional in facade work, apartment renovations, and general construction, I bring precision, reliability, and a personal touch to every project.",
    aboutPara2: "More than just a contractor, I am a true craftsman who handles every stage of the process — from planning to finishing — with care and attention to detail. I specialize in a wide range of services, including drywall installation, plastering, insulation and soundproofing, leveling of floors and walls, laminate and tile installation, door fitting, painting, wallpapering, and comprehensive facade work.",
    aboutPara3: "With a deep understanding of how people live and what their homes need, I offer tailored solutions that combine practicality and aesthetics. From material selection and delivery to the final coat of paint, every step is done with dedication and craftsmanship.",
    aboutHighlight: `I offer <strong>clear communication</strong>, flexible <strong>staged payments</strong>, and <strong>reliable results that last</strong>. Working with me means no guesswork and no delays — just a smooth process built on trust and experience.`,
    // Contact Section
    contactTitle: "Ready to Start?",
    contactSubtitle: "Contact me today to discuss your project. I'm here to go over the details and bring your vision to life with expert craftsmanship and attention to detail.",
    contactCall: "Call Me",
    contactEmail: "Email",
    contactArea: "Service Area",
    // Footer
    footerDesc: "Professional construction and renovation services in Riga and surrounding areas. Trusted craftsmanship and hands-on experience for over 15 years.",
    footerBadgeExperience: "15+ Years Experience",
    footerServicesTitle: "Services",
    footerService1: "Facade Work",
    footerService2: "Apartment Renovations",
    footerService3: "General Construction",
    footerService4: "Drywall and Plastering",
    footerService5: "Floor and Wall Leveling",
    footerService6: "Laminate and Tile Installation",
    footerService7: "Painting, Wallpapering",
    footerService8: "Material Delivery Assistance",
    footerContactTitle: "Contact",
    footerCopyright: "© 2025 Philip Construction & Renovation. All rights reserved.",
  },
  ru: {
    // Header & Navigation
    navHome: "Главная",
    navTile_work: "Плиточные работы",
    navPainting_work: "Малярные работы",
    navFacade_work: "Фасадные работы",
    navMobTile_work: "Страница с плиточными работами",
    navMobPainting_work: "Страница с малярными работами",
    navMobFacade_work: "Страница с фасадными работами",
    navWork: "Мои работы",
    navGallery: "Галерея",
    navAbout: "Обо мне",
    navContact: "Контакты",
    langMenuTitle: "Language / Valoda / Язык:",
    // Hero Section
    heroTitle: `<span class="highlight">Профессиональный мастер Филипп</span> выполнит ремонт любой сложности`,
    heroSubtitle: "Все виды ремонтно-строительных и отделочных работ: работы по регипсу, штукатурные работы, утепление и шумоизоляция, выравнивание полов и стен, укладка ламината и плитки, установка дверных блоков, малярные работы, шпаклевка, поклейка обоев, фасадные работы",
    viewWorkBtn: "Смотреть работы",
    featureExperience: "15+ Лет Опыта",
    featureCraftsmanship: "Качественное Исполнение",
    // Works Section
    worksTitle: "Основные направления работ",
    worksSubtitle: "Здесь представлены ключевые категории моих услуг. Нажмите на любую, чтобы посмотреть примеры в галерее.",
    work1_badge: "Плиточные работы",
    work1_title: "Идеальная укладка плитки для кухонной зоны",
    work1_desc: "Эстетичная плитка для кухни, уложенная с точностью до миллиметра для безупречного внешнего вида и максимальной практичности.",
    work2_badge: "Малярные работы",
    work2_title: "Идеально гладкие стены после покраски",
    work2_desc: "Равномерное нанесение краски и аккуратная проработка стыков создают безупречно гладкую поверхность без дефектов.",
    work3_badge: "Фасадные работы",
    work3_title: "Преображение дома после отделки фасада",
    work3_desc: "Пример того, как профессиональные фасадные работы делают дом современным, аккуратным и защищенным от непогоды.",
    // Gallery Section
    galleryTitle: "Галерея Проектов",
    gallerySubtitle: "Взгляните на мои завершенные работы",
    // About Section
    aboutTitle: "Обо Мне",
    aboutExperienceBadge: "Лет Опыта",
    aboutPara1: "Филипп, базирующийся в Риге, Латвия, является опытным специалистом по строительству и ремонту с многолетним практическим опытом. Как надежный профессионал в области фасадных работ, ремонта квартир и общего строительства, я приношу точность, надежность и индивидуальный подход к каждому проекту.",
    aboutPara2: "Больше, чем просто подрядчик, я — настоящий мастер, который заботливо и внимательно относится к каждому этапу процесса — от планирования до отделки. Я специализируюсь на широком спектре услуг, включая монтаж гипсокартона, штукатурные работы, тепло- и звукоизоляцию, выравнивание полов и стен, укладку ламината и плитки, установку дверных блоков, покраску, поклейку обоев и комплексные фасадные работы.",
    aboutPara3: "С глубоким пониманием того, как люди живут и что нужно их домам, я предлагаю индивидуальные решения, сочетающие практичность и эстетику. От выбора и доставки материалов до финального слоя краски — каждый шаг выполняется с самоотдачей и мастерством.",
    aboutHighlight: `Я предлагаю <strong>четкую коммуникацию</strong>, гибкие <strong>поэтапные платежи</strong> и <strong>надежные результаты, которые сохраняются надолго</strong>. Работа со мной означает отсутствие догадок и задержек — только гладкий процесс, построенный на доверии и опыте.`,
    // Contact Section
    contactTitle: "Готовы начать?",
    contactSubtitle: "Свяжитесь со мной сегодня, чтобы обсудить ваш проект. Я готов рассмотреть детали и воплотить ваше видение в жизнь с экспертным мастерством и вниманием к деталям.",
    contactCall: "Позвоните мне",
    contactEmail: "Электронная почта",
    contactArea: "Зона обслуживания",
    // Footer
    footerDesc: "Профессиональные услуги по строительству и ремонту в Риге и прилегающих районах. Надежное мастерство и практический опыт более 15 лет.",
    footerBadgeExperience: "15+ Лет Опыта",
    footerServicesTitle: "Услуги",
    footerService1: "Фасадные работы",
    footerService2: "Ремонт квартир",
    footerService3: "Общее строительство",
    footerService4: "Гипсокартон и штукатурка",
    footerService5: "Выравнивание полов и стен",
    footerService6: "Укладка ламината и плитки",
    footerService7: "Покраска, поклейка обоев",
    footerService8: "Помощь с доставкой материалов",
    footerContactTitle: "Контакты",
    footerCopyright: "© 2025 Philip Construction & Renovation. Все права защищены.",
  },
  lv: {
    // Header & Navigation
    navHome: "Sākums",
    navTile_work: "Flīzēšanas darbi",
    navPainting_work: "Krāsošanas darbi",
    navFacade_work: "Fasādes darbi",
    navMobTile_work: "Lapa ar flīzēšanas darbiem",
    navMobPainting_work: "Lapa ar krāsošanas darbiem",
    navMobFacade_work: "Lapa ar fasādes darbiem",
    navWork: "Mani darbi",
    navGallery: "Galerija",
    navAbout: "Par mani",
    navContact: "Kontakti",
    langMenuTitle: "Language / Valoda / Язык:",
    // Hero Section
    heroTitle: `<span class="highlight">Profesionāls meistars Filips</span> veiks jebkuras sarežģītības remontu`,
    heroSubtitle: "Visu veidu remonta un celtniecības un apdares darbi: regipša darbi, apmešanas darbi, siltināšana un trokšņu izolācija, grīdu un sienu izlīdzināšana, lamināta un flīžu ieklāšana, durvju bloku uzstādīšana, krāsošanas darbi, špaktelēšana, tapešu līmēšana, fasādes darbi",
    viewWorkBtn: "Skatīt manus darbus",
    featureExperience: "15+ gadu pieredze",
    featureCraftsmanship: "Kvalitatīva meistarība",
    // Works Section
    worksTitle: "Galvenie darbu veidi",
    worksSubtitle: "Šeit ir manu pakalpojumu galvenās kategorijas. Nospiediet uz tām, lai apskatītu piemērus galerijā.",
    work1_badge: "Flīzēšanas darbi",
    work1_title: "Nevainojama flīžu ieklāšana virtuves zonā",
    work1_desc: "Estētiskas virtuves flīzes, ieklātas ar milimetra precizitāti, nodrošinot nevainojamu izskatu un maksimālu praktiskumu.",
    work2_badge: "Krāsošanas darbi",
    work2_title: "Ideāli gludas sienas pēc krāsošanas",
    work2_desc: "Vienmērīgs krāsas klājums un precīzi nostrādāti savienojumi rada nevainojami gludu virsmu bez defektiem.",
    work3_badge: "Fasādes darbi",
    work3_title: "Mājas pārvērtības pēc fasādes apdares",
    work3_desc: "Piemērs tam, kā profesionāli fasādes darbi padara māju modernu, akurātu un aizsargātu pret laikapstākļiem.",
    // Gallery Section
    galleryTitle: "Projektu galerija",
    gallerySubtitle: "Apskatiet manus pabeigtos darbus",
    // About Section
    aboutTitle: "Par mani",
    aboutExperienceBadge: "Gadu pieredze",
    aboutPara1: "Filips, kas atrodas Rīgā, Latvijā, ir pieredzējis celtniecības un renovācijas speciālists ar gadu desmitiem ilgu praktisko pieredzi. Kā uzticams profesionālis fasādes darbos, dzīvokļu renovācijā un vispārējā celtniecībā, es katram projektam piešķiru precizitāti, uzticamību un personīgu pieskārienu.",
    aboutPara2: "Es esmu ne tikai darbuzņēmējs, bet arī īsts amatnieks, kurš katru procesa posmu – no plānošanas līdz apdarei – veic ar rūpību un uzmanību detaļām. Es specializējos plašā pakalpojumu klāstā, tostarp ģipškartona plākšņu uzstādīšanā, apmešanā, siltināšanā un skaņas izolācijā, grīdu un sienu izlīdzināšanā, lamināta un flīžu ieklāšanā, durvju uzstādīšanā, krāsošanā, tapešu līmēšanā un visaptverošos fasādes darbos.",
    aboutPara3: "Ar dziļu izpratni par to, kā cilvēki dzīvo un kas nepieciešams viņu mājokļiem, es piedāvāju individuālus risinājumus, kas apvieno praktiskumu un estētiku. No materiālu izvēles un piegādes līdz pēdējai krāsas kārtai, katrs solis tiek veikts ar centību un meistarību.",
    aboutHighlight: `Es piedāvāju <strong>skaidru komunikāciju</strong>, elastīgus <strong>pakāpeniskus maksājumus</strong> un <strong>uzticamus rezultātus, kas saglabājas ilgstoši</strong>. Darbs ar mani nozīmē bez minējumiem un bez kavēšanās — tikai vienmērīgs process, kas balstīts uz uzticību un pieredzi.`,
    // Contact Section
    contactTitle: "Gatavs sākt?",
    contactSubtitle: "Sazinieties ar mani šodien, lai apspriestu savu projektu. Esmu šeit, lai izietu cauri detaļām un īstenotu jūsu vīziju ar ekspertu meistarību un uzmanību detaļām.",
    contactCall: "Zvaniet man",
    contactEmail: "E-pasts",
    contactArea: "Apkalpošanas zona",
    // Footer
    footerDesc: "Profesionāli celtniecības un renovācijas pakalpojumi Rīgā un apkārtējās teritorijās. Uzticama meistarība un praktiska pieredze vairāk nekā 15 gadus.",
    footerBadgeExperience: "15+ Gadu Pieredze",
    footerServicesTitle: "Pakalpojumi",
    footerService1: "Fasādes darbi",
    footerService2: "Dzīvokļu renovācija",
    footerService3: "Vispārējā celtniecība",
    footerService4: "Ģipškartons un apmetums",
    footerService5: "Grīdu un sienu izlīdzināšana",
    footerService6: "Lamināta un flīžu ieklāšana",
    footerService7: "Krāsošana, tapešu līmēšana",
    footerService8: "Materiālu piegādes palīdzība",
    footerContactTitle: "Kontakti",
    footerCopyright: "© 2025 Philip Construction & Renovation. Visas tiesības aizsargātas.",
  },
};

// ========================================================================
// 2. TRANSLATION LOADING FUNCTION
// ========================================================================

function loadTranslations(langCode) {
  const langData = translations[langCode];
  if (!langData) {
    console.error(`Translations not found for language: ${langCode}`);
    return;
  }

  document.querySelectorAll("[data-translate-key]").forEach((element) => {
    const key = element.getAttribute("data-translate-key");
    const translation = langData[key];

    if (translation !== undefined) {
      element.innerHTML = translation;
    } else {
      console.warn(`Translation key not found: ${key} for language ${langCode}`);
    }
  });

  document.documentElement.lang = langCode;
}

// ========================================================================
// 3. ALL OTHER FUNCTIONS
// ========================================================================

// Mobile menu functionality
function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobileNav");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  mobileNav.classList.toggle("show");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}

// Language selector functionality
function toggleLanguageMenu() {
  const dropdown = document.getElementById("languageDropdown");
  const button = document.querySelector(".language-btn");
  dropdown.classList.toggle("show");
  button.classList.toggle("active");
}

function changeLanguage(langCode, flag, displayCode) {
  // Update the current language display
  document.getElementById("currentFlag").textContent = flag;
  document.getElementById("currentLang").textContent = displayCode;

  // Close the dropdown
  const dropdown = document.getElementById("languageDropdown");
  const button = document.querySelector(".language-btn");
  dropdown.classList.remove("show");
  button.classList.remove("active");

  // Store selected language in localStorage
  localStorage.setItem("selectedLanguage", langCode);
  localStorage.setItem("selectedFlag", flag);
  localStorage.setItem("selectedDisplayCode", displayCode);

  loadTranslations(langCode);

  // Close mobile menu if open
  const mobileNav = document.getElementById("mobileNav");
  if (mobileNav.classList.contains("show")) {
    toggleMobileMenu();
  }
}

// Load saved language preference
function loadSavedLanguage() {
  const savedLang = localStorage.getItem("selectedLanguage") || "en";
  const savedFlag = localStorage.getItem("selectedFlag") || "🇺🇸";
  const savedDisplayCode = localStorage.getItem("selectedDisplayCode") || "EN";

  document.getElementById("currentFlag").textContent = savedFlag;
  document.getElementById("currentLang").textContent = savedDisplayCode;

  loadTranslations(savedLang);
}

// Close language dropdown when clicking outside
function initLanguageDropdownClose() {
  document.addEventListener("click", function (event) {
    const languageSelector = document.querySelector(".language-selector");
    const dropdown = document.getElementById("languageDropdown");
    const button = document.querySelector(".language-btn");

    if (!languageSelector.contains(event.target)) {
      dropdown.classList.remove("show");
      button.classList.remove("active");
    }
  });
}

// Gallery slider functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let slideInterval;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  if (slides[index]) {
    slides[index].classList.add("active");
  }
  if (dots[index]) {
    dots[index].classList.add("active");
  }
}

function changeSlide(direction) {
  currentSlideIndex += direction;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index - 1;
  showSlide(currentSlideIndex);
}

function startSlideshow() {
    clearInterval(slideInterval); // Clear any existing interval
    slideInterval = setInterval(() => changeSlide(1), 5000);
}

function stopSlideshow() {
  clearInterval(slideInterval);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        const mobileNav = document.getElementById("mobileNav");
        if (mobileNav.classList.contains("show")) {
          toggleMobileMenu();
        }
      }
    });
  });
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target); // Optional: stop observing after animation
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".work-card, .about-text, .contact-item"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Pause slideshow when user interacts with slider
function initSliderInteraction() {
  const sliderContainer = document.querySelector(".slider-container");
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", stopSlideshow);
    sliderContainer.addEventListener("mouseleave", startSlideshow);
    sliderContainer.addEventListener("touchstart", stopSlideshow, { passive: true });
    sliderContainer.addEventListener("touchend", startSlideshow);
  }
}

// Keyboard navigation for slider
function initKeyboardNavigation() {
  document.addEventListener("keydown", (e) => {
    if (document.querySelector(".slider-container")) {
        if (e.key === "ArrowLeft") {
            changeSlide(-1);
            stopSlideshow(); // Pause slideshow on manual navigation
            startSlideshow(); // And restart it
        } else if (e.key === "ArrowRight") {
            changeSlide(1);
            stopSlideshow();
            startSlideshow();
        }
    }
  });
}

// Utility function for smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function initScrollToTop() {
  const scrollButton = document.createElement("button");
  scrollButton.innerHTML = "↑";
  scrollButton.className = "scroll-to-top";
  scrollButton.setAttribute("aria-label", "Scroll to top");
  scrollButton.onclick = scrollToTop;

  scrollButton.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px;
    border-radius: 50%; background-color: var(--primary-blue); color: white;
    border: none; font-size: 24px; cursor: pointer; opacity: 0;
    visibility: hidden; transition: all 0.3s ease; z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); display: flex;
    align-items: center; justify-content: center;
  `;
  document.body.appendChild(scrollButton);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollButton.style.opacity = "1";
      scrollButton.style.visibility = "visible";
    } else {
      scrollButton.style.opacity = "0";
      scrollButton.style.visibility = "hidden";
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  loadSavedLanguage();
  initLanguageDropdownClose();

  if (slides.length > 0 && dots.length > 0) {
    showSlide(currentSlideIndex);
    startSlideshow();
    initSliderInteraction();
    initKeyboardNavigation();
  }

  initSmoothScrolling();
  initScrollAnimations();
  initScrollToTop();

  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// Handle window resize for responsive adjustments
window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    const mobileNav = document.getElementById("mobileNav");
    if (mobileNav.classList.contains("show")) {
      toggleMobileMenu();
    }
  }
});