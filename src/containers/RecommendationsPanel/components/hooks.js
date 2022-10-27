import { useWindowSize, breakpoints } from '@edx/paragon';

export const useIsCollapsed = () => {
  const { width } = useWindowSize();
  return width < breakpoints.small.maxWidth;
};

export default useIsCollapsed;
