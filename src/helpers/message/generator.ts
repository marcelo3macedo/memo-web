import { getByCategory } from './type';

function generateNewSession({ target, category }) {
  const content = getByCategory(target, category);

  if (!content) return;

  const shuffledContent = content.sort(() => 0.5 - Math.random());

  return shuffledContent.slice(0, 15);
}

export { generateNewSession };
