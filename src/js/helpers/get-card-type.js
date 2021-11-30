import cards from './cards';

export const onlyOne = {
  3: [cards.AMERICAN_EXPRESS, cards.JCB, cards.DINERS_CLUB],
  5: [cards.MASTERCARD, cards.MAESTRO],
  6: [cards.MAESTRO, cards.UNIONPAY, cards.DISCOVER],
};

export default function getCardType(value) {
  // eslint-disable-next-line no-param-reassign
  value = String(value);

  if (value.length === 0) {
    return null;
  }

  if (/^2/.test(value)) {
    return [cards.MIR];
  }

  if (/^4/.test(value)) {
    return [cards.VISA];
  }

  if (/^7/.test(value)) {
    return [cards.UEK];
  }

  if (value.length === 1) {
    return onlyOne[+value[0]];
  }

  const matcher = +value.substr(0, 2);

  if ([30, 36, 38].includes(matcher)) {
    return [cards.DINERS_CLUB];
  }

  if ([31, 35].includes(matcher)) {
    return [cards.JCB];
  }

  if ([34, 37].includes(matcher)) {
    return [cards.AMERICAN_EXPRESS];
  }

  if ([51, 52, 53, 54, 55].includes(matcher)) {
    return [cards.MASTERCARD];
  }

  if ([50, 56, 57, 58, 63, 67].includes(matcher)) {
    return [cards.MAESTRO];
  }

  if (matcher === 60) {
    return [cards.DISCOVER];
  }

  if (matcher === 62) {
    return [cards.UNIONPAY];
  }

  return null;
}
