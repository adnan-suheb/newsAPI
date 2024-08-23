import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsdashComponent } from "./news/newsdash/newsdash.component";
import { NewsListComponent } from "./news/news-list/news-list.component";
import { SingleNewsComponent } from "./news/single-news/single-news.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";

const routes: Routes = [
    {
        path: '',
        component: NewsdashComponent
    },
    {
        path: 'news',
        component: NewsdashComponent,
        children: [
            {
                path: ':newsTitle',
                component: SingleNewsComponent
            }
        ]
    },
    {
        path: 'page-not-found',
        component: PageNotFoundComponent
    },
    {
        path: '**',
        redirectTo: 'page-not-found'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRounting {

}