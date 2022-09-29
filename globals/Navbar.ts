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
                type: 'row',
                fields: [
                    {
                        name: 'label',
                        type: 'text',
                        required: true,
                        admin: {
                            width: "50%"
                        }
                    },
                    {
                        name: 'slug',
                        type: 'text',
                        required: true,
                        admin: {
                            width: "50%"
                        }
                    },
                ]
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
                        type: 'row',
                        fields: [
                            {
                                name: 'label',
                                type: 'text',
                                required: true,
                                admin: {
                                    width: "50%"
                                }
                            },
                            {
                                name: 'slug',
                                type: 'text',
                                required: true,
                                admin: {
                                    width: "50%"
                                }
                            }
                        ]
                    }
                ],
            },
            ]
        }
    ]
}

export default Navbar