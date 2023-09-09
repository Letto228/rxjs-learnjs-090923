import { animationFrameScheduler, asapScheduler, asyncScheduler } from 'rxjs';
import '../../assets/css/style.css';
import { animationDownElement$ } from './animate';
import  './styles.css';
import { AnimationFrameScheduler } from 'rxjs/internal/scheduler/AnimationFrameScheduler';

const shapeElement = document.querySelector('.animated-shape') as HTMLElement;

animationDownElement$(shapeElement, 20000, animationFrameScheduler).subscribe();
