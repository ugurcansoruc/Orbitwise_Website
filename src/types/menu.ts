export type MessageKeys = "Home" | "About" | "Blog" | "Support" | "Pages" | "About_Page" | "Contact_Page" |"Blog_Grid_Page" | "Blog_Sidebar_Page" | "Blog_Details_Page" |"Sign_In_Page" |"Sign_Up_Page" |"Error_Page";

export type Menu = {
  id: number;
  title: MessageKeys;
  path?: string;
  newTab: boolean;
  submenu?: Array<Menu>;
};