import classes, {scopedClassMaker} from '../classes';

describe('classes', () => {
  it('接受1个 className', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('接受2个 className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接受undefined', () => {
    const result = classes('a', undefined);
    expect(result).toEqual('a');
  });
  it('接受奇怪参数', () => {
    const result = classes('a', undefined, '中文', false, null);
    expect(result).toEqual('a 中文');
  });
  it('接受空字符串', () => {
    const result = classes();
    expect(result).toEqual('');
  });
});

describe('scopedClassMaker', () => {
  it('接受字符串或对象', () => {
    const sc = scopedClassMaker('gu-layout');
    expect(sc('')).toEqual('gu-layout');
    expect(sc('x')).toEqual('gu-layout-x');
    expect(sc({y: true, z: false})).toEqual('gu-layout-y');
    expect(sc({y: true, z: true})).toEqual('gu-layout-y gu-layout-z');
    expect(sc({y: true, z: false}, {extra: 'red'})).toEqual('gu-layout-y gu-layout-z red');
  });
});
