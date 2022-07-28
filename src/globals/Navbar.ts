import { GlobalConfig } from 'payload/types';

const Navbar: GlobalConfig = {
    slug: 'navbar',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'navItems',
            type: 'array',
            fields: [{
                name: 'type',
                type: 'radio',
                defaultValue: 'link',
                admin: {
                    layout: 'horizontal',
                },
                options: [
                    {
                        label: 'Link',
                        value: 'link'
                    },
                    {
                        label: 'Collapse',
                        value: 'collapse'
                    }
                ]
            },
            {
                name: 'label',
                type: 'text',
                required: true,
            },
            {
                name: 'slug',
                type: 'text',
                required: true,
            },
            {
                name: 'subcategories',
                label: 'Subcategories',
                type: 'array',
                admin: {
                    condition: (_, { type } = {}) => type === 'collapse',
                },
                fields: [
                    {
                        name: 'label',
                        type: 'text',
                        required: true,
                    },
                    {
                        name: 'slug',
                        type: 'text',
                        required: true,
                    }
                ],
            },
            ]
        }
    ]
}

export default Navbar