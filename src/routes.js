export const AppRoutes = {
  home: {
    name: 'home',
    path: '/',
  },
  locations: {
    name: 'Locations',
    path: '/locations',
    children: {
      yaba: {
        name: 'Yaba',
        path: 'yaba'
      },
      victoriaIsland: {
        name: 'Victoria Island',
        path: 'victoria-island'
      }
    }
  },
  solutions: {
    name: 'Solutions',
    path: '/solutions'
  },
  enterprise: {
    name: 'Enterprise',
    path: '/enterprise'
  }
};
