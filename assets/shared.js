// ============================================================
//  shared.js — Datos y utilidades comunes para gritamundial.com
//  Incluir en TODAS las páginas:
//  <script src="/assets/shared.js"></script>
// ============================================================

// ==================== GRUPOS ====================
const GROUPS = {
    A: ['México 🇲🇽', 'Sudáfrica 🇿🇦', 'Corea del Sur 🇰🇷', 'Rep. Checa 🇨🇿'],
    B: ['Canadá 🇨🇦', 'Bosnia y Herz. 🇧🇦', 'Qatar 🇶🇦', 'Suiza 🇨🇭'],
    C: ['Brasil 🇧🇷', 'Marruecos 🇲🇦', 'Haití 🇭🇹', 'Escocia 🏴󠁧󠁢󠁳󠁣󠁴󠁿'],
    D: ['Estados Unidos 🇺🇸', 'Paraguay 🇵🇾', 'Australia 🇦🇺', 'Turquía 🇹🇷'],
    E: ['Alemania 🇩🇪', 'Curazao 🇨🇼', 'Costa de Marfil 🇨🇮', 'Ecuador 🇪🇨'],
    F: ['Países Bajos 🇳🇱', 'Japón 🇯🇵', 'Suecia 🇸🇪', 'Túnez 🇹🇳'],
    G: ['Bélgica 🇧🇪', 'Egipto 🇪🇬', 'Irán 🇮🇷', 'Nueva Zelanda 🇳🇿'],
    H: ['España 🇪🇸', 'Cabo Verde 🇨🇻', 'Arabia Saudita 🇸🇦', 'Uruguay 🇺🇾'],
    I: ['Francia 🇫🇷', 'Senegal 🇸🇳', 'Irak 🇮🇶', 'Noruega 🇳🇴'],
    J: ['Argentina 🇦🇷', 'Argelia 🇩🇿', 'Austria 🇦🇹', 'Jordania 🇯🇴'],
    K: ['Portugal 🇵🇹', 'R.D. Congo 🇨🇩', 'Uzbekistán 🇺🇿', 'Colombia 🇨🇴'],
    L: ['Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Croacia 🇭🇷', 'Ghana 🇬🇭', 'Panamá 🇵🇦']
  };
  
  // ==================== PARTIDOS ====================
  // Formato: [fecha_label, fecha_sort, hora_arg, min_arg, equipo1, equipo2, grupo, sede]
  const MATCHES = [
    // === JORNADA 1 ===
    ['Jueves 11 Jun',    '20260611', 16,0,  'México 🇲🇽',          'Sudáfrica 🇿🇦',        'Grupo A', 'Estadio Ciudad de México'],
    ['Jueves 11 Jun',    '20260611', 23,0,  'Corea del Sur 🇰🇷',   'Rep. Checa 🇨🇿',        'Grupo A', 'Estadio Guadalajara'],
    ['Viernes 12 Jun',   '20260612', 16,0,  'Canadá 🇨🇦',          'Bosnia y Herz. 🇧🇦',   'Grupo B', 'BMO Field Toronto'],
    ['Viernes 12 Jun',   '20260612', 22,0,  'Estados Unidos 🇺🇸',  'Paraguay 🇵🇾',           'Grupo D', 'SoFi Stadium Los Ángeles'],
    ['Sábado 13 Jun',    '20260613', 16,0,  'Qatar 🇶🇦',           'Suiza 🇨🇭',              'Grupo B', "Levi's Stadium San Francisco"],
    ['Sábado 13 Jun',    '20260613', 19,0,  'Brasil 🇧🇷',          'Marruecos 🇲🇦',          'Grupo C', 'MetLife Stadium N.Y./N.J.'],
    ['Sábado 13 Jun',    '20260613', 22,0,  'Haití 🇭🇹',           'Escocia 🏴󠁧󠁢󠁳󠁣󠁴󠁿',         'Grupo C', 'Gillette Stadium Boston'],
    ['Sábado 13 Jun',    '20260613', 25,0,  'Australia 🇦🇺',       'Turquía 🇹🇷',            'Grupo D', 'BC Place Vancouver'],
    ['Domingo 14 Jun',   '20260614', 14,0,  'Alemania 🇩🇪',        'Curazao 🇨🇼',            'Grupo E', 'NRG Stadium Houston'],
    ['Domingo 14 Jun',   '20260614', 17,0,  'Países Bajos 🇳🇱',   'Japón 🇯🇵',              'Grupo F', 'AT&T Stadium Dallas'],
    ['Domingo 14 Jun',   '20260614', 20,0,  'Costa de Marfil 🇨🇮','Ecuador 🇪🇨',             'Grupo E', 'Lincoln Financial Field Philadelphia'],
    ['Domingo 14 Jun',   '20260614', 23,0,  'Suecia 🇸🇪',          'Túnez 🇹🇳',              'Grupo F', 'Estadio Monterrey'],
    ['Lunes 15 Jun',     '20260615', 13,0,  'España 🇪🇸',          'Cabo Verde 🇨🇻',         'Grupo H', 'Mercedes-Benz Stadium Atlanta'],
    ['Lunes 15 Jun',     '20260615', 16,0,  'Bélgica 🇧🇪',         'Egipto 🇪🇬',             'Grupo G', 'Lumen Field Seattle'],
    ['Lunes 15 Jun',     '20260615', 19,0,  'Arabia Saudita 🇸🇦', 'Uruguay 🇺🇾',             'Grupo H', 'Hard Rock Stadium Miami'],
    ['Lunes 15 Jun',     '20260615', 22,0,  'Irán 🇮🇷',            'Nueva Zelanda 🇳🇿',      'Grupo G', 'SoFi Stadium Los Ángeles'],
    ['Martes 16 Jun',    '20260616', 16,0,  'Francia 🇫🇷',         'Senegal 🇸🇳',            'Grupo I', 'MetLife Stadium N.Y./N.J.'],
    ['Martes 16 Jun',    '20260616', 19,0,  'Irak 🇮🇶',            'Noruega 🇳🇴',             'Grupo I', 'Gillette Stadium Boston'],
    ['Martes 16 Jun',    '20260616', 22,0,  'Argentina 🇦🇷',       'Argelia 🇩🇿',            'Grupo J', 'Arrowhead Kansas City'],
    ['Martes 16 Jun',    '20260616', 25,0,  'Austria 🇦🇹',         'Jordania 🇯🇴',           'Grupo J', "Levi's Stadium San Francisco"],
    ['Miércoles 17 Jun', '20260617', 14,0,  'Portugal 🇵🇹',        'R.D. Congo 🇨🇩',         'Grupo K', 'NRG Stadium Houston'],
    ['Miércoles 17 Jun', '20260617', 17,0,  'Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿',    'Croacia 🇭🇷',             'Grupo L', 'AT&T Stadium Dallas'],
    ['Miércoles 17 Jun', '20260617', 20,0,  'Ghana 🇬🇭',           'Panamá 🇵🇦',             'Grupo L', 'BMO Field Toronto'],
    ['Miércoles 17 Jun', '20260617', 23,0,  'Uzbekistán 🇺🇿',      'Colombia 🇨🇴',           'Grupo K', 'Estadio Ciudad de México'],
    // === JORNADA 2 ===
    ['Jueves 18 Jun',    '20260618', 13,0,  'Rep. Checa 🇨🇿',      'Sudáfrica 🇿🇦',          'Grupo A', 'Mercedes-Benz Stadium Atlanta'],
    ['Jueves 18 Jun',    '20260618', 16,0,  'Suiza 🇨🇭',           'Bosnia y Herz. 🇧🇦',    'Grupo B', 'SoFi Stadium Los Ángeles'],
    ['Jueves 18 Jun',    '20260618', 19,0,  'Canadá 🇨🇦',          'Qatar 🇶🇦',              'Grupo B', 'BC Place Vancouver'],
    ['Jueves 18 Jun',    '20260618', 22,0,  'México 🇲🇽',          'Corea del Sur 🇰🇷',      'Grupo A', 'Estadio Guadalajara'],
    ['Viernes 19 Jun',   '20260619', 16,0,  'Estados Unidos 🇺🇸',  'Australia 🇦🇺',          'Grupo D', 'Lumen Field Seattle'],
    ['Viernes 19 Jun',   '20260619', 19,0,  'Escocia 🏴󠁧󠁢󠁳󠁣󠁴󠁿',        'Marruecos 🇲🇦',           'Grupo C', 'Gillette Stadium Boston'],
    ['Viernes 19 Jun',   '20260619', 22,0,  'Brasil 🇧🇷',          'Haití 🇭🇹',              'Grupo C', 'Lincoln Financial Field Philadelphia'],
    ['Viernes 19 Jun',   '20260619', 25,0,  'Turquía 🇹🇷',         'Paraguay 🇵🇾',           'Grupo D', "Levi's Stadium San Francisco"],
    ['Sábado 20 Jun',    '20260620', 14,0,  'Países Bajos 🇳🇱',   'Suecia 🇸🇪',             'Grupo F', 'NRG Stadium Houston'],
    ['Sábado 20 Jun',    '20260620', 17,0,  'Alemania 🇩🇪',        'Costa de Marfil 🇨🇮',    'Grupo E', 'BMO Field Toronto'],
    ['Sábado 20 Jun',    '20260620', 21,0,  'Ecuador 🇪🇨',         'Curazao 🇨🇼',            'Grupo E', 'Arrowhead Kansas City'],
    ['Sábado 20 Jun',    '20260620', 25,0,  'Túnez 🇹🇳',           'Japón 🇯🇵',              'Grupo F', 'Estadio Monterrey'],
    ['Domingo 21 Jun',   '20260621', 13,0,  'España 🇪🇸',          'Arabia Saudita 🇸🇦',     'Grupo H', 'Mercedes-Benz Stadium Atlanta'],
    ['Domingo 21 Jun',   '20260621', 16,0,  'Bélgica 🇧🇪',         'Irán 🇮🇷',               'Grupo G', 'SoFi Stadium Los Ángeles'],
    ['Domingo 21 Jun',   '20260621', 19,0,  'Uruguay 🇺🇾',         'Cabo Verde 🇨🇻',          'Grupo H', 'Hard Rock Stadium Miami'],
    ['Domingo 21 Jun',   '20260621', 22,0,  'Nueva Zelanda 🇳🇿',   'Egipto 🇪🇬',             'Grupo G', 'BC Place Vancouver'],
    ['Lunes 22 Jun',     '20260622', 14,0,  'Argentina 🇦🇷',       'Austria 🇦🇹',            'Grupo J', 'AT&T Stadium Dallas'],
    ['Lunes 22 Jun',     '20260622', 18,0,  'Francia 🇫🇷',         'Irak 🇮🇶',               'Grupo I', 'Lincoln Financial Field Philadelphia'],
    ['Lunes 22 Jun',     '20260622', 21,0,  'Noruega 🇳🇴',         'Senegal 🇸🇳',            'Grupo I', 'MetLife Stadium N.Y./N.J.'],
    ['Lunes 22 Jun',     '20260622', 24,0,  'Jordania 🇯🇴',        'Argelia 🇩🇿',            'Grupo J', "Levi's Stadium San Francisco"],
    ['Martes 23 Jun',    '20260623', 14,0,  'Portugal 🇵🇹',        'Uzbekistán 🇺🇿',         'Grupo K', 'NRG Stadium Houston'],
    ['Martes 23 Jun',    '20260623', 17,0,  'Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿',    'Ghana 🇬🇭',               'Grupo L', 'Gillette Stadium Boston'],
    ['Martes 23 Jun',    '20260623', 20,0,  'Panamá 🇵🇦',          'Croacia 🇭🇷',            'Grupo L', 'BMO Field Toronto'],
    ['Martes 23 Jun',    '20260623', 23,0,  'Colombia 🇨🇴',        'R.D. Congo 🇨🇩',          'Grupo K', 'Estadio Guadalajara'],
    // === JORNADA 3 ===
    ['Miércoles 24 Jun', '20260624', 16,0,  'Suiza 🇨🇭',           'Canadá 🇨🇦',             'Grupo B', 'BC Place Vancouver'],
    ['Miércoles 24 Jun', '20260624', 16,0,  'Bosnia y Herz. 🇧🇦', 'Qatar 🇶🇦',              'Grupo B', 'Lumen Field Seattle'],
    ['Miércoles 24 Jun', '20260624', 19,0,  'Escocia 🏴󠁧󠁢󠁳󠁣󠁴󠁿',        'Brasil 🇧🇷',              'Grupo C', 'Hard Rock Stadium Miami'],
    ['Miércoles 24 Jun', '20260624', 19,0,  'Marruecos 🇲🇦',       'Haití 🇭🇹',              'Grupo C', 'Mercedes-Benz Stadium Atlanta'],
    ['Miércoles 24 Jun', '20260624', 22,0,  'Rep. Checa 🇨🇿',      'México 🇲🇽',              'Grupo A', 'Estadio Ciudad de México'],
    ['Miércoles 24 Jun', '20260624', 22,0,  'Sudáfrica 🇿🇦',       'Corea del Sur 🇰🇷',      'Grupo A', 'Estadio Monterrey'],
    ['Jueves 25 Jun',    '20260625', 17,0,  'Ecuador 🇪🇨',         'Alemania 🇩🇪',            'Grupo E', 'MetLife Stadium N.Y./N.J.'],
    ['Jueves 25 Jun',    '20260625', 17,0,  'Curazao 🇨🇼',         'Costa de Marfil 🇨🇮',    'Grupo E', 'Lincoln Financial Field Philadelphia'],
    ['Jueves 25 Jun',    '20260625', 20,0,  'Túnez 🇹🇳',           'Países Bajos 🇳🇱',       'Grupo F', 'Arrowhead Kansas City'],
    ['Jueves 25 Jun',    '20260625', 20,0,  'Japón 🇯🇵',           'Suecia 🇸🇪',             'Grupo F', 'AT&T Stadium Dallas'],
    ['Jueves 25 Jun',    '20260625', 23,0,  'Turquía 🇹🇷',         'Estados Unidos 🇺🇸',      'Grupo D', 'SoFi Stadium Los Ángeles'],
    ['Jueves 25 Jun',    '20260625', 23,0,  'Paraguay 🇵🇾',        'Australia 🇦🇺',           'Grupo D', "Levi's Stadium San Francisco"],
    ['Viernes 26 Jun',   '20260626', 16,0,  'Noruega 🇳🇴',         'Francia 🇫🇷',            'Grupo I', 'Gillette Stadium Boston'],
    ['Viernes 26 Jun',   '20260626', 16,0,  'Senegal 🇸🇳',         'Irak 🇮🇶',               'Grupo I', 'BMO Field Toronto'],
    ['Viernes 26 Jun',   '20260626', 21,0,  'Uruguay 🇺🇾',         'España 🇪🇸',              'Grupo H', 'Estadio Guadalajara'],
    ['Viernes 26 Jun',   '20260626', 21,0,  'Cabo Verde 🇨🇻',      'Arabia Saudita 🇸🇦',      'Grupo H', 'NRG Stadium Houston'],
    ['Viernes 26 Jun',   '20260626', 24,0,  'Nueva Zelanda 🇳🇿',   'Bélgica 🇧🇪',            'Grupo G', 'BC Place Vancouver'],
    ['Viernes 26 Jun',   '20260626', 24,0,  'Egipto 🇪🇬',          'Irán 🇮🇷',               'Grupo G', 'Lumen Field Seattle'],
    ['Sábado 27 Jun',    '20260627', 18,0,  'Panamá 🇵🇦',          'Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿',        'Grupo L', 'MetLife Stadium N.Y./N.J.'],
    ['Sábado 27 Jun',    '20260627', 18,0,  'Croacia 🇭🇷',         'Ghana 🇬🇭',               'Grupo L', 'Lincoln Financial Field Philadelphia'],
    ['Sábado 27 Jun',    '20260627', 20,30, 'Colombia 🇨🇴',        'Portugal 🇵🇹',            'Grupo K', 'Hard Rock Stadium Miami'],
    ['Sábado 27 Jun',    '20260627', 20,30, 'R.D. Congo 🇨🇩',      'Uzbekistán 🇺🇿',          'Grupo K', 'Mercedes-Benz Stadium Atlanta'],
    ['Sábado 27 Jun',    '20260627', 23,0,  'Jordania 🇯🇴',        'Argentina 🇦🇷',           'Grupo J', 'AT&T Stadium Dallas'],
    ['Sábado 27 Jun',    '20260627', 23,0,  'Argelia 🇩🇿',         'Austria 🇦🇹',             'Grupo J', 'Arrowhead Kansas City'],
  ];
  
  // ==================== SLUGS DE URL ====================
  // Mapeo nombre → slug para construir /pais/ URLs
  const TEAM_SLUGS = {
    'México':          'mexico',
    'Sudáfrica':       'sudafrica',
    'Corea del Sur':   'corea-del-sur',
    'Rep. Checa':      'republica-checa',
    'Canadá':          'canada',
    'Bosnia y Herz.':  'bosnia-herzegovina',
    'Qatar':           'qatar',
    'Suiza':           'suiza',
    'Brasil':          'brasil',
    'Marruecos':       'marruecos',
    'Haití':           'haiti',
    'Escocia':         'escocia',
    'Estados Unidos':  'estados-unidos',
    'Paraguay':        'paraguay',
    'Australia':       'australia',
    'Turquía':         'turquia',
    'Alemania':        'alemania',
    'Curazao':         'curazao',
    'Costa de Marfil': 'costa-de-marfil',
    'Ecuador':         'ecuador',
    'Países Bajos':    'paises-bajos',
    'Japón':           'japon',
    'Suecia':          'suecia',
    'Túnez':           'tunez',
    'Bélgica':         'belgica',
    'Egipto':          'egipto',
    'Irán':            'iran',
    'Nueva Zelanda':   'nueva-zelanda',
    'España':          'espana',
    'Cabo Verde':      'cabo-verde',
    'Arabia Saudita':  'arabia-saudita',
    'Uruguay':         'uruguay',
    'Francia':         'francia',
    'Senegal':         'senegal',
    'Irak':            'irak',
    'Noruega':         'noruega',
    'Argentina':       'argentina',
    'Argelia':         'argelia',
    'Austria':         'austria',
    'Jordania':        'jordania',
    'Portugal':        'portugal',
    'R.D. Congo':      'republica-democratica-del-congo',
    'Uzbekistán':      'uzbekistan',
    'Colombia':        'colombia',
    'Inglaterra':      'inglaterra',
    'Croacia':         'croacia',
    'Ghana':           'ghana',
    'Panamá':          'panama',
  };
  
  // ==================== BANDERAS ====================
  const FLAG_CODES = {
    'México':'mx',         'Sudáfrica':'za',       'Corea del Sur':'kr',   'Rep. Checa':'cz',
    'Canadá':'ca',         'Bosnia y Herz.':'ba',  'Qatar':'qa',           'Suiza':'ch',
    'Brasil':'br',         'Marruecos':'ma',        'Haití':'ht',           'Escocia':'gb-sct',
    'Estados Unidos':'us', 'Paraguay':'py',         'Australia':'au',       'Turquía':'tr',
    'Alemania':'de',       'Curazao':'cw',          'Costa de Marfil':'ci', 'Ecuador':'ec',
    'Países Bajos':'nl',   'Japón':'jp',            'Suecia':'se',          'Túnez':'tn',
    'Bélgica':'be',        'Egipto':'eg',           'Irán':'ir',            'Nueva Zelanda':'nz',
    'España':'es',         'Cabo Verde':'cv',        'Arabia Saudita':'sa',  'Uruguay':'uy',
    'Francia':'fr',        'Senegal':'sn',           'Irak':'iq',            'Noruega':'no',
    'Argentina':'ar',      'Argelia':'dz',           'Austria':'at',         'Jordania':'jo',
    'Portugal':'pt',       'R.D. Congo':'cd',        'Uzbekistán':'uz',      'Colombia':'co',
    'Inglaterra':'gb-eng', 'Croacia':'hr',           'Ghana':'gh',           'Panamá':'pa',
  };
  
  const FLAG_IMG_STYLE = 'border-radius:3px;border:1px solid rgba(128,128,128,0.28);display:inline-block;vertical-align:middle;flex-shrink:0;object-fit:cover';
  const TZ_FLAG_STYLE  = `width:22px;height:15px;${FLAG_IMG_STYLE}`;
  
  const TZ_FLAGS = {
    México:    `<img src="https://flagcdn.com/w40/mx.png" style="${TZ_FLAG_STYLE}" alt="México">`,
    Argentina: `<img src="https://flagcdn.com/w40/ar.png" style="${TZ_FLAG_STYLE}" alt="Argentina">`,
    España:    `<img src="https://flagcdn.com/w40/es.png" style="${TZ_FLAG_STYLE}" alt="España">`,
    EEUU:      `<img src="https://flagcdn.com/w40/us.png" style="${TZ_FLAG_STYLE}" alt="EE.UU">`,
  };
  
  // ==================== UTILIDADES ====================
  
  /** Limpia el nombre de un equipo quitando emojis */
  function teamName(t) {
    return t.replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\uFE00-\uFE0F\u200D\uFE0F\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E0065}\u{E006E}\u{E0067}\u{E007F}]/gu, '').trim();
  }
  
  /** Devuelve <img> de la bandera de un equipo */
  function getFlag(t, w=28, h=20) {
    const name = teamName(t);
    const code = FLAG_CODES[name];
    if (code) return `<img src="https://flagcdn.com/w40/${code}.png" width="${w}" height="${h}" alt="${name}" style="${FLAG_IMG_STYLE}">`;
    return `<span style="display:inline-block;width:${w}px;height:${h}px;background:#555;border-radius:3px;vertical-align:middle"></span>`;
  }
  
  /** Convierte hora ARG en objeto con las 4 zonas horarias */
  function fmtTime(argHour, argMin) {
    function pad(n) { return String(n).padStart(2, '0'); }
    function shift(h, m, delta) {
      let t = ((h * 60 + m + delta * 60) % 1440 + 1440) % 1440;
      return `${pad(Math.floor(t/60))}:${pad(t%60)}`;
    }
    const base = ((argHour % 24) + 24) % 24;
    return {
      arg: `${pad(base)}:${pad(argMin)}`,
      mex: shift(base, argMin, -3),
      esp: shift(base, argMin,  5),
      est: shift(base, argMin, -1),
      pst: shift(base, argMin, -4),
    };
  }
  
  /** Devuelve el slug URL de un equipo */
  function teamSlug(t) {
    const name = teamName(t);
    return TEAM_SLUGS[name] || name.toLowerCase().replace(/\s+/g, '-');
  }
  
  /** Devuelve los partidos de un equipo dado su nombre */
  function getMatchesForTeam(nameWithEmoji) {
    const name = teamName(nameWithEmoji);
    return MATCHES.filter(m => teamName(m[4]) === name || teamName(m[5]) === name);
  }
  
  /** Devuelve el grupo de un equipo */
  function getGroupForTeam(nameWithEmoji) {
    const name = teamName(nameWithEmoji);
    for (const [g, teams] of Object.entries(GROUPS)) {
      if (teams.some(t => teamName(t) === name)) return g;
    }
    return null;
  }
  
  /** Devuelve los compañeros de grupo de un equipo */
  function getGroupMatesForTeam(nameWithEmoji) {
    const name = teamName(nameWithEmoji);
    const g = getGroupForTeam(nameWithEmoji);
    if (!g) return [];
    return GROUPS[g].filter(t => teamName(t) !== name);
  }
  
  // ==================== RANKING FIFA ABRIL 2026 ====================
  // Fuente: FIFA/Coca-Cola Men's World Ranking — actualización del 1 de abril de 2026
  const FIFA_RANKINGS = {
    'Francia':          1,   'España':           2,   'Argentina':        3,
    'Inglaterra':       4,   'Portugal':         5,   'Brasil':           6,
    'Países Bajos':     7,   'Marruecos':        8,   'Bélgica':          9,
    'Alemania':         10,  'Croacia':          11,  'Colombia':         12,
    'Senegal':          13,  'México':           15,  'Estados Unidos':   16,
    'Uruguay':          17,  'Japón':            18,  'Suiza':            19,
    'Irán':             20,  'Turquía':          22,  'Ecuador':          23,
    'Austria':          24,  'Corea del Sur':    25,  'Australia':        27,
    'Argelia':          28,  'Egipto':           29,  'Canadá':           30,
    'Noruega':          31,  'Panamá':           33,  'Costa de Marfil':  34,
    'Suecia':           38,  'Paraguay':         40,  'Rep. Checa':       41,
    'Escocia':          43,  'Túnez':            44,  'R.D. Congo':       46,
    'Uzbekistán':       50,  'Qatar':            55,  'Irak':             57,
    'Sudáfrica':        60,  'Arabia Saudita':   61,  'Jordania':         63,
    'Bosnia y Herz.':   65,  'Cabo Verde':       69,  'Ghana':            74,
    'Curazao':          82,  'Haití':            83,  'Nueva Zelanda':    85,
  };
  
  /** Devuelve el ranking FIFA de un equipo */
  function getFIFARanking(nameWithEmoji) {
    const name = teamName(nameWithEmoji);
    return FIFA_RANKINGS[name] || '—';
  }
  
  // ==================== ÚLTIMOS RESULTADOS (Fecha FIFA Marzo 2026) ====================
  // Formato: [rival, resultado, marcador] — G=ganó, E=empató, D=perdió
  // Fuente: Amistosos FIFA de marzo 2026 y partidos oficiales previos
  const LAST_RESULTS = {
    // ── Grupo A ──
    'México': [
      { rival: 'Bolivia',    res: 'G', score: '3-0' },
      { rival: 'Venezuela',  res: 'G', score: '2-1' },
      { rival: 'Honduras',   res: 'G', score: '2-0' },
      { rival: 'Portugal',   res: 'E', score: '0-0' },
      { rival: 'Bélgica',    res: 'E', score: '1-1' },
    ],
    'Sudáfrica': [
      { rival: 'Mozambique',  res: 'G', score: '2-0' },
      { rival: 'Liberia',     res: 'G', score: '3-1' },
      { rival: 'Zambia',      res: 'E', score: '1-1' },
      { rival: 'Senegal',     res: 'D', score: '0-2' },
      { rival: 'Panamá',      res: 'G', score: '2-1' },
    ],
    'Corea del Sur': [
      { rival: 'Tailandia',   res: 'G', score: '3-0' },
      { rival: 'China',       res: 'G', score: '2-0' },
      { rival: 'Irak',        res: 'E', score: '1-1' },
      { rival: 'Australia',   res: 'D', score: '0-1' },
      { rival: 'Austria',     res: 'D', score: '0-1' },
    ],
    'Rep. Checa': [
      { rival: 'Eslovaquia',  res: 'G', score: '2-1' },
      { rival: 'Albania',     res: 'G', score: '3-0' },
      { rival: 'Kosovo',      res: 'D', score: '0-1' },
      { rival: 'Macedonia N.', res: 'G', score: '2-0' },
      { rival: 'Irlanda',     res: 'G', score: '1-0' },
    ],
    // ── Grupo B ──
    'Canadá': [
      { rival: 'Venezuela',   res: 'G', score: '2-0' },
      { rival: 'Ecuador',     res: 'G', score: '2-1' },
      { rival: 'México',      res: 'D', score: '1-2' },
      { rival: 'EE.UU',       res: 'E', score: '0-0' },
      { rival: 'Túnez',       res: 'G', score: '2-0' },
    ],
    'Bosnia y Herz.': [
      { rival: 'Austria',     res: 'D', score: '0-2' },
      { rival: 'Rumania',     res: 'G', score: '1-0' },
      { rival: 'Serbia',      res: 'E', score: '1-1' },
      { rival: 'Finlandia',   res: 'G', score: '2-0' },
      { rival: 'Italia',      res: 'G', score: '1-0' },
    ],
    'Qatar': [
      { rival: 'Kuwait',      res: 'G', score: '3-1' },
      { rival: 'Bahrein',     res: 'G', score: '2-0' },
      { rival: 'Jordania',    res: 'E', score: '1-1' },
      { rival: 'EAU',         res: 'G', score: '2-1' },
      { rival: 'Siria',       res: 'G', score: '3-0' },
    ],
    'Suiza': [
      { rival: 'Kosovo',      res: 'G', score: '3-0' },
      { rival: 'Serbia',      res: 'G', score: '2-0' },
      { rival: 'Turquía',     res: 'E', score: '1-1' },
      { rival: 'Noruega',     res: 'D', score: '0-1' },
      { rival: 'Alemania',    res: 'D', score: '0-1' },
    ],
    // ── Grupo C ──
    'Brasil': [
      { rival: 'Paraguay',    res: 'G', score: '4-0' },
      { rival: 'Chile',       res: 'G', score: '2-0' },
      { rival: 'Venezuela',   res: 'G', score: '3-0' },
      { rival: 'Francia',     res: 'D', score: '1-3' },
      { rival: 'Croacia',     res: 'E', score: '1-1' },
    ],
    'Marruecos': [
      { rival: 'Mozambique',  res: 'G', score: '3-0' },
      { rival: 'Mauritania',  res: 'G', score: '4-0' },
      { rival: 'Comoras',     res: 'G', score: '2-0' },
      { rival: 'Ecuador',     res: 'E', score: '1-1' },
      { rival: 'Paraguay',    res: 'G', score: '2-0' },
    ],
    'Haití': [
      { rival: 'Rep. Dom.',   res: 'E', score: '1-1' },
      { rival: 'Guatemala',   res: 'G', score: '2-0' },
      { rival: 'Cuba',        res: 'G', score: '3-1' },
      { rival: 'Trinidad',    res: 'G', score: '2-0' },
      { rival: 'Jamaica',     res: 'E', score: '0-0' },
    ],
    'Escocia': [
      { rival: 'Macedonia N.', res: 'G', score: '2-0' },
      { rival: 'Finlandia',   res: 'G', score: '1-0' },
      { rival: 'Albania',     res: 'E', score: '0-0' },
      { rival: 'Irlanda',     res: 'G', score: '2-1' },
      { rival: 'Costa de Marfil', res: 'D', score: '1-2' },
    ],
    // ── Grupo D ──
    'Estados Unidos': [
      { rival: 'Chile',       res: 'G', score: '3-0' },
      { rival: 'Panamá',      res: 'G', score: '3-1' },
      { rival: 'Trinidad',    res: 'G', score: '4-0' },
      { rival: 'Portugal',    res: 'D', score: '1-2' },
      { rival: 'Ghana',       res: 'G', score: '2-0' },
    ],
    'Paraguay': [
      { rival: 'Bolivia',     res: 'G', score: '2-1' },
      { rival: 'Venezuela',   res: 'E', score: '0-0' },
      { rival: 'Ecuador',     res: 'D', score: '0-1' },
      { rival: 'Marruecos',   res: 'D', score: '0-2' },
      { rival: 'Grecia',      res: 'D', score: '1-2' },
    ],
    'Australia': [
      { rival: 'Vietnam',     res: 'G', score: '4-0' },
      { rival: 'China',       res: 'G', score: '3-0' },
      { rival: 'Tailandia',   res: 'G', score: '2-0' },
      { rival: 'Camerún',     res: 'G', score: '2-0' },
      { rival: 'Curazao',     res: 'G', score: '3-1' },
    ],
    'Turquía': [
      { rival: 'Georgia',     res: 'G', score: '3-1' },
      { rival: 'Albania',     res: 'G', score: '2-0' },
      { rival: 'Suiza',       res: 'E', score: '1-1' },
      { rival: 'Rumania',     res: 'G', score: '1-0' },
      { rival: 'Kosovo',      res: 'G', score: '2-0' },
    ],
    // ── Grupo E ──
    'Alemania': [
      { rival: 'Bélgica',     res: 'G', score: '2-1' },
      { rival: 'Holanda',     res: 'G', score: '3-0' },
      { rival: 'Italia',      res: 'G', score: '2-0' },
      { rival: 'Suiza',       res: 'G', score: '1-0' },
      { rival: 'Ghana',       res: 'G', score: '2-1' },
    ],
    'Curazao': [
      { rival: 'Aruba',       res: 'G', score: '3-0' },
      { rival: 'St. Kitts',   res: 'G', score: '2-0' },
      { rival: 'Surinam',     res: 'E', score: '1-1' },
      { rival: 'China',       res: 'E', score: '0-0' },
      { rival: 'Australia',   res: 'D', score: '1-3' },
    ],
    'Costa de Marfil': [
      { rival: 'Sierra Leona', res: 'G', score: '3-0' },
      { rival: 'Burkina Faso', res: 'G', score: '2-0' },
      { rival: 'Ghana',       res: 'G', score: '1-0' },
      { rival: 'Escocia',     res: 'G', score: '2-1' },
      { rival: 'Guinea',      res: 'G', score: '2-0' },
    ],
    'Ecuador': [
      { rival: 'Bolivia',     res: 'G', score: '2-0' },
      { rival: 'Colombia',    res: 'E', score: '0-0' },
      { rival: 'Argentina',   res: 'G', score: '1-0' },
      { rival: 'Marruecos',   res: 'E', score: '1-1' },
      { rival: 'Países Bajos', res: 'E', score: '1-1' },
    ],
    // ── Grupo F ──
    'Países Bajos': [
      { rival: 'Turquía',     res: 'G', score: '2-0' },
      { rival: 'Albania',     res: 'G', score: '3-0' },
      { rival: 'Hungría',     res: 'G', score: '4-0' },
      { rival: 'Noruega',     res: 'G', score: '2-1' },
      { rival: 'Ecuador',     res: 'E', score: '1-1' },
    ],
    'Japón': [
      { rival: 'China',       res: 'G', score: '3-0' },
      { rival: 'Bahréin',     res: 'G', score: '4-0' },
      { rival: 'Australia',   res: 'G', score: '2-0' },
      { rival: 'Corea del Sur', res: 'G', score: '1-0' },
      { rival: 'Inglaterra',  res: 'G', score: '1-0' },
    ],
    'Suecia': [
      { rival: 'Kosovo',      res: 'G', score: '3-0' },
      { rival: 'Azerbaiyán',  res: 'G', score: '3-0' },
      { rival: 'Hungría',     res: 'G', score: '2-0' },
      { rival: 'Estonia',     res: 'G', score: '4-0' },
      { rival: 'Finlandia',   res: 'G', score: '2-0' },
    ],
    'Túnez': [
      { rival: 'Camerún',     res: 'E', score: '0-0' },
      { rival: 'Namibia',     res: 'G', score: '2-0' },
      { rival: 'Argelia',     res: 'E', score: '1-1' },
      { rival: 'Canadá',      res: 'D', score: '0-2' },
      { rival: 'Gabón',       res: 'G', score: '3-0' },
    ],
    // ── Grupo G ──
    'Bélgica': [
      { rival: 'Francia',     res: 'D', score: '1-2' },
      { rival: 'Gales',       res: 'G', score: '3-1' },
      { rival: 'Rep. Checa',  res: 'G', score: '2-0' },
      { rival: 'Alemania',    res: 'D', score: '1-2' },
      { rival: 'México',      res: 'E', score: '1-1' },
    ],
    'Egipto': [
      { rival: 'Etiopía',     res: 'G', score: '4-0' },
      { rival: 'Sierra Leona', res: 'G', score: '3-0' },
      { rival: 'Arabia Saudita', res: 'G', score: '4-0' },
      { rival: 'España',      res: 'E', score: '0-0' },
      { rival: 'Argelia',     res: 'E', score: '0-0' },
    ],
    'Irán': [
      { rival: 'Tayikistán',  res: 'G', score: '3-0' },
      { rival: 'Turkmenistán', res: 'G', score: '4-0' },
      { rival: 'Kirguistán',  res: 'G', score: '3-1' },
      { rival: 'Nigeria',     res: 'E', score: '0-0' },
      { rival: 'Costa Rica',  res: 'G', score: '2-0' },
    ],
    'Nueva Zelanda': [
      { rival: 'Fiyi',        res: 'G', score: '3-0' },
      { rival: 'Papua N.G.',  res: 'G', score: '5-0' },
      { rival: 'Vanuatu',     res: 'G', score: '4-0' },
      { rival: 'Chile',       res: 'E', score: '1-1' },
      { rival: 'Finlandia',   res: 'E', score: '0-0' },
    ],
    // ── Grupo H ──
    'España': [
      { rival: 'Dinamarca',   res: 'G', score: '2-0' },
      { rival: 'Suiza',       res: 'G', score: '3-1' },
      { rival: 'Países Bajos', res: 'G', score: '3-0' },
      { rival: 'Serbia',      res: 'G', score: '3-1' },
      { rival: 'Egipto',      res: 'E', score: '0-0' },
    ],
    'Cabo Verde': [
      { rival: 'Liberia',     res: 'G', score: '2-0' },
      { rival: 'Etiopía',     res: 'G', score: '1-0' },
      { rival: 'Camerún',     res: 'D', score: '0-1' },
      { rival: 'Gambia',      res: 'G', score: '2-0' },
      { rival: 'Finlandia',   res: 'D', score: '0-1' },
    ],
    'Arabia Saudita': [
      { rival: 'Iraq',        res: 'G', score: '2-0' },
      { rival: 'Bahréin',     res: 'G', score: '3-0' },
      { rival: 'Kuwait',      res: 'G', score: '2-0' },
      { rival: 'Egipto',      res: 'D', score: '0-4' },
      { rival: 'Serbia',      res: 'D', score: '0-1' },
    ],
    'Uruguay': [
      { rival: 'Chile',       res: 'G', score: '3-0' },
      { rival: 'Venezuela',   res: 'G', score: '2-0' },
      { rival: 'Paraguay',    res: 'G', score: '3-1' },
      { rival: 'Argelia',     res: 'G', score: '2-0' },
      { rival: 'Inglaterra',  res: 'D', score: '0-2' },
    ],
    // ── Grupo I ──
    'Francia': [
      { rival: 'Bélgica',     res: 'G', score: '2-1' },
      { rival: 'Italia',      res: 'G', score: '2-1' },
      { rival: 'Brasil',      res: 'G', score: '3-1' },
      { rival: 'Colombia',    res: 'G', score: '2-1' },
      { rival: 'España',      res: 'E', score: '0-0' },
    ],
    'Senegal': [
      { rival: 'Mauritania',  res: 'G', score: '3-0' },
      { rival: 'Cabo Verde',  res: 'G', score: '2-0' },
      { rival: 'Guinea',      res: 'G', score: '2-0' },
      { rival: 'Sudáfrica',   res: 'G', score: '2-0' },
      { rival: 'Gambia',      res: 'G', score: '3-0' },
    ],
    'Irak': [
      { rival: 'Kuwait',      res: 'G', score: '2-0' },
      { rival: 'Siria',       res: 'G', score: '3-0' },
      { rival: 'Arabia Saudita', res: 'D', score: '0-2' },
      { rival: 'Bolivia',     res: 'G', score: '2-1' },
      { rival: 'R.D. Congo',  res: 'G', score: '1-0' },
    ],
    'Noruega': [
      { rival: 'Kosovo',      res: 'G', score: '2-0' },
      { rival: 'Kazajistán',  res: 'G', score: '3-0' },
      { rival: 'Estonia',     res: 'G', score: '4-0' },
      { rival: 'Suiza',       res: 'G', score: '1-0' },
      { rival: 'Países Bajos', res: 'D', score: '1-2' },
    ],
    // ── Grupo J ──
    'Argentina': [
      { rival: 'Chile',       res: 'G', score: '3-0' },
      { rival: 'Bolivia',     res: 'G', score: '3-0' },
      { rival: 'Perú',        res: 'G', score: '1-0' },
      { rival: 'Mauritania',  res: 'G', score: '2-1' },
      { rival: 'Zambia',      res: 'G', score: '5-0' },
    ],
    'Argelia': [
      { rival: 'Túnez',       res: 'E', score: '1-1' },
      { rival: 'Mozambique',  res: 'G', score: '2-0' },
      { rival: 'Guinea Ecuat.', res: 'G', score: '2-0' },
      { rival: 'Uruguay',     res: 'D', score: '0-2' },
      { rival: 'Guatemala',   res: 'G', score: '2-0' },
    ],
    'Austria': [
      { rival: 'Georgia',     res: 'G', score: '2-0' },
      { rival: 'Kazajistán',  res: 'G', score: '3-0' },
      { rival: 'Kosovo',      res: 'G', score: '2-0' },
      { rival: 'Ghana',       res: 'G', score: '2-0' },
      { rival: 'Corea del Sur', res: 'G', score: '1-0' },
    ],
    'Jordania': [
      { rival: 'Palestina',   res: 'G', score: '3-0' },
      { rival: 'Bahrein',     res: 'G', score: '2-0' },
      { rival: 'Kuwait',      res: 'G', score: '2-1' },
      { rival: 'Qatar',       res: 'E', score: '1-1' },
      { rival: 'Nigeria',     res: 'D', score: '0-1' },
    ],
    // ── Grupo K ──
    'Portugal': [
      { rival: 'Escocia',     res: 'G', score: '2-0' },
      { rival: 'Polonia',     res: 'G', score: '3-0' },
      { rival: 'Rumania',     res: 'G', score: '2-1' },
      { rival: 'México',      res: 'E', score: '0-0' },
      { rival: 'EE.UU',       res: 'G', score: '2-1' },
    ],
    'R.D. Congo': [
      { rival: 'Madagascar',  res: 'G', score: '3-0' },
      { rival: 'Tanzania',    res: 'G', score: '2-0' },
      { rival: 'Etiopía',     res: 'G', score: '3-1' },
      { rival: 'Jamaica',     res: 'G', score: '2-0' },
      { rival: 'Irak',        res: 'D', score: '0-1' },
    ],
    'Uzbekistán': [
      { rival: 'Tayikistán',  res: 'G', score: '3-0' },
      { rival: 'Kirguistán',  res: 'G', score: '2-0' },
      { rival: 'Mongolia',    res: 'G', score: '4-0' },
      { rival: 'Venezuela',   res: 'G', score: '2-1' },
      { rival: 'Gabón',       res: 'G', score: '2-0' },
    ],
    'Colombia': [
      { rival: 'Bolivia',     res: 'G', score: '3-0' },
      { rival: 'Ecuador',     res: 'E', score: '0-0' },
      { rival: 'Paraguay',    res: 'G', score: '2-0' },
      { rival: 'Croacia',     res: 'D', score: '0-1' },
      { rival: 'Francia',     res: 'D', score: '1-2' },
    ],
    // ── Grupo L ──
    'Inglaterra': [
      { rival: 'Albania',     res: 'G', score: '3-0' },
      { rival: 'Letonia',     res: 'G', score: '4-0' },
      { rival: 'Andorra',     res: 'G', score: '5-0' },
      { rival: 'Uruguay',     res: 'G', score: '2-0' },
      { rival: 'Japón',       res: 'D', score: '0-1' },
    ],
    'Croacia': [
      { rival: 'Armenia',     res: 'G', score: '3-0' },
      { rival: 'Letonia',     res: 'G', score: '2-0' },
      { rival: 'Brasil',      res: 'E', score: '1-1' },
      { rival: 'Colombia',    res: 'G', score: '1-0' },
      { rival: 'Bolivia',     res: 'G', score: '3-0' },
    ],
    'Ghana': [
      { rival: 'Comoras',     res: 'G', score: '3-0' },
      { rival: 'Angola',      res: 'G', score: '2-0' },
      { rival: 'Zimbabue',    res: 'G', score: '2-0' },
      { rival: 'Austria',     res: 'D', score: '0-2' },
      { rival: 'Alemania',    res: 'D', score: '1-2' },
    ],
    'Panamá': [
      { rival: 'Costa Rica',  res: 'G', score: '2-1' },
      { rival: 'Trinidad',    res: 'G', score: '3-0' },
      { rival: 'Honduras',    res: 'G', score: '2-0' },
      { rival: 'Sudáfrica',   res: 'D', score: '1-2' },
      { rival: 'EE.UU',       res: 'D', score: '1-3' },
    ],
  };
  
  /** Devuelve los últimos resultados de un equipo */
  function getLastResults(nameWithEmoji) {
    const name = teamName(nameWithEmoji);
    return LAST_RESULTS[name] || [];
  }