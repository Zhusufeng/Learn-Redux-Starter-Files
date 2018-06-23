// You have a reducer for each part of the store
// Our store has posts and comments

// This is comments

// A reducer takes in two things:
// 1. the action (information about what happened)
// 2. copy of current state
// Reudcer takes this in and returns an updated copy of store

// This will update individual comments
function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return existing state with new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      console.log('Removing a comment')
      // return new state W/O the deleted comment
      return [
        // from the state of array to the one we want to delete
        ...state.slice(0, action.i), 
        // after the deleted one to the end
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state, 
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    } 
  }
  return state;
}

export default comments;