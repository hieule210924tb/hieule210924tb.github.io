type MenuItem = {
  id: number;
  name: string;
  path: string;
};

export const menuData: MenuItem[] = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Restaurants", path: "/restaurants" },
  { id: 3, name: "Features", path: "/features" },
  { id: 4, name: "Testimonials", path: "/testimonials" },
  { id: 5, name: "Download", path: "/download" },
];
