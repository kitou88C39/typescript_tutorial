export const test = () => {
  const name: string = 'Mike'; //1. 文字列型 (string)
  const age: number = 25; //2. 数値型 (number)
  const isStudent: boolean = false; //3. ブール型 (boolean)
  const hobbies: string[] = ['reading', 'coding', 'gaming']; //4. 配列型 (Array)
  const address: object = {
    street: '123 Main St',
    city: 'Tokyo',
    state: 'CA',
  }; //5-1.オブジェクト型 (object)
  const today: Date = new Date(); // 5-2.オブジェクト型 (object) 現在の日付と時間を取得
  const none: null = null; //6. ヌル型 (null)
  const notDefined: undefined = undefined; //7. 未定義型 (undefined)
  const random: any = 'Hello Wordl'; //8. 任意型 (any)
};
