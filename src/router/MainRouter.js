
import Blank from '@/layout/Blank'
import Layout from '@/layout/Layout'

export default [{
  path: '/',
  component: Blank,
  children: [{
    path: 'about',
    component: () => import('@/components/about/About')
  }]
}, {
  path: '/',
  component: Layout,
  children: [{
    path: 'faq',
    name: 'faq',
    component: () => import('@/components/about/Faq')
  }, {
    path: 'help',
    name: 'help',
    component: () => import('@/components/about/Help')
  }, {
    path: 'register',
    name: 'register',
    component: () => import('@/components/account/Register')
  }, {
    path: 'login',
    name: 'login',
    component: () => import('@/components/account/Login')
  }, {
    path: 'logout',
    name: 'logout',
    component: () => import('@/components/account/Logout')
  }, {
    path: 'forgot-password',
    name: 'forgot-password',
    component: () => import('@/components/account/ForgotPassword')
  }, {
    path: 'forgot-password-sent',
    name: 'forgot-password',
    component: () => import('@/components/account/ForgotPasswordEmailSent')
  }]
}]
