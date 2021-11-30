const lazyLoadImage = (imageName, img) => {
  import(
    /* webpackMode: "lazy-once" */
    `../../img/${imageName}`
  )
    // eslint-disable-next-line no-param-reassign,no-return-assign
    .then((src) => img.src = src.default)
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err));
};

export default lazyLoadImage;
