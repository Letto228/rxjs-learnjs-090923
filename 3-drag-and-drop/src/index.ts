import '../../assets/css/style.css';
import { dragElement$ } from './drag-and-drop';
import  './styles.css';

const box = document.querySelector('.draggable') as HTMLElement;

dragElement$(box).subscribe(({left, top}) => {
    box.style.left = `${left}px`;
    box.style.top = `${top}px`;
});
