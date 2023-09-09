import { interval, map, of, take } from "rxjs";
import { TestScheduler } from "rxjs/testing"

// describe('Test block', () => {
//     let testScheduler: TestScheduler;

//     beforeEach(() => {
//         testScheduler = new TestScheduler((actual, expected) => {
//             expect(actual).toEqual(expected);
//         });
//     });

//     it('Map test', () => {

//     })
// })

describe('Test block', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('Cold test', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const stream$ = cold(
                '-a--b---c---|',
                {
                    a: 1,
                    b: 6,
                    c: 10,
                }
            );
            const finalStream$ = stream$.pipe(
                map(value => value * 2),
            );

            const expectedMarbles = '-a--b---c---|';
            const expectedMarblesValueMap = {
                a: 2,
                b: 12,
                c: 20,
            }

            expectObservable(finalStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        })
    })

    it('interval test', () => {
        testScheduler.run(({expectObservable}) => {
            const stream$ = interval(2);
            const finalStream$ = stream$.pipe(
                map(value => value * 2),
                take(4),
            );

            const expectedMarbles = '--a-b-c-(d|)';
            const expectedMarblesValueMap = {
                a: 0,
                b: 2,
                c: 4,
                d: 6,
            }

            expectObservable(finalStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        })
    })

    it('iterable value test', () => {
        testScheduler.run(({expectObservable}) => {
            const stream$ = of(0,1,2,3);
            const finalStream$ = stream$.pipe(
                map(value => value * 2),
            );

            const expectedMarbles = '(abcd|)';
            const expectedMarblesValueMap = {
                a: 0,
                b: 2,
                c: 4,
                d: 6,
            }

            expectObservable(finalStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        })
    });

    it('hot test', () => {
        testScheduler.run(({hot, expectObservable}) => {
            const stream$ = hot(
                '-a--b---c------d',
                {
                    a: 1,
                    b: 6,
                    c: 10,
                    d: 100,
                }
            );
            const finalStream$ = stream$.pipe(
                map(value => value * 3),
            );

            const subscriptionMarbles = '---^------------!';

            const expectedMarbles = '    ----b---c------d';
            const expectedMarblesValueMap = {
                b: 18,
                c: 30,
                d: 300,
            }

            expectObservable(finalStream$, subscriptionMarbles).toBe(expectedMarbles, expectedMarblesValueMap);
        })
    });
})
