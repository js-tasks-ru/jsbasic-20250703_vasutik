function getMinMax(str) {
  const parts = str.split(' ');

  const numbers = parts
      .map(part => parseFloat(part))
      .filter(num => !isNaN(num));

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return { min, max };
}
