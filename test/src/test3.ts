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
    );
    this.userId = userId;
    this.name = name;
    this.age = age;
    this.email = email;
    this.isActive = isActive;
  }
  getProfile():string{
    return `Name: ${this.name}, Age: ${this.age}`;
  }
};
