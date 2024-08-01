"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test1 = void 0;
const test1 = () => {
    const name = 'Mike'; //1. 文字列型 (string)
    const age = 25; //2. 数値型 (number)
    const isStudent = false; //3. ブール型 (boolean)
    const hobbies = ['reading', 'coding', 'gaming']; //4. 配列型 (Array)
    const address = {
        street: '123 Main St',
        city: 'Tokyo',
        state: 'CA',
    }; //5-1.オブジェクト型 (object)
    const today = new Date(); // 5-2.オブジェクト型 (object) 現在の日付と時間を取得
    const none = null; //6. ヌル型 (null)
    const notDefined = undefined; //7. 未定義型 (undefined)
    const random = 'Hello Wordl'; //8. 任意型 (any)
};
exports.test1 = test1;
