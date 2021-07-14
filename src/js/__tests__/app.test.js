import ArrayBufferConverter from '../app';
import getBuffer from '../getBuffer';

test('ArrayBufferConverter test', () => {
  const convert = new ArrayBufferConverter();
  convert.load(getBuffer());
  expect(convert.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
