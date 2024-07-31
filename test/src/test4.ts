//ノーマル
export const test4 = () => {
  const foo = (arg: string): string => {
    return arg;
  };
};

//ジェネリクス
export const test5 = () => {
  const foo = <T>(arg: T): T => {
    return arg;
  };
};
