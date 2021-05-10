import { trigger, transition, style, animate } from '@angular/animations';

export const inOutAnimation = trigger(
  'inOutAnimation',
  [
    transition(
      ':enter',
      [
        style({ opacity: 0, width: '0' }),
        animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)',
          style({ opacity: 1, width: '*' }))
      ]
    ),
    transition(
      ':leave',
      [
        style({ opacity: 1, width: '*' }),
        animate('.5s cubic-bezier(0.075, 0.82, 0.165, 1)',
          style({ opacity: 0, width: '0' }))
      ]
    ),
  ]
);
