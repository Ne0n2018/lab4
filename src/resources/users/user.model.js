import { v4 as uuidv4 } from 'uuid';

class User {
  constructor({
    id = uuidv4(),
    name,
    login,
    password,
    salt,
    posts = [],
    comments = [],
    createdAt = Date.now(),
  }) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
    this.salt = salt;
    this.posts = posts;
    this.comments = comments;
    this.createdAt = createdAt;
  }

  static toResponse(user) {
    const { id, name, login, password, posts, comments, createdAt } = user;
    return { id, name, login, password, posts, comments, createdAt };
  }
}

export default User;
