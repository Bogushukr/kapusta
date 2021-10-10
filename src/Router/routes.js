import { lazy } from 'react'
// eslint-disable-next-line
export default [
    {
        path: '/',
        label: 'StatisticsPage',
        exact: true,
        component: lazy(() => import('../Pages/StatisticsPage/StatisticsPage')),
        private: false,
    }
]