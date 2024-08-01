"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test3 = void 0;
const test3 = () => {
    class User {
        constructor(userId, name, age, Email, isActive) {
            this.userId = userId;
            this.name = name;
            this.age = age;
            this.Email = Email;
            this.isActive = isActive;
        }
        //アクセス修飾子を使用することで、そのアクセス範囲を制御することができる
        //public: クラスの外部および内部からアクセス可能
        //private: クラスの内部からのみアクセス可能
        //protected: クラスの内部およびその派生クラスからアクセス可能
        getProfile() {
            return `Name: ${this.name}, Age: ${this.age}`;
        }
        //staticメソッドはクラスレベルで共通の機能を提供するために使用され、インスタンスを生成することなく呼び出せる便利なメソッド
        static sayHelloWorld() {
            console.log('Hello World');
        }
    }
    const user = new User(1, 'Mike', 25, 'mike@gmail.com', true);
    user.getProfile(); //public
    User.sayHelloWorld(); //static
};
exports.test3 = test3;
