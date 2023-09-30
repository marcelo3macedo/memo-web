function getMessage(t, actual, total) {
  const questionNumberText = t('review.questionNumber');
  const questionOfText = t('review.questionOf');

  return `${questionNumberText} ${actual} ${questionOfText} ${total}`;
}

function getContentForMessages(t, actual, total) {
  const messageNumberText = t('review.messageNumber');
  const messageOfText = t('review.messageOf');

  return `${messageNumberText} ${actual} ${messageOfText} ${total}`;
}

export { getMessage, getContentForMessages };
