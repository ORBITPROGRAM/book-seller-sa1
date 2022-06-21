import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { BookService } from 'src/app/services/book.service';
import { PurchaseService } from 'src/app/services/purchase.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Purchase } from 'src/app/models/purchase.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookList: Array<Book> = [];
  faBook = faBook;
  errorMessage: string = "";
  infoMessage: string = "";

  constructor(private authenticationService: AuthenticationService,
              private bookService: BookService,
              private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(data => {
      this.bookList = data;
    });
  }

  purchase(item: Book) {
    if(!this.authenticationService.currentUserValue?.id) {
      this.errorMessage = "You should log in to buy a book!";
      return;
    }

    const purchase = new Purchase(this.authenticationService.currentUserValue.id, item.id, item.price);

    this.purchaseService.savePurchase(purchase).subscribe(data => {
      this.infoMessage = 'Mission is completed!';
    }, err => {
      this.errorMessage = 'Unexpected errr eccured!';
      console.log(err);
    })
  }

}
