export interface Specialty {
  number: string;
  title: string;
  body: string;
}

export interface Service {
  name: string;
  icon: string;
}

export const narrativeStatement = {
  whiteLines: ['DONDE LOS MÉTODOS CONVENCIONALES', 'ALCANZAN SU LÍMITE,'],
  redText: 'SIMICO TOMA EL CONTROL.',
  mobileWhite: 'DONDE LOS MÉTODOS CONVENCIONALES ALCANZAN SU LÍMITE,',
  mobileRedLines: ['SIMICO TOMA EL', 'CONTROL'],
};

export const about = {
  desktopCopy: 'SIMICO es una empresa mexicana de servicios industriales para el sector energético. Trabajamos por proyectos: recibimos misiones técnicas complejas y las llevamos a término con control, plan claro y ejecución certificada de principio a fin.',
  copy: 'Somos una empresa mexicana de servicios industriales para el sector energético. Trabajamos por proyectos: recibimos misiones técnicas complejas y las llevamos a término con control, plan claro y ejecución certificada de principio a fin.',
  cta: {
    lines: ['Conocer la', 'operación →'],
    href: '#especialidades',
    label: 'Conocer la operación',
  },
};

export const specialties: Specialty[] = [
  { number: '01', title: 'Ingeniería', body: 'La misión compleja se resuelve antes de mover un equipo.' },
  { number: '02', title: 'Mantenimiento', body: 'La operación continúa: cada paro se planea.' },
  { number: '03', title: 'Construcción', body: 'La obra se entrega como se aprobó.' },
];

export const services: Service[] = [
  { name: 'Tendido de redes eléctricas', icon: 'svc-redes' },
  { name: 'Caminos y puentes', icon: 'svc-caminos' },
  { name: 'Tendido de tuberías de proceso', icon: 'svc-tuberias' },
  { name: 'Soldadura industrial', icon: 'svc-soldadura' },
  { name: 'Obra civil', icon: 'svc-civil' },
  { name: 'Obra mecánica y montaje industrial', icon: 'svc-mecanica' },
];

export const servicesTitle = {
  desktop: ['Nuestros', 'Servicios'],
  mobile: 'Servicios',
};

export const projectsStatement = {
  kicker: 'CAPACIDAD OPERATIVA COMPROBADA',
  heading: 'Ingeniería que impulsa el sector petrolero.',
  lead: 'Soluciones y ejecución precisa para infraestructura crítica en el sur de México.',
};
