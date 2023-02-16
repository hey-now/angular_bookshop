import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robert C Martin',
        image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        price: 29.99
      },
      {
        name: 'The Pragmatic Programmer',
        author: 'Dave Thomas',
        image: 'https://m.media-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg',
        price: 25.99
      },
      {
        name: 'Engineers Survival Guide',
        author: 'Merih Taze',
        image: 'https://m.media-amazon.com/images/I/612I5Rf+UDL.jpg',
        price: 29.99
      },
      {
        name: "Software Architect's Handbook",
        author: 'Joseph Inego',
        image: 'https://m.media-amazon.com/images/I/71mThCBp59L.jpg',
        price: 50.99
      },
    ];
  }
}
