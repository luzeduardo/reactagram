function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      //return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
      break;
    case 'REMOVE_COMMENT':
      console.log('removing comment');
      //need to rturn new state without deleted one
      return [
        //from the start to the one we want to delete
        ...state.slice(0, action.i),
        //after the deleted one, to the ennd
        ...state.slice(action.i + 1)
      ]
      break;
    default:
      return state;
  }
}

function comments (state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      //take the current state
      ...state,
      //overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
