import biblic from '@assets/sessions/messages/biblic.json';

const options = {
  biblic
};

function getByType(type: string) {
  const result = Object.prototype.hasOwnProperty.call(options, type)
    ? options[type]
    : null;

  if (!result) return;

  return Array.from(new Set(result.map(item => item.category)));
}

function getByCategory(type: string, category: string) {
  const result = Object.prototype.hasOwnProperty.call(options, type)
    ? options[type]
    : null;

  return result.filter(r => r.category === category);
}

export { getByType, getByCategory };
