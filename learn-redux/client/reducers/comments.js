// You have a reducer for each part of the store
// Our store has posts and comments

// This is comments

// A reducer takes in two things:
// 1. the action (information about what happened)
// 2. copy of current state
// Reudcer takes this in and returns an updated copy of store

function comments(state = [], action) {
  console.log(state, action);
  return state;
}