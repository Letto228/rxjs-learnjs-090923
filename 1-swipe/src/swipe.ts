import { Observable, filter, map, tap, zip } from "rxjs";

function getXPosition(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent
        ? event.clientX
        : event.changedTouches.item(0)!.clientX;
}

export function swipe$(
    downEvents$: Observable<MouseEvent | TouchEvent>,
    upEvents$: Observable<MouseEvent | TouchEvent>,
) {
    return zip(
        downEvents$.pipe(map(getXPosition)),
        upEvents$.pipe(map(getXPosition)),
    ).pipe(
        map(([start, end]) => end - start),
        tap(value => {
            console.log(value);
        }),
        filter(diff => Math.abs(diff) > 20),
    )
}