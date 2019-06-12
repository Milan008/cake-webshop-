import { UserComponent } from './user.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/services/auth_gaurd';
import { FavouriteProductsComponent } from '../product/favourite-products/favourite-products.component';
import { CartProductsComponent} from "../product/cart-products/cart-products.component";
export const UserRoutes: Routes = [
	{
		path: 'users',
		component: UserComponent,
		canActivate: [ AuthGuard ],
		children: [
			{
				path: '',
				component: UserAccountComponent,
				outlet: 'profileOutlet'
			},
			{
				path: 'cart-items',
				component: CartProductsComponent,
				outlet: 'profileOutlet'
      },
      {
				path: 'favourite-products',
				component: CartProductsComponent,
				outlet: 'profileOutlet'
			}
		]
	}
];
