import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

// Redux
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, INITIAL_STATE, rootReducer } from './stores/store';
import { devToolsEnhancer } from 'redux-devtools-extension';

// Components
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';
import { AddTodoComponent } from './components/todo-list/add-todo/add-todo.component';
import { SingleTodoComponent } from './components/todo-list/single-todo/single-todo.component';
import { ValidateSupervisorPasswordComponent } from './components/todo-list/dialog/validate-supervisor-password/validate-supervisor-password.component';
import { HttpClientModule } from '@angular/common/http';
import { GenerateTodosComponent } from './components/todo-list/generate-todos/generate-todos.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavbarComponent,
    DarkModeComponent,
    AddTodoComponent,
    SingleTodoComponent,
    ValidateSupervisorPasswordComponent,
    GenerateTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatListModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgReduxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    const enhancer = isDevMode() ? [devToolsEnhancer({})] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancer);
  }
}
