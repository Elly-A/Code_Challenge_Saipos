import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

// Material
import { matModules } from './ext_modules/extmodules';

// Redux
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, INITIAL_STATE, rootReducer } from './stores/store';
import { devToolsEnhancer } from 'redux-devtools-extension';

// Components
import { AppComponent } from './app.component';
import { components } from './components/components';


@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    ...matModules,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgReduxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    // Enable redux-dev-tools if isDevMode()
    const enhancer = isDevMode() ? [devToolsEnhancer({})] : [];
    // Init redux
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancer);
  }
}
