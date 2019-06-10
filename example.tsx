import React from 'react';
import * as ReactDom from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Footer, Content, Aside} from './lib/layout/layout';
import './example.scss'

const logo = require('./logo.png');

ReactDom.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="48" height="48" alt=""/>
          <span>X-GULU</span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li><Link to="/icon">Icon</Link></li>
            <li><Link to="/button">Button</Link></li>
            <li><Link to="/dialog">Dialog</Link></li>
            <li><Link to="/layout">Layout</Link></li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer">&copy; Mr.X</Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));
