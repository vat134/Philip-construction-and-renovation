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
    worksTitle: "My Featured Work",
    worksSubtitle: "From kitchens to luxurious bathrooms and complete home renovations, see how I bring my clients' visions to life with exceptional craftsmanship.",
    work1_badge: "Kitchen",
    work1_title: "Modern Kitchen Renovation",
    work1_desc: "Complete kitchen transformation with custom cabinetry and marble countertops",
    work2_badge: "Bathroom",
    work2_title: "Luxury Bathroom Suite",
    work2_desc: "Elegant bathroom renovation with premium fixtures and custom tilework",
    work3_badge: "Addition",
    work3_title: "Home Addition",
    work3_desc: "Seamless home addition that perfectly complements the existing architecture",
    work4_badge: "Renovation",
    work4_title: "Basement Renovation",
    work4_desc: "Complete basement transformation into a functional living space",
    work5_badge: "Bedroom",
    work5_title: "Custom Master Suite",
    work5_desc: "Luxurious master suite with walk-in closet and spa-like bathroom",
    work6_badge: "Renovation",
    work6_title: "Open Floor Plan",
    work6_desc: "Creating an open, flowing space perfect for modern family living",
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
    // Tile Work Gallery Page
    tileGalleryTitle: "Facade work Portfolio",
    tileGallerySubtitle: "Discover my facade projects, from thermal insulation and plastering to complete exterior transformations that enhance both protection and curb appeal.",
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
    worksTitle: "Мои Избранные Работы",
    worksSubtitle: "От кухонь до роскошных ванных комнат и полного ремонта домов — посмотрите, как я воплощаю в жизнь видения своих клиентов с исключительным мастерством.",
    work1_badge: "Кухня",
    work1_title: "Ремонт Современной Кухни",
    work1_desc: "Полное преображение кухни с индивидуальной мебелью и мраморными столешницами",
    work2_badge: "Ванная",
    work2_title: "Роскошная Ванная Комната",
    work2_desc: "Элегантный ремонт ванной комнаты с премиальной сантехникой и индивидуальной плиткой",
    work3_badge: "Пристройка",
    work3_title: "Домашняя Пристройка",
    work3_desc: "Бесшовная пристройка к дому, идеально дополняющая существующую архитектуру",
    work4_badge: "Ремонт",
    work4_title: "Ремонт Подвала",
    work4_desc: "Полное преображение подвала в функциональное жилое пространство",
    work5_badge: "Спальня",
    work5_title: "Мастер-Спальня На Заказ",
    work5_desc: "Роскошная мастер-спальня с гардеробной и ванной комнатой в стиле спа",
    work6_badge: "Ремонт",
    work6_title: "Открытая Планировка",
    work6_desc: "Создание открытого, плавного пространства, идеально подходящего для современной семейной жизни",
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
    // Tile Work Gallery Page
    tileGalleryTitle: "Портфолио фасадных работ",
    tileGallerySubtitle: "Изучите моё портфолио фасадных работ: от утепления и нанесения штукатурки до полного преображения зданий, которое повышает их защиту и эстетическую привлекательность.",
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
    heroSubtitle: "Visu veidu remonta un celtniecības un apdares darbi: reģipša darbi, apmešanas darbi, siltināšana un trokšņu izolācija, grīdu un sienu izlīdzināšana, lamināta un flīžu ieklāšana, durvju bloku uzstādīšana, krāsošanas darbi, špaktelēšana, tapešu līmēšana, fasādes darbi",
    viewWorkBtn: "Skatīt manus darbus",
    featureExperience: "15+ gadu pieredze",
    featureCraftsmanship: "Kvalitatīva meistarība",
    // Works Section
    worksTitle: "Mani izceltie darbi",
    worksSubtitle: "No virtuvēm līdz greznām vannas istabām un pilnīgai mājas renovācijai — redziet, kā es īstenoju klientu vīzijas ar izcilu meistarību.",
    work1_badge: "Virtuve",
    work1_title: "Mūsdienīgas virtuves renovācija",
    work1_desc: "Pilnīga virtuves pārbūve ar pasūtījuma skapjiem un marmora virsmām",
    work2_badge: "Vannas istaba",
    work2_title: "Greznā vannas istaba",
    work2_desc: "Eleganta vannas istabas renovācija ar augstākās klases armatūru un pasūtījuma flīzēm",
    work3_badge: "Pielikums",
    work3_title: "Mājas piebūve",
    work3_desc: "Nevainojama mājas piebūve, kas lieliski papildina esošo arhitektūru",
    work4_badge: "Renovācija",
    work4_title: "Pagraba renovācija",
    work4_desc: "Pilnīga pagraba pārvēršana funkcionālā dzīvojamā telpā",
    work5_badge: "Guļamistaba",
    work5_title: "Pasūtījuma galvenā guļamistaba",
    work5_desc: "Greznā galvenā guļamistaba ar iebūvētu skapi un spa tipa vannas istabu",
    work6_badge: "Renovācija",
    work6_title: "Atvērtā plānojuma telpa",
    work6_desc: "Atvērtas, plūstošas telpas izveide, kas ideāli piemērota mūsdienu ģimenes dzīvei",
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
    // Tile Work Gallery Page
    tileGalleryTitle: "Fasādes darbu portfolio",
    tileGallerySubtitle: "Apskatiet manu fasādes darbu portfolio: no siltināšanas un apmešanas līdz pilnīgai ēku ārpuses pārveidošanai, kas uzlabo gan to aizsardzību, gan estētisko pievilcību.",
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
      const h3 = element.querySelector('h3');
      if (h3) {
          h3.innerHTML = translation;
      } else {
          element.innerHTML = translation;
      }
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
    if (languageSelector && !languageSelector.contains(event.target)) {
        const dropdown = document.getElementById("languageDropdown");
        const button = document.querySelector(".language-btn");
        if(dropdown && button) {
            dropdown.classList.remove("show");
            button.classList.remove("active");
        }
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    loadSavedLanguage();
    initLanguageDropdownClose();

    // Gallery Filtering
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            button.classList.add('active');
            const filter = button.dataset.filter;
            document.querySelectorAll('.gallery-item').forEach(item => {
                item.style.display = (filter === 'all' || item.dataset.category === filter) ? 'block' : 'none';
            });
        });
    });

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    let currentLightboxIndex = 0;
    
    function openLightbox(index) {
        const visibleItems = Array.from(document.querySelectorAll('.gallery-item')).filter(el => el.style.display !== 'none');
        if (index < 0 || index >= visibleItems.length) return;
        
        currentLightboxIndex = index;
        const currentItem = visibleItems[index];
        const image = currentItem.querySelector('img');
        const caption = currentItem.querySelector('h3');
        
        lightboxImage.src = image.src;
        lightboxCaption.textContent = caption ? caption.textContent : '';

        scale = 1;
        originX = 0;
        originY = 0;
        lightboxImage.style.transformOrigin = 'center center';
        updateTransform();

        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    window.closeLightbox = function() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function changeLightboxImage(step) {
        const visibleItems = Array.from(document.querySelectorAll('.gallery-item')).filter(el => el.style.display !== 'none');
        let nextIndex = currentLightboxIndex + step;
        
        if (nextIndex >= visibleItems.length) {
            nextIndex = 0;
        } else if (nextIndex < 0) {
            nextIndex = visibleItems.length - 1;
        }
        openLightbox(nextIndex);
    }
    
    // Initialize lightbox click events
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const visibleItems = Array.from(document.querySelectorAll('.gallery-item')).filter(el => el.style.display !== 'none');
            const currentIndex = visibleItems.indexOf(item);
            if (currentIndex > -1) {
                openLightbox(currentIndex);
            }
        });
    });

    // Close lightbox when clicking outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowRight') changeLightboxImage(1);
            if (e.key === 'ArrowLeft') changeLightboxImage(-1);
            if (e.key === 'Escape') closeLightbox();
        }
    });

    // Zoom and pan functionality
    lightboxImage.setAttribute('draggable', 'false');
    lightboxImage.addEventListener('dragstart', e => e.preventDefault());

    let scale = 1;
    let originX = 0;
    let originY = 0;
    let startX = 0;
    let startY = 0;
    let isPanning = false;

    lightboxImage.style.transformOrigin = 'center center';

    function updateTransform() {
        const maxX = (scale - 1) * lightboxImage.clientWidth / 2;
        const maxY = (scale - 1) * lightboxImage.clientHeight / 2;
        originX = Math.min(Math.max(originX, -maxX), maxX);
        originY = Math.min(Math.max(originY, -maxY), maxY);
        lightboxImage.style.transform = `scale(${scale}) translate(${originX / scale}px, ${originY / scale}px)`;
    }

    lightboxImage.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = -e.deltaY * 0.001;
        let newScale = scale + delta;
        newScale = Math.min(Math.max(newScale, 1), 5);
        
        const rect = lightboxImage.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        const originPercentX = (offsetX / rect.width) * 100;
        const originPercentY = (offsetY / rect.height) * 100;
        lightboxImage.style.transformOrigin = `${originPercentX}% ${originPercentY}%`;
        
        scale = newScale;
        updateTransform();
    });

    lightboxImage.addEventListener('mousedown', (e) => {
        if (scale <= 1) return;
        isPanning = true;
        startX = e.clientX - originX;
        startY = e.clientY - originY;
        lightboxImage.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (!isPanning) return;
        e.preventDefault();
        originX = e.clientX - startX;
        originY = e.clientY - startY;
        updateTransform();
    });

    window.addEventListener('mouseup', () => {
        if (!isPanning) return;
        isPanning = false;
        lightboxImage.style.cursor = 'grab';
    });
});