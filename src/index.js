import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import './index.css';
import RestApp from './RestApp';
import RegisterDoc from './RegisterDoc';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RestApp}/>
        <Route exact path="/reg_doc" component={RegisterDoc}/>
        <Route path="*" render={() => <h1>Not found</h1>} />
      </Switch>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
