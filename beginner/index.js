//本の在庫
const books = [
  { title: 'TypeScript入門', author: '田中太郎', available: true },
  { title: 'JavaScript入門', author: '山田太郎', available: false },
  { title: 'React入門', author: '鈴木太郎', available: true },
];

//借りた本をリストを保存
const borrowedBooks = [];
let newBookId = 1;

//本が入荷した時に書籍リストに追加
function addNewBook(book) {
  books.push(book);
  return book;
}

//借りたい本のタイトルを関数に渡すと貸してくれる
function borrowedBooks(title) {
  const selectedBook = books.find(
    (book) => book.title == title && book.available
  );
  selectedBook.available = false;
  const newBorrowedBook = {
    id: newBookId,
    book: selectedBook,
    status: 'borrowed',
  };
  borrowedBooks.push(newBorrowedBook);
  return selectedBook;
}
