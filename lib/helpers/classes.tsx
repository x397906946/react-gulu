function classes(...names: Array<string | undefined>) {
  return names.filter(Boolean).join(' ');
}

export default classes;

interface IOptions {
  extra: string | undefined;
}

interface IClassToggles {
  [K: string]: boolean;
}

const scopedClassMaker = (prefix: string) =>
  (name: string | IClassToggles, options?: IOptions) =>
    Object
      .entries(name instanceof Object ? name : {[name]: name})
      .filter(kv => kv[1] !== false)
      .map(kv => kv[0])
      .map(name => [prefix, name]
        .filter(Boolean)
        .join('-'))
      .concat(options && options.extra || [])
      .join(' ');

export {scopedClassMaker};
