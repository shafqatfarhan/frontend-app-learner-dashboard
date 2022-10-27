import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import {
  Button,
  Container,
  Col,
  Image,
  Row,
} from '@edx/paragon';

import emptyCourseSVG from 'assets/empty-course.svg';

import { hooks as appHooks } from 'data/redux';
import { RequestKeys } from 'data/constants/requests';
import RecommendationsPanel, { LoadingView as RecommendationsLoadingView } from 'containers/RecommendationsPanel';
import SuggestedCourses from './SuggestedCourses';
import messages from './messages';

import './index.scss';

export const columnConfig = {
  sidebar: { md: 12, xl: 4 },
};

export const EmptyCourse = () => {
  const recommendedCourses = appHooks.useRecommendedCoursesData();
  const isRecommendationsPending = appHooks.useRequestIsPending(RequestKeys.recommendedCourses);

  return (
    <div className="p-3">
      <Container>
        <Row>
          <Col className="p-0 px-4">
            <div className="empty-course-hero">
              <Image src={emptyCourseSVG} alt="empty course banner" />
              <h1>
                <FormattedMessage {...messages.lookingForChallengePrompt} />
              </h1>
              <p>
                <FormattedMessage {...messages.exploreCoursesPrompt} />
              </p>
              <Button variant="brand">
                <FormattedMessage {...messages.exploreCoursesButton} />
              </Button>
            </div>
            <SuggestedCourses />
          </Col>
          <Col {...columnConfig.sidebar} className="p-0 pr-4 pl-1">
            {isRecommendationsPending && (<RecommendationsLoadingView />)}
            {
              !isRecommendationsPending
              && recommendedCourses.courses.length > 0
              && (
                <RecommendationsPanel courses={recommendedCourses.courses} />)
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmptyCourse;
