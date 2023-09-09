import { asapScheduler, asyncScheduler, combineLatest, from, observeOn, of, scheduled, subscribeOn, tap } from 'rxjs';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';

const data = Array.from({length: 10}).map((_, i) => i);

// from(data).subscribe(value => {
//     console.log('sync', value)
// });

// scheduled(data, asapScheduler).subscribe(value => {
//     console.log('asapScheduler ', value)
// });
// scheduled(data, asyncScheduler).subscribe(value => {
//     console.log('asyncScheduler 2 ', value)
// });

// from(data)
//     .pipe(
//         tap(value => {
//             console.log('default schedular', value);
//         }),
//         observeOn(asyncScheduler),
//         tap(value => {
//             console.log('before async schedular', value);
//         }),
//         subscribeOn(asapScheduler),
//     )
//     .subscribe(value => {
//         console.log(value);
//     });
    
// from([1,2,3]).subscribe(value => {
//     console.log('subscribe 2', value);
// });

const sequenceFirst$ = scheduled([1, 2], asapScheduler);
const sequenceLast$ = of(99);

const sequence$ = combineLatest([
    sequenceFirst$,
    sequenceLast$,
])

sequence$.subscribe(console.log);
