import { getInfoByKey } from '@helpers/ActivityHelper';

async function generateNewSession({ slug, level }) {
  const { items } = await getInfoByKey(slug);
  const filtered = items.filter(i => i.difficulty == level);

  const shuffledContent = filtered.sort(() => 0.5 - Math.random());

  return shuffledContent.slice(0, 15);
}

function isCorrectAnswer(option: string, answer: string) {
  return option === answer;
}

export { generateNewSession, isCorrectAnswer };
