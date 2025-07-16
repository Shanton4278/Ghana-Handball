import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import{NgFor} from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [NgFor,RouterModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

    images = [
      { url: 'assets/images/hbimage1.JPG', alt: 'Image 1' },
      { url: 'assets/images/hbimage2.JPG', alt: 'Image 2' },
      { url: 'assets/images/hbimage3.JPG', alt: 'Image 3' },
      { url: 'assets/images/hbimage4.JPG', alt: 'Image 4' },
      { url: 'assets/images/hbimage5.JPG', alt: 'Image 5' },
      { url: 'assets/images/hbimage6.JPG', alt: 'Image 6' },
      { url: 'assets/images/hbimage7.JPG', alt: 'Image 7' },
    ];
  }

