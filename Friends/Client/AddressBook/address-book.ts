import { Component, OnInit } from '@angular/core';
import { AddressBookService } from './address-book-service';
import { AddressBookTitleService } from './address-book-title-service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'address-book',
  templateUrl: './address-book.html',
  providers: [AddressBookService],
})
export class AddressBook implements OnInit {
  title: string;
  res: Observable<Array<{}>>;

  constructor(
    private addressBookService: AddressBookService,
    private addressBookTitleService: AddressBookTitleService,
  ) {
  }

  ngOnInit() {
    this.res = this.addressBookService.getEntries();

    this.title = this.addressBookTitleService.getTitle();
  }
}
