import { fromEvent, merge } from 'rxjs';
import '../../assets/css/style.css';
import { swipe$ } from './swipe';
import { terminalLog } from '../../utils/log-in-terminal';

const down$ = merge(
    fromEvent<MouseEvent>(document, 'mousedown'),
    fromEvent<TouchEvent>(document, 'touchstart'),
);
const up$ = merge(
    fromEvent<MouseEvent>(document, 'mouseup'),
    fromEvent<TouchEvent>(document, 'touchend'),
);

swipe$(down$, up$).subscribe(terminalLog);
