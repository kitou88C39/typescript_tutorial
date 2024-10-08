import { getBookDetail } from './function';
import { Book } from './book';

//本の在庫
const books = [
  { id: 1, title: 'TypeScript入門', author: '田中太郎', available: true },
  { id: 2, title: 'JavaScript入門', author: '山田太郎', available: false },
  { id: 3, title: 'React入門', author: '鈴木太郎', available: true },
];

//ネストオブジェクトをTypeで宣言
type BorrowedBook = {
  id: number;
  book: Book;
  status: 'borrowed' | 'returned';
};

//借りた本をリストを保存
const borrowedBooks: BorrowedBook[] = [];
let newBookId = 1;

//本が入荷した時に書籍リストに追加　　　Omit <T, Keys>を使う
// function addNewBook(book: Omit<Book, 'id'>): void {
//   const newBook = {
//     id: newBookId++,
//     ...book,
//   };
//   books.push(newBook);
// }
//本が入荷した時に書籍リストに追加 ジェネリクス型
function addArray<T>(array: T[], item: T) {
  array.push(item);
  return array;
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
  const newBorrowedBook: BorrowedBook = {
    id: newBookId++,
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
//addNewBook({ title: 'Vue入門', author: '伊藤花子', available: true });
//addNewBook({ title: 'Python入門', author: '鈴木花子', available: true });

addArray<Book>(books, {
  id: newBookId++,
  title: 'Python入門',
  author: '鈴木花子',
  available: true,
});

//本を借りるてすぐに返却
borrowedBook('TypeScript入門');
returnBook(1);
getBookDetail('TypeScript入門', books);

console.log(books);
console.log(borrowedBooks);
