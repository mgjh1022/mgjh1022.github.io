const baseWidth = 1440;
const baseHeight = 3088;

export const getPercentWidthCss = (originWidth: number): string =>
  // `${originWidth / baseWidth * 100}vw`;
  `${
    (originWidth / baseWidth) *
    (document.getElementById("inner")?.clientWidth ?? 1)
  }px`;

export const getPercentHeightCss = (originHeight: number): string =>
  // `${originHeight / baseHeight * 100}vh`;
  `${
    (originHeight / baseHeight) *
    (document.getElementById("inner")?.clientHeight ?? 1)
  }px`;
