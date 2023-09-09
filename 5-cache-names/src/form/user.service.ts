import { AsyncSubject, Observable, map, share } from "rxjs";
import { ajax } from "rxjs/ajax";
import { User } from "./user.interface";
import { AsyncAction } from "rxjs/internal/scheduler/AsyncAction";

class UserService {
    uniqueNameSequence$: Observable<string[]> = ajax<User[]>({
        url: 'https://learn.javascript.ru/courses/groups/api/participants?key=15b53qh',
        crossDomain: true,
        method: 'GET',
    })
        .pipe(
            map(({response}) => response.map(({profileName}) => profileName)),
            share({
                connector: () => new AsyncSubject(),
                resetOnComplete: false,
            }),
        )
}

export const userService = new UserService();
