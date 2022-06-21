export class Purchase {
  id: number | undefined;
  userId: number | undefined;
  bookId: number | undefined;
  price: number | undefined;
  purchaseTime: Date = new Date();

  constructor(useId?: number, bookId?: number, price?: number) {
    this.userId = useId;
    this.bookId = bookId;
    this.price = price;
  }
}