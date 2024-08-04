import { Book } from './book';
//本のタイトル及びIDを受け取ったらその本を返す
export function getBookDetail(
  identifier: string | number,
  books: Book[]
): Book {
  if (typeof identifier === 'string') {
    return books.find((book) => book.title === identifier);
  } else {
    return books.find((book) => book.id === identifier);
  }
}
