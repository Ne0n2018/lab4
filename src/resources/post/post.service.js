import * as postRepo from './post.memory.repository.js';

const getAll = () => postRepo.getAll();

const createPost = async (title, text, comment, userId) => {
  const newPost = await postRepo.createPost(title, text, comment, userId);
  return newPost;
};

const getPostById = async (id) => postRepo.getPostById(id);

const updatePost = async (id, title, text, comment, userId) => {
  const updatedPost = await postRepo.updatePost(id, title, text, comment, userId);
  return updatedPost;
};

const deletePost = async (id) => {
  const deletedPost = await postRepo.deletePost(id);
  return deletedPost;
};

export { getAll, createPost, updatePost, getPostById, deletePost };
