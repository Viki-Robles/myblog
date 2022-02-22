import styled from 'styled-components';
import { motion } from 'framer-motion';

import { composedHelpers } from '../MotionBox/box';

export const MotionBox = styled(motion.div)`
  ${composedHelpers}
`;

MotionBox.defaultProps = {};
