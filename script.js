/* ================================================
   CLARIX COMPLIANCE — script.js
   Brand SVGs · i18n (DA/EN) · SPA navigation
   ================================================ */

// ── BRAND ASSETS ──────────────────────────────
const Brand = {
  logoMark(sz=40, nc='#163A5F', tc='#1C8C8C') {
    const sw1 = sz*0.095, sw2 = sz*0.075;
    return `<svg width="${sz}" height="${sz}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M30 7A16.5 16.5 0 1 0 30 33" stroke="${nc}" stroke-width="${sw1}" stroke-linecap="round" fill="none"/>
      <path d="M23 13.5A9 9 0 1 0 23 26.5" stroke="${tc}" stroke-width="${sw2}" stroke-linecap="round" fill="none"/>
    </svg>`;
  },

  pattern(pid, nc, tc) {
    return `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;pointer-events:none;">
      <defs><pattern id="${pid}" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M48 10A18 18 0 1 0 48 36" stroke="${nc}" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.13"/>
        <path d="M41 15A10 10 0 1 0 41 31" stroke="${tc}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.18"/>
        <path d="M18 34A18 18 0 1 0 18 60" stroke="${nc}" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.085"/>
        <path d="M11 39A10 10 0 1 0 11 55" stroke="${tc}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.10"/>
      </pattern></defs>
      <rect width="100%" height="100%" fill="url(#${pid})"/>
    </svg>`;
  },

  icon(type, sz=32) {
    const c=sz/2, r=sz*0.38, sw1=sz*0.055, sw2=sz*0.045, n='#163A5F', t='#1C8C8C';
    const icons = {
      mdr: `<path d="M${c+r*.62} ${c-r*.78}A${r} ${r} 0 1 0 ${c+r*.62} ${c+r*.78}" stroke="${n}" stroke-width="${sw1}" stroke-linecap="round" fill="none"/>
            <path d="M${c-r*.22} ${c}L${c+r*.14} ${c+r*.36}L${c+r*.56} ${c-r*.32}" stroke="${t}" stroke-width="${sw1}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
      quality: `<path d="M${c+r*.7} ${c-r*.7}A${r} ${r} 0 1 0 ${c+r*.7} ${c+r*.7}" stroke="${n}" stroke-width="${sw1}" stroke-linecap="round" fill="none"/>
                <path d="M${c+r*.42} ${c-r*.42}A${r*.6} ${r*.6} 0 1 0 ${c+r*.42} ${c+r*.42}" stroke="${t}" stroke-width="${sw2}" stroke-linecap="round" fill="none"/>
                <circle cx="${c}" cy="${c}" r="${sz*.075}" fill="${n}"/>`,
      ai: `<circle cx="${c}" cy="${c}" r="${sz*.075}" fill="${n}"/>
           <circle cx="${c-r*.72}" cy="${c-r*.48}" r="${sz*.055}" fill="${t}"/>
           <circle cx="${c+r*.72}" cy="${c-r*.48}" r="${sz*.055}" fill="${t}"/>
           <circle cx="${c}" cy="${c+r*.78}" r="${sz*.055}" fill="${t}"/>
           <line x1="${c}" y1="${c}" x2="${c-r*.72}" y2="${c-r*.48}" stroke="${n}" stroke-width="${sw2*.65}" opacity=".45"/>
           <line x1="${c}" y1="${c}" x2="${c+r*.72}" y2="${c-r*.48}" stroke="${n}" stroke-width="${sw2*.65}" opacity=".45"/>
           <line x1="${c}" y1="${c}" x2="${c}" y2="${c+r*.78}" stroke="${n}" stroke-width="${sw2*.65}" opacity=".45"/>`,
      aiact: `<rect x="${c-r*.78}" y="${c-r*.78}" width="${r*1.56}" height="${r*1.56}" rx="${sz*.04}" stroke="${n}" stroke-width="${sw1}" fill="none"/>
              <line x1="${c-r*.78}" y1="${c}" x2="${c+r*.78}" y2="${c}" stroke="${n}" stroke-width="${sw2*.55}" opacity=".35"/>
              <line x1="${c}" y1="${c-r*.78}" x2="${c}" y2="${c+r*.78}" stroke="${n}" stroke-width="${sw2*.55}" opacity=".35"/>
              <circle cx="${c-r*.52}" cy="${c-r*.52}" r="${sz*.055}" fill="${t}"/>
              <circle cx="${c+r*.52}" cy="${c+r*.52}" r="${sz*.055}" fill="${t}"/>`,
      regulatory: `<path d="M${c+r*.62} ${c-r*.78}A${r} ${r} 0 1 0 ${c+r*.62} ${c+r*.78}" stroke="${n}" stroke-width="${sw1}" stroke-linecap="round" fill="none"/>
                   <line x1="${c-r*.18}" y1="${c-r*.35}" x2="${c+r*.52}" y2="${c-r*.35}" stroke="${t}" stroke-width="${sw2}" stroke-linecap="round"/>
                   <line x1="${c-r*.18}" y1="${c}" x2="${c+r*.52}" y2="${c}" stroke="${t}" stroke-width="${sw2}" stroke-linecap="round"/>
                   <line x1="${c-r*.18}" y1="${c+r*.35}" x2="${c+r*.32}" y2="${c+r*.35}" stroke="${t}" stroke-width="${sw2}" stroke-linecap="round"/>`,
      strategy: `<circle cx="${c}" cy="${c}" r="${r}" stroke="${n}" stroke-width="${sw1}" fill="none" opacity=".18"/>
                 <path d="M${c} ${c-r}A${r} ${r} 0 0 1 ${c+r*.866} ${c+r*.5}" stroke="${n}" stroke-width="${sw1}" stroke-linecap="round" fill="none"/>
                 <circle cx="${c}" cy="${c}" r="${sz*.072}" fill="${t}"/>
                 <line x1="${c}" y1="${c}" x2="${c-r*.5}" y2="${c-r*.68}" stroke="${t}" stroke-width="${sw2}" stroke-linecap="round"/>`
    };
    return `<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" xmlns="http://www.w3.org/2000/svg" fill="none">${icons[type]||''}</svg>`;
  }
};
window.Brand = Brand;

// ── LANGUAGE ──────────────────────────────────
let lang = localStorage.getItem('cx_lang') || 'da';
window.currentLang = lang;

const S = {
  da: {
    nav:['Hjem','AI Workshops','Medicinsk udstyr','Pharma','Om mig','Indsigt','Kontakt'],
    book_nav:'Book et møde',
    hero_ey:'Uafhængig Regulatory Consultant · Odense, Danmark',
    hero_h:'Regulatory compliance,',
    hero_hs:'der beskytter din vej til markedet.',
    hero_sub:'Seniorniveau ekspertise inden for MDR/IVDR, ISO 13485, EU AI Act og GxP — for MedTech- og Pharmavirksomheder, der ikke har råd til at tage fejl.',
    bk_h:'Book et gratis opdagelsesmøde',
    bk_p:'Usikker på, hvor du skal starte? Lad os tale om din regulatoriske situation. Ingen forpligtelse.',
    bk1:'📅  Book via Calendly', bk2:'✉️  Send en besked', bk3:'Eller forbind på',
    q_ey:'Hvad kunder siger', q_ti:'Betroet af RA/QA-ledere inden for MedTech og Pharma',
    sv_ey:'Hvad jeg tilbyder', sv_ti:'Regulatory ekspertise gennem hele produktets livscyklus',
    sv_sub:'Seniorniveau regulatory viden til dit projekt — uden overhead fra en fast stilling.',
    st_ey:'Compliance-landskabet', st_ti:'Hvorfor regulatory ekspertise betyder mere end nogensinde',
    ab_ey:'Om Dunya Zadran', ab_ti:'Seniorekspertise. Ingen oplæringstid.',
    ab_s1:'Uafhængig regulatory consultant baseret i Odense, Danmark. Min baggrund spænder over MDR/IVDR, ISO 13485, pharma GxP og AI governance.',
    ab_s2:'Jeg integrerer mig i dit team, tilpasset din tidslinje og leverer arbejde, der holder under revision.',
    ab_b1:'Mød Dunya', ab_b2:'Book et møde',
    ts_ey:'Kundefeedback', ts_ti:'Betroet på tværs af det regulatoriske spektrum',
    in_ey:'Indsigt', in_ti:'Regulatory intelligence for RA/QA-ledere',
    in_more:'Alle indsigter →',
    cta_h:'Klar til at styrke din regulatoriske position?',
    cta_p:'Book et gratis opdagelsesmøde — ingen forpligtelse, intet salgspres.',
    cta_b:'📅  Book et gratis møde',
    del_lbl:'Typiske leverancer',
    footer_s:'Services', footer_c:'Virksomhed', footer_l:'Forbind',
    footer_loc:'Odense, Danmark',
    footer_copy:'© 2025 Clarix Compliance Consulting · Alle rettigheder forbeholdes',
    footer_tag:'Uafhængig regulatory consultancy for MedTech og Pharma — baseret i Danmark, betjener Europa.',
    contact_send:'Send besked', form_ok:'✓ Besked sendt — jeg vender tilbage inden for én hverdag.',
    form_select:'Vælg ét',
  },
  en: {
    nav:['Home','AI Workshops','Medical Devices','Pharma','About','Insights','Contact'],
    book_nav:'Book a Call',
    hero_ey:'Independent Regulatory Consultant · Odense, Denmark',
    hero_h:'Regulatory compliance',
    hero_hs:'that protects your path to market.',
    hero_sub:'Senior-level expertise in MDR/IVDR, ISO 13485, EU AI Act and GxP — for MedTech and Pharma companies who cannot afford to get it wrong.',
    bk_h:'Book a free discovery call',
    bk_p:'Not sure where to start? Let\'s talk through your regulatory situation. No obligation.',
    bk1:'📅  Book via Calendly', bk2:'✉️  Send a message', bk3:'Or connect on',
    q_ey:'What clients say', q_ti:'Trusted by RA/QA leaders across MedTech and Pharma',
    sv_ey:'What I do', sv_ti:'Regulatory expertise across the full product lifecycle',
    sv_sub:'Senior-level regulatory knowledge to your project — without the overhead of a permanent hire.',
    st_ey:'The compliance landscape', st_ti:'Why regulatory expertise matters now more than ever',
    ab_ey:'About Dunya Zadran', ab_ti:'Senior expertise. No learning curve.',
    ab_s1:'Independent regulatory consultant based in Odense, Denmark. Background spans MDR/IVDR, ISO 13485, pharma GxP, and AI governance.',
    ab_s2:'I embed in your team, align to your timeline, and deliver work that holds up under audit.',
    ab_b1:'Meet Dunya', ab_b2:'Book a Call',
    ts_ey:'Client feedback', ts_ti:'Trusted across the regulatory spectrum',
    in_ey:'Insights', in_ti:'Regulatory intelligence for RA/QA leaders',
    in_more:'All Insights →',
    cta_h:'Ready to strengthen your regulatory position?',
    cta_p:'Book a free discovery call — no obligation, no sales pitch.',
    cta_b:'📅  Book a Free Call',
    del_lbl:'Typical deliverables',
    footer_s:'Services', footer_c:'Company', footer_l:'Connect',
    footer_loc:'Odense, Denmark',
    footer_copy:'© 2025 Clarix Compliance Consulting · All rights reserved',
    footer_tag:'Independent regulatory consultancy for MedTech and Pharma — based in Denmark, serving Europe.',
    contact_send:'Send message', form_ok:'✓ Message sent — I will be in touch within one business day.',
    form_select:'Select one',
  }
};
function t(k){ return (S[lang]||S.en)[k] || k; }

function switchLang(l){
  lang = l; window.currentLang = l;
  localStorage.setItem('cx_lang', l);
  renderAll();
}

// ── ROUTING ───────────────────────────────────
const pages = ['home','devices','pharma','ai','about','insights','contact'];
let currentPage = 'home';

function showPage(page){
  currentPage = page;
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('page-'+page);
  if(el) el.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
  renderNav();
}

// ── RENDER NAV ────────────────────────────────
function renderNav(){
  const pageKeys = ['home','ai','devices','pharma','about','insights','contact'];
  const labels = t('nav');
  const daA = lang==='da'?'active':'', enA = lang==='en'?'active':'';
  const links = pageKeys.map((k,i)=>
    `<a class="${k===currentPage?'active':''}" onclick="showPage('${k}')">${labels[i]}</a>`
  ).join('');
  const mlinks = pageKeys.map((k,i)=>
    `<a onclick="showPage('${k}');closeMob()">${labels[i]}</a>`
  ).join('');
  document.getElementById('site-nav').innerHTML = `
    <nav class="site-nav">
      <div class="w nav-inner">
        <div class="logo" onclick="showPage('home')">
          ${Brand.logoMark(34,'#163A5F','#1C8C8C')}
          <div class="logo-div"></div>
          <div class="logo-wm"><span class="logo-c">CLARIX</span><span class="logo-co">COMPLIANCE</span></div>
        </div>
        <div class="nav-links">${links}</div>
        <div style="display:flex;align-items:center;gap:8px;">
          <div class="lang-toggle">
            <button class="lang-btn ${daA}" onclick="switchLang('da')">DA</button>
            <button class="lang-btn ${enA}" onclick="switchLang('en')">EN</button>
          </div>
          <div class="nav-cta"><button class="btn btn-navy" style="padding:9px 18px;font-size:.82rem;" onclick="showPage('contact')">${t('book_nav')}</button></div>
        </div>
        <button class="hamburger" onclick="toggleMob()">&#9776;</button>
      </div>
      <div class="mob-menu" id="mob-menu">${mlinks}
        <div class="lang-toggle" style="margin:10px 8px 0;width:fit-content;">
          <button class="lang-btn ${daA}" onclick="switchLang('da')">DA</button>
          <button class="lang-btn ${enA}" onclick="switchLang('en')">EN</button>
        </div>
      </div>
    </nav>`;
}
function toggleMob(){ document.getElementById('mob-menu').classList.toggle('open'); }
function closeMob(){ document.getElementById('mob-menu').classList.remove('open'); }

// ── RENDER FOOTER ─────────────────────────────
function renderFooter(){
  const mk = Brand.logoMark(30,'#FFFFFF','#1C8C8C');
  document.getElementById('site-footer').innerHTML = `
    <footer class="footer">
      <div class="w footer-grid">
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:9px;">${mk}
            <div><div style="font-family:'Outfit',sans-serif;font-weight:300;font-size:13px;letter-spacing:.1em;color:#fff;">CLARIX</div>
            <div style="font-family:'Outfit',sans-serif;font-weight:400;font-size:7px;letter-spacing:.24em;color:#1C8C8C;">COMPLIANCE</div></div>
          </div>
          <p>${t('footer_tag')}</p>
        </div>
        <div class="footer-col">
          <h5>${t('footer_s')}</h5>
          <a onclick="showPage('ai')">${t('nav')[1]}</a>
          <a onclick="showPage('devices')">${t('nav')[2]}</a>
          <a onclick="showPage('pharma')">${t('nav')[3]}</a>
          <a onclick="showPage('contact')">${t('book_nav')}</a>
        </div>
        <div class="footer-col">
          <h5>${t('footer_c')}</h5>
          <a onclick="showPage('about')">${t('nav')[4]}</a>
          <a onclick="showPage('insights')">${t('nav')[5]}</a>
          <a onclick="showPage('contact')">${t('nav')[6]}</a>
        </div>
        <div class="footer-col">
          <h5>${t('footer_l')}</h5>
          <p>${t('footer_loc')}</p>
          <a href="https://www.linkedin.com/in/dunyazadran" target="_blank" rel="noopener">LinkedIn</a>
          <a onclick="showPage('contact')">${lang==='da'?'Send en besked':'Send a message'}</a>
        </div>
      </div>
      <div class="footer-bot"><div class="w"><p>${t('footer_copy')}</p></div></div>
    </footer>`;
}

// ── PAGE BUILDERS ─────────────────────────────

function buildHome(){
  const pid = 'hpat'+Math.random().toString(36).slice(2,6);
  const quotes_da = [
    {q:'"Dunya kom ind 6 uger fra en notified body-vurdering med væsentlige mangler. Hun prioriterede det rigtige og vi gik ind med fuld tillid."',s:'RA Director · MedTech, Danmark'},
    {q:'"Hendes MDR gap-analyse var den mest grundige vi har set. Hun ved præcis hvad notified bodies kigger efter."',s:'VP Quality · Europæisk medicinsk udstyrsfirma'},
    {q:'"AI governance-workshoppen var den mest praktisk nyttige session vi har haft i år. Klart compliance-framework, ingen buzz-ord."',s:'VP Quality & Regulatory · Pharma, Sverige'},
    {q:'"Senior ekspertise uden overhead. Integreret hurtigt, forstod vores portfolio og leverede dokumentation vi kunne indsende med det samme."',s:'CEO · Early-stage MedTech'},
    {q:'"GxP compliance-gennemgang inden myndighedsinspektion. Grundig forberedelse, audit-klar dokumentation, gnidningsfri inspektion."',s:'QA Manager · Farmaceutisk distributør'},
  ];
  const quotes_en = [
    {q:'"Dunya came in 6 weeks from a notified body assessment with significant gaps. She prioritised what mattered and we went in with full confidence."',s:'RA Director · MedTech, Denmark'},
    {q:'"Her MDR gap analysis was the most thorough we have seen. She clearly knows what notified bodies look for."',s:'VP Quality · European Medical Device Company'},
    {q:'"The AI compliance workshop was the most practically useful session we have had all year. Clear compliance framework, no buzzwords."',s:'VP Quality & Regulatory · Pharma, Sweden'},
    {q:'"Senior expertise without the overhead. Embedded quickly, understood our portfolio, delivered documentation we could submit straight away."',s:'CEO · Early-stage MedTech'},
    {q:'"GxP compliance review ahead of an authority inspection. Thorough preparation, audit-ready documentation, smooth inspection."',s:'QA Manager · Pharmaceutical Distributor'},
  ];
  const quotes = lang==='da' ? quotes_da : quotes_en;
  const svcs = [
    {icon:'ai',       k:'ai',      n:lang==='da'?'AI Workshops':'AI Workshops',         d:lang==='da'?'To specialiserede workshops: Compliance AI Workshop for RA/QA-fagfolk og Ledelses AI Workshop for ledere og selvstændige — praktiske, compliance-orienterede, på dansk og engelsk.':'Two specialised workshops: Compliance AI Workshop for RA/QA professionals and Leadership AI Workshop for leaders and independents — practical, compliance-oriented, in Danish and English.',l:lang==='da'?'Se workshops →':'View workshops →'},
    {icon:'mdr',      k:'devices', n:lang==='da'?'Medicinsk udstyr':'Medical Devices',  d:lang==='da'?'MDR/IVDR compliance, teknisk dokumentation, notified body forberedelse, risikostyring og post-market overvågning.':'MDR/IVDR compliance, technical documentation, notified body preparation, risk management and post-market surveillance.',l:'MDR · IVDR · ISO 14971 →'},
    {icon:'regulatory',k:'pharma', n:lang==='da'?'Pharma & GxP':'Pharma & GxP',        d:lang==='da'?'Generisk pharma-indsendelser, livscyklushåndtering, GMP/GDP-compliance og regulatory strategi.':'Generic pharma submissions, lifecycle management, GMP/GDP compliance and regulatory strategy.',l:'GxP · LCM · Submissions →'},
    {icon:'quality',  k:'devices', n:lang==='da'?'Kvalitetsstyring':'Quality Management',d:lang==='da'?'ISO 13485-implementering, CAPA-styring, interne audit-programmer og leverandørkvalificering.':'ISO 13485 implementation, CAPA management, internal audit programmes and supplier qualification.',l:'ISO 13485 · CAPA →'},
    {icon:'aiact',    k:'ai',      n:lang==='da'?'AI Governance':'AI Governance',        d:lang==='da'?'EU AI Act-beredskab, ISO 42001-tilpasning og governance-rammer for AI i regulerede workflows — compliance-orienteret, ikke hype.':'EU AI Act readiness, ISO 42001 alignment, and governance frameworks for AI in regulated workflows — compliance-oriented, not hype.',l:'EU AI Act · ISO 42001 →'},
    {icon:'strategy', k:'contact', n:lang==='da'?'Regulatory Strategi':'Regulatory Strategy',d:lang==='da'?'Fra tidlig markedsadgangsplanlægning til post-godkendelse ændringshåndtering.':'From early market access planning to post-approval change management.',l:lang==='da'?'Strategi · Rådgivning →':'Strategy · Advisory →'},
  ];
  const testi_da = [
    {i:'RA',q:'"Vi stod 6 uger fra notified body-vurdering med væsentlige mangler. Dunya kom ind, prioriterede det rigtige og vi gik ind med fuld tillid. Præcis den senior-støtte vi havde brug for."',n:'Regulatory Affairs Director',r:'MedTech · Danmark'},
    {i:'VP',q:'"AI compliance-workshoppen var den mest praktisk nyttige session vi har haft hele året. Intet buzz — bare et klart, compliance-first framework vi kunne anvende direkte efterfølgende."',n:'VP Quality & Regulatory',r:'Pharma · Sverige'},
    {i:'CE',q:'"Som startup havde vi brug for én der kunne bygge vores QMS fra bunden og forstå vores produkt på samme tid. Dunya gjorde begge dele — og ISO 13485-implementeringen har bestået enhver audit siden."',n:'CEO & Co-Founder',r:'Early-stage MedTech · Tyskland'},
    {i:'QA',q:'"Risikobaseret tilgang til GxP compliance-gennemgang inden stor myndighedsinspektion. Grundig forberedelse, audit-klar dokumentation, gnidningsfri inspektion."',n:'Quality Assurance Manager',r:'Farmaceutisk distributør · Holland'},
  ];
  const testi_en = [
    {i:'RA',q:'"We were six weeks from a notified body assessment with significant gaps. Dunya came in, prioritised what mattered and we went in with full confidence. Exactly the senior support we needed."',n:'Regulatory Affairs Director',r:'MedTech · Denmark'},
    {i:'VP',q:'"The AI compliance workshop was the most practically useful session we have had all year. No buzzwords — just a clear, compliance-first framework we could apply directly the following week."',n:'VP Quality & Regulatory',r:'Pharma · Sweden'},
    {i:'CE',q:'"As a startup we needed someone who could build our QMS from the ground up and understand our product simultaneously. Dunya did both — and the ISO 13485 implementation has stood up to every audit since."',n:'CEO & Co-Founder',r:'Early-stage MedTech · Germany'},
    {i:'QA',q:'"Risk-based approach to our GxP compliance review ahead of a major authority inspection. Thorough preparation, audit-ready documentation, smooth inspection."',n:'Quality Assurance Manager',r:'Pharmaceutical Distributor · Netherlands'},
  ];
  const testis = lang==='da' ? testi_da : testi_en;
  const ins = lang==='da' ? [
    {tag:'EU AI Act',h:'Hvad EU AI Act betyder for producenter af medicinsk udstyr i 2025',p:'AI indlejret i klinisk beslutningsstøtte udløser specifikke conformity-forpligtelser. Overlappet med MDR kortlagt.',d:'Juni 2025'},
    {tag:'MDR',h:'Teknisk dokumentation under MDR Annex II: en praktisk tjekliste',p:'Kløften mellem hvad teams tror er tilstrækkeligt og hvad notified bodies faktisk kræver.',d:'Maj 2025'},
    {tag:'AI Governance',h:'Process-AI vs Product-AI: den distinktion der ændrer alt',p:'At få denne klassificering forkert betyder at anvende den forkerte regulatoriske ramme.',d:'April 2025'},
  ] : [
    {tag:'EU AI Act',h:'What the EU AI Act means for Medical Device manufacturers in 2025',p:'AI in clinical decision support triggers specific conformity obligations. The overlap with MDR mapped.',d:'June 2025'},
    {tag:'MDR',h:'Technical Documentation under MDR Annex II: a practitioner\'s checklist',p:'The gap between what teams think is sufficient and what notified bodies actually require.',d:'May 2025'},
    {tag:'AI Governance',h:'Process-AI vs Product-AI: the distinction that changes everything',p:'Getting this classification wrong means applying the wrong regulatory framework entirely.',d:'April 2025'},
  ];
  const blks = lang==='da' ? [
    {tag:'Process-AI',txt:'AI som assisterende værktøj i styrede, reviderbare workflows — ikke en autonom beslutningstrager. Menneskelig gennemgang ved hvert kritisk punkt.'},
    {tag:lang==='da'?'Sporbarhed':'Traceability',txt:lang==='da'?'Alle leverancer er sporbare, versionerede og forsvarlige under regulatorisk granskning — fra dag ét.':'Every deliverable is traceable, versioned, and defensible under regulatory scrutiny — from day one.'},
    {tag:'Audit-'+( lang==='da'?'klar':'Ready'),txt:lang==='da'?'Dokumentation struktureret for slutlæseren: notified body-assessoren, myndigheds-inspektøren, den interne auditor.':'Documentation structured for the end reader: the notified body assessor, the authority inspector, the internal auditor.'},
  ] : [
    {tag:'Process-AI',txt:'AI as an assistive tool within governed, auditable workflows — not an autonomous decision-maker. Human review at every critical point.'},
    {tag:'Traceability',txt:'Every deliverable is traceable, versioned, and defensible under regulatory scrutiny — from day one.'},
    {tag:'Audit-Ready',txt:'Documentation structured for the end reader: the notified body assessor, the authority inspector, the internal auditor.'},
  ];
  const stats = [1,2,3,4].map(i=>({num:t('stat'+i+'_num')||['73%','2026','ISO 42001','15+'][i-1],lbl:['da','en'].includes(lang)?[
    lang==='da'?['af MDR tekniske dokumentationsindsendelser kræver revision inden godkendelse','EU AI Act høj-risiko forpligtelser fuldt i kraft — beredskabsgabet er stort','AI management systems-standard — nu en baselineforventning for reguleret AI','års senior regulatory erfaring på tværs af MedTech og Pharma']:
    ['of MDR technical documentation submissions require revision before approval','EU AI Act high-risk obligations fully in force — readiness gap is wide','AI management systems standard — now a baseline expectation for regulated AI','years senior regulatory experience across MedTech and Pharma']
  ][0][i-1]:''}));

  document.getElementById('page-home').innerHTML = `
  <!-- HERO -->
  <section class="hero">
    <div id="${pid}" style="position:absolute;inset:0;z-index:0;opacity:.07;pointer-events:none;"></div>
    <div class="w hero-inner">
      <div>
        <div class="hero-label">${t('hero_ey')}</div>
        <h1>${t('hero_h')} <span>${t('hero_hs')}</span></h1>
        <p class="hero-sub">${t('hero_sub')}</p>
        <div class="hero-actions">
          <button class="btn btn-teal" onclick="showPage('ai')">${t('nav')[1]}</button>
          <button class="btn btn-ghost" onclick="showPage('devices')">${t('nav')[2]}</button>
          <button class="btn btn-ghost" onclick="showPage('pharma')">${t('nav')[3]}</button>
        </div>
      </div>
      <div class="book-card">
        <h3>${t('bk_h')}</h3>
        <p>${t('bk_p')}</p>
        <a href="https://calendly.com/dunyazadran" target="_blank" rel="noopener" class="btn btn-navy">${t('bk1')}</a>
        <button class="btn btn-outline" onclick="showPage('contact')">${t('bk2')}</button>
        <p class="book-note">${t('bk3')} <a href="https://www.linkedin.com/in/dunyazadran" target="_blank" rel="noopener">LinkedIn</a></p>
      </div>
    </div>
    <div class="badge-strip"><div class="w"><div class="badge-row">
      <span class="badge">EU MDR 2017/745</span><span class="badge">IVDR 2017/746</span>
      <span class="badge">ISO 13485</span><span class="badge">ISO 14971</span>
      <span class="badge">EU AI Act</span><span class="badge">ISO 42001</span>
      <span class="badge">GxP / GMP / GDP</span><span class="badge">Generic Pharma · LCM</span>
    </div></div></div>
  </section>

  <!-- QUOTES -->
  <section class="sec sec-grey">
    <div class="w">
      <div class="sec-head"><span class="eyebrow">${t('q_ey')}</span><h2 class="sec-title">${t('q_ti')}</h2></div>
      <div class="quotes-row">${quotes.map(q=>`<div class="quote-card"><blockquote>${q.q}</blockquote><div class="quote-src">${q.s}</div></div>`).join('')}</div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="sec sec-white">
    <div class="w">
      <div class="sec-head center"><span class="eyebrow">${t('sv_ey')}</span><h2 class="sec-title">${t('sv_ti')}</h2><p class="sec-sub">${t('sv_sub')}</p></div>
      <div class="svc-grid">${svcs.map(s=>`
        <div class="svc-card" onclick="showPage('${s.k}')">
          <div class="svc-icon">${Brand.icon(s.icon,30)}</div>
          <h3>${s.n}</h3><p>${s.d}</p><span class="svc-link">${s.l}</span>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="sec sec-navy">
    <div id="spat1" style="position:absolute;inset:0;opacity:.09;pointer-events:none;"></div>
    <div class="w" style="position:relative;z-index:1;">
      <div class="sec-head center"><span class="eyebrow eyebrow-w">${t('st_ey')}</span><h2 class="sec-title sec-title-w">${t('st_ti')}</h2></div>
      <div class="stats-grid">${stats.map(s=>`<div class="stat-item"><div class="stat-num">${s.num}</div><div class="stat-label">${s.lbl}</div></div>`).join('')}</div>
    </div>
  </section>

  <!-- ABOUT STRIP -->
  <section class="sec sec-grey">
    <div class="w">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;">
        <div>
          <span class="eyebrow">${t('ab_ey')}</span>
          <h2 class="sec-title">${t('ab_ti')}</h2>
          <p class="sec-sub" style="max-width:100%;margin-bottom:12px;">${t('ab_s1')}</p>
          <p class="sec-sub" style="max-width:100%;">${t('ab_s2')}</p>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:26px;">
            <button class="btn btn-navy" onclick="showPage('about')">${t('ab_b1')}</button>
            <button class="btn btn-outline" onclick="showPage('contact')">${t('ab_b2')}</button>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:13px;">
          ${blks.map((b,i)=>`<div style="background:${i===0?'rgba(28,140,140,.07)':'#f5f7fa'};border-left:3px solid ${i===0?'#1C8C8C':'rgba(22,58,95,.15)'};border-radius:2px;padding:18px 20px;">
            <span class="eyebrow" style="margin-bottom:6px;">${b.tag}</span>
            <p style="font-size:12px;font-weight:300;color:#8B9BB4;line-height:1.65;">${b.txt}</p>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="sec sec-white">
    <div class="w">
      <div class="sec-head center"><span class="eyebrow">${t('ts_ey')}</span><h2 class="sec-title">${t('ts_ti')}</h2></div>
      <div class="testi-grid">${testis.map(t2=>`
        <div class="testi-card">
          <div class="testi-stars">★★★★★</div>
          <blockquote>${t2.q}</blockquote>
          <div class="testi-author">
            <div class="testi-av">${t2.i}</div>
            <div><div class="testi-name">${t2.n}</div><div class="testi-role">${t2.r}</div></div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- INSIGHTS TEASER -->
  <section class="sec sec-grey">
    <div class="w">
      <div class="sec-head"><span class="eyebrow">${t('in_ey')}</span><h2 class="sec-title">${t('in_ti')}</h2></div>
      <div class="ins-grid">${ins.map(i=>`
        <div class="ins-card" onclick="showPage('insights')">
          <span class="ins-tag">${i.tag}</span>
          <h4>${i.h}</h4><p>${i.p}</p><div class="ins-date">${i.d}</div>
        </div>`).join('')}
      </div>
      <div style="margin-top:30px;"><button class="btn btn-outline" onclick="showPage('insights')">${t('in_more')}</button></div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-ban">
    <div id="cpat1" style="position:absolute;inset:0;opacity:.08;pointer-events:none;"></div>
    <div class="w cta-inner">
      <h2>${t('cta_h')}</h2><p>${t('cta_p')}</p>
      <a href="https://calendly.com/dunyazadran" target="_blank" rel="noopener" class="btn btn-teal">${t('cta_b')}</a>
    </div>
  </section>`;

  // inject patterns after render
  setTimeout(()=>{
    const e=document.getElementById(pid); if(e) e.innerHTML=Brand.pattern(pid+'p','#FFFFFF','#1C8C8C');
    const s=document.getElementById('spat1'); if(s) s.innerHTML=Brand.pattern('sp1','#FFFFFF','#1C8C8C');
    const c=document.getElementById('cpat1'); if(c) c.innerHTML=Brand.pattern('cp1','#FFFFFF','#1C8C8C');
  },0);
}

function delBlock(ey,h2,paras,items){
  return `<div class="svc-det-grid">
    <div><span class="eyebrow">${ey}</span><h2>${h2}</h2>${paras.map(p=>`<p>${p}</p>`).join('')}</div>
    <div class="del-box"><h4>${t('del_lbl')}</h4><ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul></div>
  </div>`;
}

function pageHero(ey,h1,sub,pid){
  return `<section class="page-hero">
    <div id="${pid}" style="position:absolute;inset:0;z-index:0;opacity:.09;pointer-events:none;"></div>
    <div class="w page-hero-c"><span class="eyebrow">${ey}</span><h1>${h1}</h1><p>${sub}</p></div>
  </section>`;
}

function pageCTA(h,p,pid){
  return `<section class="cta-ban">
    <div id="${pid}" style="position:absolute;inset:0;opacity:.08;pointer-events:none;"></div>
    <div class="w cta-inner" style="position:relative;z-index:1;">
      <h2>${h}</h2><p>${p}</p>
      <a href="https://calendly.com/dunyazadran" target="_blank" rel="noopener" class="btn btn-teal">${t('cta_b')}</a>
    </div>
  </section>`;
}

function injectPat(id,nc,tc){ setTimeout(()=>{ const e=document.getElementById(id); if(e) e.innerHTML=Brand.pattern(id+'p',nc,tc); },0); }

function buildDevices(){
  const L=lang;
  document.getElementById('page-devices').innerHTML =
    pageHero(L==='da'?'Medicinsk udstyr':'Medical Devices', L==='da'?'MDR / IVDR & Kvalitetssystemer':'MDR / IVDR & Quality Systems', L==='da'?'Seniorniveau støtte til teknisk dokumentation, notified body-forberedelse, ISO 13485 QMS og post-market overvågning — struktureret til revision fra dag ét.':'Senior-level support for technical documentation, notified body preparation, ISO 13485 QMS, and post-market surveillance — structured for audit from day one.','ph-dev') +
    `<section class="sec sec-white"><div class="w">` +
    (L==='da' ?
      delBlock('EU MDR 2017/745 & IVDR 2017/746','MDR / IVDR Compliance',['EU MDR og IVDR har fundamentalt hævet barren. Kløften mellem hvad producenter leverer og hvad notified bodies kræver — er der forsinkelserne sker.','Hands-on støtte fra gap-analyse til teknisk dokumentation og notified body-forberedelse. Alle leverancer struktureret for assessoren, ikke det interne team.'],['Gap-analyse mod MDR Annex I, II, III','TD-gennemgang og remediering','CER og SSCP-forberedelse','PMS-plan og PSUR / PMCF-design','EUDAMED-registrering og UDI','Mærknings- og IFU-gennemgang','Notified body query-respons','IVDR performance evaluation (Annex XIII)']) +
      delBlock('Kvalitetsstyring','ISO 13485 & QMS-implementering',['Et QMS der består en audit er ikke det samme som ét der forebygger problemer. Forskellen er strukturel.','Jeg hjælper producenter med at bygge systemer der er både compliant og operationelt effektive.'],['ISO 13485 gap-analyse og implementeringsplan','SOP-udvikling og dokumentstyring','Intern audit-planlægning og -rapportering','CAPA-styring og root cause-analyse','Leverandørkvalificering og audit-tjeklister','Ledelsesgennemgang-facilitering']) +
      delBlock('Risikostyring','ISO 14971 Risikostyring',['Risikostyring er ikke et selvstændigt dokument — det løber gennem hele produktets livscyklus og skal forbindes med design, klinisk evaluering og PMS-data.','Afkoblede risikofiler er et af de hyppigste fund i notified body-vurderinger.'],['Risikostyringsfil-gennemgang og gap-remediering','Risikostyringsplan (ISO 14971:2019)','Fareidentifikation og risikoestimering','Benefit-risk analyse-strukturering','Risikostyringsrapport','Integration med klinisk evaluering og PMS-data'])
    :
      delBlock('EU MDR 2017/745 & IVDR 2017/746','MDR / IVDR Compliance',['EU MDR and IVDR have fundamentally raised the bar. The gap between what manufacturers produce and what notified bodies require is where delays happen.','Hands-on support from gap analysis through technical documentation and notified body preparation. Every deliverable structured for the assessor, not the internal team.'],['Gap analysis against MDR Annex I, II, III','TD review and remediation','CER and SSCP preparation','PMS plan and PSUR / PMCF design','EUDAMED registration and UDI','Labelling and IFU review','Notified body query response','IVDR performance evaluation (Annex XIII)']) +
      delBlock('Quality Management','ISO 13485 & QMS Implementation',['A QMS that passes an audit is not the same as one that prevents problems. The difference is structural.','I help manufacturers build systems that are both compliant and operationally effective.'],['ISO 13485 gap analysis and implementation roadmap','SOP development and document control','Internal audit planning and reporting','CAPA management and root cause analysis','Supplier qualification and audit checklists','Management review facilitation']) +
      delBlock('Risk Management','ISO 14971 Risk Management',['Risk management is not a standalone document — it runs through the entire lifecycle and must connect to design, clinical evaluation, and PMS data.','Disconnected risk files are one of the most common findings in notified body assessments.'],['Risk management file review and remediation','Risk management plan (ISO 14971:2019)','Hazard identification and risk estimation','Benefit-risk analysis','Risk management report','Integration with clinical evaluation and PMS data'])
    ) + `</div></section>` +
    pageCTA(L==='da'?'Forbereder du dig til en notified body-vurdering?':'Preparing for a notified body assessment?', L==='da'?'Lad os gennemgå din dokumentation — inden assessoren finder hullerne.':'Let\'s talk through your documentation — before the assessor finds the gaps.','ph-dev-cta');
  injectPat('ph-dev','#FFFFFF','#1C8C8C');
  injectPat('ph-dev-cta','#FFFFFF','#1C8C8C');
}

function buildPharma(){
  const L=lang;
  document.getElementById('page-pharma').innerHTML =
    pageHero(L==='da'?'Pharma':'Pharma','Pharma Regulatory Affairs & GxP', L==='da'?'Generisk pharma-indsendelser, livscyklushåndtering, GMP/GDP-compliance og regulatory strategi for farmaceutiske producenter og distributører.':'Generic pharma submissions, lifecycle management, GMP/GDP compliance, and regulatory strategy for pharmaceutical manufacturers and distributors.','ph-ph') +
    `<section class="sec sec-white"><div class="w">` +
    (L==='da' ?
      delBlock('GxP Compliance','GMP, GDP & GxP Compliance',['GxP-compliance — GMP, GDP, GCP — er fundamentet. Inspektionsparathed kræver mere end opdaterede SOPer — det kræver et system der er levende: sporbart og operationelt i dag.'],['GMP/GDP gap-vurderinger','Myndighedsinspektion forberedelse','Leverandørkvalificering og audit','Change control og afvigelseshåndtering','QP-støtte og batch release-rammer','Sporbarhed og dokumentationsgennemgang']) +
      delBlock('Regulatory Affairs','Generisk Pharma & Livscyklushåndtering',['Generisk pharma og LCM kræver vedvarende regulatory opmærksomhed — fra initial dossierforberedelse til variationshåndtering og post-godkendelsesforpligtelser.'],['Generisk pharma-dossier-forberedelse og gennemgang','LCM og variationsstrategi','Type IA/IB/II variations-management','Regulatory strategi for nye markeder','Mærknings- og artwork-gennemgang (SmPC, PIL)','Regulatory intelligence og horizon scanning'])
    :
      delBlock('GxP Compliance','GMP, GDP & GxP Compliance',['GxP compliance is the foundation. Inspection readiness requires more than up-to-date SOPs — it requires a system that is alive: traceable and operationally current today.'],['GMP/GDP gap assessments','Authority inspection preparation','Supplier qualification and audit','Change control and deviation management','QP support and batch release frameworks','Traceability and documentation review']) +
      delBlock('Regulatory Affairs','Generic Pharma & Lifecycle Management',['Generic pharma and LCM require sustained regulatory attention — from initial dossier preparation through variation management and post-approval commitments.'],['Generic pharma dossier preparation and review','LCM and variation strategy','Type IA/IB/II variations management','Regulatory strategy for new markets','Labelling and artwork review (SmPC, PIL)','Regulatory intelligence and horizon scanning'])
    ) + `</div></section>` +
    pageCTA(L==='da'?'Har du en inspektionsfrist på vej?':'Do you have an inspection deadline coming up?', L==='da'?'Lad os tale om dit regulatoriske landskab og hvad der skal prioriteres.':'Let\'s talk through your regulatory landscape and what needs to be prioritised.','ph-ph-cta');
  injectPat('ph-ph','#FFFFFF','#1C8C8C');
  injectPat('ph-ph-cta','#FFFFFF','#1C8C8C');
}

function buildAI(){
  const L=lang;

  // ── COMPLIANCE AI WORKSHOP content ──
  const compTopics_da = [
    'Grundlæggende introduktion til AI — fundament for alle deltagere',
    'Generativ AI i regulatorisk kontekst',
    'Indsigt i EU AI Act og risikoklassificering',
    'AI governance i regulerede organisationer',
    'RA AI-workflows og eQMS med AI',
    'Validering og verifikation af AI-output',
    'Opsætning af AI-systemer i compliance-kontekst',
    'Prompt Engineering — teori og struktur',
    'Oprettelse af Master Prompts',
    'Oprettelse af System Prompts',
    'Øvelser og hands-on arbejde med ChatGPT og andre værktøjer',
    'Kort introduktion til HealthTech Pathways (København-workshop)',
  ];
  const compTopics_en = [
    'Basic introduction to AI — fundamentals for all participants',
    'Generative AI in regulatory context',
    'Insight into EU AI Act and risk classification',
    'AI governance in regulated organisations',
    'RA AI workflows and eQMS with AI',
    'Validation and verification of AI output',
    'Setting up AI systems in a compliance context',
    'Prompt Engineering — theory and structure',
    'Creating Master Prompts',
    'Creating System Prompts',
    'Exercises and hands-on work with ChatGPT and other tools',
    'Short introduction to HealthTech Pathways (Copenhagen workshop)',
  ];

  // ── LEADERSHIP AI WORKSHOP content ──
  const leadTopics_da = [
    'Hands-on øvelser med konkrete ledelsesopgaver',
    'Grundlæggende forståelse af AI og generativ AI',
    'Praktisk brug af ChatGPT og Copilot i ledelsesarbejde',
    'AI som din personlige executive assistent — email, møder, planlægning og produktivitet',
    'AI til strategi og bedre beslutninger — planlægning, prioritering og risikovurdering',
    'AI til personaleledelse og kommunikation — medarbejerudvikling og onboarding',
    'AI til salg, marketing og forretningsudvikling',
    'AI governance og ansvarlig implementering',
    'Prompt engineering for ledere',
    'AI som støtte til strategi, analyse og beslutningsprocesser',
  ];
  const leadTopics_en = [
    'Hands-on exercises with concrete leadership tasks',
    'Basic understanding of AI and generative AI',
    'Practical use of ChatGPT and Copilot in leadership work',
    'AI as your executive assistant — email, meetings, planning and productivity',
    'AI for strategy and better decisions — planning, prioritisation and risk assessment',
    'AI for people leadership and communication — employee development and onboarding',
    'AI for sales, marketing and business development',
    'AI governance and responsible implementation',
    'Prompt engineering for leaders',
    'AI as support for strategy, analysis and decision-making',
  ];

  const compTopics = L==='da' ? compTopics_da : compTopics_en;
  const leadTopics = L==='da' ? leadTopics_da : leadTopics_en;

  const mailto_comp = 'mailto:dunya.zadran@clarixcompliance.com?subject=Compliance%20AI%20Workshop&body='+encodeURIComponent('Information to provide:\n\n• Participant name(s)\n• Participant email(s)\n• Billing email\n• CVR number');
  const mailto_lead = 'mailto:dunya.zadran@clarixcompliance.com?subject=Ledelses%20AI%20Workshop&body='+encodeURIComponent('Oplysninger ved tilmelding:\n\n• Navn på deltagere\n• Email på deltagere\n• Fakturerings-email\n• CVR nummer');

  const checkIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="flex-shrink:0;margin-top:2px;"><circle cx="8" cy="8" r="7.5" stroke="#1C8C8C" stroke-width="1"/><path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="#1C8C8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const locCard = (city, date, venue, addr) => `
    <div style="background:rgba(22,58,95,.06);border:1px solid rgba(22,58,95,.15);border-radius:2px;padding:18px 20px;">
      <div style="font-family:'Outfit',sans-serif;font-weight:500;font-size:13px;color:#163A5F;letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px;">${city}</div>
      <div style="font-size:12px;font-weight:400;color:#333;margin-bottom:4px;">📅 ${date}</div>
      <div style="font-size:12px;font-weight:300;color:#8B9BB4;">${venue}</div>
      <div style="font-size:11px;font-weight:300;color:#8B9BB4;margin-top:2px;">${addr}</div>
    </div>`;

  document.getElementById('page-ai').innerHTML = `

  ${pageHero(
    L==='da'?'AI Workshops':'AI Workshops',
    L==='da'?'AI i praksis — workshops der virker':'AI in practice — workshops that work',
    L==='da'
      ? 'To specialiserede workshops leveret af Clarix Compliance — én for RA/QA-fagfolk i regulerede miljøer, én for ledere og selvstændige. Begge er praktiske, compliance-orienterede og direkte anvendelige fra dag ét.'
      : 'Two specialised workshops delivered by Clarix Compliance — one for RA/QA professionals in regulated environments, one for leaders and independents. Both are practical, compliance-oriented, and directly applicable from day one.',
    'ph-ai'
  )}

  <!-- ── WORKSHOP OVERVIEW CARDS ── -->
  <section class="sec sec-grey">
    <div class="w">
      <div class="sec-head center">
        <span class="eyebrow">${L==='da'?'To workshops':'Two workshops'}</span>
        <h2 class="sec-title">${L==='da'?'Vælg den workshop der passer til dig':'Choose the workshop that fits you'}</h2>
        <p class="sec-sub">${L==='da'?'Begge workshops udbydes på dansk og engelsk og er tilpasset din kontekst — reguleret industri eller ledelse.':'Both workshops are offered in Danish and English and are tailored to your context — regulated industry or leadership.'}</p>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">

        <!-- COMPLIANCE WORKSHOP CARD -->
        <div style="background:#fff;border:1px solid rgba(22,58,95,.1);border-radius:2px;padding:36px 32px;display:flex;flex-direction:column;gap:0;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
            <div class="svc-icon">${Brand.icon('aiact',30)}</div>
            <div>
              <span class="eyebrow" style="margin-bottom:2px;">${L==='da'?'Workshop 1':'Workshop 1'}</span>
              <h3 style="font-family:'Outfit',sans-serif;font-weight:400;font-size:18px;color:#163A5F;line-height:1.2;">Compliance AI Workshop</h3>
            </div>
          </div>
          <p style="font-size:13px;font-weight:300;color:#8B9BB4;line-height:1.75;margin-bottom:20px;">${L==='da'?'En heldags workshop for RA- og QA-fagfolk i regulerede miljøer der ønsker at anvende AI struktureret, dokumenteret og compliance-sikkert. Fokus på praktisk anvendelse med hands-on øvelser.':'A full-day workshop for RA and QA professionals in regulated environments who want to use AI in a structured, documented, and compliance-safe manner. Heavy focus on practical application with hands-on exercises.'}</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px;">
            <span class="badge" style="background:rgba(28,140,140,.1);color:#1C8C8C;border-color:rgba(28,140,140,.25);">09:00–15:00</span>
            <span class="badge" style="background:rgba(28,140,140,.1);color:#1C8C8C;border-color:rgba(28,140,140,.25);">${L==='da'?'Heldags':'Full day'}</span>
            <span class="badge" style="background:rgba(28,140,140,.1);color:#1C8C8C;border-color:rgba(28,140,140,.25);">RA / QA</span>
            <span class="badge" style="background:rgba(28,140,140,.1);color:#1C8C8C;border-color:rgba(28,140,140,.25);">MDR · IVDR · AI Act</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:24px;">
            ${locCard(L==='da'?'København':'Copenhagen','10. juni 2026','Health Tech Hub Copenhagen','Danneskiold-Samsøes Allé 41, 1434 København')}
            ${locCard(L==='da'?'Aarhus':'Aarhus','26. august 2026','Kitchen Aarhus','Universitetsbyen 76, 8000 Aarhus')}
            ${locCard(L==='da'?'Odense':'Odense','10. september 2026','Forskerparken','Forskerparken 10, 5230 Odense')}
            <div style="background:rgba(28,140,140,.07);border:1px solid rgba(28,140,140,.2);border-radius:2px;padding:18px 20px;display:flex;flex-direction:column;justify-content:center;">
              <div style="font-size:11px;font-weight:500;color:#1C8C8C;letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px;">${L==='da'?'Pris':'Price'}</div>
              <div style="font-size:15px;font-weight:500;color:#163A5F;">4.475 kr. <span style="font-size:11px;font-weight:300;color:#8B9BB4;">+ moms</span></div>
              <div style="font-size:11px;font-weight:300;color:#1C8C8C;margin-top:3px;">${L==='da'?'Partnerpris fra 2.475 kr.':'Partner price from 2,475 DKK'}</div>
            </div>
          </div>
          <div style="margin-top:auto;display:flex;gap:10px;flex-wrap:wrap;">
            <a href="${mailto_comp}" class="btn btn-navy" style="font-size:.82rem;padding:10px 20px;">${L==='da'?'📅  Tilmeld dig':'📅  Register now'}</a>
            <button class="btn btn-outline" style="font-size:.82rem;padding:10px 20px;" onclick="document.getElementById('comp-detail').style.display=document.getElementById('comp-detail').style.display==='none'?'block':'none'">${L==='da'?'Se program ↓':'View program ↓'}</button>
          </div>
        </div>

        <!-- LEADERSHIP WORKSHOP CARD -->
        <div style="background:#fff;border:1px solid rgba(22,58,95,.1);border-radius:2px;padding:36px 32px;display:flex;flex-direction:column;gap:0;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
            <div class="svc-icon">${Brand.icon('strategy',30)}</div>
            <div>
              <span class="eyebrow" style="margin-bottom:2px;">${L==='da'?'Workshop 2':'Workshop 2'}</span>
              <h3 style="font-family:'Outfit',sans-serif;font-weight:400;font-size:18px;color:#163A5F;line-height:1.2;">${L==='da'?'Ledelses AI Workshop':'Leadership AI Workshop'}</h3>
            </div>
          </div>
          <p style="font-size:13px;font-weight:300;color:#8B9BB4;line-height:1.75;margin-bottom:20px;">${L==='da'?'En specialiseret heldags workshop målrettet ledere, projektledere og selvstændige der ønsker at anvende AI struktureret og strategisk. Deltagerne arbejder på egne opgaver med hands-on øvelser hele dagen.':'A specialised full-day workshop for leaders, project managers, and independents who want to use AI in a structured and strategic manner. Participants work on their own tasks with hands-on exercises throughout the day.'}</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px;">
            <span class="badge" style="background:rgba(28,140,140,.1);color:#1C8C8C;border-color:rgba(28,140,140,.25);">09:00–15:00</span>
            <span class="badge" style="background:rgba(28,140,140,.1);color:#1C8C8C;border-color:rgba(28,140,140,.25);">${L==='da'?'Heldags':'Full day'}</span>
            <span class="badge" style="background:rgba(28,140,140,.1);color:#1C8C8C;border-color:rgba(28,140,140,.25);">${L==='da'?'Ledere & Selvstændige':'Leaders & Independents'}</span>
            <span class="badge" style="background:rgba(28,140,140,.1);color:#1C8C8C;border-color:rgba(28,140,140,.25);">Offentlig · Privat</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:24px;">
            ${locCard('Odense','3. september 2026','Forskerparken','Forskerparken 10, 5230 Odense')}
            <div style="background:rgba(28,140,140,.07);border:1px solid rgba(28,140,140,.2);border-radius:2px;padding:18px 20px;">
              <div style="font-size:11px;font-weight:500;color:#1C8C8C;letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px;">${L==='da'?'Tilmeldingsfrist':'Registration deadline'}</div>
              <div style="font-size:14px;font-weight:500;color:#163A5F;">24. august 2026</div>
              <div style="font-size:11px;font-weight:300;color:#8B9BB4;margin-top:3px;">${L==='da'?'50% ved afbud efter 3. august':'50% cancellation fee after Aug 3'}</div>
            </div>
            <div style="background:rgba(22,58,95,.04);border:1px solid rgba(22,58,95,.12);border-radius:2px;padding:18px 20px;">
              <div style="font-size:11px;font-weight:500;color:#163A5F;letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px;">${L==='da'?'Standardpris':'Standard price'}</div>
              <div style="font-size:15px;font-weight:500;color:#163A5F;">6.500 kr. <span style="font-size:11px;font-weight:300;color:#8B9BB4;">+ moms</span></div>
              <div style="font-size:11px;font-weight:300;color:#1C8C8C;margin-top:3px;">Early Bird: 5.500 kr. ${L==='da'?'(til 1. aug)':'(until 1 Aug)'}</div>
            </div>
            <div style="background:rgba(28,140,140,.07);border:1px solid rgba(28,140,140,.2);border-radius:2px;padding:18px 20px;">
              <div style="font-size:11px;font-weight:500;color:#1C8C8C;letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px;">${L==='da'?'Partnerpris':'Partner price'}</div>
              <div style="font-size:14px;font-weight:500;color:#163A5F;">4.500 kr. <span style="font-size:11px;font-weight:300;color:#8B9BB4;">+ moms</span></div>
              <div style="font-size:11px;font-weight:300;color:#8B9BB4;margin-top:3px;">${L==='da'?'Erhvervshus Fyn & Forskerparken-medlemmer':'Erhvervshus Fyn & Forskerparken members'}</div>
            </div>
          </div>
          <div style="margin-top:auto;display:flex;gap:10px;flex-wrap:wrap;">
            <a href="${mailto_lead}" class="btn btn-navy" style="font-size:.82rem;padding:10px 20px;">${L==='da'?'📅  Tilmeld dig':'📅  Register now'}</a>
            <button class="btn btn-outline" style="font-size:.82rem;padding:10px 20px;" onclick="document.getElementById('lead-detail').style.display=document.getElementById('lead-detail').style.display==='none'?'block':'none'">${L==='da'?'Se program ↓':'View program ↓'}</button>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ── COMPLIANCE WORKSHOP DETAIL ── -->
  <section id="comp-detail" style="display:none;" class="sec sec-white">
    <div class="w">
      <div class="sec-head">
        <span class="eyebrow">${L==='da'?'Program — Compliance AI Workshop':'Program — Compliance AI Workshop'}</span>
        <h2 class="sec-title">Compliance AI Workshop</h2>
        <p class="sec-sub" style="max-width:100%;">${L==='da'?'En gennemgribende dag med praktisk AI-anvendelse i regulatorisk kontekst. Deltagerne medbringer egen computer og arbejder med hands-on øvelser med ChatGPT og andre compliance-egnede værktøjer.':'A comprehensive day of practical AI application in regulatory context. Participants bring their own computer and work with hands-on exercises using ChatGPT and other compliance-ready tools.'}</p>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:32px;">
        ${compTopics.map((tp,i)=>`
          <div style="display:flex;align-items:flex-start;gap:12px;background:#f5f7fa;border-radius:2px;padding:14px 16px;">
            ${checkIcon}
            <span style="font-size:12px;font-weight:300;color:#333;line-height:1.55;">${tp}</span>
          </div>`).join('')}
      </div>
      <div style="background:rgba(28,140,140,.07);border-left:3px solid #1C8C8C;border-radius:2px;padding:20px 24px;margin-bottom:28px;">
        <p style="font-size:12px;font-weight:300;color:#333;line-height:1.7;margin:0;">${L==='da'
          ?'<strong style="color:#163A5F;">Tilpasset jeres behov:</strong> Vi tilpasser præsentation og øvelser til deltagernes behov. Deltagerne har mulighed for at arbejde med eksempler på egne computere, og der er praktiske øvelser gennem hele dagen.'
          :'<strong style="color:#163A5F;">Tailored to your needs:</strong> We adapt the presentation and exercises to match participant needs. Participants have the opportunity to work with examples on their own computers, and there are practical exercises throughout the day.'}</p>
      </div>
      <div style="background:#fff;border:1px solid rgba(22,58,95,.1);border-radius:2px;padding:28px;margin-bottom:28px;">
        <span class="eyebrow" style="margin-bottom:8px;">${L==='da'?'Praktisk information':'Practical information'}</span>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:12px;">
          <div><div style="font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#1C8C8C;margin-bottom:4px;">${L==='da'?'Standardpris':'Standard price'}</div><div style="font-size:14px;font-weight:500;color:#163A5F;">4.475 kr. + moms</div></div>
          <div><div style="font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#1C8C8C;margin-bottom:4px;">${L==='da'?'Partnerpris':'Partner price'}</div><div style="font-size:14px;font-weight:500;color:#163A5F;">2.475 kr. + moms</div></div>
          <div><div style="font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#1C8C8C;margin-bottom:4px;">${L==='da'?'Inkluderer':'Includes'}</div><div style="font-size:12px;font-weight:300;color:#8B9BB4;">${L==='da'?'Workshop, forplejning, digitalt hæfte':'Workshop, refreshments, digital booklet'}</div></div>
        </div>
      </div>
      <a href="${mailto_comp}" class="btn btn-teal">${L==='da'?'📅  Tilmeld Compliance AI Workshop':'📅  Register for Compliance AI Workshop'}</a>
    </div>
  </section>

  <!-- ── LEADERSHIP WORKSHOP DETAIL ── -->
  <section id="lead-detail" style="display:none;" class="sec sec-grey">
    <div class="w">
      <div class="sec-head">
        <span class="eyebrow">${L==='da'?'Program — Ledelses AI Workshop':'Program — Leadership AI Workshop'}</span>
        <h2 class="sec-title">${L==='da'?'AI i praksis for ledere og selvstændige':'AI in practice for leaders and independents'}</h2>
        <p class="sec-sub" style="max-width:100%;">${L==='da'?'En heldags workshop med fokus på praktisk og strategisk AI-anvendelse i ledelsesarbejdet. Deltagerne arbejder på egne opgaver med konkrete øvelser og kan afprøve det lærte i realtid.':'A full-day workshop focused on practical and strategic AI application in leadership work. Participants work on their own tasks with concrete exercises and can test what they have just learned in real time.'}</p>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:32px;">
        ${leadTopics.map((tp,i)=>`
          <div style="display:flex;align-items:flex-start;gap:12px;background:#fff;border:1px solid rgba(22,58,95,.08);border-radius:2px;padding:14px 16px;">
            <div style="background:#163A5F;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;flex-shrink:0;margin-top:1px;">${i+1}</div>
            <span style="font-size:12px;font-weight:300;color:#333;line-height:1.55;">${tp}</span>
          </div>`).join('')}
      </div>
      <div style="background:rgba(28,140,140,.07);border-left:3px solid #1C8C8C;border-radius:2px;padding:20px 24px;margin-bottom:28px;">
        <p style="font-size:12px;font-weight:300;color:#333;line-height:1.7;margin:0;">${L==='da'
          ?'<strong style="color:#163A5F;">Praktisk fokus:</strong> Deltagerne har mulighed for at arbejde på egne computere med praktiske øvelser og eksempler gennem hele dagen, så de kan afprøve det de netop har lært i realtid.'
          :'<strong style="color:#163A5F;">Practical focus:</strong> Participants have the opportunity to work on their own computers with practical exercises and examples throughout the day, so they can test what they have just learned in real time.'}</p>
      </div>
      <div style="background:#fff;border:1px solid rgba(22,58,95,.1);border-radius:2px;padding:28px;margin-bottom:28px;">
        <span class="eyebrow" style="margin-bottom:12px;">${L==='da'?'Priser':'Pricing'}</span>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:4px;">
          <div><div style="font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#8B9BB4;margin-bottom:4px;">${L==='da'?'Standardpris':'Standard'}</div><div style="font-size:15px;font-weight:500;color:#163A5F;">6.500 kr.</div><div style="font-size:11px;color:#8B9BB4;font-weight:300;">+ moms</div></div>
          <div style="border-left:1px solid rgba(28,140,140,.2);padding-left:16px;"><div style="font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#1C8C8C;margin-bottom:4px;">Early Bird</div><div style="font-size:15px;font-weight:500;color:#163A5F;">5.500 kr.</div><div style="font-size:11px;color:#8B9BB4;font-weight:300;">${L==='da'?'+ moms · til 1. august':'+ VAT · until 1 August'}</div></div>
          <div style="border-left:1px solid rgba(28,140,140,.2);padding-left:16px;"><div style="font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#1C8C8C;margin-bottom:4px;">${L==='da'?'Partnerpris':'Partner price'}</div><div style="font-size:15px;font-weight:500;color:#163A5F;">4.500 kr.</div><div style="font-size:11px;color:#8B9BB4;font-weight:300;">${L==='da'?'+ moms · Erhvervshus Fyn / Forskerparken':'+ VAT · Erhvervshus Fyn / Forskerparken'}</div></div>
        </div>
        <p style="font-size:11px;font-weight:300;color:#8B9BB4;margin-top:16px;font-style:italic;">${L==='da'?'Inkluderer workshop kl. 09:00–15:00, frokost, fuld forplejning og alle materialer. Ved afbud efter 3. august hæftes 50%.':'Includes workshop 09:00–15:00, lunch, full catering and all materials. 50% cancellation fee after 3 August.'}</p>
      </div>
      <a href="${mailto_lead}" class="btn btn-teal">${L==='da'?'📅  Tilmeld Ledelses AI Workshop':'📅  Register for Leadership AI Workshop'}</a>
    </div>
  </section>

  <!-- ── INSTRUCTOR & GOVERNANCE ── -->
  <section class="sec sec-white">
    <div class="w">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
        <div style="background:#f5f7fa;border:1px solid rgba(22,58,95,.08);border-radius:2px;padding:32px;">
          <span class="eyebrow" style="margin-bottom:10px;">${L==='da'?'Instruktør':'Instructor'}</span>
          <h3 style="font-family:'Outfit',sans-serif;font-weight:400;font-size:18px;color:#163A5F;margin-bottom:12px;">Dunya Zadran</h3>
          <p style="font-size:13px;font-weight:300;color:#8B9BB4;line-height:1.75;">${L==='da'
            ?'Dunya Zadran fra Clarix Compliance gennemfører begge workshops med erfaring fra strategisk AI-implementering i både offentlige og private organisationer, kombineret med seniorniveau regulatory ekspertise inden for MDR/IVDR, ISO 13485 og EU AI Act.'
            :'Dunya Zadran from Clarix Compliance delivers both workshops with experience from strategic AI implementation in both public and private organisations, combined with senior-level regulatory expertise in MDR/IVDR, ISO 13485, and EU AI Act.'}</p>
        </div>
        <div style="background:rgba(28,140,140,.07);border:1px solid rgba(28,140,140,.18);border-radius:2px;padding:32px;">
          <span class="eyebrow" style="margin-bottom:10px;">Process-AI</span>
          <h3 style="font-family:'Outfit',sans-serif;font-weight:400;font-size:18px;color:#163A5F;margin-bottom:12px;">${L==='da'?'AI som assisterende værktøj':'AI as an assistive tool'}</h3>
          <p style="font-size:13px;font-weight:300;color:#8B9BB4;line-height:1.75;">${L==='da'
            ?'Begge workshops positionerer AI som et assisterende værktøj der kræver menneskelig gennemgang og verifikation — ikke et autonomt system. Governance, traceability og audit-parathed er gennemgående temaer.'
            :'Both workshops position AI as an assistive tool requiring human review and verification — not an autonomous system. Governance, traceability, and audit-readiness are recurring themes throughout.'}</p>
        </div>
      </div>
    </div>
  </section>

  ${pageCTA(
    L==='da'?'Klar til at implementere AI ansvarligt?':'Ready to implement AI responsibly?',
    L==='da'?'Book en plads på en af vores workshops — eller kontakt os for et skræddersyet forløb til din organisation.':'Book a seat at one of our workshops — or contact us for a tailored programme for your organisation.',
    'ph-ai-cta'
  )}`;

  injectPat('ph-ai','#FFFFFF','#1C8C8C');
  injectPat('ph-ai-cta','#FFFFFF','#1C8C8C');
}

function buildAbout(){
  const L=lang;
  const tags=['EU MDR 2017/745','EU IVDR 2017/746','ISO 13485','ISO 14971','ISO 42001','ISO 27001','EU AI Act','GxP','Generic Pharma','LCM','CAPA','Internal Audits','EUDAMED','PMS / PSUR'];
  document.getElementById('page-about').innerHTML =
    pageHero(L==='da'?'Om':'About','Dunya Zadran',L==='da'?'Uafhængig Regulatory Consultant — MDR/IVDR, ISO 13485, AI Governance, GxP':'Independent Regulatory Consultant — MDR/IVDR, ISO 13485, AI Governance, GxP','ph-ab') +
    `<section class="sec sec-grey"><div class="w"><div class="about-grid">
      <div>
        <div class="about-photo">${Brand.pattern('abpat','#FFFFFF','#1C8C8C')}<span style="position:relative;z-index:1;">DZ</span></div>
        <div class="about-mi">📍 <span><strong>Odense, Danmark</strong></span></div>
        <div class="about-mi">🏢 <span><strong>Clarix Compliance Consulting</strong></span></div>
        <div class="about-mi">🎯 <span><strong>MedTech & Pharma</strong></span></div>
        <div style="margin-top:20px;display:flex;flex-direction:column;gap:10px;">
          <button class="btn btn-navy" onclick="showPage('contact')">${L==='da'?'Kontakt mig':'Get in touch'}</button>
          <a href="https://www.linkedin.com/in/dunyazadran" target="_blank" rel="noopener" class="btn btn-outline">LinkedIn</a>
        </div>
      </div>
      <div class="about-body">
        <h2>${L==='da'?'Senior regulatory ekspertise, leveret uafhængigt.':'Senior regulatory expertise, delivered independently.'}</h2>
        ${L==='da' ? `
        <p>Jeg er Dunya Zadran, uafhængig regulatory consultant baseret i Odense, Danmark. Jeg arbejder med MedTech-producenter, farmaceutiske virksomheder, startups og distributører i hele Europa.</p>
        <p>Min baggrund spænder over regulatory affairs og kvalitetsstyring inden for både medicinsk udstyr og farmaci. Det tværsektorielle perspektiv er ikke almindeligt, og det betyder noget.</p>
        <p>Jeg har i mere end 15 år arbejdet på tværs af hele produktets livscyklus — fra tidlig regulatory strategi og teknisk dokumentation til post-market overvågning og myndighedsinspektioner.</p>
        ` : `
        <p>I am Dunya Zadran, an independent regulatory consultant based in Odense, Denmark. I work with MedTech manufacturers, pharmaceutical companies, startups, and distributors across Europe.</p>
        <p>My background spans regulatory affairs and quality management across both medical devices and pharmaceuticals. That cross-sector perspective is not common, and it matters.</p>
        <p>Over more than 15 years I have worked across the full product lifecycle — from early regulatory strategy and technical documentation through post-market surveillance and authority inspections.</p>
        `}
        <div class="tag-cloud">${tags.map(tg=>`<span class="tag">${tg}</span>`).join('')}</div>
        <h3>${L==='da'?'Sådan arbejder jeg':'How I work'}</h3>
        <p>${L==='da'?'Jeg integrerer mig i dit team frem for at arbejde på afstand. Det betyder at jeg forstår din specifikke produktportefølje, din QMS-modenhed og dine tidslinjer — inden jeg producerer noget.':'I embed in your team rather than working at arm\'s length. That means I understand your product portfolio, QMS maturity, and timeline pressures — before I produce anything.'}</p>
        <p>${L==='da'?'Alle leverancer er struktureret med slutlæseren i tanke: notified body-assessoren, myndigheds-inspektøren, den interne auditor.':'Every deliverable is structured with the end reader in mind: the notified body assessor, the authority inspector, the internal auditor.'}</p>
        <h3>${L==='da'?'Hvem jeg arbejder med':'Who I work with'}</h3>
        <p>${L==='da'?'Mine klienter spænder fra tidlige startups der bygger deres første QMS til etablerede producenter der håndterer MDR-overgange eller forbereder sig til notified body-vurderinger.':'My clients range from early-stage startups building their first QMS to established manufacturers managing MDR transitions or preparing for notified body assessments.'}</p>
        <div class="hl-block">
          <p style="font-size:12px;font-weight:500;color:#163A5F;margin-bottom:6px;">${L==='da'?'Stiftende formand — Women in AI Denmark':'Founding Chair — Women in AI Denmark'}</p>
          <p style="font-size:12px;font-weight:300;color:#8B9BB4;margin:0;">${L==='da'?'Et community der udstyrer kvinder i Danmark med praktiske AI-kompetencer — med særligt fokus på fagfolk i regulerede industrier.':'A community dedicated to equipping women in Denmark with practical AI skills, with a particular focus on professionals in regulated industries.'}</p>
        </div>
      </div>
    </div></div></section>` +
    pageCTA(L==='da'?'Lad os tale om dine regulatoriske udfordringer.':'Let\'s talk about your regulatory challenges.', L==='da'?'Intet salgspres — bare en direkte samtale om, hvor du er, og hvad du har brug for.':'No sales pressure — just a direct conversation about where you are and what you need.','ph-ab-cta');
  injectPat('ph-ab','#FFFFFF','#1C8C8C');
  injectPat('ph-ab-cta','#FFFFFF','#1C8C8C');
}

function buildInsights(){
  const L=lang;
  const arts = L==='da' ? [
    {tag:'EU AI Act',h:'Hvad EU AI Act betyder for producenter af medicinsk udstyr i 2025',p:'AI indlejret i klinisk beslutningsstøtte udløser specifikke conformity-forpligtelser under både EU AI Act og MDR. Kortlægning af overlappet — og hullerne.',d:'Juni 2025'},
    {tag:'MDR',h:'Teknisk dokumentation under MDR Annex II: en praktisk tjekliste',p:'Kløften mellem hvad teams tror er tilstrækkeligt og hvad notified bodies faktisk kræver — er der forsinkelserne og non-conformities opstår.',d:'Maj 2025'},
    {tag:'AI Governance',h:'Process-AI vs Product-AI: den distinktion der ændrer alt i regulerede workflows',p:'At få denne klassificering forkert betyder at anvende den forkerte regulatoriske ramme — med konsekvenser for QMS, change control og audit-parathed.',d:'April 2025'},
    {tag:'ISO 13485',h:'ISO 13485 og det QMS der rent faktisk virker: fem strukturelle fejl',p:'Et QMS der består en audit er ikke det samme som ét der forebygger problemer. Her er de strukturelle problemer der oftest dukker op.',d:'Marts 2025'},
    {tag:'IVDR',h:'IVDR i 2025: hvad der stadig overrasker producenter',p:'Post-overgang opdager mange IVD-producenter huller i performance evaluation-dokumentation og PMS-systemer.',d:'Februar 2025'},
    {tag:'GxP',h:'AI i GxP-miljøer: hvor governance-rammen skal starte',p:'Farmaceutiske producenter der integrerer AI i kvalitetsprocesser møder specifikke GMP-forventninger. Compliance-baseline skitseret.',d:'Januar 2025'},
  ] : [
    {tag:'EU AI Act',h:'What the EU AI Act means for Medical Device manufacturers in 2025',p:'AI in clinical decision support triggers specific conformity obligations under both the EU AI Act and MDR. The overlap mapped — and where the gaps are.',d:'June 2025'},
    {tag:'MDR',h:'Technical Documentation under MDR Annex II: a practitioner\'s checklist',p:'The gap between what teams think is sufficient and what notified bodies actually require is where delays and non-conformities happen.',d:'May 2025'},
    {tag:'AI Governance',h:'Process-AI vs Product-AI: the distinction that changes everything',p:'Getting this classification wrong means applying the wrong regulatory framework — with consequences for QMS, change control, and audit readiness.',d:'April 2025'},
    {tag:'ISO 13485',h:'ISO 13485 and the QMS that actually works: five structural mistakes',p:'A QMS that passes an audit is not the same as one that prevents problems. These are the structural issues that come up most frequently.',d:'March 2025'},
    {tag:'IVDR',h:'IVDR in 2025: what is still catching manufacturers off guard',p:'Post-transition, many IVD manufacturers are discovering gaps in performance evaluation documentation and PMS systems.',d:'February 2025'},
    {tag:'GxP',h:'AI in GxP environments: where the governance framework must start',p:'Pharmaceutical manufacturers integrating AI into quality processes face specific GMP expectations. The compliance baseline outlined.',d:'January 2025'},
  ];
  document.getElementById('page-insights').innerHTML =
    pageHero(L==='da'?'Regulatory intelligence':'Regulatory intelligence', L==='da'?'Indsigt':'Insights', L==='da'?'Praktisk analyse for RA/QA-ledere i MedTech og Pharma — fokuseret på hvad der tæller under revision.':'Practical analysis for RA/QA leaders in MedTech and Pharma — focused on what matters under audit.','ph-ins') +
    `<section class="sec sec-grey"><div class="w"><div class="ins-full-grid">
      ${arts.map(a=>`<div class="ins-full-card">
        <div class="ins-meta"><span class="ins-tag">${a.tag}</span><span class="ins-date">${a.d}</span></div>
        <h3>${a.h}</h3><p>${a.p}</p>
      </div>`).join('')}
    </div></div></section>` +
    `<section class="cta-ban"><div id="ph-ins-cta" style="position:absolute;inset:0;opacity:.08;pointer-events:none;"></div>
    <div class="w cta-inner" style="position:relative;z-index:1;">
      <h2>${L==='da'?'Hold dig opdateret om regulatoriske ændringer.':'Stay ahead of regulatory change.'}</h2>
      <p>${L==='da'?'Følg med på LinkedIn for løbende regulatory intelligence.':'Follow on LinkedIn for regular regulatory intelligence.'}</p>
      <a href="https://www.linkedin.com/in/dunyazadran" target="_blank" rel="noopener" class="btn btn-teal">${L==='da'?'Følg på LinkedIn':'Follow on LinkedIn'}</a>
    </div></section>`;
  injectPat('ph-ins','#FFFFFF','#1C8C8C');
  injectPat('ph-ins-cta','#FFFFFF','#1C8C8C');
}

function buildContact(){
  const L=lang;
  const topics = L==='da'
    ? ['MDR / IVDR compliance','Kvalitetsstyring (ISO 13485)','AI Governance / EU AI Act','Pharma Regulatory Affairs / GxP','Risikostyring (ISO 14971)','Workshop / Træning','Andet / ikke sikker endnu']
    : ['MDR / IVDR compliance','Quality Management (ISO 13485)','AI Governance / EU AI Act','Pharma Regulatory Affairs / GxP','Risk Management (ISO 14971)','Workshop / Training','Other / not sure yet'];
  document.getElementById('page-contact').innerHTML =
    pageHero(L==='da'?'Kontakt':'Contact', L==='da'?'Lad os tale':'Let\'s talk', L==='da'?'Har du et specifikt projekt, eller vil du bare forstå din regulatoriske position? Start her.':'Whether you have a specific project or just want to understand your regulatory position — start here.','ph-co') +
    `<section class="sec sec-grey"><div class="w"><div class="contact-grid">
      <div class="contact-info">
        <h3>${L==='da'?'Hvad kan du forvente':'What to expect'}</h3>
        <p>${L==='da'?'Jeg svarer på alle henvendelser inden for én hverdag. Vores første samtale er altid uformel — ingen forpligtelse, intet salgspres.':'I respond to all enquiries within one business day. Our first conversation is always informal — no obligation, no sales pressure.'}</p>
        <p>${L==='da'?'Har du et tidsfølsomt regulatory problem, bedes du nævne det i din besked — så prioriterer jeg.':'If you are dealing with a time-sensitive regulatory issue, please mention it in your message and I will prioritise accordingly.'}</p>
        <div class="ci-item">📍 <span>${L==='da'?'Odense, Danmark — tilgængelig remote i hele Europa':'Odense, Denmark — available remotely across Europe'}</span></div>
        <div class="ci-item">🔗 <a href="https://www.linkedin.com/in/dunyazadran" target="_blank" rel="noopener" style="color:#1C8C8C;font-weight:500;">LinkedIn — Dunya Zadran</a></div>
        <div style="margin-top:22px;padding:18px 20px;background:rgba(28,140,140,.07);border-left:3px solid #1C8C8C;border-radius:2px;">
          <p style="font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#163A5F;margin-bottom:7px;">${L==='da'?'Typiske henvendelser':'Typical enquiries'}</p>
          <p style="font-size:12px;font-weight:300;color:#8B9BB4;line-height:1.65;margin:0;">${L==='da'?'MDR/IVDR teknisk dokumentation · QMS-implementering · AI governance workshops · Notified body forberedelse · GxP compliance-gennemgang':'MDR/IVDR technical documentation · QMS implementation · AI governance workshops · Notified body preparation · GxP compliance review'}</p>
        </div>
      </div>
      <div class="cf-wrap">
        <h3>${L==='da'?'Send en besked':'Send a message'}</h3>
        <div class="form-row">
          <div class="form-group"><label>${L==='da'?'Fornavn':'First name'}</label><input type="text" placeholder="${L==='da'?'Anna':'Anna'}"/></div>
          <div class="form-group"><label>${L==='da'?'Efternavn':'Last name'}</label><input type="text" placeholder="${L==='da'?'Nielsen':'Nielsen'}"/></div>
        </div>
        <div class="form-group"><label>${L==='da'?'E-mailadresse':'Email address'}</label><input type="email" placeholder="anna@virksomhed.dk"/></div>
        <div class="form-group"><label>${L==='da'?'Virksomhed':'Company'}</label><input type="text" placeholder="MedTech A/S"/></div>
        <div class="form-group"><label>${L==='da'?'Primært interesseområde':'Primary area of interest'}</label>
          <select><option value="" disabled selected>${t('form_select')}</option>${topics.map(tp=>`<option>${tp}</option>`).join('')}</select>
        </div>
        <div class="form-group"><label>${L==='da'?'Fortæl mig om din situation':'Tell me about your situation'}</label>
          <textarea placeholder="${L==='da'?'Beskriv din regulatoriske udfordring, tidslinje eller hvad du forsøger at opnå...':'Describe your regulatory challenge, timeline, or what you are trying to achieve...'}"></textarea>
        </div>
        <button class="btn btn-navy" onclick="submitForm(this)" style="width:100%;justify-content:center;padding:13px;font-size:.9rem;">${t('contact_send')}</button>
        <p class="form-ok" id="form-ok-msg">${t('form_ok')}</p>
      </div>
    </div></div></section>`;
  injectPat('ph-co','#FFFFFF','#1C8C8C');
}

function submitForm(btn){
  btn.disabled = true;
  btn.textContent = '✓';
  const el = document.getElementById('form-ok-msg');
  if(el) el.style.display='block';
}

// ── RENDER ALL ────────────────────────────────
function renderAll(){
  document.documentElement.lang = lang;
  renderNav();
  renderFooter();
  buildHome();
  buildAI();
  buildDevices();
  buildPharma();
  buildAbout();
  buildInsights();
  buildContact();
  showPage(currentPage);
}

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', renderAll);
