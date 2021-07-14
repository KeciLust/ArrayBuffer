export default class ArrayBufferConverter {
  load(value) {
    this.buffer = value;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    let str = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      str += String.fromCharCode(bufferView[i]);
    }
    return str;
  }
}
