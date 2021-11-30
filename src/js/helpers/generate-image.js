// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import lazyLoadImage from './lazy-load-image';
import cards from './cards';

const generateImage = (container, imageName) => {
  const img = document.createElement('img');
  img.setAttribute('data-img', cards[imageName]);
  container.appendChild(img);

  lazyLoadImage(`${cards[imageName]}.png`, img);
};

export default generateImage;
