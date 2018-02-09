
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { Router, RouterModule } from '@angular/router';

const Approuting=[{path:'Home',component:HeaderComponent,
    children:[{path:'children',component:HomeChildComponent},
  ]},
      {path:'Footer',component:FooterComponent,
    children:[
      {path:'child',component:ChildComponentComponent}
      ]},
      {path:'logOut',redirectTo:'Footer',pathMatch:'full'},
      {path:'reactive',component:ChildComponentComponent},
      {path:'**',component:HeaderComponent}];

export const routing = RouterModule.forRoot(Approuting);