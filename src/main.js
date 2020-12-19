import { sum } from './math-utils';
import './styles.css';

const NUMBERS = [1, 2, 3, 4];
const result = sum(...NUMBERS);

const appElement = document.getElementById('app');
const newElement = document.createElement('p');
newElement.innerText = `1 + 2 + 3 + 4 = ${result}`;
appElement.innerHTML += newElement;
