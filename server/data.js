import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      firstName: "Shukhrat",
      lastName: "Mamadaliev",
      email: "shukhrat@example.com",
      phone: "07523230970",
      address: "24 Monthope",
      password: bcrypt.hashSync("12345678", 8),
      isAdmin: true,
    },
  ],
};

export default data;
