import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor( private gifsService: GifsService){

  }

  get tags(): string[]{
    return this.gifsService.tagsHistory;
  }

  public searchTag(tag: string): void{
    this.gifsService.searchTag(tag);
  }

}
