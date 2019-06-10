import React from 'react';
import * as ReactDom from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Footer, Content, Aside} from './lib/layout/layout';
import './example.scss';

const logo = require('./logo2.png');

ReactDom.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="174" height="48" alt=""/>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li><NavLink to="/icon">Icon</NavLink></li>
            <li><NavLink to="/dialog">Dialog</NavLink></li>
            <li><NavLink to="/layout">Layout</NavLink></li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer">&copy; Mr.X</Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));
