import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/common.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Controller from './screens/Controller';


//one uses the react router dom to navigate to various pages and components
ReactDOM.render(<Controller />, document.getElementById('root'));
registerServiceWorker();
