export const rnd = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

// sorteia um índice diferente do atual
export function pickNew(length, current) {
  let i;
  do {
    i = Math.floor(Math.random() * length);
  } while (i === current && length > 1);
  return i;
}
