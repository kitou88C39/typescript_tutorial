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
      this.userId = userId; // Assign the value from the constructor parameter
      this.name = name;
      this.age = age;
      this.Email = Email;
      this.isActive = isActive;
    }

    getProfile(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
};
