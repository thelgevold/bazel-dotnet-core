import { NgModule } from '@angular/core';
import { SharedModule } from '../Shared/shared.module';

import { Survey } from './survey';
import { SurveyDemo } from './survey-demo';

@NgModule({
  imports: [SharedModule],
  declarations: [Survey, SurveyDemo],
})
export class SurveyModule { }
