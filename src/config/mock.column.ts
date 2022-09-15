export const column = [
        {
            name: 'title',
            label: '标题',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: false,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 2,
            field: {
                type: 'input',
                customType: '',
                dataType: 'STRING',
                props: {
                    required: false,
                    disabled: false,
                    fieldSearch: {
                        type: 'formSelect',
                        sort: 1,
                    },
                    hide: false,
                    isSearch: true,
                },
            },
        },
        {
            name: 'code',
            label: '编号',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: false,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 2,
            field: {
                type: 'input',
                customType: '',
                dataType: 'STRING',
                props: {
                    fieldSearch: {
                        sort: 1,
                        type: 'formSelect',
                    },
                    hide: false,
                    isSearch: true,
                    required: false,
                    disabled: true,
                },
            },
        },
        {
            name: 'ownerId',
            label: '负责人',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: false,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 2,
            field: {
                type: 'member',
                customType: '',
                dataType: 'STRING',
                props: {
                    collaboratorRoles: [
                        '-1',
                    ],
                    limit: 1,
                    multiple: false,
                },
            },
        },
        {
            name: 'issueStatus',
            label: '任务状态',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: true,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 2,
            field: {
                type: 'groupSelect',
                customType: '',
                dataType: 'STRING',
                props: {
                    aliasDisabled: false,
                    disabled: false,
                    inputnumber: {
                        accuracy: '',
                        percentage: false,
                        required: false,
                        thousandth: false,
                        unique: false,
                    },
                    checked: true,
                    groupSelect: {
                        groupOptions: [
                            {
                                id: 1,
                                value: '未开始',
                                children: [
                                    {
                                        parentId: 1,
                                        sort: 1,
                                        value: '未开始',
                                        color: '#E1E2E4',
                                        fontColor: '#5f5f5f',
                                        id: 7,
                                    },
                                ],
                            },
                            {
                                children: [
                                    {
                                        value: '进行中',
                                        color: '#377AFF',
                                        fontColor: '#377aff',
                                        id: 16,
                                        parentId: 2,
                                        sort: 2,
                                    },
                                ],
                                id: 2,
                                value: '进行中',
                            },
                            {
                                value: '已完成',
                                children: [
                                    {
                                        color: '#45CB7E',
                                        fontColor: '#54a944',
                                        id: 26,
                                        parentId: 3,
                                        sort: 3,
                                        value: '已完成',
                                    },
                                ],
                                id: 3,
                            },
                        ],
                        options: [
                            {
                                fontColor: '#5f5f5f',
                                id: 7,
                                parentId: 1,
                                sort: 1,
                                value: '未开始',
                                color: '#E1E2E4',
                            },
                            {
                                id: 16,
                                parentId: 2,
                                sort: 2,
                                value: '进行中',
                                color: '#377AFF',
                                fontColor: '#377aff',
                            },
                            {
                                id: 26,
                                parentId: 3,
                                sort: 3,
                                value: '已完成',
                                color: '#45CB7E',
                                fontColor: '#54a944',
                            },
                        ],
                    },
                    attrDisabled: false,
                    isText: false,
                    required: true,
                    require: true,
                    select: {},
                    titleDisabled: true,
                    member: {
                        multiple: false,
                        required: false,
                    },
                    typeDisabled: true,
                    hide: false,
                    multiselect: {},
                },
            },
        },
        {
            name: 'planStartTime',
            label: '开始时间',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: false,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 2,
            field: {
                type: 'datepicker',
                customType: '',
                dataType: 'STRING',
                props: {},
            },
        },
        {
            name: 'planEndTime',
            label: '截止时间',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: false,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 2,
            field: {
                type: 'datepicker',
                customType: '',
                dataType: 'STRING',
                props: {},
            },
        },
        {
            name: 'remark',
            label: '描述',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: false,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 2,
            field: {
                type: 'richtext',
                customType: '',
                dataType: 'STRING',
                props: {
                    required: false,
                    select: {},
                    inputnumber: {
                        thousandth: false,
                        unique: false,
                        accuracy: '',
                        percentage: false,
                        required: false,
                    },
                    isText: false,
                    member: {
                        multiple: false,
                        required: false,
                    },
                    multiselect: {},
                },
            },
        },
        {
            name: 'followerIds',
            label: '关注人',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: false,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 2,
            field: {
                type: 'member',
                customType: '',
                dataType: 'STRING',
                props: {
                    collaboratorRoles: [
                        '-1',
                    ],
                    multiple: true,
                },
            },
        },
        {
            name: 'auditorIds',
            label: '确认人',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: false,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 2,
            field: {
                type: 'member',
                customType: '',
                dataType: 'STRING',
                props: {
                    collaboratorRoles: [
                        '-1',
                    ],
                    multiple: true,
                },
            },
        },
        {
            name: 'projectObjectTypeId',
            label: '任务栏',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: false,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 2,
            field: {
                type: 'select',
                customType: 'select',
                dataType: 'STRING',
                props: {
                    disabled: false,
                    isText: true,
                    required: false,
                    select: {},
                    titleDisabled: false,
                    typeDisabled: false,
                },
            },
        },
        {
            name: 'iterationId',
            label: '迭代',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: false,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 2,
            field: {
                type: 'select',
                customType: 'select',
                dataType: 'STRING',
                props: {
                    required: true,
                    select: {},
                    titleDisabled: false,
                    typeDisabled: false,
                    disabled: false,
                    isText: false,
                },
            },
        },
        {
            name: 'projectId',
            label: '所属项目',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: false,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 2,
            field: {
                type: 'select',
                customType: 'select',
                dataType: 'STRING',
                props: {
                    required: true,
                    select: {},
                    titleDisabled: false,
                    typeDisabled: false,
                    disabled: false,
                    isText: false,
                },
            },
        },
        {
            name: 'parentId',
            label: '父任务ID',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: false,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 2,
            field: {
                type: 'input',
                customType: '',
                dataType: 'STRING',
                props: {
                    isSearch: true,
                    required: false,
                    disabled: true,
                    fieldSearch: {
                        sort: 1,
                        type: 'formSelect',
                    },
                    hide: true,
                },
            },
        },
        {
            name: '_field_priority',
            label: '优先级',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: true,
            writable: true,
            editable: true,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 2,
            field: {
                type: 'select',
                customType: 'select',
                dataType: 'STRING',
                props: {
                    select: {
                        options: [
                            {
                                fontColor: '#FFFFFF',
                                id: 107298,
                                value: '最高',
                                color: '#FF5037',
                            },
                            {
                                color: '#FFC700',
                                fontColor: '#FFFFFF',
                                id: 107299,
                                value: '较高',
                            },
                            {
                                id: 107300,
                                value: '普通',
                                color: '#67D287',
                                fontColor: '#FFFFFF',
                            },
                            {
                                color: '#5991FF',
                                fontColor: '#FFFFFF',
                                id: 107293,
                                value: '较低',
                            },
                            {
                                color: '#CACACA',
                                fontColor: '#FFFFFF',
                                id: 107294,
                                value: '最低',
                            },
                        ],
                    },
                    inputnumber: {
                        unique: false,
                        accuracy: '',
                        percentage: false,
                        required: false,
                        thousandth: false,
                    },
                    isText: false,
                    member: {
                        multiple: false,
                        required: false,
                    },
                    multiselect: {},
                    required: false,
                },
            },
        },
        {
            name: 'document',
            label: '附件',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: true,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 0,
            field: {
                type: 'document',
                customType: '',
                dataType: 'CUSTOM',
                props: {
                    multiple: false,
                    required: false,
                    checked: true,
                    disabled: false,
                    hide: false,
                },
            },
        },
        {
            name: '_field_1661491790474',
            label: '数字',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: true,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 0,
            field: {
                type: 'inputnumber',
                customType: '',
                dataType: 'STRING',
                props: {
                    required: false,
                    inputnumber: {
                        range: {},
                        thousandth: false,
                        accuracy: '1',
                        percentage: false,
                    },
                    collaboratorRoles: null,
                    range: {},
                    percentage: false,
                    thousandth: false,
                    accuracy: '1',
                    disabled: false,
                    multiple: false,
                },
            },
        },
        {
            name: '_field_1661491797034',
            label: '货币',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: true,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 0,
            field: {
                type: 'amount',
                customType: '',
                dataType: 'STRING',
                props: {
                    sign: '￥',
                    amount: {
                        accuracy: '1.0',
                        location: 'prefix',
                        range: {},
                        sign: '￥',
                    },
                    multiple: false,
                    range: {},
                    accuracy: '1.0',
                    collaboratorRoles: null,
                    disabled: false,
                    required: false,
                    location: 'prefix',
                },
            },
        },
        {
            name: '_field_1663067791681',
            label: '智能公式',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: true,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 0,
            field: {
                type: 'input',
                customType: '',
                dataType: 'STRING',
                props: {
                    collaboratorRoles: null,
                    disabled: false,
                    multiple: false,
                    required: false,
                },
            },
        },
        {
            name: 'baRelating',
            label: '前后置',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: true,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 0,
            field: {
                type: 'baRelating',
                customType: '',
                dataType: 'STRING',
                props: {
                    disabled: false,
                    multiple: false,
                    required: false,
                    collaboratorRoles: null,
                },
            },
        },
        {
            name: 'workHour',
            label: '工时',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: true,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 0,
            field: {
                type: 'workHour',
                customType: '',
                dataType: 'CUSTOM',
                props: {
                    collaboratorRoles: null,
                    disabled: false,
                    multiple: false,
                    required: false,
                    workHour: {},
                },
            },
        },
        {
            name: '_field_1663240891242',
            label: '我的自定义',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: true,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 0,
            field: {
                type: 'member',
                customType: '',
                dataType: 'STRING',
                props: {
                    member: {
                        isCollaborators: false,
                        multiple: false,
                    },
                    multiple: false,
                    required: false,
                    collaboratorRoles: null,
                    disabled: false,
                    isCollaborators: false,
                },
            },
        },
        {
            name: '_field_1663241850031',
            label: '部门',
            aliasTitle: '',
            description: '',
            isSys: false,
            isOrg: false,
            writable: true,
            editable: true,
            unique: false,
            uniquePreHandler: '',
            sensitiveStrategy: '',
            sensitiveFlag: 0,
            field: {
                type: 'dept',
                customType: '',
                dataType: 'STRING',
                props: {
                    collaboratorRoles: null,
                    dept: {
                        multiple: false,
                    },
                    disabled: false,
                    multiple: false,
                    required: false,
                },
            },
        },
    ];
export type IColumn = typeof column;

export const dataSource = [
        {
            parentId: 0,
            order: '3144286207',
            planStartTime: '2022-09-15 09:00:00',
            startTime: '2022-09-15 19:20:12',
            tableId: '1562424626938646528',
            propertyId: 0,
            version: 1,
            iterationId: 0,
            isDelete: 2,
            orgId: 14396,
            issueStatus: 26,
            ownerChangeTime: '2022-08-24 22:12:32',
            _field_1661491797034: 1,
            _field_1663241850031: [
                {
                    name: '测试',
                    avatar: '',
                    type: 'D_',
                    status: 1,
                    isDelete: 2,
                    id: '13592474',
                },
            ],
            appIds: [
                '1562424626585714690',
            ],
            followerIds: [
                {
                    id: '1626780',
                    name: '赵嘉伟',
                    avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v2_71fd6fdb-dbd9-413c-8f39-39b994a45edg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp',
                    type: 'U_',
                    status: 1,
                    isDelete: 2,
                },
            ],
            createTime: '2022-08-24 22:12:32',
            versionId: 0,
            isFiling: 0,
            status: 1,
            id: 2460578,
            sort: '161253979230',
            path: '0,',
            projectId: 83831,
            remark: '',
            moduleId: 0,
            endTime: '2022-09-15 19:20:14',
            owner: 0,
            updateTime: '2022-09-15 19:37:43',
            auditStatus: -1,
            title: '1',
            baRelating: {
                linkTo: [
                    '1562445039671123969',
                    '1570255347585294337',
                ],
                linkFrom: [
                    '1562445039671123969',
                ],
            },
            sourceId: 0,
            ownerId: [
                {
                    id: '1626780',
                    name: '赵嘉伟',
                    avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v2_71fd6fdb-dbd9-413c-8f39-39b994a45edg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp',
                    type: 'U_',
                    status: 1,
                    isDelete: 2,
                },
            ],
            delFlag: 2,
            planEndTime: '2022-09-18 18:00:00',
            dataId: '1562442740858003458',
            _field_1661491790474: 1,
            updator: {
                type: 'U_',
                status: 1,
                isDelete: 2,
                id: '1626780',
                name: '赵嘉伟',
                avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v2_71fd6fdb-dbd9-413c-8f39-39b994a45edg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp',
            },
            collaborators: {
                followerIds: [
                    'U_1626780',
                ],
                auditorIds: [],
                ownerId: [
                    'U_1626780',
                ],
            },
            creator: {
                id: '1626780',
                name: '赵嘉伟',
                avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v2_71fd6fdb-dbd9-413c-8f39-39b994a45edg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp',
                type: 'U_',
                status: 1,
                isDelete: 2,
            },
            issueStatusType: 3,
            auditorIds: [],
            recycleFlag: 2,
            code: '$83831-1',
            issueId: 2460578,
            projectObjectTypeId: 0,
            priorityId: 0,
            issueObjectTypeId: 0,
            _field_1663067791681: '2',
            planWorkHour: 0,
            workHour: {
                actualHour: '0',
                planHour: '24',
                collaboratorIds: [
                    'U_1626780',
                ],
            },
            _field_1663240891242: [
                {
                    type: 'U_',
                    status: 1,
                    isDelete: 2,
                    id: '1315032',
                    name: '蒋长仁',
                    avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v2_46cce5f7-b56d-4223-8d3a-b39da532180g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp',
                },
            ],
        },
        {
            isFiling: 0,
            issueId: 2460619,
            isDelete: 2,
            issueStatusType: 2,
            auditorIds: [],
            version: 1,
            _field_1661491797034: 2,
            recycleFlag: 2,
            issueObjectTypeId: 0,
            orgId: 14396,
            creator: {
                id: '1626780',
                name: '赵嘉伟',
                avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v2_71fd6fdb-dbd9-413c-8f39-39b994a45edg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp',
                type: 'U_',
                status: 1,
                isDelete: 2,
            },
            id: 2460619,
            priorityId: 0,
            collaborators: {
                auditorIds: [],
                ownerId: [
                    'U_1626780',
                ],
                followerIds: [
                    'U_1626780',
                ],
            },
            parentId: 0,
            auditStatus: -1,
            _field_1663240891242: [
                {
                    type: 'U_',
                    status: 1,
                    isDelete: 2,
                    id: '1626780',
                    name: '赵嘉伟',
                    avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v2_71fd6fdb-dbd9-413c-8f39-39b994a45edg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp',
                },
            ],
            remark: '',
            iterationId: 0,
            dataId: '1562445039671123969',
            ownerId: [
                {
                    id: '1626780',
                    name: '赵嘉伟',
                    avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v2_71fd6fdb-dbd9-413c-8f39-39b994a45edg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp',
                    type: 'U_',
                    status: 1,
                    isDelete: 2,
                },
            ],
            order: '3144220671',
            planStartTime: '2022-09-24 09:00:00',
            owner: 0,
            updateTime: '2022-09-15 19:37:51',
            _field_1663067791681: '4',
            projectId: 83831,
            title: '2',
            moduleId: 0,
            sourceId: 0,
            code: '$83831-2',
            projectObjectTypeId: 0,
            baRelating: {
                linkTo: [
                    '1562442740858003458',
                ],
                linkFrom: [
                    '1562442740858003458',
                ],
            },
            tableId: '1562424626938646528',
            endTime: '1970-01-01 00:00:00',
            status: 1,
            issueStatus: 16,
            startTime: '2022-09-15 19:20:26',
            sort: '161256666165',
            versionId: 0,
            appIds: [
                '1562424626585714690',
            ],
            followerIds: [
                {
                    name: '赵嘉伟',
                    avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v2_71fd6fdb-dbd9-413c-8f39-39b994a45edg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp',
                    type: 'U_',
                    status: 1,
                    isDelete: 2,
                    id: '1626780',
                },
            ],
            createTime: '2022-08-24 22:21:40',
            planWorkHour: 0,
            path: '0,',
            _field_1663241850031: [
                {
                    name: '广告',
                    avatar: '',
                    type: 'D_',
                    status: 1,
                    isDelete: 2,
                    id: '13769443',
                },
            ],
            planEndTime: '2022-09-30 18:00:00',
            delFlag: 2,
            updator: {
                id: '1626780',
                name: '赵嘉伟',
                avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v2_71fd6fdb-dbd9-413c-8f39-39b994a45edg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp',
                type: 'U_',
                status: 1,
                isDelete: 2,
            },
            ownerChangeTime: '2022-08-24 22:21:40',
            propertyId: 0,
            _field_1661491790474: 2,
        },
        {
            versionId: 0,
            status: 1,
            id: 2566982,
            issueStatusType: 1,
            title: '设计大咖十六点',
            orgId: 14396,
            auditorIds: [],
            _field_1663241850031: [
                {
                    name: '总裁办',
                    avatar: '',
                    type: 'D_',
                    status: 1,
                    isDelete: 2,
                    id: '13774271',
                },
            ],
            dataId: '1570255347585294337',
            isDelete: 2,
            appIds: [
                '1562424626585714690',
            ],
            planWorkHour: 0,
            startTime: '0001-01-01 00:00:00',
            order: '3144155135',
            owner: 0,
            creator: {
                isDelete: 2,
                id: '1626780',
                name: '赵嘉伟',
                avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v2_71fd6fdb-dbd9-413c-8f39-39b994a45edg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp',
                type: 'U_',
                status: 1,
            },
            issueId: 2566982,
            isFiling: 0,
            issueObjectTypeId: 0,
            delFlag: 2,
            collaborators: {
                followerIds: [
                    'U_1626780',
                ],
                auditorIds: [],
                ownerId: [
                    'U_1626780',
                ],
            },
            iterationId: 0,
            version: 1,
            tableId: '1562424626938646528',
            parentId: 0,
            planEndTime: '2022-09-30 18:00:00',
            _field_1663240891242: [
                {
                    id: '1111849',
                    name: '李国威🎈🎈🎈🎈🎈🎈🎈',
                    avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v2_1cdb65a6-0e83-44d3-9bc3-977b2369bd0g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp',
                    type: 'U_',
                    status: 1,
                    isDelete: 2,
                },
            ],
            ownerId: [
                {
                    id: '1626780',
                    name: '赵嘉伟',
                    avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v2_71fd6fdb-dbd9-413c-8f39-39b994a45edg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp',
                    type: 'U_',
                    status: 1,
                    isDelete: 2,
                },
            ],
            priorityId: 0,
            issueStatus: 7,
            moduleId: 0,
            planStartTime: '2022-09-18 09:00:00',
            endTime: '0001-01-01 00:00:00',
            followerIds: [
                {
                    id: '1626780',
                    name: '赵嘉伟',
                    avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v2_71fd6fdb-dbd9-413c-8f39-39b994a45edg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp',
                    type: 'U_',
                    status: 1,
                    isDelete: 2,
                },
            ],
            projectObjectTypeId: 0,
            createTime: '2022-09-15 11:37:03',
            updator: {
                id: '1626780',
                name: '赵嘉伟',
                avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v2_71fd6fdb-dbd9-413c-8f39-39b994a45edg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp',
                type: 'U_',
                status: 1,
                isDelete: 2,
            },
            sourceId: 0,
            remark: '',
            recycleFlag: 2,
            updateTime: '2022-09-15 19:37:55',
            auditStatus: -1,
            projectId: 83831,
            code: '$83831-3',
            ownerChangeTime: '2022-09-15 11:37:03',
            path: '0,',
            propertyId: 0,
            sort: '168227165370',
            baRelating: {
                linkFrom: [
                    '1562442740858003458',
                ],
            },
        },
    ];

export type IDataSource = typeof dataSource;
