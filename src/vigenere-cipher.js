const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error("Incorrect arguments!");
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const keyCharCode = key.charCodeAt(keyIndex % key.length) - 65;
        const encryptedChar = String.fromCharCode(
          ((charCode - 65 + keyCharCode) % 26) + 65
        );
        result.push(encryptedChar);
        keyIndex++;
      } else {
        result.push(message[i]);
      }
    }
    if (!this.isDirect) result.reverse();
    return result.join("");
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error("Incorrect arguments!");
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const keyCharCode = key.charCodeAt(keyIndex % key.length) - 65;
        const decryptedChar = String.fromCharCode(
          ((charCode - 65 - keyCharCode + 26) % 26) + 65
        );
        result.push(decryptedChar);
        keyIndex++;
      } else {
        result.push(message[i]);
      }
    }
    if (!this.isDirect) result.reverse();
    return result.join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
