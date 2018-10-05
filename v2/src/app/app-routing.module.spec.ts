import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});


const routes = [
  {
    path: 'web',
    component: HomeComponent 
  }
]

@NgModule({
  exports: [ RouterModule.forRoot(routes)  ]
});


export class AppRoutingModule {}