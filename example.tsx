import React from 'react';
import * as ReactDOM from 'react-dom';
import { Button as GuButton } from './lib';

const div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(<GuButton/>, div);
