import { GlobalConfig } from 'payload/types';

const Header: GlobalConfig = {
    slug: 'header',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'headerItems',
            type: 'array',
            fields: [
            {
                name: 'linkType',
                type: 'radio',
                defaultValue: 'int',
                admin: {
                    layout: 'horizontal',
                },
                options: [
                    {
                        label: 'Internal',
                        value: 'int'
                    },
                    {
                        label: 'External',
                        value: 'ext'
                    }
                ]
            },
            {
                name: 'slug',
                type: 'text',
                required: true,
                admin: {
                    condition: (_, { linkType } = {}) => linkType === 'int',
                },
            },
            {
                name: 'url',
                type: 'text',
                required: true,
                admin: {
                    condition: (_, { linkType } = {}) => linkType === 'ext',
                },
            },
            {
                name: 'labelType',
                type: 'radio',
                defaultValue: 'text',
                admin: {
                    layout: 'horizontal',
                },
                options: [
                    {
                        label: 'Text',
                        value: 'text'
                    },
                    {
                        label: 'Icon',
                        value: 'icon'
                    }
                ]
            },
            {
                name: 'label',
                type: 'text',
                required: true,
                admin: {
                    condition: (_, { labelType } = {}) => labelType === 'text',
                },
            },
            {
                name: 'iconUrl',
                type: 'text',
                required: true,
                admin: {
                    condition: (_, { labelType } = {}) => labelType === 'icon',
                },
            },
            {
                type: 'row',
                fields: [
                    {
                        name: 'width',
                        type: 'number',
                        required: true,
                        admin: {
                            condition: (_, { labelType } = {}) => labelType === 'icon',
                            width: '50%'
                        },
                    },
                    {
                        name: 'height',
                        type: 'number',
                        required: true,
                        admin: {
                            condition: (_, { labelType } = {}) => labelType === 'icon',
                            width: '50%'
                        },
                    },
                ]
            }
            ]
        }
    ]
}

export default Header