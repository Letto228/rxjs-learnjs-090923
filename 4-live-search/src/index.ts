import 'bootstrap';
import '../../assets/css/style.css';
import  './styles.css';
import { catchError, fromEvent, map, of } from 'rxjs';
import { liveSearch } from './live-search';
import { Card } from './card.interface';
import { requestToHtmlString } from './request-to-html-string';

const inputElement = document.getElementById('search') as HTMLElement;
const containerElement = document.querySelector('.container') as HTMLElement;

fromEvent(inputElement, 'input')
    .pipe(
        map(({target}) => (target as HTMLInputElement).value),
        liveSearch<{items: Card[]}>(
            q => `http://api.github.com/search/repositories?q=${q}`,
            {items: []},
        ),
        map(({items}) => requestToHtmlString(items))
    )
    .subscribe({
        next: html => {
            containerElement.innerHTML = html;
        },
        complete: () => {
            console.log('complete');
        }
    });
