import React from 'react';
import ReactDOM from 'react-dom';
import {  createStore,applyMiddleware, compose } from 'redux' 
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import reducers from './reducers'
import './index.css';
import App from './front/app/App';
import registerServiceWorker from './registerServiceWorker';

import Home from './front/app/App'
import About from './front/about/about'
import Manage from './front/manage/manage'
import articleManage from './front/manage/articleManage/articleManage'
import newTag from './front/manage/newTag/newTag'
import newArticle from './front/manage/newArticle/newArticle'

const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
 <div>
     <Switch>
         <Route path="/about" component={About} />  
         <Route path="/manage/articleManage" component={articleManage} />
         <Route path="/manage/newTag" component={newTag} />
         <Route path="/manage/newArticle" component={newArticle} />
         <Route path="/manage" component={Manage} />
         <Route component={Home} />  
     </Switch>
 </div>
</BrowserRouter>
</Provider>, document.getElementById('root')
);


registerServiceWorker();
