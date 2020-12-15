export const sum = (...numbers) => {
  return numbers.reduce((acc, num) => {
    return acc + num;
  }, 0);
};
