//本の在庫
const books = [
  { title: 'TypeScript入門', author: '田中太郎', available: true },
  { title: 'JavaScript入門', author: '山田太郎', available: false },
  { title: 'React入門', author: '鈴木太郎', available: true },
];
//TypeでBook型を作成する
type Book = {
  title: string;
  author: string;
  available: boolean;
};

//ネストオブジェクトをTypeで宣言
type BorrowedBook = {
  id: number;
  book: Book;
  state: string;
};

//借りた本をリストを保存
const borrowedBooks: BorrowedBook[] = [];
let newBookId = 1;

//本が入荷した時に書籍リストに追加
function addNewBook(book: Book) {
  books.push(book);
  return book;
}

//借りたい本のタイトルを関数に渡すと貸してくれる
function borrowedBook(title: string) {
  const selectedBook = books.find(
    (book) => book.title == title && book.available
  );
  //タイプガードを入れる
  if (!selectedBook) {
    console.error('貸し出しする本が見つかりませんでした');
    return;
  }

  selectedBook.available = false;
  const newBorrowedBook = {
    id: newBookId,
    book: selectedBook,
    status: 'borrowed',
  };
  borrowedBooks.push(newBorrowedBook);
  return selectedBook;
}

//借りた本の返却
function returnBook(bookId: number) {
  const selectedBook = borrowedBooks.find((book) => book.id === bookId);
  //タイプガードを入れる
  if (!selectedBook) {
    console.error('返却する本が見つかりませんでした');
    return;
  }

  selectedBook.book.available = true;
  selectedBook.status = 'returned';
  return selectedBook;
}

//新しい本の追加
addNewBook({ title: 'Vue入門', author: '伊藤花子', available: true });
addNewBook({ title: 'Python入門', author: '鈴木花子', available: true });

//本を借りるてすぐに返却
borrowedBooks('TypeScript入門');
returnBook(1);

//console.log(books);
//console.log(borrowedBooks);
