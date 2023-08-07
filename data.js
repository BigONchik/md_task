const reports = {
  report1: {
    header: [
      { id: "project_name", type: "string", caption: "Project name" },
      { id: "total_by_project", type: "float", caption: "Total by project" },
      {
        id: "project_type",
        type: "string",
        caption: "Project type",
        align: "center",
      },
      { id: "jan", type: "float", caption: "Jan" },
      { id: "feb", type: "float", caption: "Feb" },
    ],
    data: [
      ["Mimesis", 1024.3, "commercial", 2048.2, 4096.0],
      ["Mako", 2345.1, "internal", 3465.3, { d: 12.5, color: "selected" }],
      ["Edelweiss", 54.4, "commercial", 564.8, 4652.3],
    ],
  },

  report2: {
    header: [
      { id: "name", type: "string", caption: "Name" },
      { id: "age", type: "int", caption: "Age" },
      { id: "email", type: "string", caption: "Email" },
      { id: "is_active", type: "bool", caption: "Active", align: "center" },
    ],
    data: [
      ["John Doe", 30, "john@example.com", true],
      ["Jane Smith", 25, "jane@example.com", false],
      ["Janel Akimov", 16, "janelakimov@gmail.com.com", false],
      ["Samat Super", 19, "supersamat2004@gmail.com.com", true],
      ["Nikita Chaika", 22, "nikita@example.com", false],
    ],
  },

  report3: {
    header: [
      { id: "product_name", type: "string", caption: "Product name" },
      { id: "price", type: "float", caption: "Price" },
      { id: "category", type: "string", caption: "Category", align: "center" },
    ],
    data: [
      ["LG", 19.99, "Electronics"],
      ["Xiaomi", 24.99, "Home"],
      ["BMW", 24.99, "Car"],
      ["Earrings", 24.99, "Accessories"],
      ["Sweatshirt", 24.99, "Cloth"],
    ],
  },
};
