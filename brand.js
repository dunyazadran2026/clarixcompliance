/* ── CLARIX BRAND ASSETS ── */

// Brand colours
const C = { navy:'#163A5F', midnight:'#0E2A47', teal:'#1C8C8C', white:'#FFFFFF', grey:'#F5F7FA' };

// Logo mark SVG (two nested C-arcs per brand guidelines)
function logoMark(sz=40, navyColor=C.navy, tealColor=C.teal) {
  const sw1 = sz * 0.095, sw2 = sz * 0.075;
  const scale = sz / 40;
  return `<svg width="${sz}" height="${sz}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M30 7A16.5 16.5 0 1 0 30 33"
      stroke="${navyColor}" stroke-width="${sw1}" stroke-linecap="round" fill="none"/>
    <path d="M23 13.5A9 9 0 1 0 23 26.5"
      stroke="${tealColor}" stroke-width="${sw2}" stroke-linecap="round" fill="none"/>
  </svg>`;
}

// Wordmark horizontal lockup
function logoHorizontal(navyColor=C.navy, tealColor=C.teal) {
  return `
    <a href="index.html" class="logo" aria-label="Clarix Compliance — Home">
      ${logoMark(36, navyColor, tealColor)}
      <div class="logo-divider" style="background:${navyColor === C.white ? 'rgba(255,255,255,.25)' : 'rgba(22,58,95,.22)'}"></div>
      <div class="logo-wordmark">
        <span class="logo-clarix" style="color:${navyColor}">${window.currentLang === 'da' ? 'CLARIX' : 'CLARIX'}</span>
        <span class="logo-compliance" style="color:${tealColor}">COMPLIANCE</span>
      </div>
    </a>`;
}

// Brand pattern SVG (tile 60×60, per spec)
function brandPattern(pid, navyColor, tealColor) {
  return `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;pointer-events:none;">
    <defs>
      <pattern id="${pid}" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M48 10A18 18 0 1 0 48 36" stroke="${navyColor}" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.13"/>
        <path d="M41 15A10 10 0 1 0 41 31" stroke="${tealColor}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.18"/>
        <path d="M18 34A18 18 0 1 0 18 60" stroke="${navyColor}" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.085"/>
        <path d="M11 39A10 10 0 1 0 11 55" stroke="${tealColor}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.10"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#${pid})"/>
  </svg>`;
}

// Service icons per brand spec
function svcIcon(type, sz=32) {
  const c = sz/2, r = sz*0.38, sw1 = sz*0.055, sw2 = sz*0.045;
  const n = C.navy, t = C.teal;
  switch(type) {
    case 'regulatory':
      return `<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M${c+r*.62} ${c-r*.78}A${r} ${r} 0 1 0 ${c+r*.62} ${c+r*.78}" stroke="${n}" stroke-width="${sw1}" stroke-linecap="round"/>
        <line x1="${c-r*.18}" y1="${c-r*.35}" x2="${c+r*.52}" y2="${c-r*.35}" stroke="${t}" stroke-width="${sw2}" stroke-linecap="round"/>
        <line x1="${c-r*.18}" y1="${c}" x2="${c+r*.52}" y2="${c}" stroke="${t}" stroke-width="${sw2}" stroke-linecap="round"/>
        <line x1="${c-r*.18}" y1="${c+r*.35}" x2="${c+r*.32}" y2="${c+r*.35}" stroke="${t}" stroke-width="${sw2}" stroke-linecap="round"/>
      </svg>`;
    case 'quality':
      return `<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M${c+r*.7} ${c-r*.7}A${r} ${r} 0 1 0 ${c+r*.7} ${c+r*.7}" stroke="${n}" stroke-width="${sw1}" stroke-linecap="round"/>
        <path d="M${c+r*.42} ${c-r*.42}A${r*.6} ${r*.6} 0 1 0 ${c+r*.42} ${c+r*.42}" stroke="${t}" stroke-width="${sw2}" stroke-linecap="round"/>
        <circle cx="${c}" cy="${c}" r="${sz*.075}" fill="${n}"/>
      </svg>`;
    case 'ai':
      return `<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${c}" cy="${c}" r="${sz*.075}" fill="${n}"/>
        <circle cx="${c-r*.72}" cy="${c-r*.48}" r="${sz*.055}" fill="${t}"/>
        <circle cx="${c+r*.72}" cy="${c-r*.48}" r="${sz*.055}" fill="${t}"/>
        <circle cx="${c}" cy="${c+r*.78}" r="${sz*.055}" fill="${t}"/>
        <line x1="${c}" y1="${c}" x2="${c-r*.72}" y2="${c-r*.48}" stroke="${n}" stroke-width="${sw2*.65}" stroke-linecap="round" opacity=".45"/>
        <line x1="${c}" y1="${c}" x2="${c+r*.72}" y2="${c-r*.48}" stroke="${n}" stroke-width="${sw2*.65}" stroke-linecap="round" opacity=".45"/>
        <line x1="${c}" y1="${c}" x2="${c}" y2="${c+r*.78}" stroke="${n}" stroke-width="${sw2*.65}" stroke-linecap="round" opacity=".45"/>
        <path d="M${c+r*.72} ${c-r*.48}A${r*.8} ${r*.8} 0 0 1 ${c-r*.72} ${c-r*.48}" stroke="${t}" stroke-width="${sw2}" stroke-dasharray="2 2.5" stroke-linecap="round"/>
      </svg>`;
    case 'mdr':
      return `<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M${c+r*.62} ${c-r*.78}A${r} ${r} 0 1 0 ${c+r*.62} ${c+r*.78}" stroke="${n}" stroke-width="${sw1}" stroke-linecap="round"/>
        <path d="M${c-r*.22} ${c}L${c+r*.14} ${c+r*.36}L${c+r*.56} ${c-r*.32}" stroke="${t}" stroke-width="${sw1}" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    case 'aiact':
      return `<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="${c-r*.78}" y="${c-r*.78}" width="${r*1.56}" height="${r*1.56}" rx="${sz*.04}" stroke="${n}" stroke-width="${sw1}"/>
        <line x1="${c-r*.78}" y1="${c-r*.26}" x2="${c+r*.78}" y2="${c-r*.26}" stroke="${n}" stroke-width="${sw2*.55}" opacity=".35"/>
        <line x1="${c-r*.78}" y1="${c+r*.26}" x2="${c+r*.78}" y2="${c+r*.26}" stroke="${n}" stroke-width="${sw2*.55}" opacity=".35"/>
        <line x1="${c-r*.26}" y1="${c-r*.78}" x2="${c-r*.26}" y2="${c+r*.78}" stroke="${n}" stroke-width="${sw2*.55}" opacity=".35"/>
        <line x1="${c+r*.26}" y1="${c-r*.78}" x2="${c+r*.26}" y2="${c+r*.78}" stroke="${n}" stroke-width="${sw2*.55}" opacity=".35"/>
        <circle cx="${c-r*.52}" cy="${c-r*.52}" r="${sz*.055}" fill="${t}"/>
        <circle cx="${c+r*.52}" cy="${c+r*.52}" r="${sz*.055}" fill="${t}"/>
      </svg>`;
    case 'strategy':
      return `<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${c}" cy="${c}" r="${r}" stroke="${n}" stroke-width="${sw1}" opacity=".18"/>
        <path d="M${c} ${c-r}A${r} ${r} 0 0 1 ${c+r*.866} ${c+r*.5}" stroke="${n}" stroke-width="${sw1}" stroke-linecap="round"/>
        <circle cx="${c}" cy="${c}" r="${sz*.072}" fill="${t}"/>
        <line x1="${c}" y1="${c}" x2="${c-r*.5}" y2="${c-r*.68}" stroke="${t}" stroke-width="${sw2}" stroke-linecap="round"/>
      </svg>`;
    default: return '';
  }
}

window.Brand = { logoMark, logoHorizontal, brandPattern, svcIcon };
