import { getBookDetail } from './function';
import { Book } from './book';

//本の在庫
const books = [
  { id: 1, title: 'TypeScript入門', author: '田中太郎', available: true },
  { id: 2, title: 'JavaScript入門', author: '山田太郎', available: false },
  { id: 3, title: 'React入門', author: '鈴木太郎', available: true },
];
//TypeでBook型を作成する
// type Book = {
//   id: number;
//   title: string;
//   author: string;
//   available: boolean;
// };

//ネストオブジェクトをTypeで宣言
type BorrowedBook = {
  id: number;
  book: Book;
  status: 'borrowed' | 'returned';
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
//本のタイトル及びIDを受け取ったらその本を返す
// function getBookDetail(identifier: string | number) {
//   if (typeof identifier === 'string') {
//     return books.find((book) => book.title === identifier);
//   } else {
//     return books.find((book) => book.id === identifier);
//   }
// }

//新しい本の追加
addNewBook({ id: 4, title: 'Vue入門', author: '伊藤花子', available: true });
addNewBook({ id: 5, title: 'Python入門', author: '鈴木花子', available: true });

//本を借りるてすぐに返却
borrowedBook('TypeScript入門');
returnBook(1);
getBookDetail('TypeScript入門');

console.log(books);
console.log(borrowedBooks);
