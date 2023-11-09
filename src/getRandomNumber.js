export default (min, max) => {
  const result = Math.floor(Math.random() * (Math.floor(max) - Math.floor(min) + 1)) + min;
  return result;
};
