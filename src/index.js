import React from 'react';
import { render } from 'react-dom';
import reducer, { initialState } from './components/utils/context/reducer';
import { StateProvider } from './components/utils/context/StateProvider';

import App from './App.jsx';
import './index.css';

render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>,
    document.getElementById('root')
);


// tutorial didn't say to change the following, so I'm keeping it for now and commenting out
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();
