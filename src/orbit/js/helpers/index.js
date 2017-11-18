export const getWindowWidth = () => {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

export const getWindowHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

export const round = (number, precision) => {
  if (precision === undefined) {
    precision = 0
  }
  precision = Math.pow(
    10, (precision-1)
  );
  return (
    Math.round(number*10*precision) / (10*precision)
  );
}