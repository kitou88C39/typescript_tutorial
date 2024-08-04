//本のタイトル及びIDを受け取ったらその本を返す
function getBookDetail(identifier: string | number) {
  if (typeof identifier === 'string') {
    return books.find((book) => book.title === identifier);
  } else {
    return books.find((book) => book.id === identifier);
  }
}
