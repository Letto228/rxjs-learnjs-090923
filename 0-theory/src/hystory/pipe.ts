// import { Observable, OperatorFunction, filter, interval, map, pipe, take } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const stream$ = interval(1000);

// // const filterEven = filter<number>(value => value % 2 === 0);
// // const double = map<number, number>(value => value * 2);

// // const filterEvenChildStream$ = filterEven(stream$);
// // const doubleChildStream$ = double(filterEvenChildStream$);

// // doubleChildStream$.subscribe(terminalLog);

// // const resultStream$ = double(
// //     filterEven(
// //         stream$
// //     )
// // );

// // resultStream$.subscribe(terminalLog);

// // function pipe<T, U>(
// //     ...operators: Array<OperatorFunction<any, any>>
// // ): OperatorFunction<T, U> {
// //     return (source$: Observable<T>): Observable<U> => 
// //         operators.reduce(
// //             (stream$, operator) => operator(stream$),
// //             source$,
// //         ) as unknown as Observable<U>
// // }

// // const applyedOperators = pipe(
// //     filter<number>(value => value % 2 === 0),
// //     map(value => value * 2),
// // );

// // applyedOperators(stream$).subscribe(terminalLog);

// // pipe(
// //     filter<number>(value => value % 2 === 0),
// //     map(value => value * 2),
// // )(stream$).subscribe(terminalLog);

// stream$.pipe(
//     filter<number>(value => value % 2 === 0),
//     map(value => value * 2),
//     take(4),
// ).subscribe(terminalLog);
