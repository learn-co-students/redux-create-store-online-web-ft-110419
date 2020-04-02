function createStore(reducer) { // by putting the reducer as an argument, any reducer can be used for createStore.
  let state;
 
  function dispatch(action) { // dispatches the action, calls the reducer
    state = reducer(state, action);
    render();
  }
 
  function getState() { 
    return state;
  };
 
  return { // createStore returns an object with the dispatch function and getState function.
    dispatch,
    getState
  };
};
 
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
 
    default:
      return state;
  }
}
 
function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};
 
let store = createStore(reducer) // createStore takes the reducer reducer as an argument
store.dispatch({ type: '@@INIT' }); // we can call store.dispatch because createStore returned an object containing functions dispatch and getState.
let button = document.getElementById('button');
 
button.addEventListener('click', () => {
  store.dispatch({ type: 'INCREASE_COUNT' });
});
