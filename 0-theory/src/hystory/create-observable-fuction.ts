// import { from, interval, of, timer } from 'rxjs';
// import { ajax } from 'rxjs/ajax';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // interval(1000).subscribe(terminalLog);
// // timer(5000, 1000).subscribe(terminalLog);

// // of(1,2,3,[5,6],{count: 10}).subscribe(terminalLog);
// from({length: 10, 1: 'test'}).subscribe({
//     next: terminalLog,
//     complete: () => {
//         terminalLog('complete');
//     }
// });
// // from(Promise.resolve(12)).subscribe({
// //     next: terminalLog,
// //     complete: () => {
// //         terminalLog('complete');
// //     }
// // });

// from(fetch('http://...').then(res => res.json())).subscribe(terminalLog);
// ajax({
//     url: 'http://...',
//     crossDomain: true,
//     method: 'GET',
// }).subscribe(terminalLog)
