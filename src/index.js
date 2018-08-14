import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import 'antd/dist/antd.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
