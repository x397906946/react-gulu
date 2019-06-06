import React from 'react';
import * as ReactDom from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button.example';

ReactDom.render(
  <Router>
    <div>
      <header>
        <div className="logo">X-Gulu</div>
      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li><Link to="/icon">Icon</Link></li>
            <li><Link to="/button">Button</Link></li>
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
        </main>
      </div>
    </div>
  </Router>
  , document.querySelector('#root'));
