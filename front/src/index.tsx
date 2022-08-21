import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

import 'antd/dist/antd.less';
import './ui/assets/styles/base.less';

const targetHTMLElement = document.getElementById('root');

render(<App />, targetHTMLElement);
