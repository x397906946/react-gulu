const isTruthy = (value: any) => value;

function classes(...names: (string | undefined) []) {
  return names.filter(isTruthy).join(' ')
}

export default classes;
