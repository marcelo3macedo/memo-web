import country from '@assets/sessions/types/country.json';

const options = {
  country
};

function getByType(type: string) {
  return Object.prototype.hasOwnProperty.call(options, type)
    ? options[type]
    : null;
}

export { getByType };
