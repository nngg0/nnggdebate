export default {
  config: {
    cierre_inscripcion: '2026-09-27',
    final_fecha: '2026-10-24',
    final_ciudad: 'Madrid',
    numero_finalistas: 16
  },

  cities: [
    { id: 1, name: 'Valencia', date: '2026-10-03', registered: 5, finalistSlots: 2 },
    { id: 2, name: 'Zaragoza', date: '2026-10-03', registered: 0, finalistSlots: 1 },
    { id: 3, name: 'Granada', date: '2026-10-03', registered: 1, finalistSlots: 1 },
    { id: 4, name: 'Murcia', date: '2026-10-03', registered: 0, finalistSlots: 1 },
    { id: 5, name: 'Oviedo', date: '2026-10-03', registered: 1, finalistSlots: 1 },
    { id: 6, name: 'Palma de Mallorca', date: '2026-10-03', registered: 4, finalistSlots: 1 },

    { id: 7, name: 'Madrid', date: '2026-10-10', registered: 4, finalistSlots: 3 },
    { id: 8, name: 'Barcelona', date: '2026-10-10', registered: 2, finalistSlots: 1 },
    { id: 9, name: 'Sevilla', date: '2026-10-08', registered: 5, finalistSlots: 1 },
    { id: 10, name: 'Salamanca', date: '2026-10-10', registered: 1, finalistSlots: 1 },
    { id: 11, name: 'Santiago', date: '2026-10-10', registered: 0, finalistSlots: 1 },
    { id: 12, name: 'Vitoria-Gasteiz', date: '2026-10-03', registered: 1, finalistSlots: 1 },
    { id: 13, name: 'Las Palmas de Gran Canaria', date: '2026-10-10', registered: 0, finalistSlots: 1 }
  ],

  teams: [
    ['Sevilla First', 5, 'Sevilla'],
    ['La Giralda argumenta', 5, 'Sevilla'],
    ['Felipe I de Riga', 4, 'Madrid'],
    ['Plus Ultra', 5, 'Valencia'],
    ['Ebro Liberal', 4, 'Madrid'],
    ['Valentia', 5, 'Valencia'],
    ['Irurac Bat', 4, 'Vitoria-Gasteiz'],
    ['Razón egabrense', 4, 'Sevilla'],
    ['Jovenes x Barcelona', 5, 'Barcelona'],
    ['Los Cristeros', 3, 'Sevilla'],
    ['La Juventud', 3, 'Valencia'],
    ['NNGG Moncloa (working class)', 4, 'Madrid'],
    ['Generación debate', 4, 'Granada'],
    ['La terreta', 3, 'Valencia'],
    ['Lumavi', 3, 'Madrid'],
    ['AUCTORITAS', 4, 'Sevilla'],
    ['Comando papi', 5, 'Palma de Mallorca'],
    ['Gaviotos', 4, 'Palma de Mallorca'],
    ['Caps de Suro & Girls', 5, 'Palma de Mallorca'],
    ['Palencia con P', 4, 'Salamanca'],
    ['Areté', 3, 'Barcelona'],
    ['Los hijos de Pelayo', 4, 'Oviedo'],
    ['NNGG ALBACETE', 5, 'Valencia'],
    ['Grupo 4', 4, 'Palma de Mallorca']
  ].map((t, i) => ({
    id: i + 1,
    name: t[0],
    participants: t[1],
    city: t[2],
    status: 'INSCRITO'
  })),

  finalists: []
}
