// import { ListService, PagedResultDto } from '@abp/ng.core';
// import { Component, OnInit } from '@angular/core';
// import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// // // import { AuthorLookupDto, BookDto, BookService, bookTypeOptions } from '@proxy/acme/book-store/books';
// import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
// import { Observable, map } from 'rxjs';


// @Component({
//   selector: 'app-book',
//   templateUrl: './book.component.html',
//   styleUrls: ['./book.component.scss'],
//   providers: [ListService,],
// })
// export class BookComponent implements OnInit {
// //   book = { items: [], totalCount: 0 } as PagedResultDto<BookDto>;

// //   selectedBook = {} as BookDto;
// //   authors$: Observable<AuthorLookupDto[]>;
// //   // authors:AuthorLookupDto[];
// //   form: FormGroup;
// //   bookTypes = bookTypeOptions;
// //   isModalOpen = false;
// //   date = null;
// //   isEnglish = false;

//   constructor(
//     public readonly list: ListService,
//     // private bookService: BookService,
//     private fb: FormBuilder,
//     private confirmation: ConfirmationService,
//     private i18n: NzI18nService
//   ) {
// //      this.buildForm();
// //      this.authors$ = bookService.getAuthorLookup().pipe(map((r) => r.items));
//      }


//   ngOnInit() {
//     this.i18n.setLocale(en_US);
// //     const bookStreamCreator = (query) => this.bookService.getList(query);

// //     this.list.hookToQuery(bookStreamCreator).subscribe((response) => {
// //       this.book = response;
// //     });
//   }


// //   createBook() {
// //     this.selectedBook = {} as BookDto;
// //     this.buildForm();
// //     this.isModalOpen = true;
// //   }

// //   editBook(id: string) {
// //     this.bookService.get(id).subscribe((book) => {
// //       this.selectedBook = book;
// //       this.buildForm();
// //       this.isModalOpen = true;
// //     });
// //   }

// //   buildForm() {
// //     this.form = this.fb.group({
// //       authorId: [this.selectedBook.authorId || null, Validators.required],
// //       name: [this.selectedBook.name || '', Validators.required],
// //       type: [this.selectedBook.type || null, Validators.required],
// //       publishDate: [
// //         this.selectedBook.publishDate ? new Date(this.selectedBook.publishDate) : null,
// //         Validators.required,
// //       ],
// //       price: [this.selectedBook.price || null, Validators.required],
// //     });
// //   }


  
// //   save() {
// //     if (this.form.invalid) {
// //       return;
// //     }

// //     const request = this.selectedBook.id
// //       ? this.bookService.update(this.selectedBook.id, this.form.value)
// //       : this.bookService.create(this.form.value);
// //     request.subscribe(() => {

// //       this.isModalOpen = false;
// //       this.form.reset();
// //       this.list.get();
// //     });
// //   }

// //   delete(id: string) {
// //     this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe((status) => {
// //       if (status === Confirmation.Status.confirm) {
// //         this.bookService.delete(id).subscribe(() => this.list.get());
// //       }
// //     });
// //   }
 
// //   handleCancel(): void {
// //     this.isModalOpen = false;
// //   }
// }

