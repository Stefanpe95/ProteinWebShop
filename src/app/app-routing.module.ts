import {NgModule} from '@angular/core'
import {Routes, RouterModule, Router} from '@angular/router'
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import {PageNotFoundComponent} from './components/shared/page-not-found/page-not-found.component'

//routes work if one works stops propagating (goin on '**' to find any prefix and suffix)
const routes: Routes =[
    {path:'', redirectTo: '/shop',pathMatch: 'full'},
    {path: 'shop', component: ShoppingCartComponent},
    {path: '**', component:PageNotFoundComponent}
]


//show lazy loading for child modules loaded
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    //this will make sure all module will be exported
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}