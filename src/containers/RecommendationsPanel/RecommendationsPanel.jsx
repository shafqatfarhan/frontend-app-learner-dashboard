import React from 'react';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';
import { Button } from '@edx/paragon';
import { Search } from '@edx/paragon/icons';

import { hooks } from 'data/redux';
import CourseCard from './components/CourseCard';
import messages from './messages';

import './index.scss';

export const RecommendationsPanel = ({
  courses,
}) => {
  const { courseSearchUrl } = hooks.usePlatformSettingsData();
  const { formatMessage } = useIntl();

  return (
    <div className="p-4 panel-background">
      <h3 className="pb-2">{formatMessage(messages.recommendationsHeading)}</h3>
      <div>
        {courses && courses.map((course) => (
          <CourseCard key={course.courseKey} course={course} />
        ))}
      </div>
      <div className="text-center explore-courses-btn">
        <Button
          variant="tertiary"
          iconBefore={Search}
          as="a"
          href={courseSearchUrl}
        >
          {formatMessage(messages.exploreCoursesButton)}
        </Button>
      </div>
    </div>
  );
};

RecommendationsPanel.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    courseKey: PropTypes.string,
    title: PropTypes.string,
    logoImageUrl: PropTypes.string,
    marketingUrl: PropTypes.string,
  })).isRequired,
};

export default RecommendationsPanel;
