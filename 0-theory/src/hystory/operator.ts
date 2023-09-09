// import { Observable, Subscriber, filter, interval } from 'rxjs';
// import { ajax } from 'rxjs/ajax';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // function filterStreamValue<T>(filterCb: (value: T) => boolean): (source$: Observable<T>) => Observable<T> {
// //     return (source$: Observable<T>): Observable<T> =>
// //         new Observable<T>(subscriber => {
// //             const subscription = source$.subscribe({
// //                 next: value => {
// //                     if (filterCb(value)) {
// //                         subscriber.next(value);
// //                     }
// //                 },
// //                 error: error => {
// //                     subscriber.error(error);
// //                 },
// //                 complete: () => {
// //                     subscriber.complete();
// //                 },
// //             });

// //             // return () => {
// //             //     subscription.unsubscribe();
// //             // }
// //             // return {
// //             //     unsubscribe: () => {
// //             //         subscription.unsubscribe();
// //             //     }
// //             // }
// //             return subscription;
// //         })
// // }
// function filterStreamValue<T>(filterCb: (value: T) => boolean): (source$: Observable<T>) => Observable<T> {
// function filterStreamValue<T>(filterCb: (value: T) => boolean): OperatorFunction<T, T> {
//     return (source$: Observable<T>): Observable<T> =>
//         new Observable<T>(subscriber => source$.subscribe({
//             next: value => {
//                 if (filterCb(value)) {
//                     subscriber.next(value);
//                 }
//             },
//             error: error => {
//                 subscriber.error(error);
//             },
//             complete: () => {
//                 subscriber.complete();
//             },
//         }));
// }

// const stream$ = interval(1000);
// const filterStreamByEvenNumber = filterStreamValue<number>(value => value % 2 === 0);
// // const filterStreamByEvenNumber = filter<number>(value => value % 2 === 0);

// const filteredStream$ = filterStreamByEvenNumber(stream$);

// filteredStream$.subscribe(terminalLog);

// // Bad operator RxJS
// // function stub(_: Observable<unknown>): Observable<string> {
// //     return new Observable(subscriber => {
// //         subscriber.next('stub text');
// //     })
// // }

// // stub(ajax({url: ''})) // Запрос не уйдет
