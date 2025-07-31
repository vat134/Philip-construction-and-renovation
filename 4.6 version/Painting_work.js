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
    
    // Gallery Section
    galleryTitle: "Our Work Portfolio",
    gallerySubtitle: "Take a look at my finished work.",

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
    tileGalleryTitle: "Painting Work Portfolio",
    tileGallerySubtitle: "Explore my portfolio of painting projects, showcasing flawless finishes from detailed interior work to durable and beautiful exterior facades.",
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

    // Gallery Section
    galleryTitle: "Портфолио Наших Работ",
    gallerySubtitle: "Взгляните на мои завершенные работы.",

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
    tileGalleryTitle: "Портфолио малярных работ",
    tileGallerySubtitle: "Изучите моё портфолио малярных работ: от безупречной отделки интерьеров до долговечных и красивых фасадов.",
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
    
    // Gallery Section
    galleryTitle: "Mūsu Darbu Portfolio",
    gallerySubtitle: "Apskatiet manus pabeigtos darbus.",

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
    tileGalleryTitle: "Krāsošanas darbu portfolio",
    tileGallerySubtitle: "Apskatiet manu krāsošanas darbu portfolio, kurā redzama nevainojama apdare: no detalizētiem iekšdarbiem līdz izturīgām un skaistām fasādēm.",
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