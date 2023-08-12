import { Menu } from "@../../types/menu";

const menuData: Menu[] = [
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
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About_Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact_Page",
        path: "/contact",
        newTab: false,
      },
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
      },
      {
        id: 46,
        title: "Sign_In_Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign_Up_Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error_Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
