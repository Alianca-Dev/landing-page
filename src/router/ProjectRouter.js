import Layout from '@/layout/Layout'

export default [{
    path: '/projects',
    component: Layout,
    meta: {
        requiresAuth: true
    },
    children: [{
        path: 'discover',
        component: () => import('@/components/projects/ProjectsList')
    }]
}]
