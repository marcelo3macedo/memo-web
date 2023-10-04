function getRandomBackground() {
  const index = Math.floor(Math.random() * 30) + 1;
  return require(`@assets/background/${index}.jpg`);
}

export { getRandomBackground };
