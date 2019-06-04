import Icon from './icon/icon';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

const fn = () => {
  console.log('fn')
}

ReactDOM.render(<div>
  <Icon name="wechat" onClick={fn}/>
</div>, document.getElementById('root'));
