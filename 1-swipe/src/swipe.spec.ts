import { TestScheduler } from "rxjs/testing";
import { swipe$ } from "./swipe";

function createStubEvent(x: number): TouchEvent {
    return new TouchEvent('event', {
        changedTouches: [
            new Touch({clientX: x, identifier: 1, target: new EventTarget()})
        ]
    })
}

describe('Swipe', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('swipe test', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const touchStart$ = cold(
                '-a----b-----------|',
                {
                    a: createStubEvent(2),
                    b: createStubEvent(30),
                },
            );
            const touchEnd$ = cold(
                '----a----------b--|',
                {
                    a: createStubEvent(200),
                    b: createStubEvent(20),
                },
            )

            const swipeStream$ = swipe$(
                touchStart$,
                touchEnd$,
            );

            const expectedMarbles = '----a-------------|';
            const expectedMarblesValueMap = {
                a: 198,
            };

            expectObservable(swipeStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        })
    })
})