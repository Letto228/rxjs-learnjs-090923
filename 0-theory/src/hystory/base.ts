// import { Observable, Subscriber, Subscription } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const stream$ = new Observable<number>((subscriber: Subscriber<number>) => {
//     console.log('CREATE');

//     let count = 0;

//     const intervalId = setInterval(() => {
//         count += 1;

//         console.log('INCREMENT', count);
//         subscriber.next(count);

//         if (count === 6) {
//             console.log('COMPLETE');
//             subscriber.complete();
//             // console.log('ERROR');
//             // subscriber.error(new Error('danger'));
//         }
//     }, 1000);

//     return () => { // Destroy callback
//         console.log('DESTROY');
//         clearInterval(intervalId);
//     }
// });

// const allSubscription = new Subscription();
// allSubscription.add(
//     stream$.subscribe({
//         next: value => {
//             terminalLog(value);
//         },
//         complete: () => {
//             terminalLog('complete');
//         },
//         error: error => {
//             terminalLog(error);
//         }
//     })
// );
// allSubscription.add(
//     stream$.subscribe({
//         next: value => {
//             terminalLog(value);
//         },
//         complete: () => {
//             terminalLog('complete');
//         },
//         error: error => {
//             terminalLog(error);
//         }
//     })
// );

// setTimeout(() => {
//     console.log(allSubscription.closed);
//     allSubscription.unsubscribe();
//     console.log(allSubscription.closed);
// }, 3000);

// // setTimeout(() => {
// //     stream$.subscribe(value => {
// //         terminalLog(value)
// //     });
// // }, 4000)
