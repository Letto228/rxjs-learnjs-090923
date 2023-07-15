import 'bootstrap';
import '../../assets/css/style.css';

const form1 = document.querySelector('.first-form') as HTMLElement;
const form2 = document.querySelector('.second-form') as HTMLElement;

form2.hidden = true;

setTimeout(() => {
    // create second form
    form2.hidden = false;

}, 10000)