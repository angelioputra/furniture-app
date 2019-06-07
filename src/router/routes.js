
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          showSearchBar: true
        },
        component: () => import('pages/Index.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/LayoutBlank.vue'),
    children: [
      { path: 'login', name: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'sign-up', name: 'sign-up', component: () => import('pages/SignUpPage.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
