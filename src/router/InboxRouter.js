import Layout from '@/layout/Layout'

export default [{
    path: '/inbox',
    component: Layout,
    meta: {
        requiresAuth: true
    },
    children: [{
        path: '',
        name: 'inbox',
        component: () => import('@/components/inbox/Inbox')
    }, {
        path: 'compose',
        name: 'inbox-compose',
        component: () => import('@/components/inbox/Compose')
    }]
}]
