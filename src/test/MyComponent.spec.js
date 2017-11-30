import React from 'react';
import expect from 'expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('Mount default', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MyComponent />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
    expect(result.props.className).toBe('MyComponent');
    expect(result.props.children.type).toEqual('h1');
    expect(result.props.children.props.children).toEqual([ 'React Component ', 'default version' ]);
  });

  it('Mount with props', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MyComponent version="client" />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
    expect(result.props.className).toBe('MyComponent');
    expect(result.props.children.type).toEqual('h1');
    expect(result.props.children.props.children).toEqual([ 'React Component ', 'client' ]);
  })
});
