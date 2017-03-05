import { Component } from '@angular/core';

import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {

  mediaItems;

  constructor (private MediaItemService: MediaItemService) {}

  ngOnInit() {
    this.mediaItems = this.MediaItemService.get();
  }

  onMediaItemDelete(mediaItem) {
    this.MediaItemService.delete(mediaItem);
  }
}
