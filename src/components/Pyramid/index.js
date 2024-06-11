import { cloneElement } from 'react';

// stack children into a pyramid of doom
const Pyramid = ({ children = null }) =>
  children?.reduceRight(
    (acc, currentValue) => cloneElement(currentValue, {}, acc),
    null,
  );

export default Pyramid;