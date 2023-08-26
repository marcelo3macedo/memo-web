const validationTsPath = 'validationMessages';

function getErrorTranslationKey(message: string) {
  if (!message) {
    return '';
  }
  return `${validationTsPath}.${message}`;
}

export { getErrorTranslationKey };
