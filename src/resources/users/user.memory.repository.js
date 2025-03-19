import { v4 as uuidv4 } from 'uuid';
import User from './user.model.js';

// Хардкоженные данные пользователей
const users = [
  new User({
    id: uuidv4(),
    name: 'Борис',
    login: 'boris123',
    password: 'securePassword1',
    salt: 'randomSalt1',
  }),
  new User({
    id: uuidv4(),
    name: 'Александр',
    login: 'alex456',
    password: 'securePassword2',
    salt: 'randomSalt2',
  }),
  new User({
    id: uuidv4(),
    name: 'Мария',
    login: 'maria789',
    password: 'securePassword3',
    salt: 'randomSalt3',
  }),
];

const getAll = async () => users.map(User.toResponse);

const createUser = async ({ name, login, password }) => {
  const newUser = new User({
    id: uuidv4(),
    name,
    login,
    password,
    salt: 'randomGeneratedSalt',
  });
  users.push(newUser);
  return User.toResponse(newUser);
};

const getById = async (id) => users.find((user) => user.id === id);

const updateUser = async (id, updatedUserData) => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedUserData };
    return User.toResponse(users[userIndex]);
  }
  return null;
};

const deleteUser = async (id) => {
  // // Удаляем связанные посты
  // const userPosts = posts.filter(post => post.userId === id);
  // userPosts.forEach(post => {
  //   // Удаляем комментарии, связанные с постом
  //   const postComments = comments.filter(comment => comment.postId === post.id);
  //   postComments.forEach(comment => {
  //     const commentIndex = comments.findIndex(c => c.id === comment.id);
  //     if (commentIndex !== -1) comments.splice(commentIndex, 1);
  //   });

  //   // Удаляем сам пост
  //   const postIndex = posts.findIndex(p => p.id === post.id);
  //   if (postIndex !== -1) posts.splice(postIndex, 1);
  // });

  // Удаляем самого пользователя
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    return users.splice(userIndex, 1)[0];
  }
  return null;
};

export { getAll, createUser, getById, updateUser, deleteUser };
