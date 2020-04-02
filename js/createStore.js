

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};

function createStore(reducer) {
  let state;
  function dispatch(action){
    state = reducer(state, action);
    render();
  };
  function getState(){
    return state;
  };
  return { getState, dispatch }
}

function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

let store = createStore(reducer)
store.dispatch({ type: '@@INIT' });
console.log(createStore().getState());
let button = document.getElementById('button');

button.addEventListener('click', function() {
    store.dispatch({ type: 'INCREASE_COUNT' });
})