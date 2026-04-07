import type { SlideDefinition } from '../lib/slide-types';
import { CoverSlide } from './01-cover';
import { AgendaSlide } from './02-agenda';
import { CoreThesisSlide } from './03-core-thesis';
import { HarnessDefinitionSlide } from './04-harness-definition';
import { TwoModesOverviewSlide } from './05-two-modes-overview';
import { PlanProblemSlide } from './06-plan-problem';
import { PlanSuccessSlide } from './07-plan-success';
import { PlanSolutionSlide } from './08-plan-solution';
import { CodeExecutionSlide } from './09-code-execution';
import { HumanRoleSlide } from './10-human-role';
import { IntentDriftSlide } from './11-intent-drift';
import { ContextEngineeringSlide } from './12-context-engineering';
import { DefenseRulesSlide } from './13-defense-rules';
import { MakerCheckerSlide } from './14-maker-checker';
import { ActionStepsSlide } from './15-action-steps';
import { SummarySlide } from './16-summary';
import { ThankYouSlide } from './17-thank-you';

export const slides: SlideDefinition[] = [
  { id: 'cover', component: CoverSlide },
  { id: 'agenda', component: AgendaSlide },
  { id: 'core-thesis', component: CoreThesisSlide },
  { id: 'harness-definition', component: HarnessDefinitionSlide },
  { id: 'two-modes-overview', component: TwoModesOverviewSlide },
  { id: 'plan-problem', component: PlanProblemSlide },
  { id: 'plan-success', component: PlanSuccessSlide },
  { id: 'plan-solution', component: PlanSolutionSlide },
  { id: 'code-execution', component: CodeExecutionSlide },
  { id: 'human-role', component: HumanRoleSlide },
  { id: 'intent-drift', component: IntentDriftSlide },
  { id: 'context-engineering', component: ContextEngineeringSlide },
  { id: 'defense-rules', component: DefenseRulesSlide },
  { id: 'maker-checker', component: MakerCheckerSlide },
  { id: 'action-steps', component: ActionStepsSlide },
  { id: 'summary', component: SummarySlide },
  { id: 'thank-you', component: ThankYouSlide },
];
