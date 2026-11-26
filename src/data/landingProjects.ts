export interface LandingProject {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const landingProjects: LandingProject[] = [
  {
    title: 'Infraestructura Energética Norte',
    description: 'Diseñamos y ejecutamos infraestructura energética con ingeniería civil y montaje electromecánico de alta precisión. Cada etapa se desarrolla bajo estándares de seguridad ISO para asegurar continuidad operativa.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=85',
    link: '/proyectos/infraestructura-energetica-norte',
  },
  {
    title: 'Mantenimiento de Ductos',
    description: 'Inspeccionamos y rehabilitamos ductos críticos para extender su vida útil y reducir riesgos operativos. El proyecto integra soldadura de alta presión, control técnico y renovación de válvulas.',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1400&q=85',
    link: '/proyectos/mantenimiento-ductos',
  },
  {
    title: 'Planta de Procesamiento',
    description: 'Integramos diseño estructural, instalación de tuberías y puesta en marcha para una planta lista para operar. La coordinación de cada especialidad permite avanzar con precisión y seguridad.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85',
    link: '/proyectos/planta-procesamiento',
  },
  {
    title: 'Expansión Industrial',
    description: 'Supervisamos la expansión de instalaciones industriales para mejorar su capacidad y desempeño. El trabajo combina optimización operativa, control de calidad y seguimiento cercano de obra.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
    link: '/proyectos/expansion-industrial',
  },
];
