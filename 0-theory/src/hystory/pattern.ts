// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const sequence = new Promise(resolve => {
//     let count = 0;

//     setInterval(() => {
//         count += 1;

//         console.log('INCREMENT', count);
//         resolve(count);
//     }, 1000)
// });

// sequence.then(value => {
//     terminalLog(value);
// });

// setTimeout(() => {
//     sequence.then(value => {
//         terminalLog(value);
//     });
// }, 6000)

// const sequence = (function* iteratorFn() {
//     let count = 0;

//     while (true) {
//         count += 1;

//         console.log('INCREMENT', count);
//         yield count;
//     }
// })();

// terminalLog(sequence.next().value);
// terminalLog(sequence.next().value);
// terminalLog(sequence.next().value);
// terminalLog(sequence.next().value);
// terminalLog(sequence.next().value);
// terminalLog(sequence.next().value);


