import { Observable, fromEvent, map, switchMap, takeUntil, tap } from "rxjs";
import { ElemenPosition } from "./element-position.interface";

export function dragElement$(element: HTMLElement): Observable<ElemenPosition> {
    const elementMousedown$ = fromEvent<MouseEvent>(element, 'mousedown');
    const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');

    return elementMousedown$.pipe(
        tap(event => {
            event.preventDefault();
        }),
        switchMap(({offsetX, offsetY}) => mousemove$.pipe(
            tap(event => {
                event.preventDefault();
            }),
            map(({clientX, clientY}): ElemenPosition => ({
                top: clientY - offsetY,
                left: clientX - offsetX,
            })),
            takeUntil(mouseup$),
        )),
        // takeUntil(mouseup$),
    );
}