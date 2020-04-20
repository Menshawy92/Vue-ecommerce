import Admin from '@/views/Admin/index.vue'
import Category from '@/views/Admin/category/index.vue'

export default [
    {
        path: '/admin',
        component: Admin,
        name: 'admin',
        children: [
            {
                path: 'category',
                component: Category,
                name: 'category',
            },
        ],
    },
]
