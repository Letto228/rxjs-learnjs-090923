// import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, interval, map } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';
// import { ajax } from 'rxjs/ajax';

// // const stream$ = new AsyncSubject<number>(); // Observable + Observer

// // stream$.subscribe(value => {
// //     terminalLog(`Sub 1 - ${value}`);
// // });

// // stream$.next(1);
// // stream$.next(2);
// // stream$.next(3);

// // setTimeout(() => {
// //     stream$.next(4);
// //     stream$.next(5);
// //     stream$.next(6);
// // }, 4000);


// // setTimeout(() => {
// //     stream$.subscribe(value => {
// //         terminalLog(`Sub 2 - ${value}`);
// //     });

// //     stream$.next(7);
// //     stream$.next(8);
// //     stream$.next(9);

// //     stream$.complete();
// // }, 7000);

// function getItems<T>(url: string): Observable<T> {
//     let asyncSubject: AsyncSubject<T>;

//     return new Observable(subscriber => {
//         if (!asyncSubject) {
//             asyncSubject = new AsyncSubject<T>();

//             ajax<T>({url, crossDomain: true})
//                 .pipe(map(({response}) => response))
//                 .subscribe(asyncSubject)
//         }

//         return asyncSubject.subscribe(subscriber);
//     })
// }

// const items$ = getItems('https://learn.javascript.ru/courses/groups/api/participants?key=15b53qh');

// items$.subscribe(terminalLog);
// items$.subscribe(terminalLog);
// items$.subscribe(terminalLog);
// items$.subscribe(terminalLog);
