import { Routes } from '@angular/router';
import { TreeViewDemo } from './Treeview/treeview-demo';
import { SurveyDemo } from './Survey/survey-demo';
import { AddressBook } from './AddressBook/address-book';

export const routes: Routes = [
  {
    path: '',
    component: TreeViewDemo,
    pathMatch: 'full',
  },
  {
    path: 'survey',
    component: SurveyDemo
  },
  {
    path: 'friends',
    component: AddressBook
  }
]
