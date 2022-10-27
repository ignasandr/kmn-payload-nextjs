import { GlobalConfig } from 'payload/types';

const Menu: GlobalConfig = {
    slug: 'menu',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'menuItems',
            label: "Menu Items",
            type: 'array',
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
                    },
                ]
            },
            {
                name: 'submenu',
                type: 'checkbox',
                defaultValue: false,
                label: 'Sub-menu'
            },
            {
                name: 'submenuItems',
                label: 'Sub-menu Items',
                type: 'array',
                admin: {
                    condition: (_, { submenu } = {}) => submenu,
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
                            },
                        ]
                },
                {
                    name: 'subsubmenu',
                    type: 'checkbox',
                    defaultValue: false,
                    label: 'Sub-sub-menu'
                },
                {
                    name: 'subsubmenuItems',
                    label: 'Sub-sub-menu Items',
                    type: 'array',
                    admin: {
                        condition: (_, { subsubmenu } = {}) => subsubmenu,
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
                    ]
                }
                ]
            }
            ],
        },
        ]
}

export default Menu