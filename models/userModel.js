

let users = [];
let nextUserId = 1;

function createUser(name, email) {
  const newUser = { id: nextUserId++, name, email };
  users.push(newUser);
  return newUser;
}

function getAllUsers() {
  return users;
}

function findUserById(id) {
  return users.find(u => u.id === id);
}

function updateUser(id, updates) {
  const user = users.find(u => u.id === id);
  if (!user) return null;

  user.name = updates.name || user.name;
  user.email = updates.email || user.email;
  return user;
}

function deleteUser(id) {
  users = users.filter(u => u.id !== id);
}

module.exports = { createUser, getAllUsers, findUserById, updateUser, deleteUser };
