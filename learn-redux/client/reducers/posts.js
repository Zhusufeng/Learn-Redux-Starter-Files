// You have a reducer for each part of the store
// Our store has posts and comments

// This is posts

// A reducer takes in two things:
// 1. the action (information about what happened)
// 2. copy of current state
// Reudcer takes this in and returns an updated copy of store

function posts(state = [], action) {
  console.log('The post will change');
  console.log(state, action);
  return state;
}

export default posts;