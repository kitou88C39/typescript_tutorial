"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test5 = exports.test4 = void 0;
//ノーマル
const test4 = () => {
    const foo = (arg) => {
        return arg;
    };
};
exports.test4 = test4;
//ジェネリクス
const test5 = () => {
    const foo = (arg) => {
        return arg;
    };
    foo('hello world');
};
exports.test5 = test5;
