import React from 'react';
import { shallow } from 'enzyme';

import EmptyCourse from '.';

jest.mock('./SuggestedCourses', () => 'SuggestedCourses');

jest.mock('data/redux', () => ({
  hooks: {
    useRecommendedCoursesData: jest.fn(() => ({ courses: [], isPersonalizedRecommendation: false })),
    useRequestIsPending: jest.fn(),
    usePlatformSettingsData: () => ({
      courseSearchUrl: 'course-search-url',
    }),
  },
}));

jest.mock('containers/Dashboard/hooks', () => ({
  useIsDashboardCollapsed: jest.fn(() => true),
}));

describe('EmptyCourse', () => {
  test('snapshot', () => {
    expect(shallow(<EmptyCourse />)).toMatchSnapshot();
  });
});
