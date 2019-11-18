import { createStore } from 'redux';
import notesApp from 'reducers';

// import todoApp from './reducers'

const store = createStore(notesApp);

export default store;
