// portafolio_data.js — 20 dashboards premium para el portafolio 2BI
// Cada dashboard: KPIs, charts, slicers, tabla, narrativa con datos dummy realistas
window.PORTAFOLIO_DASHBOARDS = {

// ============================================================
// INDUSTRIALES (5)
// ============================================================
mantenimiento: {
  category: 'Industrial',
  icon: '⚙',
  accent: '#0F4C81',
  accentDark: '#0A3A66',
  title: 'Mantenimiento de Equipos',
  subtitle: 'OEE corporativo · MTBF · MTTR · Paros por causa',
  industry: 'Manufactura · Plantas industriales',
  kpis: [
    { l: 'OEE',           v: 87.3, suf: '%',     d: '+2.1pp', dir: 'up', spark: [82,83,84,85,86,87,87,88,87,87,87,87] },
    { l: 'MTBF',          v: 142,  suf: ' hrs',  d: '+8 hrs', dir: 'up', spark: [120,125,128,132,135,138,140,138,141,142,142,142] },
    { l: 'MTTR',          v: 23,   suf: ' min',  d: '−4 min', dir: 'up', spark: [32,30,28,27,26,25,24,25,24,23,23,23] },
    { l: 'Paros mes',     v: 47,   suf: '',      d: '+5',     dir: 'down',spark: [38,42,40,44,42,45,43,40,42,44,46,47] },
    { l: 'Disponibilidad',v: 94.2, suf: '%',     d: '+0.8pp', dir: 'up', spark: [89,90,91,92,92,93,93,93,94,94,94,94] },
    { l: 'Plantas',       v: 5,    suf: '/5',    d: '100%',   dir: 'up', spark: [5,5,5,5,5,5,5,5,5,5,5,5] }
  ],
  slicers: [
    { l: 'Planta', opts: ['Planta A','Planta B','Planta C','Planta D','Planta E'] },
    { l: 'Línea',  opts: ['L-01','L-02','L-03','L-04'] },
    { l: 'Turno',  opts: ['Matutino','Vespertino','Nocturno'] }
  ],
  charts: {
    main: { title: 'OEE 12 meses · Real vs Meta', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [82.1,83.4,84.0,85.2,86.1,85.8,86.4,87.3,87.0,87.5,87.3,87.3],
      data2: [85,85,85,85,85,85,85,85,85,85,85,85] },
    donut: { title: 'Paros por causa', labels: ['Falla mecánica','Cambio molde','Materia prima','Energía','Mantto. preventivo','Otros'], data: [38,25,14,8,10,5] },
    bar: { title: 'Top 10 equipos críticos', labels: ['EXT-04','INY-12','EMB-07','CTM-03','CTM-09','EXT-02','INY-08','TQ-15','EXT-11','MOL-06'], data: [24,21,18,16,14,13,12,10,9,8] }
  },
  table: {
    head: ['Equipo','Planta','Disp.','OEE','Estado'],
    rows: [
      ['EXT-04','Planta A','78%','72%','Crítico'],
      ['INY-12','Planta B','82%','79%','Riesgo'],
      ['EMB-07','Planta A','88%','84%','OK'],
      ['CTM-03','Planta C','91%','87%','OK'],
      ['INY-08','Planta B','95%','92%','Excelente']
    ]
  },
  narrative: 'OEE consolidado <strong>87.3%</strong> (+2.1pp vs mes anterior). Planta A redujo paros mecánicos 18%. <strong>EXT-04</strong> sigue siendo equipo crítico con 24 hrs perdidas — recomendación: priorizar mantto. preventivo.'
},

produccion: {
  category: 'Industrial',
  icon: '🏭',
  accent: '#1B6E6A',
  accentDark: '#0F4F4C',
  title: 'Producción / Manufactura',
  subtitle: 'Throughput · Scrap rate · Productividad · FPY',
  industry: 'Manufactura · Maquila · Procesos discretos',
  kpis: [
    { l: 'Producción YTD', v: 1.42, suf: 'M uds', pre: '', d: '+8.2%', dir: 'up', spark: [108,112,115,118,121,123,118,124,126,128,131,142] },
    { l: 'FPY',            v: 96.4, suf: '%', d: '+1.1pp', dir: 'up', spark: [94.2,94.5,94.8,95.1,95.3,95.5,95.7,95.9,96.0,96.1,96.3,96.4] },
    { l: 'Scrap rate',     v: 2.8,  suf: '%', d: '−0.3pp', dir: 'up', spark: [3.5,3.4,3.3,3.2,3.1,3.0,3.0,2.9,2.9,2.8,2.8,2.8] },
    { l: 'Throughput',     v: 1240, suf: ' u/h', d: '+85', dir: 'up', spark: [1100,1130,1150,1170,1185,1200,1210,1215,1225,1230,1235,1240] },
    { l: 'Productividad',  v: 18.4, suf: ' uds/HH', d: '+1.2', dir: 'up', spark: [16,16.5,17,17.3,17.6,17.8,18.0,18.1,18.2,18.3,18.4,18.4] },
    { l: 'Costo/unidad',   v: 42.5, suf: '', pre: '$', d: '−$3.20', dir: 'up', spark: [48,47,46,45,45,44,44,43,43,42.8,42.6,42.5] }
  ],
  slicers: [
    { l: 'Familia', opts: ['Inyección','Extrusión','Termoformado','Ensamble'] },
    { l: 'Cliente', opts: ['Cliente A','Cliente B','Cliente C','Cliente D'] },
    { l: 'Mes',     opts: ['Q1','Q2','Q3','Q4'] }
  ],
  charts: {
    main: { title: 'Producción mensual vs Plan', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [108,112,115,118,121,123,118,124,126,128,131,142],
      data2: [110,115,118,120,122,124,124,125,127,129,131,140] },
    donut: { title: 'Distribución por familia', labels: ['Inyección','Extrusión','Termoformado','Ensamble','Otros'], data: [42,28,15,10,5] },
    bar: { title: 'Top 8 SKUs producidos', labels: ['SKU-A1','SKU-B2','SKU-C3','SKU-D4','SKU-E5','SKU-F6','SKU-G7','SKU-H8'], data: [218,184,162,148,135,121,108,98] }
  },
  table: {
    head: ['Línea','Producción','FPY','Scrap','Status'],
    rows: [
      ['L-01 INY','420K','97.2%','1.8%','Excelente'],
      ['L-02 EXT','385K','96.1%','2.4%','OK'],
      ['L-03 TER','268K','94.8%','3.6%','Riesgo'],
      ['L-04 ENS','347K','97.8%','1.2%','Excelente']
    ]
  },
  narrative: 'Producción <strong>1.42M unidades YTD</strong> (+8.2% YoY). FPY corporativo en <strong>96.4%</strong> con todas las líneas sobre target. Scrap bajó 0.3pp en Q4 — atribuible a calibración de moldes en INY. Costo/unidad cae 7% YoY.'
},

calidad: {
  category: 'Industrial',
  icon: '✓',
  accent: '#2F6F4E',
  accentDark: '#1F4E37',
  title: 'Calidad y Mejora Continua',
  subtitle: 'Defect rate · NCR cost · FPY · Customer complaints',
  industry: 'Manufactura · Servicios · Cualquier proceso con QA',
  kpis: [
    { l: 'Defect rate',  v: 487, suf: ' PPM', d: '−65 PPM', dir: 'up', spark: [620,610,590,570,555,540,530,520,510,500,495,487] },
    { l: 'NCRs abiertas',v: 12, suf: '', d: '−3', dir: 'up', spark: [22,20,18,17,16,15,15,14,13,13,12,12] },
    { l: 'FPY',          v: 96.4, suf: '%', d: '+1.1pp', dir: 'up', spark: [94.2,94.5,94.8,95.1,95.3,95.5,95.7,95.9,96.0,96.1,96.3,96.4] },
    { l: 'Costo calidad',v: 280, suf: 'K MXN', pre: '$', d: '−$45K', dir: 'up', spark: [380,365,350,340,330,320,310,305,295,290,285,280] },
    { l: 'Quejas mes',   v: 8, suf: '', d: '−4', dir: 'up', spark: [18,16,15,14,12,12,11,10,9,9,8,8] },
    { l: 'Audit score',  v: 94, suf: '%', d: '+2pp', dir: 'up', spark: [88,89,90,91,91,92,92,93,93,93,94,94] }
  ],
  slicers: [
    { l: 'Tipo NCR', opts: ['Producto','Proceso','Cliente','Proveedor','Auditoría'] },
    { l: 'Severidad',opts: ['Crítica','Alta','Media','Baja'] }
  ],
  charts: {
    main: { title: 'Defect rate (PPM) vs target 500', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [620,610,590,570,555,540,530,520,510,500,495,487],
      data2: [500,500,500,500,500,500,500,500,500,500,500,500] },
    donut: { title: 'Causa raíz NCRs', labels: ['Material','Operación','Spec','Equipo','Otro'], data: [38,28,18,10,6] },
    bar: { title: 'Costo de NCRs por área', labels: ['Producción','Logística','Compras','Ingeniería','Calidad','Servicio'], data: [85,62,48,32,28,25] }
  },
  table: {
    head: ['NCR','Tipo','Severidad','Días','Status'],
    rows: [
      ['NCR-0142','Producto','Crítica','3','Abierta'],
      ['NCR-0138','Proveedor','Alta','7','En remediación'],
      ['NCR-0135','Proceso','Media','12','En remediación'],
      ['NCR-0128','Cliente','Alta','18','Cerrada'],
      ['NCR-0124','Producto','Media','22','Cerrada']
    ]
  },
  narrative: 'Defect rate cayó a <strong>487 PPM</strong> (target 500) — primera vez bajo umbral en 14 meses. NCRs críticas reducidas a 1 (vs 4 hace 90 días). Costo de calidad acumulado <strong>$280K MXN</strong> (−14% vs YTD anterior).'
},

logistica: {
  category: 'Industrial',
  icon: '🚚',
  accent: '#B85042',
  accentDark: '#8A3B30',
  title: 'Logística y Distribución',
  subtitle: 'OTD · OTIF · Costo/envío · Utilización camión',
  industry: 'Distribución · Cadenas de retail · Fleet operations',
  kpis: [
    { l: 'Envíos mes',     v: 1247, suf: '', d: '+89', dir: 'up', spark: [950,985,1020,1055,1080,1105,1125,1150,1175,1200,1225,1247] },
    { l: 'OTD',            v: 96.2, suf: '%', d: '+1.4pp', dir: 'up', spark: [92,93,93.5,94,94.5,95,95.2,95.5,95.8,96,96.1,96.2] },
    { l: 'OTIF',           v: 91.8, suf: '%', d: '+2.2pp', dir: 'up', spark: [86,87,88,88.5,89,89.5,90,90.5,91,91.3,91.6,91.8] },
    { l: 'Costo/envío',    v: 425, suf: '', pre: '$', d: '−$18', dir: 'up', spark: [490,485,478,470,462,455,448,442,438,432,428,425] },
    { l: 'Utilización',    v: 84.2, suf: '%', d: '+3.5pp', dir: 'up', spark: [78,79,80,80.5,81,81.8,82.4,82.8,83.2,83.6,84,84.2] },
    { l: '% Daños',        v: 0.8, suf: '%', d: '−0.3pp', dir: 'up', spark: [1.4,1.3,1.2,1.1,1.0,1.0,0.95,0.92,0.9,0.88,0.85,0.8] }
  ],
  slicers: [
    { l: 'Transportista', opts: ['Estafeta','DHL','Paquetexpress','Propio','Tres Guerras'] },
    { l: 'Ruta',          opts: ['CDMX-GDL','CDMX-MTY','CDMX-MID','CDMX-TIJ','GDL-MTY'] },
    { l: 'Tipo',          opts: ['Express','Estándar','Económico'] }
  ],
  charts: {
    main: { title: 'OTIF mensual vs target 90%', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [86,87,88,88.5,89,89.5,90,90.5,91,91.3,91.6,91.8],
      data2: [90,90,90,90,90,90,90,90,90,90,90,90] },
    donut: { title: 'Distribución por ruta', labels: ['CDMX-GDL','CDMX-MTY','CDMX-MID','CDMX-TIJ','GDL-MTY','Otros'], data: [28,22,18,15,10,7] },
    bar: { title: 'Top 5 transportistas (envíos)', labels: ['Estafeta','DHL','Paquetexpress','Propio','Tres Guerras'], data: [420,310,210,165,142] }
  },
  table: {
    head: ['Ruta','Envíos','OTD','Costo/u','Performance'],
    rows: [
      ['CDMX-GDL','349','97.4%','$385','Excelente'],
      ['CDMX-MTY','274','96.8%','$420','Excelente'],
      ['CDMX-MID','224','94.2%','$510','OK'],
      ['CDMX-TIJ','187','92.5%','$640','Vigilar'],
      ['GDL-MTY','125','98.1%','$295','Excelente']
    ]
  },
  narrative: 'OTIF en <strong>91.8%</strong> (+2.2pp vs mes anterior, sobre target de 90%). Costo por envío bajó <strong>$18 MXN</strong> con mejor consolidación de cargas. Daños caen a 0.8%, gracias a embalaje rediseñado en Q3.'
},

esg: {
  category: 'Industrial',
  icon: '🌿',
  accent: '#5A7C3F',
  accentDark: '#3F5A2A',
  title: 'ESG y Sustentabilidad',
  subtitle: 'Carbon footprint · Energy intensity · Water · Diversity',
  industry: 'Empresas con compromiso ESG · Reportes inversionistas',
  kpis: [
    { l: 'CO₂e total',     v: 4280, suf: ' tCO₂', d: '−380', dir: 'up', spark: [4800,4720,4650,4580,4510,4450,4400,4380,4350,4320,4300,4280] },
    { l: 'Energy intensity',v: 0.38, suf: ' kWh/u', d: '−0.04', dir: 'up', spark: [0.46,0.45,0.44,0.43,0.42,0.41,0.40,0.40,0.39,0.39,0.38,0.38] },
    { l: 'Agua reusada',   v: 68, suf: '%', d: '+8pp', dir: 'up', spark: [55,57,58,60,62,63,64,65,66,67,67.5,68] },
    { l: 'Recycle rate',   v: 87, suf: '%', d: '+5pp', dir: 'up', spark: [78,80,81,82,83,83.5,84,85,86,86.5,86.8,87] },
    { l: 'Mujeres lider.', v: 38, suf: '%', d: '+4pp', dir: 'up', spark: [30,31,32,33,34,35,35,36,37,37.5,38,38] },
    { l: 'Score TCFD',     v: 'A−', suf: '', d: 'sube de B+', dir: 'up', spark: null }
  ],
  slicers: [
    { l: 'Scope', opts: ['Scope 1','Scope 2','Scope 3'] },
    { l: 'Planta', opts: ['Planta A','Planta B','Planta C'] }
  ],
  charts: {
    main: { title: 'Emisiones CO₂e (Scope 1+2+3)', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [400,395,390,385,380,375,370,368,365,362,360,358],
      data2: [420,420,420,420,420,420,420,420,420,420,420,420] },
    donut: { title: 'Emisiones por scope', labels: ['Scope 1 (directas)','Scope 2 (energía)','Scope 3 (cadena)'], data: [28,32,40] },
    bar: { title: 'Reducción CO₂e por iniciativa', labels: ['LED + solar','Logística verde','Procesos eficient.','Reciclaje','Compensación'], data: [142,98,85,52,28] }
  },
  table: {
    head: ['Iniciativa','Inversión','Reducción','ROI ESG','Status'],
    rows: [
      ['Solar Planta A','$2.8M','142 tCO₂','5.2','En operación'],
      ['Logística verde','$1.4M','98 tCO₂','7.1','En operación'],
      ['Reciclaje cerrado','$640K','52 tCO₂','12.4','Piloto'],
      ['Programa diversidad','$280K','—','+8pp Lid.','En operación']
    ]
  },
  narrative: '<strong>4,280 tCO₂e</strong> emitidas YTD — reducción de 380 toneladas vs YTD anterior, en línea con meta de carbon neutrality 2030. Score TCFD subió a <strong>A−</strong>. Diversidad en liderazgo creció 4pp.'
},

// ============================================================
// COMERCIALES (5)
// ============================================================
ventas_ejecutivas: {
  category: 'Comercial',
  icon: '◭',
  accent: '#D4AC4C',
  accentDark: '#8A6D23',
  title: 'Ventas Ejecutivas',
  subtitle: 'Revenue YTD · YoY · Top productos · Performance vendedores',
  industry: 'B2B · B2C · Comercio · Distribución',
  kpis: [
    { l: 'Ventas YTD',    v: 48.2, suf: 'M', pre: '$', d: '+12.4%', dir: 'up', spark: [3.1,3.4,3.8,4.2,4.5,4.7,4.6,4.8,4.9,5.1,5.0,5.1] },
    { l: 'Crecimiento',   v: 12.4, suf: '%', d: '+3.1pp', dir: 'up', spark: [8,9,10,11,11.5,11.8,12,12.1,12.2,12.3,12.4,12.4] },
    { l: 'Clientes',      v: 1247, suf: '', d: '+89', dir: 'up', spark: [1100,1130,1158,1170,1195,1210,1220,1225,1232,1238,1244,1247] },
    { l: 'Ticket prom.',  v: 38.7, suf: 'K', pre: '$', d: '+$2.4K', dir: 'up', spark: [35,36,36.5,37,37.4,37.8,38,38.2,38.4,38.5,38.6,38.7] },
    { l: 'Margen',        v: 32.1, suf: '%', d: '−0.4pp', dir: 'down', spark: [33.5,33,32.8,32.6,32.5,32.4,32.3,32.3,32.2,32.2,32.1,32.1] },
    { l: '# Pedidos',     v: 3842, suf: '', d: '+412', dir: 'up', spark: [3200,3280,3350,3420,3490,3560,3620,3680,3720,3770,3810,3842] }
  ],
  slicers: [
    { l: 'Región',     opts: ['Norte','Centro','Sur','Bajío'] },
    { l: 'Vendedor',   opts: ['Alvaro P.','Sofía R.','Memo C.','Jorge L.','Ana M.'] },
    { l: 'Categoría',  opts: ['Industrial','Construcción','Retail','Servicios','Tecnología'] }
  ],
  charts: {
    main: { title: 'Ventas mensuales vs año anterior', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [3.1,3.4,3.8,4.2,4.5,4.7,4.6,4.8,4.9,5.1,5.0,5.1],
      data2: [2.8,3.0,3.3,3.6,3.9,4.0,4.0,4.1,4.2,4.3,4.4,4.5] },
    donut: { title: 'Distribución por región', labels: ['Norte','Centro','Sur','Bajío'], data: [42,28,18,12] },
    bar: { title: 'Top 10 productos', labels: ['Acero P-42','Cemento Tipo I','Resina Epoxi','Tubería 4in','Lámina Galv.','Pintura Ind.','Ferretería','Aislante','Tornillería','Soldadura'], data: [842,712,658,591,547,489,432,398,367,312] }
  },
  table: {
    head: ['Vendedor','Ventas (M)','Margen','vs Meta','Status'],
    rows: [
      ['Alvaro P.','$12.4','34%','+8%','Excelente'],
      ['Sofía R.','$10.8','32%','+5%','Excelente'],
      ['Memo C.','$9.2','36%','+12%','Excelente'],
      ['Jorge L.','$7.6','28%','−3%','Vigilar'],
      ['Ana M.','$5.4','31%','−1%','OK']
    ]
  },
  narrative: 'Ventas <strong>$48.2M YTD</strong> (+12.4% YoY). Top productos lideran con <strong>Acero P-42 ($842K)</strong>. Margen estable en 32.1% pese a presión en Norte. Top 3 vendedores generan 61% del revenue.'
},

marketing: {
  category: 'Comercial',
  icon: '◉',
  accent: '#B23A48',
  accentDark: '#8A2A36',
  title: 'Marketing Digital',
  subtitle: 'CAC · LTV · ROAS · Conversion funnel',
  industry: 'D2C · SaaS · Performance marketing',
  kpis: [
    { l: 'Inversión total',v: 1.84, suf: 'M', pre: '$', d: '+$240K', dir: 'up', spark: [120,135,142,155,168,175,180,178,182,184,184,184] },
    { l: 'CAC',            v: 1842, suf: '', pre: '$', d: '−$320', dir: 'up', spark: [2400,2280,2180,2100,2050,2000,1980,1950,1920,1890,1860,1842] },
    { l: 'LTV',            v: 12400, suf: '', pre: '$', d: '+$1.8K', dir: 'up', spark: [9800,10200,10600,11000,11200,11500,11700,11900,12100,12200,12300,12400] },
    { l: 'LTV / CAC',      v: 6.7,  suf: 'x', d: '+1.2x', dir: 'up', spark: [4.1,4.5,4.9,5.2,5.5,5.8,6.0,6.2,6.4,6.5,6.6,6.7] },
    { l: 'ROAS',           v: 4.2, suf: 'x', d: '+0.6x', dir: 'up', spark: [3.0,3.2,3.4,3.6,3.7,3.8,3.9,4.0,4.1,4.15,4.18,4.2] },
    { l: 'Conv. rate',     v: 8.4, suf: '%', d: '+1.2pp', dir: 'up', spark: [6.5,6.8,7.0,7.2,7.5,7.7,7.9,8.0,8.1,8.2,8.3,8.4] }
  ],
  slicers: [
    { l: 'Canal',     opts: ['Google Ads','Meta','LinkedIn','Email','Orgánico','Referido'] },
    { l: 'Campaña',   opts: ['Q1 Branding','Q2 Performance','Q3 Retención','Q4 Lanzamiento'] }
  ],
  charts: {
    main: { title: 'CAC vs LTV últimos 12 meses', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [2400,2280,2180,2100,2050,2000,1980,1950,1920,1890,1860,1842],
      data2: [9800,10200,10600,11000,11200,11500,11700,11900,12100,12200,12300,12400] },
    donut: { title: 'Inversión por canal', labels: ['Google Ads','Meta','LinkedIn','Email','Orgánico','Referido'], data: [38,24,18,8,7,5] },
    bar: { title: 'Top campañas (ROAS)', labels: ['Q4-Lanzamiento','Q3-Retargeting','Q2-Performance','Q1-Branding','Email-Reactiv.','LinkedIn-Lead'], data: [6.8,5.4,4.9,3.2,8.1,5.8] }
  },
  table: {
    head: ['Canal','Inversión','CAC','ROAS','Conv. %'],
    rows: [
      ['Google Ads','$680K','$1,940','4.5x','9.2%'],
      ['Meta','$420K','$2,120','3.8x','7.4%'],
      ['LinkedIn','$310K','$2,840','3.2x','5.8%'],
      ['Email','$140K','$840','9.1x','12.4%'],
      ['Referido','$92K','$520','14.2x','18.6%']
    ]
  },
  narrative: '<strong>LTV/CAC en 6.7x</strong> (target 3x sobrepasado). Email y referidos son canales más eficientes pero con menor escala. Google Ads sigue siendo motor de volumen con ROAS estable 4.5x. CAC bajó <strong>$320</strong> con optimización Q4.'
},

cx: {
  category: 'Comercial',
  icon: '◐',
  accent: '#6B4D8A',
  accentDark: '#4F3868',
  title: 'Customer Experience (CX)',
  subtitle: 'NPS · CSAT · First Response Time · Resolution rate',
  industry: 'Retail · SaaS · Servicios · Cualquier negocio con clientes',
  kpis: [
    { l: 'NPS',           v: 62, suf: '', d: '+8', dir: 'up', spark: [45,48,50,52,54,55,57,58,59,60,61,62] },
    { l: 'CSAT',          v: 4.5, suf: '/5', d: '+0.3', dir: 'up', spark: [4.0,4.05,4.1,4.15,4.2,4.25,4.3,4.35,4.4,4.42,4.45,4.5] },
    { l: 'FRT',           v: 1.2, suf: ' hrs', d: '−0.8 hrs', dir: 'up', spark: [3.2,3.0,2.7,2.4,2.2,2.0,1.8,1.6,1.5,1.4,1.3,1.2] },
    { l: 'FCR',           v: 78, suf: '%', d: '+12pp', dir: 'up', spark: [62,64,66,68,69,70,72,73,74,75,76,78] },
    { l: 'Tickets mes',   v: 1842, suf: '', d: '+184', dir: 'up', spark: [1400,1480,1540,1600,1640,1680,1710,1740,1770,1790,1820,1842] },
    { l: 'Churn rate',    v: 4.2, suf: '%', d: '−1.4pp', dir: 'up', spark: [6.8,6.4,6.0,5.6,5.3,5.0,4.8,4.6,4.5,4.4,4.3,4.2] }
  ],
  slicers: [
    { l: 'Canal',     opts: ['Email','WhatsApp','Teléfono','Chat web','Twitter'] },
    { l: 'Tipo',      opts: ['Soporte','Reclamo','Consulta','Devolución'] }
  ],
  charts: {
    main: { title: 'NPS evolución 12 meses', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [45,48,50,52,54,55,57,58,59,60,61,62],
      data2: [50,50,50,50,50,50,50,50,50,50,50,50] },
    donut: { title: 'Distribución NPS', labels: ['Promoters','Passives','Detractors'], data: [62,28,10] },
    bar: { title: 'Tickets por canal', labels: ['Email','WhatsApp','Teléfono','Chat web','Twitter'], data: [620,520,310,280,112] }
  },
  table: {
    head: ['Agente','# Tickets','CSAT','FCR','Performance'],
    rows: [
      ['María L.','248','4.7','82%','Excelente'],
      ['Juan P.','215','4.6','79%','Excelente'],
      ['Ana C.','198','4.4','76%','OK'],
      ['Roberto V.','184','4.3','71%','OK'],
      ['Carla M.','142','4.0','62%','Vigilar']
    ]
  },
  narrative: '<strong>NPS en 62</strong> (subió 17 puntos en 12 meses) — entramos en zona Promoter pura. FCR creció a 78%. Churn bajó a 4.2%. Email sigue siendo canal #1 pero WhatsApp creció 38% en volumen.'
},

field_sales: {
  category: 'Comercial',
  icon: '◈',
  accent: '#E07A5F',
  accentDark: '#A85841',
  title: 'Field Sales / Pipeline B2B',
  subtitle: 'Pipeline · Win rate · Sales velocity · Forecast',
  industry: 'B2B · Industrial · Cuentas de gran tamaño',
  kpis: [
    { l: 'Pipeline total', v: 184, suf: 'M', pre: '$', d: '+$24M', dir: 'up', spark: [140,145,150,155,160,165,168,172,176,180,182,184] },
    { l: 'Win rate',       v: 38, suf: '%', d: '+5pp', dir: 'up', spark: [28,29,30,32,33,34,35,36,36.5,37,37.5,38] },
    { l: 'Sales velocity', v: 28, suf: ' días', d: '−6 días', dir: 'up', spark: [42,40,38,36,35,33,32,31,30,29,28.5,28] },
    { l: '# Deals',        v: 142, suf: '', d: '+18', dir: 'up', spark: [98,105,112,118,123,128,132,135,138,140,141,142] },
    { l: 'Forecast Q4',    v: 32.5, suf: 'M', pre: '$', d: '+$4.2M', dir: 'up', spark: [22,24,25,26,27,28,29,30,30.5,31,31.5,32.5] },
    { l: 'Avg deal size',  v: 285, suf: 'K', pre: '$', d: '+$32K', dir: 'up', spark: [220,232,242,250,258,265,270,275,278,281,283,285] }
  ],
  slicers: [
    { l: 'Stage',  opts: ['Lead','Qualified','Proposal','Negotiation','Closed Won','Closed Lost'] },
    { l: 'Owner',  opts: ['Alvaro P.','Sofía R.','Memo C.','Jorge L.','Ana M.'] }
  ],
  charts: {
    main: { title: 'Pipeline value por stage', type: 'combo',
      labels: ['Lead','Qualified','Proposal','Negotiation','Closed Won','Closed Lost'],
      data1: [62,48,38,24,8,4],
      data2: [60,45,35,22,8,4] },
    donut: { title: 'Pipeline por industria', labels: ['Industrial','Construcción','Retail','Servicios','Tecnología'], data: [38,22,18,12,10] },
    bar: { title: 'Top 8 deals abiertos', labels: ['ACME Inc','Globex','Initech','Massive Dyn','Soylent Co','Hooli','Vehement','Stark Ind'], data: [4.2,3.8,3.2,2.8,2.4,2.1,1.9,1.6] }
  },
  table: {
    head: ['Cuenta','Stage','Valor','Days in stage','Owner'],
    rows: [
      ['ACME Inc','Negotiation','$4.2M','12','Memo C.'],
      ['Globex','Proposal','$3.8M','8','Alvaro P.'],
      ['Initech','Qualified','$3.2M','15','Sofía R.'],
      ['Massive','Negotiation','$2.8M','22','Jorge L.'],
      ['Soylent','Proposal','$2.4M','5','Ana M.']
    ]
  },
  narrative: 'Pipeline en <strong>$184M</strong>. Win rate creció a <strong>38%</strong> (+5pp YoY). Sales velocity bajó a 28 días. Forecast Q4 firme en <strong>$32.5M</strong> con 4 deals en negociación de alto valor.'
},

ecommerce: {
  category: 'Comercial',
  icon: '🛒',
  accent: '#1B6E8A',
  accentDark: '#0F4F66',
  title: 'eCommerce / D2C',
  subtitle: 'Conversion funnel · AOV · Cart abandonment · Repeat rate',
  industry: 'Retail online · Marketplaces · D2C',
  kpis: [
    { l: 'GMV YTD',        v: 24.8, suf: 'M', pre: '$', d: '+$3.2M', dir: 'up', spark: [1.5,1.7,1.9,2.0,2.2,2.3,2.4,2.4,2.5,2.5,2.6,2.6] },
    { l: 'Sesiones',       v: 1.42, suf: 'M', d: '+184K', dir: 'up', spark: [110,115,118,120,122,125,128,130,132,135,138,142] },
    { l: 'Conversion',     v: 3.8, suf: '%', d: '+0.6pp', dir: 'up', spark: [2.8,2.9,3.0,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.75,3.8] },
    { l: 'AOV',            v: 462, suf: '', pre: '$', d: '+$28', dir: 'up', spark: [410,418,425,432,438,442,448,452,455,458,460,462] },
    { l: 'Cart abandon.',  v: 68, suf: '%', d: '−4pp', dir: 'up', spark: [78,76,75,74,73,72,71,70,69.5,69,68.5,68] },
    { l: 'Repeat rate',    v: 32, suf: '%', d: '+5pp', dir: 'up', spark: [22,23,24,25,26,27,28,29,30,31,31.5,32] }
  ],
  slicers: [
    { l: 'Canal',    opts: ['Web','Mobile App','Marketplace','Tienda física'] },
    { l: 'Categoría',opts: ['Moda','Electrónica','Hogar','Deportes','Belleza'] }
  ],
  charts: {
    main: { title: 'Funnel: Sesiones → Compra', type: 'combo',
      labels: ['Sesión','Producto vista','Cart','Checkout','Compra'],
      data1: [1420,640,180,98,54],
      data2: [1420,710,210,110,62] },
    donut: { title: 'GMV por categoría', labels: ['Moda','Electrónica','Hogar','Deportes','Belleza'], data: [32,28,18,14,8] },
    bar: { title: 'Top 8 SKUs por GMV', labels: ['SKU-A1','SKU-B2','SKU-C3','SKU-D4','SKU-E5','SKU-F6','SKU-G7','SKU-H8'], data: [842,712,658,591,547,489,432,398] }
  },
  table: {
    head: ['Canal','Sesiones','CR','AOV','GMV'],
    rows: [
      ['Web','620K','3.4%','$485','$10.2M'],
      ['Mobile App','480K','4.8%','$420','$9.7M'],
      ['Marketplace','280K','2.6%','$390','$2.8M'],
      ['Tienda física','40K','12.4%','$680','$2.1M']
    ]
  },
  narrative: 'GMV YTD <strong>$24.8M</strong> (+15% YoY). Mobile App es canal con mayor CR (4.8%). Cart abandonment cayó 4pp con checkout simplificado. Repeat rate creció a <strong>32%</strong> con programa loyalty.'
},

// ============================================================
// FINANZAS (4)
// ============================================================
finanzas_ejecutivas: {
  category: 'Finanzas',
  icon: '$',
  accent: '#0F1B2D',
  accentDark: '#000810',
  title: 'Finanzas Ejecutivas (P&L)',
  subtitle: 'Revenue · EBITDA · Margen · Cash flow · vs Presupuesto',
  industry: 'Cualquier negocio con P&L mensual',
  kpis: [
    { l: 'Revenue',     v: 52.3, suf: 'M', pre: '$', d: '+9.8%', dir: 'up', spark: [3.8,4.0,4.2,4.4,4.5,4.6,4.5,4.7,4.8,4.9,4.7,4.2] },
    { l: 'EBITDA',      v: 14.7, suf: 'M', pre: '$', d: '+11.2%', dir: 'up', spark: [1.0,1.1,1.2,1.2,1.3,1.3,1.3,1.3,1.3,1.4,1.3,1.0] },
    { l: 'Margen neto', v: 28.1, suf: '%', d: '+1.4pp', dir: 'up', spark: [26,26.5,26.8,27,27.3,27.5,27.7,27.8,27.9,28,28.1,28.1] },
    { l: 'Cash op.',    v: 3.2, suf: 'M', pre: '$', d: '+$0.4M', dir: 'up', spark: [2.4,2.5,2.6,2.7,2.8,2.9,3.0,3.0,3.1,3.1,3.2,3.2] },
    { l: 'ROE',         v: 18.4, suf: '%', d: '+2.2pp', dir: 'up', spark: [14,14.5,15,15.5,16,16.5,17,17.4,17.8,18,18.2,18.4] },
    { l: 'Quick ratio', v: 1.42, suf: '', d: '+0.08', dir: 'up', spark: [1.30,1.32,1.34,1.35,1.37,1.38,1.39,1.40,1.41,1.41,1.42,1.42] }
  ],
  slicers: [
    { l: 'Centro', opts: ['Operaciones','Comercial','Admin','TI'] },
    { l: 'Tipo',   opts: ['Real','Presupuesto','Forecast'] }
  ],
  charts: {
    main: { title: 'Revenue vs EBITDA mensual', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [3.8,4.0,4.2,4.4,4.5,4.6,4.5,4.7,4.8,4.9,4.7,4.2],
      data2: [1.0,1.1,1.2,1.2,1.3,1.3,1.3,1.3,1.3,1.4,1.3,1.0] },
    donut: { title: 'Distribución de gastos', labels: ['Nómina','MP','Servicios','Logística','Mantto.','Otros'], data: [42,28,12,8,6,4] },
    bar: { title: 'Razones financieras', labels: ['Margen bruto','Margen op.','Margen neto','ROE','ROA','Quick ratio','Current ratio'], data: [42,31,28,18,12,1.42,1.85] }
  },
  table: {
    head: ['Cuenta','Real','Presup.','Var %','Status'],
    rows: [
      ['Revenue','$52.3M','$50.0M','+4.6%','OK'],
      ['Costo ventas','$32.1M','$31.5M','+1.9%','OK'],
      ['Margen bruto','$20.2M','$18.5M','+9.2%','Excelente'],
      ['EBITDA','$14.7M','$13.2M','+11.4%','Excelente'],
      ['Cash op.','$3.2M','$2.8M','+14.3%','Excelente']
    ]
  },
  narrative: 'EBITDA <strong>$14.7M</strong> (+11.2% YoY). Margen neto creció <strong>1.4pp</strong> a 28.1%. Gastos op. 5.6% sobre presupuesto — driver: nómina TI (+18%). Quick ratio en 1.42 indica liquidez saludable.'
},

cash_flow: {
  category: 'Finanzas',
  icon: '◇',
  accent: '#117DBB',
  accentDark: '#0C5D8A',
  title: 'Cash Flow / Tesorería',
  subtitle: 'Operating CF · AR aging · DSO · Free Cash Flow',
  industry: 'Empresas con ciclo de cobro · Manufactura · Servicios',
  kpis: [
    { l: 'Operating CF', v: 18.4, suf: 'M', pre: '$', d: '+$2.4M', dir: 'up', spark: [12,13,14,14.5,15,15.5,16,16.5,17,17.5,18,18.4] },
    { l: 'Free CF',      v: 12.2, suf: 'M', pre: '$', d: '+$1.8M', dir: 'up', spark: [8,8.5,9,9.5,10,10.5,11,11.3,11.6,11.9,12,12.2] },
    { l: 'DSO',          v: 38, suf: ' días', d: '−6 días', dir: 'up', spark: [52,50,48,46,44,42,41,40,39,38.5,38.2,38] },
    { l: 'AR total',     v: 24.8, suf: 'M', pre: '$', d: '−$1.2M', dir: 'up', spark: [28,27.5,27,26.5,26,25.7,25.4,25.2,25,24.9,24.85,24.8] },
    { l: 'Cash on hand', v: 8.4, suf: 'M', pre: '$', d: '+$1.2M', dir: 'up', spark: [6,6.4,6.8,7,7.2,7.4,7.6,7.8,8,8.1,8.2,8.4] },
    { l: 'Burn rate',    v: 1.8, suf: 'M/mes', pre: '$', d: '−$0.2M', dir: 'up', spark: [2.4,2.3,2.2,2.1,2.0,2.0,1.95,1.92,1.9,1.88,1.85,1.8] }
  ],
  slicers: [
    { l: 'Periodo', opts: ['0-30','31-60','61-90','91-120','120+'] },
    { l: 'Cliente', opts: ['Top 10','Mid','Long tail'] }
  ],
  charts: {
    main: { title: 'Cash flow operativo 12m', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [1.2,1.3,1.4,1.45,1.5,1.55,1.6,1.65,1.7,1.75,1.8,1.84],
      data2: [1.0,1.1,1.2,1.25,1.3,1.35,1.4,1.45,1.5,1.55,1.6,1.62] },
    donut: { title: 'AR aging', labels: ['0-30 días','31-60','61-90','91-120','120+'], data: [62,18,10,6,4] },
    bar: { title: 'Top 10 cuentas vencidas', labels: ['ACME','Globex','Initech','Massive','Soylent','Hooli','Vehement','Stark','Wayne','Pied'], data: [3.2,2.8,2.4,2.1,1.8,1.6,1.4,1.2,1.0,0.8] }
  },
  table: {
    head: ['Cliente','Saldo','Días','Status','Acción'],
    rows: [
      ['ACME Inc','$3.2M','142','Crítico','Cobranza legal'],
      ['Globex','$2.8M','98','Vencido','Llamada CFO'],
      ['Initech','$2.4M','62','Vencido','Email + recordatorio'],
      ['Massive','$2.1M','38','Al día','Monitoreo'],
      ['Soylent','$1.8M','25','Al día','Monitoreo']
    ]
  },
  narrative: 'Operating CF <strong>$18.4M YTD</strong> (+15%). DSO bajó <strong>6 días</strong> a 38 con cobranza más agresiva. Free CF en <strong>$12.2M</strong> permite CapEx Q1 sin deuda. AR concentrado: top 5 son 60% del saldo.'
},

costos_dashboard: {
  category: 'Finanzas',
  icon: '◢',
  accent: '#704A4A',
  accentDark: '#4F3232',
  title: 'Análisis de Costos',
  subtitle: 'Variance vs presupuesto · Cost per unit · ABC costing · TCO',
  industry: 'Manufactura · Operaciones · Centros de costo grandes',
  kpis: [
    { l: 'Costo total',  v: 32.8, suf: 'M', pre: '$', d: '+$1.2M', dir: 'down', spark: [28,28.5,29,29.5,30,30.5,31,31.5,32,32.3,32.6,32.8] },
    { l: 'Variance',     v: 4.1, suf: '%', d: '+1.2pp', dir: 'down', spark: [2.8,2.9,3.0,3.2,3.3,3.5,3.6,3.7,3.8,3.95,4.05,4.1] },
    { l: 'Costo/unidad', v: 142, suf: '', pre: '$', d: '−$8', dir: 'up', spark: [165,162,158,155,152,150,148,146,145,144,143,142] },
    { l: '% Fijos',      v: 38, suf: '%', d: '−2pp', dir: 'up', spark: [42,41.5,41,40.5,40,39.5,39,38.8,38.5,38.3,38.1,38] },
    { l: '% Variables',  v: 62, suf: '%', d: '+2pp', dir: 'up', spark: [58,58.5,59,59.5,60,60.5,61,61.2,61.5,61.7,61.9,62] },
    { l: 'Margen contr.',v: 38, suf: '%', d: '+2pp', dir: 'up', spark: [34,34.5,35,35.5,36,36.5,37,37.2,37.5,37.7,37.9,38] }
  ],
  slicers: [
    { l: 'Centro CC', opts: ['CC-100 Producción','CC-200 Ventas','CC-300 Admin','CC-400 TI'] },
    { l: 'Tipo',      opts: ['Fijo','Variable'] }
  ],
  charts: {
    main: { title: 'Costos Real vs Presupuesto', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [2.4,2.5,2.6,2.7,2.75,2.8,2.85,2.9,2.95,3.0,3.1,3.2],
      data2: [2.3,2.4,2.5,2.6,2.65,2.7,2.75,2.8,2.85,2.9,2.95,3.0] },
    donut: { title: 'Costos por categoría', labels: ['Materia prima','Mano de obra','Energía','Logística','Mantto','Admin'], data: [38,22,12,10,8,10] },
    bar: { title: 'Variance por centro', labels: ['CC-100','CC-200','CC-300','CC-400','CC-500'], data: [8.2,4.5,2.1,12.8,1.4] }
  },
  table: {
    head: ['Centro','Real','Presup.','Var %','Status'],
    rows: [
      ['CC-100 Producción','$14.2M','$13.8M','+2.9%','OK'],
      ['CC-200 Ventas','$8.4M','$8.2M','+2.4%','OK'],
      ['CC-300 Admin','$5.6M','$5.5M','+1.8%','OK'],
      ['CC-400 TI','$3.2M','$2.8M','+14.3%','Crítico'],
      ['CC-500 Mantto','$1.4M','$1.4M','+0%','OK']
    ]
  },
  narrative: 'Costo total <strong>$32.8M</strong> con variance +4.1%. CC-400 TI sobrepasa <strong>+14.3%</strong> — driver: licencias y consultorías. Costo/unidad bajó $8 con eficiencias en producción. Margen contribución mejoró 2pp.'
},

activos: {
  category: 'Finanzas',
  icon: '◣',
  accent: '#4A6B7C',
  accentDark: '#2F4754',
  title: 'Activos Fijos / CapEx',
  subtitle: 'CapEx ejecutado · ROI proyectos · Depreciation · Disposiciones',
  industry: 'Empresas con activos productivos significativos',
  kpis: [
    { l: 'CapEx YTD',     v: 12.4, suf: 'M', pre: '$', d: '−$1.8M vs Plan', dir: 'down', spark: [0.8,1.5,2.4,3.6,4.8,6.0,7.2,8.4,9.6,10.8,11.6,12.4] },
    { l: 'Depreciation',  v: 2.8, suf: 'M', pre: '$', d: '+$0.2M', dir: 'down', spark: [0.2,0.4,0.6,0.85,1.05,1.25,1.45,1.65,1.85,2.1,2.45,2.8] },
    { l: '# Activos',     v: 1842, suf: '', d: '+24', dir: 'up', spark: [1750,1760,1770,1780,1790,1800,1810,1815,1822,1830,1836,1842] },
    { l: 'Valor neto',    v: 84.2, suf: 'M', pre: '$', d: '+$8.4M', dir: 'up', spark: [70,72,74,76,78,79,80,81,82,82.8,83.5,84.2] },
    { l: 'Edad promedio', v: 4.8, suf: ' años', d: '+0.4', dir: 'down', spark: [4.0,4.1,4.2,4.3,4.4,4.5,4.6,4.65,4.7,4.75,4.78,4.8] },
    { l: 'ROI proyectos', v: 18.4, suf: '%', d: '+3pp', dir: 'up', spark: [12,13,14,14.5,15,15.5,16,16.5,17,17.5,18,18.4] }
  ],
  slicers: [
    { l: 'Categoría', opts: ['Maquinaria','Edificios','Vehículos','TI','Otros'] },
    { l: 'Estado',    opts: ['Operativo','Mantto','Baja','En tránsito'] }
  ],
  charts: {
    main: { title: 'CapEx ejecutado vs Plan', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [0.8,0.7,0.9,1.2,1.2,1.2,1.2,1.2,1.2,1.2,0.8,0.8],
      data2: [1.0,1.0,1.2,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5] },
    donut: { title: 'CapEx por categoría', labels: ['Maquinaria','Edificios','Vehículos','TI','Otros'], data: [42,22,15,12,9] },
    bar: { title: 'Top 8 proyectos por inversión', labels: ['Línea L-04 nueva','Expansión Planta C','Flotilla 2026','ERP upgrade','Solar fotovoltaico','Centro distribución','Robot ensamble','Software CAD'], data: [3.2,2.8,1.8,1.4,1.2,0.9,0.8,0.6] }
  },
  table: {
    head: ['Proyecto','Inversión','ROI','Status','% Avance'],
    rows: [
      ['Línea L-04 nueva','$3.2M','22%','En curso','78%'],
      ['Expansión Planta C','$2.8M','18%','En curso','62%'],
      ['Flotilla 2026','$1.8M','15%','Completado','100%'],
      ['ERP upgrade','$1.4M','24%','En curso','45%'],
      ['Solar fotovoltaico','$1.2M','28%','Completado','100%']
    ]
  },
  narrative: 'CapEx <strong>$12.4M YTD</strong> (vs plan $14.2M). 4 proyectos completados con ROI promedio <strong>22%</strong>. Edad promedio sube a 4.8 años — recomendación: acelerar reemplazo de líneas L-01 y L-02.'
},

// ============================================================
// SUPPLY CHAIN (3)
// ============================================================
inventario: {
  category: 'Supply Chain',
  icon: '▤',
  accent: '#E07A5F',
  accentDark: '#A85841',
  title: 'Inventarios y Almacén',
  subtitle: 'Rotación · ABC · Stockouts · Días stock',
  industry: 'Distribución · Retail · Manufactura',
  kpis: [
    { l: 'Valor inv.',  v: 8.4, suf: 'M', pre: '$', d: '−$0.3M', dir: 'up', spark: [9.2,9.0,8.9,8.8,8.7,8.6,8.5,8.5,8.4,8.4,8.4,8.4] },
    { l: 'Rotación',    v: 4.2, suf: 'x', d: '+0.4x', dir: 'up', spark: [3.6,3.7,3.8,3.8,3.9,4.0,4.0,4.1,4.1,4.2,4.2,4.2] },
    { l: 'Días stock',  v: 87, suf: '', d: '−9 días', dir: 'up', spark: [101,99,96,94,92,90,89,88,87,87,87,87] },
    { l: 'SKUs A',      v: 312, suf: '', d: '+12', dir: 'up', spark: [280,285,290,295,298,302,305,308,310,311,312,312] },
    { l: 'Stockouts',   v: 2, suf: '', d: '+2', dir: 'down', spark: [0,0,0,0,1,1,1,1,2,2,2,2] },
    { l: '% Obsoleto',  v: 6.2, suf: '%', d: '−1.1pp', dir: 'up', spark: [7.5,7.4,7.3,7.1,6.9,6.7,6.6,6.5,6.4,6.3,6.2,6.2] }
  ],
  slicers: [
    { l: 'Almacén', opts: ['CDMX','GDL','MTY','BAJ','VRZ'] },
    { l: 'ABC',     opts: ['A','B','C'] }
  ],
  charts: {
    main: { title: 'Valor inventario por almacén', type: 'combo',
      labels: ['CDMX','GDL','MTY','BAJ','VRZ'],
      data1: [2.8,1.9,1.6,1.2,0.9],
      data2: [3.0,2.0,1.7,1.3,1.0] },
    donut: { title: 'Distribución ABC', labels: ['Clase A','Clase B','Clase C'], data: [78,16,6] },
    bar: { title: 'Top 10 stockouts', labels: ['SKU-04821','SKU-12903','SKU-07712','SKU-44102','SKU-99812','SKU-11203','SKU-67721','SKU-23410','SKU-88210','SKU-01910'], data: [142,128,114,98,92,87,71,68,52,41] }
  },
  table: {
    head: ['SKU','Almacén','Stock','Rotación','Estado'],
    rows: [
      ['SKU-04821','CDMX','0','8.2x','Stockout'],
      ['SKU-12903','GDL','0','6.8x','Stockout'],
      ['SKU-77821','MTY','14','0.4x','Lento'],
      ['SKU-44102','CDMX','120','5.1x','OK'],
      ['SKU-99812','BAJ','85','4.7x','OK']
    ]
  },
  narrative: 'Rotación <strong>4.2x</strong> (+0.4x QoQ). Días stock bajaron <strong>9 días</strong> a 87. <strong>2 SKUs en stockout total</strong> en CDMX/GDL (clase A) — riesgo pérdida $145K MXN. Obsoleto cayó a 6.2% (target 5%).'
},

sop: {
  category: 'Supply Chain',
  icon: '◧',
  accent: '#7C5CB6',
  accentDark: '#553A8C',
  title: 'S&OP (Sales & Operations)',
  subtitle: 'Forecast accuracy · MAPE · Demand-supply gap · Plan adherence',
  industry: 'Empresas con planeación de demanda y producción',
  kpis: [
    { l: 'Forecast Acc.', v: 87, suf: '%', d: '+4pp', dir: 'up', spark: [78,80,81,82,83,84,84.5,85,86,86.5,86.8,87] },
    { l: 'MAPE',          v: 12.4, suf: '%', d: '−2.1pp', dir: 'up', spark: [18,17.5,17,16,15.5,15,14.5,14,13.5,13,12.6,12.4] },
    { l: 'Demand-Supply', v: 4.2, suf: '% gap', d: '−1.8pp', dir: 'up', spark: [8,7.5,7,6.5,6,5.5,5.2,5,4.7,4.5,4.3,4.2] },
    { l: 'Plan adherence',v: 94, suf: '%', d: '+3pp', dir: 'up', spark: [88,89,90,91,91.5,92,92.5,93,93.5,93.8,94,94] },
    { l: 'Forecast Bias', v: 1.4, suf: '%', d: '−0.6pp', dir: 'up', spark: [3.0,2.8,2.6,2.4,2.2,2.0,1.9,1.8,1.7,1.6,1.5,1.4] },
    { l: 'Inv. days',     v: 42, suf: '', d: '−5 días', dir: 'up', spark: [54,52,50,48,46,45,44,43.5,43,42.5,42.2,42] }
  ],
  slicers: [
    { l: 'SKU',  opts: ['Top 10','Mid','Long tail'] },
    { l: 'Mes',  opts: ['Próximo','30 días','90 días'] }
  ],
  charts: {
    main: { title: 'Forecast vs Real (12m)', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [3200,3400,3600,3800,4000,4200,4100,4300,4400,4500,4400,4200],
      data2: [3000,3300,3500,3650,3900,4100,4050,4250,4350,4450,4380,4150] },
    donut: { title: 'MAPE por SKU class', labels: ['Clase A','Clase B','Clase C'], data: [8.2,12.4,18.6] },
    bar: { title: 'Top SKUs con mayor desviación', labels: ['SKU-A1','SKU-B2','SKU-C3','SKU-D4','SKU-E5','SKU-F6','SKU-G7','SKU-H8'], data: [28,22,18,15,12,10,8,6] }
  },
  table: {
    head: ['SKU','Forecast','Real','Var %','Acción'],
    rows: [
      ['SKU-A1','4200','3800','−9.5%','Revisar promo'],
      ['SKU-B2','3800','4400','+15.8%','Aumentar capacidad'],
      ['SKU-C3','2400','2580','+7.5%','OK'],
      ['SKU-D4','1800','1750','−2.8%','OK'],
      ['SKU-E5','1200','1180','−1.7%','OK']
    ]
  },
  narrative: 'Forecast accuracy <strong>87%</strong> (+4pp QoQ) — top performance del año. MAPE bajó a 12.4%. Plan adherence en 94%. SKU-B2 sobrepasa demanda 15.8% — recomendación: aumentar capacidad antes de Q1.'
},

abastecimientos: {
  category: 'Supply Chain',
  icon: '◈',
  accent: '#7A8C5A',
  accentDark: '#566640',
  title: 'Abastecimientos / Procurement',
  subtitle: 'Spend · Lead time · Supplier scorecard · Contract compliance',
  industry: 'Manufactura · Construcción · Cualquier comprador con OCs',
  kpis: [
    { l: 'Spend YTD',     v: 28.4, suf: 'M', pre: '$', d: '+$2.1M', dir: 'up', spark: [1.8,2.0,2.2,2.3,2.4,2.4,2.4,2.5,2.5,2.5,2.6,2.6] },
    { l: '# Proveedores', v: 142, suf: '', d: '+8', dir: 'up', spark: [120,124,128,131,134,136,138,139,140,141,142,142] },
    { l: 'Lead time prom.',v: 18, suf: ' días', d: '−3 días', dir: 'up', spark: [24,23,22,21.5,21,20,20,19.5,19,18.5,18.2,18] },
    { l: 'OCs On-Time',   v: 92, suf: '%', d: '+4pp', dir: 'up', spark: [82,84,85,86,87,88,89,89.5,90.5,91,91.8,92] },
    { l: 'Top 10 spend %',v: 64, suf: '%', d: '+2pp', dir: 'down', spark: [58,59,60,61,62,62.5,63,63.3,63.6,63.8,64,64] },
    { l: 'Calidad PPM',   v: 1240, suf: '', d: '−240', dir: 'up', spark: [1800,1700,1600,1550,1500,1450,1400,1380,1340,1300,1270,1240] }
  ],
  slicers: [
    { l: 'Categoría',   opts: ['Materia prima','Servicios','Equipo','Insumos','Logística'] },
    { l: 'Proveedor',   opts: ['Top 10','Mid','Long tail'] }
  ],
  charts: {
    main: { title: 'Spend mensual vs presupuesto', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [1.8,2.0,2.2,2.3,2.4,2.4,2.4,2.5,2.5,2.5,2.6,2.6],
      data2: [1.9,2.1,2.2,2.3,2.4,2.5,2.5,2.5,2.5,2.5,2.5,2.5] },
    donut: { title: 'Spend por categoría', labels: ['Materia prima','Servicios','Equipo','Insumos','Logística'], data: [48,22,12,10,8] },
    bar: { title: 'Top 10 proveedores por spend', labels: ['ProvA','ProvB','ProvC','ProvD','ProvE','ProvF','ProvG','ProvH','ProvI','ProvJ'], data: [3.8,3.2,2.8,2.4,2.1,1.8,1.5,1.3,1.1,0.9] }
  },
  table: {
    head: ['Proveedor','Spend','Lead time','OnTime','Score'],
    rows: [
      ['Aluxe Industrial','$3.8M','15d','96%','A'],
      ['GTM Industrial','$3.2M','18d','94%','A'],
      ['Suminregio','$2.8M','22d','89%','B'],
      ['Distribuidora N','$2.4M','12d','98%','A'],
      ['Cobre Bajío','$2.1M','25d','85%','B']
    ]
  },
  narrative: 'Spend <strong>$28.4M YTD</strong> con 142 proveedores. Lead time prom. cayó <strong>3 días</strong>. Concentración top 10 en <strong>64%</strong> (vs target <60% — vigilar diversificación). Calidad mejora 240 PPM con scorecard agresivo.'
},

// ============================================================
// SOPORTE (3)
// ============================================================
rh: {
  category: 'Soporte',
  icon: '👥',
  accent: '#0A7C82',
  accentDark: '#055A60',
  title: 'Recursos Humanos',
  subtitle: 'Headcount · Rotación · Costo nómina · eNPS · Diversidad',
  industry: 'Cualquier empresa con > 50 empleados',
  kpis: [
    { l: 'Headcount',    v: 384, suf: '', d: '+18', dir: 'up', spark: [340,345,350,355,360,365,370,374,377,380,382,384] },
    { l: 'Rotación',     v: 14, suf: '%', d: '−4pp', dir: 'up', spark: [22,21,20,19,18,17,16.5,16,15.5,15,14.5,14] },
    { l: 'Time to hire', v: 32, suf: ' días', d: '−8 días', dir: 'up', spark: [48,45,42,40,38,36,35,34,33.5,33,32.5,32] },
    { l: 'Costo nómina', v: 18.4, suf: 'M', pre: '$', d: '+$1.2M', dir: 'down', spark: [15.2,15.6,16.0,16.4,16.8,17.0,17.2,17.5,17.8,18.0,18.2,18.4] },
    { l: 'eNPS',         v: 48, suf: '', d: '+12', dir: 'up', spark: [28,30,32,35,37,39,41,43,44,45,46,48] },
    { l: 'Mujeres lid.', v: 38, suf: '%', d: '+4pp', dir: 'up', spark: [30,31,32,33,34,35,35,36,37,37.5,38,38] }
  ],
  slicers: [
    { l: 'Departamento', opts: ['Ventas','Operaciones','Finanzas','TI','Marketing','RH','Producción'] },
    { l: 'Seniority',    opts: ['Operativo','Coordinador','Gerente','Director'] }
  ],
  charts: {
    main: { title: 'Headcount vs Rotación', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [340,345,350,355,360,365,370,374,377,380,382,384],
      data2: [22,21,20,19,18,17,16.5,16,15.5,15,14.5,14] },
    donut: { title: 'Headcount por departamento', labels: ['Operaciones','Ventas','Producción','TI','Finanzas','RH','Marketing'], data: [32,22,18,12,8,5,3] },
    bar: { title: 'Rotación por departamento', labels: ['Producción','Ventas','TI','Operaciones','Marketing','Finanzas','RH'], data: [22,18,16,12,10,8,4] }
  },
  table: {
    head: ['Departamento','Headcount','Rotación','Tiempo Hire','eNPS'],
    rows: [
      ['Operaciones','124','12%','28d','52'],
      ['Ventas','86','18%','32d','45'],
      ['Producción','68','22%','38d','38'],
      ['TI','46','16%','42d','58'],
      ['Finanzas','32','8%','28d','62']
    ]
  },
  narrative: 'Headcount <strong>384 empleados</strong> (+18 YTD). Rotación cayó a <strong>14%</strong> (−4pp YoY) — récord. Costo nómina creció pero menos que headcount (productividad +). eNPS subió 12 puntos a <strong>48</strong>. Diversidad en liderazgo creció 4pp.'
},

compliance: {
  category: 'Soporte',
  icon: '⚖',
  accent: '#5A4A6B',
  accentDark: '#3F3248',
  title: 'Compliance / Auditoría',
  subtitle: 'Audit findings · SOX compliance · Risk score · Time to remediate',
  industry: 'Empresas listadas · Regulated industries · Programas ISO',
  kpis: [
    { l: '# Auditorías',  v: 28, suf: '', d: '+4', dir: 'up', spark: [18,20,22,23,24,25,26,26,27,27,28,28] },
    { l: 'Hallazgos',     v: 142, suf: '', d: '−18', dir: 'up', spark: [185,180,175,170,165,160,155,150,148,146,144,142] },
    { l: 'Críticos',      v: 4, suf: '', d: '−6', dir: 'up', spark: [12,11,10,9,8,7,6,5,5,4,4,4] },
    { l: 'SLA cierre',    v: 28, suf: ' días', d: '−6 días', dir: 'up', spark: [42,40,38,36,34,32,31,30,29,28.5,28.2,28] },
    { l: 'SOX Compliance',v: 98, suf: '%', d: '+2pp', dir: 'up', spark: [92,93,94,95,95.5,96,96.5,97,97.3,97.6,97.8,98] },
    { l: 'Risk score',    v: 'Bajo', suf: '', d: 'baja de Med', dir: 'up', spark: null }
  ],
  slicers: [
    { l: 'Tipo audit', opts: ['SOX','ISO 9001','ISO 27001','GDPR','LOPD','Interna'] },
    { l: 'Severidad',  opts: ['Crítica','Alta','Media','Baja'] }
  ],
  charts: {
    main: { title: 'Hallazgos por mes (severidad)', type: 'combo',
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      data1: [12,11,10,9,8,7,6,5,5,4,4,4],
      data2: [25,24,22,20,18,16,15,14,13,12,11,10] },
    donut: { title: 'Hallazgos por área', labels: ['Finanzas','TI','Operaciones','RH','Compras'], data: [38,28,18,10,6] },
    bar: { title: 'Top 8 hallazgos abiertos', labels: ['SOX-101','ISO-204','GDPR-08','SOX-145','ISO-187','TI-22','RH-04','GDPR-12'], data: [62,48,38,32,28,22,18,12] }
  },
  table: {
    head: ['Audit ID','Tipo','Severidad','Días','Status'],
    rows: [
      ['SOX-101','SOX','Crítica','62','Abierta'],
      ['ISO-204','ISO 27001','Alta','48','En remediación'],
      ['GDPR-08','GDPR','Alta','38','En remediación'],
      ['SOX-145','SOX','Media','32','En remediación'],
      ['ISO-187','ISO 9001','Media','28','Cerrada']
    ]
  },
  narrative: 'Hallazgos críticos cayeron de 12 a <strong>4</strong>. SLA cierre bajó <strong>6 días</strong> a 28. SOX compliance en <strong>98%</strong>. Risk score corporativo bajó de Medio a Bajo. Próxima auditoría externa Q1: lista para cierre limpio.'
},

okrs: {
  category: 'Soporte',
  icon: '★',
  accent: '#B85042',
  accentDark: '#8A3B30',
  title: 'OKRs / Estratégico',
  subtitle: 'OKR completion · NSM · Iniciativas estratégicas · Velocity',
  industry: 'Empresas con cultura de OKRs / Balanced Scorecard',
  kpis: [
    { l: 'OKRs activos', v: 24, suf: '', d: '+4', dir: 'up', spark: [18,19,20,21,22,22,23,23,24,24,24,24] },
    { l: 'Completion %', v: 68, suf: '%', d: '+8pp', dir: 'up', spark: [52,55,58,60,62,63,65,66,67,67.5,68,68] },
    { l: 'On Track',     v: 78, suf: '%', d: '+12pp', dir: 'up', spark: [62,64,66,68,70,72,74,75,76,77,78,78] },
    { l: 'NSM',          v: 142, suf: 'M ARR', pre: '$', d: '+$28M', dir: 'up', spark: [105,110,115,120,125,128,132,135,138,140,141,142] },
    { l: 'Velocity',     v: 8, suf: '/Q', d: '+2', dir: 'up', spark: [4,5,5,6,6,6,7,7,7,7,8,8] },
    { l: 'Strategic align.',v: 92, suf: '%', d: '+5pp', dir: 'up', spark: [82,84,85,86,87,88,89,90,90.5,91,91.5,92] }
  ],
  slicers: [
    { l: 'Área',      opts: ['Crecimiento','Eficiencia','Producto','Cliente','Talento'] },
    { l: 'Trimestre', opts: ['Q3-2025','Q4-2025','Q1-2026','Q2-2026'] }
  ],
  charts: {
    main: { title: 'OKRs por status (Q4)', type: 'combo',
      labels: ['Q1','Q2','Q3','Q4'],
      data1: [52,58,63,68],
      data2: [62,68,74,78] },
    donut: { title: 'OKRs por área', labels: ['Crecimiento','Eficiencia','Producto','Cliente','Talento'], data: [32,22,18,16,12] },
    bar: { title: 'Top 8 iniciativas estratégicas', labels: ['Lanzar SaaS Cloud','Expansión LATAM','Reducir CAC 25%','NPS > 60','Cierre mensual <5d','TI moderna','Diversidad lid.','ESG carbon -20%'], data: [85,78,72,68,62,55,48,42] }
  },
  table: {
    head: ['OKR','Área','Owner','Progress','Status'],
    rows: [
      ['Lanzar SaaS Cloud','Producto','CTO','85%','On Track'],
      ['Expansión LATAM','Crecimiento','CCO','78%','On Track'],
      ['Reducir CAC 25%','Eficiencia','CMO','72%','On Track'],
      ['NPS > 60','Cliente','CXO','68%','On Track'],
      ['Cierre mensual <5d','Eficiencia','CFO','45%','At Risk']
    ]
  },
  narrative: 'OKR completion en <strong>68%</strong> (+8pp QoQ). <strong>78% on track</strong> hacia Q4. NSM (ARR) creció <strong>$28M YTD</strong>. Velocity dobló a 8 iniciativas/quarter. 1 OKR en at risk: cierre mensual — plan de remediación en marcha.'
}

};
