function extractFilters(data: any) {
  if (!data) {
    return [];
  }

  const outputs = [] as any;
  const keys = Object.keys(data).sort();

  keys.forEach(key => {
    outputs.push({
      name: key,
      items: data[key]
    });
  });

  return outputs;
}

export { extractFilters };
