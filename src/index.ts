/* eslint-disable no-new */
import { Container } from './components/card-container/container';
import { Card } from './components/cards/card';

import './style.css';

new Container(`.app`);
new Card(`.characters-list`);

console.log('funsiona');
