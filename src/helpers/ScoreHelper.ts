function checkIfHitScore(points, scores) {
  const values = scores.map(item => item.score);
  const minScore = Math.min(...values);

  return points >= minScore;
}

export { checkIfHitScore };
