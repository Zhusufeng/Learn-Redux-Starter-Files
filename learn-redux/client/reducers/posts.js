// You have a reducer for each part of the store
// Our store has posts and comments

// This is posts

// A reducer takes in two things:
// 1. the action (information about what happened)
// 2. copy of current state
// Reudcer takes this in and returns an updated copy of store

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('Incrementing likes!')
      const i = action.index;
      // Below we make a new array & change only the photo that was liked
      return [
        ...state.slice(0, i), // keep before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // keep after the one we are updating
      ];
    default:
      return state;
  }
}

export default posts;