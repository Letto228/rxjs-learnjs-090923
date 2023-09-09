import { Observable, OperatorFunction, catchError, debounceTime, delayWhen, distinctUntilChanged, filter, map, of, pipe, retry, retryWhen, switchMap, tap, timer } from "rxjs";
import { AjaxConfig, ajax } from "rxjs/ajax";

export function liveSearch<T>(
    urlCreater: (searchParams: string) => string,
    errorValue: T,
    requestConfig: Omit<AjaxConfig, 'url'> = {crossDomain: true},
): OperatorFunction<string, T> {
    return pipe(
        debounceTime(300),
        filter(searchParams => searchParams.length >= 3),
        distinctUntilChanged(),
        map(searchParams => ({
            ...requestConfig,
            url: urlCreater(searchParams),
        }) as AjaxConfig),
        switchMap(ajaxConfig => ajax<T>(ajaxConfig).pipe(
            map(({response}) => response),
            // retry(3),
            // retryWhen(errors$ => errors$.pipe(
            //     tap(console.log),
            //     delayWhen(error => timer(3000))
            // )),
            retry({
                count: 3,
                // delay: 1000,
                delay: (error, retryCount) => {
                    console.log(error);

                    return timer(1000 * (retryCount + 1));
                },
                resetOnSuccess: false,
            }),
            catchError(() => of(errorValue)),
        )),
        // catchError(() => of(errorValue)),
    )
}