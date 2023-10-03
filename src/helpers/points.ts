import {
  MAX_TIME_MS_LIMIT,
  MIN_CORRECT,
  POINTS_CORRECT
} from '@constants/points';

function getPoints(initTime: Date, finishTime: Date, correctAnswer: number) {
  if (correctAnswer < MIN_CORRECT) return 0;

  if (typeof finishTime === 'string') {
    finishTime = new Date(finishTime);
  }

  if (typeof initTime === 'string') {
    initTime = new Date(initTime);
  }

  const timeUsed = finishTime.getTime() - initTime.getTime();
  const timeBonus = MAX_TIME_MS_LIMIT - timeUsed;
  let points = 0;

  points += correctAnswer * POINTS_CORRECT;

  if (timeBonus > 0) {
    points += Math.round(timeBonus / 100);
  }

  return points;
}

export { getPoints };
