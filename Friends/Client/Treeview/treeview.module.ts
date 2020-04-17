import { NgModule } from '@angular/core';
import { SharedModule } from '../Shared/shared.module';

import { TreeViewDemo } from './treeview-demo';
import { TreeView } from './treeview';

@NgModule({
  imports: [SharedModule],
  declarations: [TreeView, TreeViewDemo],
})
export class TreeViewModule { }
