// import { filter, interval, map, skip, take } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const stream$ = interval(1000);

// // - === 1000ms(1s)(1 frame)
// // -0-1-2-3-4-5 -6 -7 -8 -9 -

// // map(value => value * 2)
// // -0-2-4-6-8-10-12-14-16-18-

// // filter(value => value % 3 === 0)
// // -0- - -6- -  -12-  -  -18-

// // skip(1)
// // - - - -6- -  -12-  -  -18-

// // take(2)
// // - - - -6- -  -12|

// stream$.pipe(
//     map(value => value * 2),
//     filter(value => value % 3 === 0),
//     skip(1),
//     take(2),
// ).subscribe(terminalLog);
