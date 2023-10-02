import { getByType } from './type';

function generateNewSession({ type }) {
  const content = getByType(type);
  const shuffledContent = content.sort(() => 0.5 - Math.random());

  return shuffledContent.slice(0, 15);
}

export { generateNewSession };
