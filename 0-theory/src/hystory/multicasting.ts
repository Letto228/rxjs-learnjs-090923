// import { BehaviorSubject, Observable, ReplaySubject, Subject, Subscriber, interval, share, shareReplay, take } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // const source$ = new Observable<number>((subscriber: Subscriber<number>) => {
// //     console.log('CREATE');

// //     let count = 0;

// //     const intervalId = setInterval(() => {
// //         count += 1;

// //         console.log('INCREMENT', count);
// //         subscriber.next(count);
// //     }, 1000);

// //     return () => { // Destroy callback
// //         console.log('DESTROY');
// //         clearInterval(intervalId);
// //     }
// // });

// // const stream$ = source$.pipe(
// //     share({
// //         connector: () => new ReplaySubject(),
// //     }),
// // );
// const stream$ = interval(1000).pipe(
//     take(2),
//     share({
//         connector: () => new Subject(),
//         resetOnComplete: false,
//         resetOnError: true,
//         resetOnRefCountZero: false,
//     }),
//     // shareReplay(2),
// );

// const subscription = stream$.subscribe(value => {
//     terminalLog(`Sub 1 - ${value}`);
// });

// // setTimeout(() => {
// //     subscription.unsubscribe();
// // }, 2000);

// setTimeout(() => {
//     stream$.subscribe(value => {
//         terminalLog(`Sub 2 - ${value}`);
//     });
// }, 4000);
