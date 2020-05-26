import Layout from '@/layout/Layout'

export default [{
    path: '/squads',
    component: Layout,
    meta: {
        requiresAuth: true
    },
    children: [{
        path: 'discover',
        component: () => import('@/components/squads/SquadList')
    }]
}]
