import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders} from './app.routing';
import { CharactersService, ComicsService, CreatorsService, EventsService, SeriesService } from './shared';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { AssociatedItemsComponent } from './shared/components/associated-items/associated-items.component';
import { ThumbnailComponent } from './shared/components/thumbnail/thumbnail.component';
import { EntitiesListComponent } from './shared/components/entities-list/entities-list.component';
import { EntitiesListItemComponent } from './shared/components/entities-list-item/entities-list-item.component';
import { ItemNameComponent } from './shared/components/item-name/item-name.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterDetailsComponent,
    PaginationComponent,
    ThumbnailComponent,
    AssociatedItemsComponent,
    EntitiesListComponent,
    EntitiesListItemComponent,
    ItemNameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    CharactersService,
    ComicsService,
    CreatorsService,
    EventsService,
    SeriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
