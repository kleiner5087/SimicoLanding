export interface Project {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  stats: string;
}

export const projects: Project[] = [
  {
    title: 'Infraestructura Energética Norte',
    category: 'Infraestructura',
    description: 'Diseñamos y ejecutamos infraestructura energética con ingeniería civil y montaje electromecánico de alta precisión. Cada etapa se desarrolla bajo estándares de seguridad ISO para asegurar continuidad operativa en el norte del país.',
    longDescription: 'Proyecto integral que abarca desde la cimentación profunda hasta el montaje de estructuras y sistemas electromecánicos. Coordinación multidisciplinaria, control de calidad riguroso y cumplimiento de normativas internacionales. Entrega llave en mano con garantía operativa.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    ],
    stats: '120+ MW instalados',
  },
  {
    title: 'Mantenimiento de Ductos',
    category: 'Ductos',
    description: 'Inspección y rehabilitación de ductos críticos para extender su vida útil y reducir riesgos operativos con soldadura de alta presión.',
    longDescription: 'Rehabilitación de 42km de ductos con inspección inteligente (ILI), reemplazo de válvulas y soldadura automatizada. Reducción del 34% en tiempo de paro y cero incidentes de seguridad.',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85',
    ],
    stats: '42 km rehabilitados',
  },
  {
    title: 'Planta de Procesamiento',
    category: 'Planta',
    description: 'Integración de diseño estructural, instalación de tuberías y puesta en marcha para una planta lista para operar.',
    longDescription: 'Planta de procesamiento con capacidad de 15,000 BPD. Diseño, procura, construcción y comisionado en 18 meses. Sistemas de control distribuido y seguridad SIL 2.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    ],
    stats: '15k BPD',
  },
  {
    title: 'Expansión Industrial',
    category: 'Expansión',
    description: 'Supervisión de la expansión de instalaciones industriales para mejorar capacidad y desempeño.',
    longDescription: 'Ampliación de nave industrial de 8,400m² con estructura metálica y sistemas HVAC. Incremento de capacidad productiva del 40% sin interrupción de operaciones existentes.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f6?auto=format&fit=crop&w=1200&q=85',
    ],
    stats: '8,400 m²',
  },
  {
    title: 'Sistema Anticorrosivo Costa',
    category: 'Recubrimientos',
    description: 'Protección catódica y recubrimientos de alta resistencia para infraestructura costera expuesta a atmósfera salina agresiva.',
    longDescription: 'Aplicación de sistema duplex (galvanizado + recubrimiento epóxico) en 12 estructuras y 8km de tubería. Vida útil extendida a 25 años, ensayo de adherencia >12 MPa.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1521791136064-7986c86c94b1?auto=format&fit=crop&w=1200&q=85',
    ],
    stats: '25 años vida útil',
  },
  {
    title: 'Automatización Refinería Sur',
    category: 'Instrumentación',
    description: 'Modernización de sistema de control distribuido y calibración de instrumentación crítica para optimización de refinería.',
    longDescription: 'Migración de DCS Honeywell a Yokogawa con 1,200 lazos de control. Reducción de variabilidad del 18% y disponibilidad del 99.8%.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    ],
    stats: '1,200 lazos',
  },
];
