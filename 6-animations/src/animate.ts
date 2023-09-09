import { Observable, animationFrameScheduler, asapScheduler, interval, map, takeWhile, tap } from "rxjs";

const animationFn = (percentage: number) => {
    return Math.sin(-13 * (percentage + 1) * Math.PI * 2) * Math.pow(2, -10 * percentage) + 1;
}

function time$(schedular = animationFrameScheduler): Observable<number> {
    // const startTime = Date.now();
    const startTime = schedular.now();

    return interval(0, schedular).pipe(
        map(() => schedular.now() - startTime), // временной diff
    )
}

function duration$(allMs: number, schedular = animationFrameScheduler): Observable<number> {
    return time$(schedular).pipe(
        map(time => time / allMs),
        takeWhile(percentage => percentage <= 1),
    )
}

const diffPx = 100;

export function animationDownElement$(
    element: HTMLElement,
    animationTime: number,
    schedular = animationFrameScheduler,
): Observable<unknown> {
    return duration$(animationTime, schedular).pipe(
        map(animationFn),
        map(percentage => percentage * diffPx),
        tap(translate => {
            element.style.transform = `translateY(${translate}px)`;
        }),
    );
}
