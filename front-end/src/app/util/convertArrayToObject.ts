import { tassign } from 'tassign';

export function convertArrayToObject<T>(array: T[]): { [id: string]: T } {
  let object = {};

  array.forEach((t: any) => {
    object = tassign(object, {
      ...object,
      [t.id]: t
    });
  });

  return object;
}
