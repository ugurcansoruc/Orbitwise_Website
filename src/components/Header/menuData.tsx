import { Menu } from "@../../types/menu";

const menuData: Array<Menu> = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "Support",
    path: "/contact",
    newTab: false,
  }
];
export default menuData;

/*
,
  {
    id: 6,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 43,
        title: "Blog_Grid_Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog_Sidebar_Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog_Details_Page",
        path: "/blog-details",
        newTab: false,
      }
    ],
  },*/