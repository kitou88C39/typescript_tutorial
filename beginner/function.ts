import { Book } from './book';
//本のタイトル及びIDを受け取ったらその本を返す
export function getBookDetail(
  identifier: string | number,
  books: Book[]
): Book {
  const book =
    typeof identifier === 'number'
      ? books.find((book) => book.id === identifier)
      : books.find((book) => book.title === identifier);
  if (!book) {
    throw new Error('本が見つかりませんでした');
  }
  return book;
}
