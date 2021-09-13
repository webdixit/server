import Foo from '../src/foo/foo';

test('it should be ok', () => {
  expect(Foo.log()).toEqual('bar');
});
