import * as commentRepo from './comment.memory.repository.js';

const getAll = async () => commentRepo.getAll();

const createComment = async (text, userId, postId) => {
  const comment = await commentRepo.createComment(text, userId, postId);
  return comment;
};

const getCommentById = async (id) => commentRepo.getCommentById(id);

const updateComment = async (id, text) => {
  const comment = await commentRepo.updateComment(id, text);
  return comment;
};

const deleteComment = async (id) => commentRepo.deleteComment(id);

export { getAll, createComment, getCommentById, updateComment, deleteComment };
