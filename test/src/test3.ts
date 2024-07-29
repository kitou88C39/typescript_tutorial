export const test3 = () => {
  class User {
    userId: number;
    name: string;
    age: number;
    Email: string;
    isActive: boolean;

    constructor(
      userId: number,
      name: string,
      age: number,
      Email: string,
      isActive: boolean
    ) {
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

    public getProfile(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
    //staticメソッドはクラスレベルで共通の機能を提供するために使用され、インスタンスを生成することなく呼び出せる便利なメソッド
    static sayHelloWorld(): void {
      console.log('Hello World');
    }
  }
  const user = new User(1, 'Mike', 25, 'mike@gmail.com', true);
  user.getProfile(); //public
  User.sayHelloWorld(); //static
};
