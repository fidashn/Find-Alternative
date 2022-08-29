import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import { createFirestoreInstance } from 'redux-firestore';
// import firebase from "./Firebase/firebase";

// import {combineReducers} from 'redux';
// import taskReducer from './handle-action';

// const rootReducer = combineReducers({
//     tasks: taskReducer
// });

// export default rootReducer;


// export default combineReducers({ tasks: taskReducer });

// const rrfProps = {
//   firebase,
//   config: {
//         userProfile: "users"
//     },
//   dispatch: store.dispatch,
//   createFirestoreInstance
// }



// const store = createStore(rootReducer);

// const rrfProps = {
//   firebase,
//   config: {
//         userProfile: "users"
//     },
//   dispatch: store.dispatch,
//   createFirestoreInstance
// }

// ReactDOM.render(
//   <Provider store={store}>
//     <ReactReduxFirebaseProvider {...rrfProps}>
//       <App />
//     </ReactReduxFirebaseProvider>
//   </Provider>,
//   document.getElementById('root')
// )


