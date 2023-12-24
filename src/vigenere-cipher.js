const { NotImplementedError } = require('../extensions/index.js')

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
  constructor(direct = true) {
    this.direct = direct
  }

  encrypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!')
    this.validateInput(message, key)

    const encryptedMessage = this.processMessage(message, key, true)
    return this.direct
      ? encryptedMessage.join('')
      : encryptedMessage.reverse().join('')
  }

  decrypt(encryptedMessage, key) {
    if (!(encryptedMessage && key)) throw new Error('Incorrect arguments!')
    this.validateInput(encryptedMessage, key)

    const decryptedMessage = this.processMessage(encryptedMessage, key, false)
    return this.direct
      ? decryptedMessage.join('')
      : decryptedMessage.reverse().join('')
  }

  validateInput(message, key) {
    if (!message || !key) {
      throw new Error('Both message and key are required.')
    }
  }

  processMessage(message, key, encrypt) {
    const result = []
    const keyLength = key.length
    let keyIndex = 0

    for (let i = 0; i < message.length; i++) {
      const char = message[i].toUpperCase()
      if (/[A-Z]/.test(char)) {
        const offset = encrypt
          ? key[keyIndex % keyLength].toUpperCase().charCodeAt(0) - 65
          : 26 - (key[keyIndex % keyLength].toUpperCase().charCodeAt(0) - 65)
        const encryptedChar = String.fromCharCode(
          ((char.charCodeAt(0) + offset - 65) % 26) + 65
        )
        result.push(encryptedChar)
        keyIndex++
      } else {
        result.push(char)
      }
    }

    return result
  }
}

module.exports = {
  VigenereCipheringMachine,
}
