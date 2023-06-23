import {
  DashboardOutlined,
  FileTextOutlined,
  GiftOutlined,
  MailOutlined,
  MobileOutlined,
  PictureOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  UsergroupDeleteOutlined
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const mainNavTree = [
  {
    key: "main",
    title: "sidenav.main",
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: "dashboards",
        path: `${APP_PREFIX_PATH}/dashboards`,
        title: "sidenav.dashboard",
        icon: DashboardOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [],
      },
      {
        key: "catalog",
        path: `${APP_PREFIX_PATH}/catalog`,
        title: "sidenav.catalog",
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [
          {
            key: "catalog-products",
            path: `${APP_PREFIX_PATH}/catalog/products`,
            title: "sidenav.catalog.products",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "catalog-categories",
            path: `${APP_PREFIX_PATH}/catalog/categories`,
            title: "sidenav.catalog.categories",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "catalog-collections",
            path: `${APP_PREFIX_PATH}/catalog/collections`,
            title: "sidenav.catalog.collections",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "catalog-combo",
            path: `${APP_PREFIX_PATH}/catalog/combo`,
            title: "sidenav.catalog.combo",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "orders",
        path: `${APP_PREFIX_PATH}/orders`,
        title: "sidenav.orders",
        icon: ShoppingOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [],
      },
      {
        key: "clients",
        path: `${APP_PREFIX_PATH}/clients`,
        title: "sidenav.clients",
        icon: UserOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [
          {
            key: "clients-list",
            path: `${APP_PREFIX_PATH}/clients/list`,
            title: "sidenav.clients.list",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "clients-groups",
            path: `${APP_PREFIX_PATH}/clients/groups`,
            title: "sidenav.clients.groups",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "banners",
        path: `${APP_PREFIX_PATH}/banners`,
        title: "sidenav.banners",
        icon: PictureOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [],
      },
      {
        key: "promos",
        path: `${APP_PREFIX_PATH}/promos`,
        title: "sidenav.promos",
        icon: GiftOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [],
      },
      {
        key: "offlineSpots",
        path: `${APP_PREFIX_PATH}/offline-spots`,
        title: "sidenav.offlineSpots",
        icon: ShopOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [
          {
            key: "offlineSpots-addresses",
            path: `${APP_PREFIX_PATH}/offline-spots/addresses`,
            title: "sidenav.offlineSpots.addresses",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "offlineSpots-groups",
            path: `${APP_PREFIX_PATH}/offline-spots/groups`,
            title: "sidenav.offlineSpots.geozones",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "employees",
        path: `${APP_PREFIX_PATH}/employees`,
        title: "sidenav.employees",
        icon: UsergroupDeleteOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [],
      },
      {
        key: "mailing",
        path: `${APP_PREFIX_PATH}/mailing`,
        title: "sidenav.mailing",
        icon: MailOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [],
      },
    ],
  },
];

const systemNavTree = [
  {
    key: "system",
    title: "sidenav.system",
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: "settings",
        path: `${APP_PREFIX_PATH}/settings`,
        title: "sidenav.settings",
        icon: SettingOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [],
      },
      {
        key: "mobile",
        path: `${APP_PREFIX_PATH}/mobile`,
        title: "sidenav.mobile",
        icon: MobileOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [],
      },
      {
        key: "logs",
        path: `${APP_PREFIX_PATH}/logs`,
        title: "sidenav.logs",
        icon: FileTextOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [],
      },
    ],
  },
];

// const appsNavTree = [
//   {
//     key: "apps",
//     path: `${APP_PREFIX_PATH}/apps`,
//     title: "sidenav.apps",
//     icon: AppstoreOutlined,
//     breadcrumb: false,
//     isGroupTitle: true,
//     submenu: [
//       {
//         key: "apps-mail",
//         path: `${APP_PREFIX_PATH}/apps/mail/inbox`,
//         title: "sidenav.apps.mail",
//         icon: MailOutlined,
//         breadcrumb: false,
//         submenu: [],
//       },
//       {
//         key: "apps-chat",
//         path: `${APP_PREFIX_PATH}/apps/chat`,
//         title: "sidenav.apps.chat",
//         icon: MessageOutlined,
//         breadcrumb: false,
//         submenu: [],
//       },
//       {
//         key: "apps-calendar",
//         path: `${APP_PREFIX_PATH}/apps/calendar`,
//         title: "sidenav.apps.calendar",
//         icon: CalendarOutlined,
//         breadcrumb: true,
//         submenu: [],
//       },
//       {
//         key: "apps-project",
//         path: `${APP_PREFIX_PATH}/apps/project`,
//         title: "sidenav.apps.project",
//         icon: BulbOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: "apps-project-list",
//             path: `${APP_PREFIX_PATH}/apps/project/list`,
//             title: "sidenav.apps.project.list",
//             icon: "",
//             breadcrumb: false,
//             submenu: [],
//           },
//           {
//             key: "apps-project-scrumboard",
//             path: `${APP_PREFIX_PATH}/apps/project/scrumboard`,
//             title: "sidenav.apps.project.scrumboard",
//             icon: "",
//             breadcrumb: false,
//             submenu: [],
//           },
//         ],
//       },
//       {
//         key: "apps-ecommerce",
//         path: `${APP_PREFIX_PATH}/apps/ecommerce`,
//         title: "sidenav.apps.ecommerce",
//         icon: ShoppingCartOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: "apps-ecommerce-productList",
//             path: `${APP_PREFIX_PATH}/apps/ecommerce/product-list`,
//             title: "sidenav.apps.ecommerce.productList",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "apps-ecommerce-addProduct",
//             path: `${APP_PREFIX_PATH}/apps/ecommerce/add-product`,
//             title: "sidenav.apps.ecommerce.addProduct",
//             icon: "",
//             breadcrumb: false,
//             submenu: [],
//           },
//           {
//             key: "apps-ecommerce-editProduct",
//             path: `${APP_PREFIX_PATH}/apps/ecommerce/edit-product/12`,
//             title: "sidenav.apps.ecommerce.editProduct",
//             icon: "",
//             breadcrumb: false,
//             submenu: [],
//           },
//           {
//             key: "apps-ecommerce-orders",
//             path: `${APP_PREFIX_PATH}/apps/ecommerce/orders`,
//             title: "sidenav.apps.ecommerce.orders",
//             icon: "",
//             breadcrumb: false,
//             submenu: [],
//           },
//         ],
//       },
//     ],
//   },
// ];

// const componentsNavTree = [
//   {
//     key: "components",
//     path: `${APP_PREFIX_PATH}/components`,
//     title: "sidenav.components",
//     icon: AntDesignOutlined,
//     breadcrumb: true,
//     isGroupTitle: true,
//     submenu: [
//       {
//         key: "components-general",
//         path: `${APP_PREFIX_PATH}/components/general`,
//         title: "sidenav.components.general",
//         icon: InfoCircleOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: "components-general-button",
//             path: `${APP_PREFIX_PATH}/components/general/button`,
//             title: "sidenav.components.general.button",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-general-icon",
//             path: `${APP_PREFIX_PATH}/components/general/icon`,
//             title: "sidenav.components.general.icon",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-general-typography",
//             path: `${APP_PREFIX_PATH}/components/general/typography`,
//             title: "sidenav.components.general.typography",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//         ],
//       },
//       {
//         key: "components-layout",
//         path: `${APP_PREFIX_PATH}/components/layout`,
//         title: "sidenav.components.layout",
//         icon: LayoutOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: "components-layout-grid",
//             path: `${APP_PREFIX_PATH}/components/layout/grid`,
//             title: "sidenav.components.layout.grid",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-layout-layout",
//             path: `${APP_PREFIX_PATH}/components/layout/layout`,
//             title: "sidenav.components.layout.layout",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//         ],
//       },
//       {
//         key: "components-navigation",
//         path: `${APP_PREFIX_PATH}/components/navigation`,
//         title: "sidenav.components.navigation",
//         icon: CompassOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: "components-navigation-affix",
//             path: `${APP_PREFIX_PATH}/components/navigation/affix`,
//             title: "sidenav.components.navigation.affix",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-navigation-breadcrumb",
//             path: `${APP_PREFIX_PATH}/components/navigation/breadcrumb`,
//             title: "sidenav.components.navigation.breadcrumb",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-navigation-dropdown",
//             path: `${APP_PREFIX_PATH}/components/navigation/dropdown`,
//             title: "sidenav.components.navigation.dropdown",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-navigation-menu",
//             path: `${APP_PREFIX_PATH}/components/navigation/menu`,
//             title: "sidenav.components.navigation.menu",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-navigation-pagination",
//             path: `${APP_PREFIX_PATH}/components/navigation/pagination`,
//             title: "sidenav.components.navigation.pagination",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-navigation-steps",
//             path: `${APP_PREFIX_PATH}/components/navigation/steps`,
//             title: "sidenav.components.navigation.steps",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//         ],
//       },
//       {
//         key: "components-data-entry",
//         path: `${APP_PREFIX_PATH}/components/data-entry`,
//         title: "sidenav.components.dataEntry",
//         icon: FileDoneOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: "components-data-entry-auto-complete",
//             path: `${APP_PREFIX_PATH}/components/data-entry/auto-complete`,
//             title: "sidenav.components.dataEntry.autoComplete",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-checkbox",
//             path: `${APP_PREFIX_PATH}/components/data-entry/checkbox`,
//             title: "sidenav.components.dataEntry.checkbox",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-cascader",
//             path: `${APP_PREFIX_PATH}/components/data-entry/cascader`,
//             title: "sidenav.components.dataEntry.cascader",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-date-picker",
//             path: `${APP_PREFIX_PATH}/components/data-entry/date-picker`,
//             title: "sidenav.components.dataEntry.datePicker",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-form",
//             path: `${APP_PREFIX_PATH}/components/data-entry/form`,
//             title: "sidenav.components.dataEntry.form",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-input-number",
//             path: `${APP_PREFIX_PATH}/components/data-entry/input-number`,
//             title: "sidenav.components.dataEntry.inputNumber",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-input",
//             path: `${APP_PREFIX_PATH}/components/data-entry/input`,
//             title: "sidenav.components.dataEntry.input",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-mentions",
//             path: `${APP_PREFIX_PATH}/components/data-entry/mentions`,
//             title: "sidenav.components.dataEntry.mentions",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-rate",
//             path: `${APP_PREFIX_PATH}/components/data-entry/rate`,
//             title: "sidenav.components.dataEntry.rate",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-radio",
//             path: `${APP_PREFIX_PATH}/components/data-entry/radio`,
//             title: "sidenav.components.dataEntry.radio",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-switch",
//             path: `${APP_PREFIX_PATH}/components/data-entry/switch`,
//             title: "sidenav.components.dataEntry.switch",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-slider",
//             path: `${APP_PREFIX_PATH}/components/data-entry/slider`,
//             title: "sidenav.components.dataEntry.slider",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-select",
//             path: `${APP_PREFIX_PATH}/components/data-entry/select`,
//             title: "sidenav.components.dataEntry.select",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-tree-select",
//             path: `${APP_PREFIX_PATH}/components/data-entry/tree-select`,
//             title: "sidenav.components.dataEntry.treeSelect",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-transfer",
//             path: `${APP_PREFIX_PATH}/components/data-entry/transfer`,
//             title: "sidenav.components.dataEntry.transfer",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-time-picker",
//             path: `${APP_PREFIX_PATH}/components/data-entry/time-picker`,
//             title: "sidenav.components.dataEntry.timePicker",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-entry-upload",
//             path: `${APP_PREFIX_PATH}/components/data-entry/upload`,
//             title: "sidenav.components.dataEntry.upload",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//         ],
//       },
//       {
//         key: "components-data-display",
//         path: `${APP_PREFIX_PATH}/components/data-display`,
//         title: "sidenav.components.dataDisplay",
//         icon: DesktopOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: "components-data-display-avatar",
//             path: `${APP_PREFIX_PATH}/components/data-display/avatar`,
//             title: "sidenav.components.dataDisplay.avatar",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-badge",
//             path: `${APP_PREFIX_PATH}/components/data-display/badge`,
//             title: "sidenav.components.dataDisplay.badge",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-collapse",
//             path: `${APP_PREFIX_PATH}/components/data-display/collapse`,
//             title: "sidenav.components.dataDisplay.collapse",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-carousel",
//             path: `${APP_PREFIX_PATH}/components/data-display/carousel`,
//             title: "sidenav.components.dataDisplay.carousel",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-card",
//             path: `${APP_PREFIX_PATH}/components/data-display/card`,
//             title: "sidenav.components.dataDisplay.card",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-calendar",
//             path: `${APP_PREFIX_PATH}/components/data-display/calendar`,
//             title: "sidenav.components.dataDisplay.calendar",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-descriptions",
//             path: `${APP_PREFIX_PATH}/components/data-display/descriptions`,
//             title: "sidenav.components.dataDisplay.descriptions",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-empty",
//             path: `${APP_PREFIX_PATH}/components/data-display/empty`,
//             title: "sidenav.components.dataDisplay.empty",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-list",
//             path: `${APP_PREFIX_PATH}/components/data-display/list`,
//             title: "sidenav.components.dataDisplay.list",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-popover",
//             path: `${APP_PREFIX_PATH}/components/data-display/popover`,
//             title: "sidenav.components.dataDisplay.popover",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-statistic",
//             path: `${APP_PREFIX_PATH}/components/data-display/statistic`,
//             title: "sidenav.components.dataDisplay.statistic",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-tree",
//             path: `${APP_PREFIX_PATH}/components/data-display/tree`,
//             title: "sidenav.components.dataDisplay.tree",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-tooltip",
//             path: `${APP_PREFIX_PATH}/components/data-display/tooltip`,
//             title: "sidenav.components.dataDisplay.tooltip",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-timeline",
//             path: `${APP_PREFIX_PATH}/components/data-display/timeline`,
//             title: "sidenav.components.dataDisplay.timeline",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-tag",
//             path: `${APP_PREFIX_PATH}/components/data-display/tag`,
//             title: "sidenav.components.dataDisplay.tag",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-tabs",
//             path: `${APP_PREFIX_PATH}/components/data-display/tabs`,
//             title: "sidenav.components.dataDisplay.tabs",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-data-display-table",
//             path: `${APP_PREFIX_PATH}/components/data-display/table`,
//             title: "sidenav.components.dataDisplay.table",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//         ],
//       },
//       {
//         key: "components-feedback",
//         path: `${APP_PREFIX_PATH}/components/feedback`,
//         title: "sidenav.components.feedback",
//         icon: CommentOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: "components-feedback-alert",
//             path: `${APP_PREFIX_PATH}/components/feedback/alert`,
//             title: "sidenav.components.feedback.alert",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-feedback-drawer",
//             path: `${APP_PREFIX_PATH}/components/feedback/drawer`,
//             title: "sidenav.components.feedback.drawer",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-feedback-modal",
//             path: `${APP_PREFIX_PATH}/components/feedback/modal`,
//             title: "sidenav.components.feedback.modal",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-feedback-message",
//             path: `${APP_PREFIX_PATH}/components/feedback/message`,
//             title: "sidenav.components.feedback.message",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-feedback-notification",
//             path: `${APP_PREFIX_PATH}/components/feedback/notification`,
//             title: "sidenav.components.feedback.notification",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-feedback-progress",
//             path: `${APP_PREFIX_PATH}/components/feedback/progress`,
//             title: "sidenav.components.feedback.progress",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-feedback-popconfirm",
//             path: `${APP_PREFIX_PATH}/components/feedback/popconfirm`,
//             title: "sidenav.components.feedback.popconfirm",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-feedback-result",
//             path: `${APP_PREFIX_PATH}/components/feedback/result`,
//             title: "sidenav.components.feedback.result",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-feedback-spin",
//             path: `${APP_PREFIX_PATH}/components/feedback/spin`,
//             title: "sidenav.components.feedback.spin",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-feedback-skeleton",
//             path: `${APP_PREFIX_PATH}/components/feedback/skeleton`,
//             title: "sidenav.components.feedback.skeleton",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//         ],
//       },
//       {
//         key: "components-other",
//         path: `${APP_PREFIX_PATH}/components/other`,
//         title: "sidenav.components.other",
//         icon: RobotOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: "components-other-anchor",
//             path: `${APP_PREFIX_PATH}/components/other/anchor`,
//             title: "sidenav.components.other.anchor",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-other-backtop",
//             path: `${APP_PREFIX_PATH}/components/other/backtop`,
//             title: "sidenav.components.other.backtop",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-other-config-provider",
//             path: `${APP_PREFIX_PATH}/components/other/config-provider`,
//             title: "sidenav.components.other.configProvider",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-other-divider",
//             path: `${APP_PREFIX_PATH}/components/other/divider`,
//             title: "sidenav.components.other.divider",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//         ],
//       },
//       {
//         key: "components-charts",
//         path: `${APP_PREFIX_PATH}/components/charts`,
//         title: "sidenav.charts",
//         icon: PieChartOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: "components-charts-apex",
//             path: `${APP_PREFIX_PATH}/components/charts/apex-charts`,
//             title: "sidenav.charts.apex",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//           {
//             key: "components-charts-chartjs",
//             path: `${APP_PREFIX_PATH}/components/charts/chartjs`,
//             title: "sidenav.charts.chartjs",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//         ],
//       },
//       {
//         key: "components-maps",
//         path: `${APP_PREFIX_PATH}/components/maps`,
//         title: "sidenav.maps",
//         icon: EnvironmentOutlined,
//         breadcrumb: true,
//         submenu: [
//           // {
//           //   key: 'components-maps-google',
//           //   path: `${APP_PREFIX_PATH}/components/maps/google-map`,
//           //   title: 'sidenav.maps.google',
//           //   icon: '',
//           //   breadcrumb: true,
//           //   submenu: []
//           // },
//           {
//             key: "components-maps-simple",
//             path: `${APP_PREFIX_PATH}/components/maps/simple-map`,
//             title: "sidenav.maps.simple",
//             icon: "",
//             breadcrumb: true,
//             submenu: [],
//           },
//         ],
//       },
//     ],
//   },
// ];

// const docsNavTree = [
//   {
//     key: "docs",
//     path: `${APP_PREFIX_PATH}/docs`,
//     title: "sidenav.docs",
//     icon: BookOutlined,
//     breadcrumb: false,
//     isGroupTitle: true,
//     submenu: [
//       {
//         key: "docs-documentation",
//         path: `${APP_PREFIX_PATH}/docs/documentation`,
//         title: "sidenav.docs.documentation",
//         icon: FileUnknownOutlined,
//         breadcrumb: false,
//         submenu: [],
//       },
//       {
//         key: "docs-changelog",
//         path: `${APP_PREFIX_PATH}/docs/documentation/changelog`,
//         title: "sidenav.docs.changelog",
//         icon: ProfileOutlined,
//         breadcrumb: false,
//         submenu: [],
//       },
//     ],
//   },
// ];

const navigationConfig = [...mainNavTree, ...systemNavTree];

export default navigationConfig;