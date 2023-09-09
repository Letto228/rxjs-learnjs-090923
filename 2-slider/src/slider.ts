import 'bootstrap';
import 'bootstrap-slider';
import  './styles.css';
import { Observable, OperatorFunction, fromEvent, map, startWith, tap } from 'rxjs';

interface JQuerySliderEvent {
    value: {
        newValue: number;
    }
}

enum SliderClass {
    Good = 'good',
    Warn = 'warn',
    Bad = 'bad',
}

function colorizeSlider(jquerySlider: JQuery<HTMLElement>): OperatorFunction<number, number> {
    const sliderTrackElement = jquerySlider.prev().get(0).querySelector('.slider-track') as HTMLElement;

    return tap(sliderValue => {
        colorizeSliderByValue(sliderTrackElement, sliderValue)
    })
}

function colorizeSliderByValue(element: HTMLElement, value: number) {
    element.classList.remove(...Object.values(SliderClass));

    if (value < 4) {
        element.classList.add(SliderClass.Bad);

        return;
    }

    if (value <= 7) {
        element.classList.add(SliderClass.Warn);

        return;
    }

    element.classList.add(SliderClass.Good);
}

export function createSlider$(sliderId: string): Observable<number> {
    const jquerySlider = $(`#${sliderId}`).slider();
    const startValue = Number(jquerySlider.val());

    return fromEvent<JQuerySliderEvent>(jquerySlider, 'change').pipe(
        map(({value}) => value.newValue),
        startWith(startValue),
        colorizeSlider(jquerySlider),
    )
}
