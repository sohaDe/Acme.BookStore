import { AccountConfigModule } from '@abp/ng.account/config';
import { CoreModule } from '@abp/ng.core';
import { registerLocale } from '@abp/ng.core/locale';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
import { ThemeLeptonXModule } from '@abp/ng.theme.lepton-x';
import { SideMenuLayoutModule } from '@abp/ng.theme.lepton-x/layouts';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { FeatureManagementModule } from '@abp/ng.feature-management';
import { AbpOAuthModule } from '@abp/ng.oauth';
import { IconModule } from '@ant-design/icons-angular';
import { LocalizationModule } from '@abp/ng.core';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BookModule } from './book/book.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AccountModule, LoginComponent } from '@abp/ng.account';
import { AccountLayoutModule } from "@abp/ng.theme.lepton-x/account";
import { OrderModule } from './order/order.module';
import { SharedModule } from './shared/shared.module';
import { ProfileModule } from './profile/profile.module';
import { LoginModule } from './login/login.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // BookModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale({
      }),
      localizations: [
        {
          culture: 'en',
          resources: [
            {
              resourceName: 'Whyzr',
              
              texts: {
                "Menu:Home": "Home",
                "Menu:Orders":"Orders",
                "Welcome": "Welcome",
                "LongWelcomeMessage": "Welcome to the application. This is a startup project based on the ABP framework. For more information, visit abp.io.",
              }
            }
          ]
        }
      ]
    }),
    AbpOAuthModule.forRoot(),
    ThemeSharedModule.forRoot(),
    AccountConfigModule.forRoot(),
    IdentityConfigModule.forRoot(),
    TenantManagementConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    ThemeLeptonXModule.forRoot(),
    SideMenuLayoutModule.forRoot(),
    FeatureManagementModule.forRoot(),
    AccountConfigModule.forRoot(),
    IconModule,
    LocalizationModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    AccountLayoutModule.forRoot(),
    OrderModule,
    FormsModule,
    AccountModule,
    SharedModule,
    ProfileModule,
    LoginModule,
    
  ],
  declarations: [AppComponent],
  providers: [APP_ROUTE_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule { }
