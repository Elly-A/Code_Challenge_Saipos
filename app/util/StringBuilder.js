
class StringBuilder {

  /**
   * Retorna uma string, construída com base nos parâmetros
   * @param string - strings para construção da string
   * @returns string
   */
  static build(...string) {
    const builder = [];
    string.forEach(string => builder.push(string));
    return builder.join('');
  }

  /**
   * Retorna o param string com '' em volta, para uso como valor em Database query
   * @param string - string a ser envolvida por ''
   * @returns 'string'
   */
  static value(string) {
    const builder = [];
    builder.push("'");
    builder.push(string);
    builder.push("'");
    return builder.join('');
  }

}

module.exports = StringBuilder;