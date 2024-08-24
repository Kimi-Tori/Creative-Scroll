export default [
    {
        path: '/',
        component: () => import('@/layout/layout-main.vue'),
        children: [
            {
                name: 'home',
                path: '/Creative-Scroll',
                component: () => import('@/views/home-template.vue')
            },
        ]
    },
];