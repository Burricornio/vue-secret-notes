export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/LoginView.vue')

  },
  {
    path: '/secret',
    // Una ruta que tiene rutas hijas no debe tener name
    component: () => import('./views/Secret/SecretView.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'notes',
        component: () => import('./views/Secret/NotesView.vue')
      }
    ]
  }
]
