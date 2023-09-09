// import { Observable } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const ws = new WebSocket('ws://localhost:8081');

// ws.onopen = () => {
//     ws.send('on');
// };

// const wsMessage$ = new Observable<number>(subscriber => {
//     console.log('START');

//     function messageListener(message: MessageEvent) {
//         subscriber.next(message.data);
//     }

//     function errorListener(error: Event) {
//         subscriber.error(error);
//     }

//     function closeListener() {
//         subscriber.complete();
//     }

//     ws.addEventListener('message', messageListener);
//     ws.addEventListener('error', errorListener);
//     ws.addEventListener('close', closeListener);

//     return () => {
//         ws.removeEventListener('message', messageListener);
//         ws.removeEventListener('error', errorListener);
//         ws.removeEventListener('close', closeListener);
//         console.log('DESTROY');
//     }
// });

// const subscription = wsMessage$.subscribe(value => {
//     terminalLog(value);
// });

// // setTimeout(() => {
// //     wsMessage$.subscribe(value => {
// //         terminalLog(value);
// //     });
// // }, 5000);

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 5000);
