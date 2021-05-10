// Exceptions
const DateInvalidException = require('./exceptions/DateInvalidException');

class DateHandler {
  /**
   * @param date objeto de data
   * @returns YYYYMMDD se o paramêtro é uma data válida
   * @throws DateDoesNotMatchException se datá inválida
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

module.exports = DateHandler;
