// import { catchError, interval, map, of, tap, zip } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';
// import { error } from 'jquery';

// const streamPing$ = interval(500);
// const streamData$ = of('1', '2', '3', 4, '5');
// const stream$ = zip(streamPing$, streamData$);

// stream$
//     .pipe(
//         map(([_ping, value]) => (value as any).toUpperCase()),
//         // tap({
//         //     error: error => {
//         //         console.log(error);
//         //     }
//         // })
//         catchError(error => {
//             console.log(error);

//             return of(99, 98);
//         })
//     )
//     .subscribe({
//         next: terminalLog,
//         complete: () => {
//             terminalLog('complete');
//         },
//         error: error => {
//             terminalLog(error);
//         }
//     })
