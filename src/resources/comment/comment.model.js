import { v4 as uuidv4 } from 'uuid';

class Comment {
  constructor({ id = uuidv4(), text, createdAt = Date.now(), userId, postId }) {
    this.id = id;
    this.text = text;
    this.createdAt = createdAt;
    this.userId = userId;
    this.postId = postId;
  }

  static toResponse(comment) {
    const { id, text, createdAt, userId, postId } = comment;
    return { id, text, createdAt, userId, postId };
  }
}

export default Comment;
