function generateContent(content: any) {
  switch (content) {
    case 'dislike':
      return '😡';
    case 'like':
      return '😊';
    case 'love':
      return '😍';
  }
  return content;
}

export { generateContent };
