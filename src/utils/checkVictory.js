export default function checkVictory(values) {
  const flattenedGrid = values.reduce(function(acc, value) {
    return [...acc, ...value];
  });

  return !flattenedGrid.some(value => value === 1);
}
