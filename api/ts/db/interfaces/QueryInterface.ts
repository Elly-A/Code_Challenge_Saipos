
export interface QueryInterface {
  sqlString: string;
  callback(error, result, fields): void;
}
