import './index.css';
import numeral from 'numeral';

const courseValue = numeral(100).format('$0,0.00');
console.log(`Total value is : [${courseValue}]`);  //eslint-disable-line no-console
