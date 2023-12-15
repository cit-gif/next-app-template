import { nanoid } from 'nanoid';

export const createArrayEmpty = (length = 10) =>
  Array.from(new Array(length)).map(() => nanoid());
