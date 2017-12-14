import axios from 'axios';

export const getBlogs = (cb) => {
  return (dispatch) => {
    axios.get('/api/blogs')
      .then( res => dispatch({ type: 'BLOGS', blogs: res.data }) )
      .then( cb() )
  }
}

export const addBlog = (blog) => {
  return (dispatch) => {
    axios.post('/api/blogs', { blog })
      .then( res => dispatch({ type: 'ADD_BLOG', blog: res.data }) )
  }
}

export const updateBlog = (blog) => {
  return (dispatch) => {
    axios.put(`/api/blogs/${blog.id}`, { blog })
      .then( res => dispatch({ type: 'UPDATE_BLOG', blog: res.data }) )
  }
}

export const deleteBlog = (id) => {
  return (dispatch) => {
    axios.delete(`/api/blogs/${id}`)
      .then( () => dispatch({ type: 'DELETE_BLOG', id }) )
  }
}