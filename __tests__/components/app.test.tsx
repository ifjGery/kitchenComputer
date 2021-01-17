import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from '../../packages/ui-components/app/index';

test('Hello world is displayed', () => {
  const component = renderer.create(<App />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Two number is equal', () => {
  expect(2 + 2).toBe(4);
});
