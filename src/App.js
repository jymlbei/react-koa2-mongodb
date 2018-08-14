// import React from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import Login from './login';
// import Register from './register';
//
// export default class App extends React.Component {
//     render() {
//         return (<Router>
//             <div>
//                 <ul>
//                     <li>
//                         <Link to="/">home</Link>
//                     </li>
//                     <li>
//                         <Link to="/register">register</Link>
//                     </li>
//                     <li>
//                         <Link to="/login">login</Link>
//                     </li>
//                 </ul>
//
//                 <hr/>
//
//                 <Route exact path="/" component={Login}/>
//                 <Route path="/register" component={Register}/>
//                 <Route path="/login" component={Login}/>
//             </div>
//         </Router>);
//     }
// }
import React from 'react';
 // import {Provider} from 'mobx-react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';  //react路由
 // import Editer from './editer';  //ES6
import Login from './login';
import Register from './register';
import Home from './home';
 // import store from './store/allStore';

class App extends React.Component {
    render() {
         // return (<div><Editer/></div>)
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}>
                    </Route>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/home' component={Home}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
