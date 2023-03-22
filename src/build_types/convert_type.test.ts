import { convertType } from './convert_type';

describe('convertType', () => {
  it('finds the right type', () => {
    expect(convertType('keyword', [])).toBe('string');
    expect(convertType('keyword', ['array'])).toBe('string | Array<string>');
    expect(convertType('date', [])).toBe('string');
    expect(convertType('text', [])).toBe('string');
    expect(convertType('constant_keyword', [])).toBe('string');
    expect(convertType('long', [])).toBe('number');
    expect(convertType('float', [])).toBe('number');
  });
});
