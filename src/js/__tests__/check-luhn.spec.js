import checkLuhn from '../helpers/check-luhn';

describe('checkLuhn', () => {
  it('should be valid with numbers', () => {
    expect(checkLuhn(371449635398431)).toBeTruthy();
  });

  it('should be valid with strings', () => {
    expect(checkLuhn('371449635398431')).toBeTruthy();
  });

  it('should be invalid with wrong number', () => {
    expect(checkLuhn('371449635398430')).toBeFalsy();
  });
});
