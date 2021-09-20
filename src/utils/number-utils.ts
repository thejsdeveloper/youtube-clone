export const suffixNumber = (num: number): string => {
  let viewsString = num.toString();
  if (num >= 1000000) {
    const remender = num % 1000000;
    const calculatedViews = num / 1000000;
    viewsString =
      (remender > 0 ? calculatedViews.toFixed(1) : calculatedViews) + "M";
  } else if (num >= 1000) {
    const remender = num % 1000;
    const calculatedViews = num / 1000;
    viewsString =
      (remender > 0 ? calculatedViews.toFixed(1) : calculatedViews) + "K";
  }

  return viewsString;
};
