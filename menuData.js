export const menuData = [
  {
    title: "Products",
    subMenu: [
      { title: "Products 1" },
      { title: "Products 2" },
      { title: "Products 3" },
      { title: "Products 4" },
    ],
  },
  {
    title: "Category",
    subMenu: [
      {
        title: "Shirts",
        subMenu: [
          { title: "Polo Shirts" },
          { title: "T Sirts" },
          {
            title: "Shirts",
            subMenu: [
              { title: "Shirt A" },
              { title: "Shirt B" },
              { title: "Shirt C" },
            ],
          },
          { title: "Half Sleev" },
        ],
      },
    ],
  },
  { title: "Shop " },
  {
    title: "Clothes",
    subMenu: [
      {
        title: "Clothes 1",
        subMenu: [
          { title: "test 1 " },
          { title: "test 2" },
          { title: "test 3" },
        ],
      },
      { title: "Clothes 2" },
      { title: "Clothes 3" },
    ],
  },
  {
    title: "Pricing",
    subMenu: [
      { title: "< 500" },
      { title: "< 1000" },
      { title: "< 2000" },
      { title: "< 5000" },
    ],
  },
];

// remainning tasks -
// 1. hide other selected item on click of new parent li item
// 2. handle esc key on any element if that has not any submenu, still i can close the current
// opened submenu.
