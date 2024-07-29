export const test = () => {
  const user = {
    useId: 1,
    name: 'Mike',
    age: 25,
    Email: 'mike@gmail.com',
    isActive: true,
  };
  //オブジェクトを定義する(interface)
  interface UserProps {
    useId: 1;
    name: 'Mike';
    age: 25;
    Email: 'mike@gmail.com';
    isActive: true;
  }

  // interfaceを拡張する場合
  interface AdminUser extends UserProps {
    role: String;
  }

  const createAccount = (accountInfo: UserProps) => {};
  createAccount({
    useId: 1,
    name: 'Mike',
    age: 25,
    Email: 'mike@gmail.com',
    isActive: true,
  });
};
