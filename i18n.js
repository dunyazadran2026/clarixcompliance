/* ── CLARIX COMPLIANCE — i18n & Shared Layout ── */

window.currentLang = localStorage.getItem('clarix_lang') || 'da';

const STRINGS = {
  da: {
    // Nav
    nav_home: 'Hjem',
    nav_devices: 'Medicinsk udstyr',
    nav_pharma: 'Pharma',
    nav_ai: 'AI Governance',
    nav_about: 'Om mig',
    nav_insights: 'Indsigt',
    nav_contact: 'Kontakt',
    nav_book: 'Book et møde',

    // Home hero
    hero_eyebrow: 'Uafhængig Regulatory Consultant · Odense, Danmark',
    hero_h1_a: 'Regulatory compliance,',
    hero_h1_b: 'der beskytter din vej til markedet.',
    hero_sub: 'Seniorniveau ekspertise inden for MDR/IVDR, ISO 13485, EU AI Act og GxP — for MedTech- og Pharmavirksomheder, der ikke har råd til at tage fejl.',
    hero_btn1: 'Medicinsk udstyr',
    hero_btn2: 'Pharma & GxP',
    hero_btn3: 'AI Governance',

    // Booking card
    book_h3: 'Book et gratis opdagelsesmøde',
    book_p: 'Usikker på, hvor du skal starte? Lad os tale om din regulatoriske situation. Ingen forpligtelse — bare en direkte samtale om, hvor du er, og hvad du har brug for.',
    book_btn1: '📅  Book via Calendly',
    book_btn2: '✉️  Send en besked',
    book_note: 'Eller forbind på',

    // Sections
    quotes_eyebrow: 'Hvad kunder siger',
    quotes_title: 'Betroet af RA/QA-ledere inden for MedTech og Pharma',
    services_eyebrow: 'Hvad jeg tilbyder',
    services_title: 'Regulatory ekspertise gennem hele produktets livscyklus',
    services_sub: 'Jeg leverer seniorniveau regulatory og kvalitetsviden til dit projekt — uden overhead fra en fast stilling.',
    stats_eyebrow: 'Compliance-landskabet',
    stats_title: 'Hvorfor regulatory ekspertise betyder mere end nogensinde',
    about_eyebrow: 'Om Dunya Zadran',
    about_title: 'Seniorekspertise. Ingen oplæringstid.',
    about_sub1: 'Jeg er uafhængig regulatory consultant baseret i Odense, Danmark. Min baggrund spænder over MDR/IVDR, ISO 13485, pharma GxP og AI governance.',
    about_sub2: 'Jeg er integreret i dit team, tilpasset din tidslinje og leverer arbejde, der holder under revision.',
    about_btn1: 'Mød Dunya',
    about_btn2: 'Book et møde',
    testi_eyebrow: 'Kundefeedback',
    testi_title: 'Betroet på tværs af det regulatoriske spektrum',
    insights_eyebrow: 'Indsigt',
    insights_title: 'Regulatory intelligence for RA/QA-ledere',
    insights_more: 'Alle indsigter →',
    cta_h2: 'Klar til at styrke din regulatoriske position?',
    cta_p: 'Book et gratis opdagelsesmøde — ingen forpligtelse, intet salgspres. Bare en direkte samtale om din compliance-situation.',
    cta_btn: '📅  Book et gratis møde',

    // Services
    svc1_name: 'Medicinsk udstyr',
    svc1_desc: 'MDR/IVDR compliance, teknisk dokumentation, notified body forberedelse, risikostyring (ISO 14971) og post-market overvågning.',
    svc1_link: 'MDR · IVDR · ISO 14971 →',
    svc2_name: 'Pharma & GxP',
    svc2_desc: 'Generisk pharma-indsendelser, livscyklushåndtering, GMP/GDP-compliance og regulatory strategi for farmaceutiske producenter og distributører.',
    svc2_link: 'GxP · LCM · Indsendelser →',
    svc3_name: 'AI Governance',
    svc3_desc: 'EU AI Act-beredskab, ISO 42001-tilpasning og governance-rammer for AI i regulerede workflows — compliance-orienteret, ikke hype.',
    svc3_link: 'EU AI Act · ISO 42001 →',
    svc4_name: 'Kvalitetsstyring',
    svc4_desc: 'ISO 13485-implementering og gap-analyse, CAPA-styring, interne auditprogrammer og leverandørkvalificering.',
    svc4_link: 'ISO 13485 · CAPA · Audits →',
    svc5_name: 'AI Compliance Workshops',
    svc5_desc: 'Skræddersyede halv- eller heldagsworkshops for RA/QA-teams og ledelse — praktiske, compliance-orienterede og direkte anvendelige.',
    svc5_link: 'Workshops · Træning →',
    svc6_name: 'Regulatory Strategi',
    svc6_desc: 'Fra tidlig markedsadgangsplanlægning til post-godkendelse ændringshåndtering — strategisk regulatory vejledning.',
    svc6_link: 'Strategi · Rådgivning →',

    // Stats
    stat1_num: '73%',
    stat1_lbl: 'af MDR tekniske dokumentationsindsendelser kræver revision inden godkendelse',
    stat2_num: '2026',
    stat2_lbl: 'EU AI Act høj-risiko forpligtelser fuldt i kraft — beredskabsgabet er stort',
    stat3_num: 'ISO 42001',
    stat3_lbl: 'AI management systems-standard — nu en baselineforventning for reguleret AI',
    stat4_num: '15+',
    stat4_lbl: 'års senior regulatory erfaring på tværs af MedTech og Pharma',

    // Footer
    footer_services: 'Services',
    footer_company: 'Virksomhed',
    footer_connect: 'Forbind',
    footer_location: 'Odense, Danmark',
    footer_copy: '© 2025 Clarix Compliance Consulting · Alle rettigheder forbeholdes',
    footer_tagline: 'Uafhængig regulatory consultancy for MedTech og Pharma — baseret i Danmark, betjener Europa.',
  },

  en: {
    // Nav
    nav_home: 'Home',
    nav_devices: 'Medical Devices',
    nav_pharma: 'Pharma',
    nav_ai: 'AI Governance',
    nav_about: 'About',
    nav_insights: 'Insights',
    nav_contact: 'Contact',
    nav_book: 'Book a Call',

    // Home hero
    hero_eyebrow: 'Independent Regulatory Consultant · Odense, Denmark',
    hero_h1_a: 'Regulatory compliance',
    hero_h1_b: 'that protects your path to market.',
    hero_sub: 'Senior-level expertise in MDR/IVDR, ISO 13485, EU AI Act and GxP — for MedTech and Pharma companies who cannot afford to get it wrong.',
    hero_btn1: 'Medical Devices',
    hero_btn2: 'Pharma & GxP',
    hero_btn3: 'AI Governance',

    // Booking card
    book_h3: 'Book a free discovery call',
    book_p: 'Not sure where to start? Let\'s talk through your regulatory situation. No obligation — just a direct conversation about where you are and what you need.',
    book_btn1: '📅  Book via Calendly',
    book_btn2: '✉️  Send a message',
    book_note: 'Or connect on',

    // Sections
    quotes_eyebrow: 'What clients say',
    quotes_title: 'Trusted by RA/QA leaders across MedTech and Pharma',
    services_eyebrow: 'What I do',
    services_title: 'Regulatory expertise across the full product lifecycle',
    services_sub: 'I bring senior-level regulatory and quality knowledge to your project — without the overhead of a permanent hire.',
    stats_eyebrow: 'The compliance landscape',
    stats_title: 'Why regulatory expertise matters now more than ever',
    about_eyebrow: 'About Dunya Zadran',
    about_title: 'Senior expertise. No learning curve.',
    about_sub1: 'I am an independent regulatory consultant based in Odense, Denmark. My background spans MDR/IVDR, ISO 13485, pharma GxP, and AI governance.',
    about_sub2: 'I embed in your team, align to your timeline, and deliver work that holds up under audit. No overhead, no learning curve.',
    about_btn1: 'Meet Dunya',
    about_btn2: 'Book a Call',
    testi_eyebrow: 'Client feedback',
    testi_title: 'Trusted across the regulatory spectrum',
    insights_eyebrow: 'Insights',
    insights_title: 'Regulatory intelligence for RA/QA leaders',
    insights_more: 'All Insights →',
    cta_h2: 'Ready to strengthen your regulatory position?',
    cta_p: 'Book a free discovery call — no obligation, no sales pitch. Just a direct conversation about your compliance situation.',
    cta_btn: '📅  Book a Free Call',

    // Services
    svc1_name: 'Medical Devices',
    svc1_desc: 'MDR/IVDR compliance, technical documentation, notified body preparation, risk management (ISO 14971), and post-market surveillance — audit-ready from day one.',
    svc1_link: 'MDR · IVDR · ISO 14971 →',
    svc2_name: 'Pharma & GxP',
    svc2_desc: 'Generic pharma submissions, lifecycle management, GMP/GDP compliance, and regulatory strategy for pharmaceutical manufacturers and distributors.',
    svc2_link: 'GxP · LCM · Submissions →',
    svc3_name: 'AI Governance',
    svc3_desc: 'EU AI Act readiness, ISO 42001 alignment, and governance frameworks for AI in regulated workflows — framed through compliance, not hype.',
    svc3_link: 'EU AI Act · ISO 42001 →',
    svc4_name: 'Quality Management',
    svc4_desc: 'ISO 13485 implementation and gap assessment, CAPA management, internal audit programmes, and supplier qualification frameworks.',
    svc4_link: 'ISO 13485 · CAPA · Audits →',
    svc5_name: 'AI Compliance Workshops',
    svc5_desc: 'Tailored half-day or full-day workshops for RA/QA teams and leadership — practical, compliance-oriented, and directly applicable.',
    svc5_link: 'Workshops · Training →',
    svc6_name: 'Regulatory Strategy',
    svc6_desc: 'From early-stage market access planning to post-approval change management — strategic regulatory guidance for product decisions that last.',
    svc6_link: 'Strategy · Advisory →',

    // Stats
    stat1_num: '73%',
    stat1_lbl: 'of MDR technical documentation submissions require revision before approval',
    stat2_num: '2026',
    stat2_lbl: 'EU AI Act high-risk obligations fully in force — readiness gap is wide',
    stat3_num: 'ISO 42001',
    stat3_lbl: 'AI management systems standard — now a baseline expectation for regulated AI',
    stat4_num: '15+',
    stat4_lbl: 'years senior regulatory experience across MedTech and Pharma',

    // Footer
    footer_services: 'Services',
    footer_company: 'Company',
    footer_connect: 'Connect',
    footer_location: 'Odense, Denmark',
    footer_copy: '© 2025 Clarix Compliance Consulting · All rights reserved',
    footer_tagline: 'Independent regulatory consultancy for MedTech and Pharma — based in Denmark, serving Europe.',
  }
};

function t(key) {
  return STRINGS[window.currentLang][key] || STRINGS['en'][key] || key;
}

function switchLang(lang) {
  window.currentLang = lang;
  localStorage.setItem('clarix_lang', lang);
  location.reload();
}

// Shared nav
function renderNav(activePage) {
  const pages = [
    { key:'nav_home',    href:'index.html' },
    { key:'nav_devices', href:'medical-devices.html' },
    { key:'nav_pharma',  href:'pharma.html' },
    { key:'nav_ai',      href:'ai.html' },
    { key:'nav_about',   href:'about.html' },
    { key:'nav_insights',href:'insights.html' },
    { key:'nav_contact', href:'contact.html' },
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.key === activePage ? 'active' : ''}">${t(p.key)}</a>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}">${t(p.key)}</a>`
  ).join('');
  const da_active = window.currentLang === 'da' ? 'active' : '';
  const en_active = window.currentLang === 'en' ? 'active' : '';

  document.getElementById('site-nav').innerHTML = `
    <nav class="site-nav">
      <div class="wrap nav-inner">
        ${Brand.logoHorizontal()}
        <div class="nav-links">${links}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="lang-toggle">
            <button class="lang-btn ${da_active}" onclick="switchLang('da')" aria-label="Dansk">DA</button>
            <button class="lang-btn ${en_active}" onclick="switchLang('en')" aria-label="English">EN</button>
          </div>
          <div class="nav-cta-wrap">
            <a href="contact.html" class="btn btn-navy" style="padding:9px 20px;font-size:.82rem;">${t('nav_book')}</a>
          </div>
        </div>
        <button class="hamburger" onclick="toggleMobile()" aria-label="Menu">&#9776;</button>
      </div>
      <div class="mobile-menu" id="mobileMenu">
        ${mobileLinks}
        <div class="lang-toggle" style="margin:10px 10px 0;">
          <button class="lang-btn ${da_active}" onclick="switchLang('da')">DA</button>
          <button class="lang-btn ${en_active}" onclick="switchLang('en')">EN</button>
        </div>
      </div>
    </nav>`;
}

function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Shared footer
function renderFooter() {
  const mark = Brand.logoMark(32, '#FFFFFF', '#1C8C8C');
  document.getElementById('site-footer').innerHTML = `
    <footer class="footer">
      <div class="wrap footer-grid">
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
            ${mark}
            <div>
              <div style="font-family:'Outfit',sans-serif;font-weight:300;font-size:14px;letter-spacing:.1em;color:#fff;">CLARIX</div>
              <div style="font-family:'Outfit',sans-serif;font-weight:400;font-size:7px;letter-spacing:.24em;color:#1C8C8C;">COMPLIANCE</div>
            </div>
          </div>
          <p>${t('footer_tagline')}</p>
        </div>
        <div class="footer-col">
          <h5>${t('footer_services')}</h5>
          <a href="medical-devices.html">${t('nav_devices')}</a>
          <a href="pharma.html">${t('nav_pharma')}</a>
          <a href="ai.html">${t('nav_ai')}</a>
          <a href="contact.html">${t('nav_book')}</a>
        </div>
        <div class="footer-col">
          <h5>${t('footer_company')}</h5>
          <a href="about.html">${t('nav_about')}</a>
          <a href="insights.html">${t('nav_insights')}</a>
          <a href="contact.html">${t('nav_contact')}</a>
        </div>
        <div class="footer-col">
          <h5>${t('footer_connect')}</h5>
          <p>${t('footer_location')}</p>
          <a href="https://www.linkedin.com/in/dunyazadran" target="_blank" rel="noopener">LinkedIn</a>
          <a href="contact.html">${window.currentLang==='da'?'Send en besked':'Send a message'}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="wrap"><p>${t('footer_copy')}</p></div>
      </div>
    </footer>`;
}

function handleSubmit(e) {
  e.preventDefault();
  const el = document.getElementById('form-success');
  if (el) { el.style.display = 'block'; }
}
