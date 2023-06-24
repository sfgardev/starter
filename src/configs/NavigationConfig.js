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

const navigationConfig = [...mainNavTree, ...systemNavTree];

export default navigationConfig;
