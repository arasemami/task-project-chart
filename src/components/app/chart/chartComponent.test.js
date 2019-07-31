import React from 'react';
import ChartComponent from './chartComponent';
import renderer , { create }  from 'react-test-renderer'
 

test('rendersChartComponent', () => {
    const tree = renderer.create(<ChartComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });