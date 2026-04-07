import type { SlideDefinition } from '../lib/slide-types';
import { CoverSlide } from './01-cover';
import { AgendaSlide } from './02-agenda';
import { CoreThesisSlide } from './03-core-thesis';
import { HarnessDefinitionSlide } from './04-harness-definition';

export const slides: SlideDefinition[] = [
  { id: 'cover', component: CoverSlide },
  { id: 'agenda', component: AgendaSlide },
  { id: 'core-thesis', component: CoreThesisSlide },
  { id: 'harness-definition', component: HarnessDefinitionSlide },
];
