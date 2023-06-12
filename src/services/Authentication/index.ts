import jwt_decode from 'jwt-decode';

function parseToken(token): any {
  return jwt_decode(token);
}

export { parseToken };
