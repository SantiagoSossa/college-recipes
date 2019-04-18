import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { RecipeDto } from './recipe-dto';
import { environment } from 'src/environments/environment.prod';

export class RecipesInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<RecipeDto>, next: HttpHandler){
        const httpsReq = req.clone({
            url: req.url.replace("https://college-recipes.firebaseapp.com", environment.API_URL)
          });
          return next.handle(httpsReq);
    }
}