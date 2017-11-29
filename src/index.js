import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import './index.css';
import RestApp from './RestApp';
import RestRegisterDoc from './RestRegisterDoc';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RestApp}/>
        <Route exact path="/reg_doc" component={RestRegisterDoc}/>
        <Route path="*" render={() => <h1>Not found</h1>} />
      </Switch>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
