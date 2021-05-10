
class StringBuilder {

  static build(...string) {
    const builder = [];
    string.forEach(string => builder.push(string));
    return builder.join('');
  }

}

module.exports = StringBuilder;