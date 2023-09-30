function getMessage(t, actual, total) {
  const questionNumberText = t('review.questionNumber');
  const questionOfText = t('review.questionOf');

  return `${questionNumberText} ${actual} ${questionOfText} ${total}`;
}

export { getMessage };
