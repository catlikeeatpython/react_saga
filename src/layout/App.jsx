import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Home from '../page/home/index.jsx';
// import Kind from '../page/kind/index.jsx';
import {routerConfig} from '../routes/router.config.js'
class Com extends Component {
  render() {

    let isAuth = window.localStorage.getItem('auth')
    return (
      <div className="App">
        <Switch>
          {/* <Route path="/" exact component='Home'></Route> */}
          {
            routerConfig.map((item,index)=>{
              return <Route key={item.path} path={item.path} component={item.component} />
            })
          }
          {
            !isAuth&&<Redirect from="/" to="/Home" />
          }
          
          {/* <Redirect from="/" to="/Home" /> */}
          {/* <Route path="/kind" component={Kind} /> */}
        </Switch>
        {/* <footer>
          <ul>
            <NavLink to="/home">
              首页
            </NavLink>
            <NavLink to="/kind">
              分类
            </NavLink>
            <NavLink to="/cart">
              购物车
            </NavLink>
            <NavLink to="/user">
              我的
            </NavLink>
          </ul>
        </footer> */}
      </div>
    );
  }
}

export default Com;