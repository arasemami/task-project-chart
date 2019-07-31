import React from 'react';
import RingDiagramComponent from './ringDiagramComponent';
import renderer , { create } from 'react-test-renderer'
 

test('renders correctly', () => {
    const tree = renderer
      .create(<RingDiagramComponent />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });