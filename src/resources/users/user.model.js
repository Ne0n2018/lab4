import { v4 as uuidv4 } from 'uuid';

class User {
  constructor({ id = uuidv4(), name, login, password, salt, posts = [], comments = [] }) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
    this.salt = salt;
    this.posts = posts;
    this.comments = comments;
  }

  static toResponse(user) {
    const { id, name, login, password } = user;
    return { id, name, login, password };
  }
}

export default User;
