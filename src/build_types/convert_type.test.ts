import { convertType } from './convert_type';

describe('convertType', () => {
  it('finds the right type', () => {
    expect(convertType('keyword')).toBe('string');
    expect(convertType('long')).toBe('number');
    expect(convertType('date')).toBe('string');
  });
});
