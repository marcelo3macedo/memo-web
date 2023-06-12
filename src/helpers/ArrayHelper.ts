function formatStringAsArray(value) {
  if (!value) return [];

  return value.split(',');
}

export { formatStringAsArray };
