import getCardType, { onlyOne } from '../helpers/get-card-type';
import cards from '../helpers/cards';

describe('getCardType', () => {
  it('should return null if empty', () => {
    expect(getCardType()).toBeNull();
  });

  it('should return null if empty string', () => {
    expect(getCardType('')).toBeNull();
  });

  it('should return МИР', () => {
    expect(getCardType('25')).toEqual([cards.MIR]);
  });

  it('should return VISA', () => {
    expect(getCardType('4111111111111111')).toEqual([cards.VISA]);
  });

  it('should return UEK', () => {
    expect(getCardType('71')).toEqual([cards.UEK]);
  });

  describe('only one digit', () => {
    it('should return right value', () => {
      [3, 5, 6].forEach((number) => {
        expect(getCardType(number)).toEqual(onlyOne[number]);
      });
    });
  });

  describe('two or more digits', () => {
    it('should return DINERS_CLUB', () => {
      expect(getCardType('30569309025904')).toEqual([cards.DINERS_CLUB]);
    });

    it('should return JCB', () => {
      expect(getCardType('3530111333300000')).toEqual([cards.JCB]);
    });

    it('should return AMERICAN_EXPRESS', () => {
      expect(getCardType('371449635398431')).toEqual([cards.AMERICAN_EXPRESS]);
    });

    it('should return MASTERCARD', () => {
      expect(getCardType('5555555555554444')).toEqual([cards.MASTERCARD]);
    });

    it('should return MAESTRO', () => {
      expect(getCardType('67')).toEqual([cards.MAESTRO]);
    });

    it('should return DISCOVER', () => {
      expect(getCardType('6011111111111117')).toEqual([cards.DISCOVER]);
    });

    it('should return UNIONPAY', () => {
      expect(getCardType('62')).toEqual([cards.UNIONPAY]);
    });
  });

  it('should return undefined for other cases', () => {
    expect(getCardType('9')).toBeUndefined();
  });
});
