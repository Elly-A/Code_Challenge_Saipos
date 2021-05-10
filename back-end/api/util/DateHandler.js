// Exceptions
const DateInvalidException = require('./exceptions/DateInvalidException');

class DateHandler {
  /**
   * @param date date object
   * @returns YYYYMMDD if param is a valid date
   * @throws DateDoesNotMatchException if invalid date
   */
  static getFullDate(date) {
    if (!(date instanceof Date)) {
      throw new DateInvalidException('Date is not an instance of Date');
    }

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    return yyyy + mm + dd;
  }
}

exports.DateHandler = DateHandler;
