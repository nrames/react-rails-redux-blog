const blogs = ( state = [], action ) => {
  switch(action.type) {
    case 'BLOGS':
      return action.blogs
    case 'ADD_BLOG':
      return [...state, action.blog];
    case 'UPDATE_BLOG':
      return state.map( a => {
        if (a.id === action.blog.id)
          return action.blog
        return a
      });
    case 'DELETE_BLOG':
      let blogs = state.filter( p => p.id !== action.id)
      return blogs
    default:
      return state
  }
}

export default blogs;
