import { Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
export const StudentsRoutes: Routes = [{
    path: 'students',
    component: StudentsComponent,
    children: [
        { path: '', component: ListComponent },
        { path: 'create', component: CreateComponent },
        { path: ':studentId', component: ViewComponent },
    ],
}];