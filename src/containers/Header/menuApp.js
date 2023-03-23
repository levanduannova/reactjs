export const adminMenu = [
  {
    //hệ thống
    name: "menu.admin.user-manage",
    menus: [
      {
        name: "menu.admin.crud",
        link: "/system/user-manage",
      },
      {
        name: "menu.admin.crudRedux",
        link: "/system/user-redux",
      },
      // {
      //   name: "menu.admin.user-manage",
      //   link: "/system/user-manage",
      // },
      {
        name: "menu.admin.doctor-manage",
        link: "/system/user-doctor",
      },
      {
        name: "menu.admin.admin-manage",
        link: "/system/user-admin",
      },
      // subMenus: [
      //   {
      //     name: "menu.system.system-administrator.user-manage",
      //     link: "/system/user-manage",
      //   },
      //   {
      //     name: "menu.system.system-administrator.user-redux",
      //     link: "/system/user-redux",
      //   },
      // ],

      // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
    ],
  },
  {
    //Phong kham
    name: "menu.admin.clinic",
    menus: [
      {
        name: "menu.admin.manage-clinic",
        link: "/system/manage-clinic",
      },
      // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
    ],
  },
  {
    //Chuyen khoa
    name: "menu.admin.specialty",
    menus: [
      {
        name: "menu.admin.manage-specialty",
        link: "/system/manage-specialty",
      },
      // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
    ],
  },
  {
    //Cam nang
    name: "menu.admin.hanbook",
    menus: [
      {
        name: "menu.admin.manage-hanbook",
        link: "/system/manage-hanbook",
      },
      // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
    ],
  },
];
