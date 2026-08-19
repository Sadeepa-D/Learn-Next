import dbArray from "@/database/dbarray";

export interface User {
  id: number;
  name: string;
  email: string;
}

function getAllUsers(): User[] {
  return dbArray;
}

function addUser(user: User): void {
  dbArray.push(user);
}

function removeUserById(id: number): void {
  const index = dbArray.findIndex((user) => user.id === id);
  if (index !== -1) {
    dbArray.splice(index, 1);
  }
}

const user = {
  getAllUsers,
  addUser,
  removeUserById,
};

export default user;
