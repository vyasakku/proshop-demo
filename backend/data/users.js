import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Aakash vyas',
    email: 'aakash@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Abhishek Vyas',
    email: 'Abhishek@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
