let cachedData = {};

const getInfoByKey = async key => {
  if (!key) return;

  const value = key.toLowerCase();
  const options = {};

  if (cachedData[value]) {
    return cachedData[value];
  }

  try {
    const data = await import(`@assets/activities/${value}.json`);
    data.levels = [...new Set(data.items.map(item => item.difficulty))];

    cachedData[value] = data;

    return options[value] || data;
  } catch (error) {
    console.error('Failed to import JSON:', error);
  }
};

export { getInfoByKey };
