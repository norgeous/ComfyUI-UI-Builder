import { cloneElement } from 'react';

// stack children into a pyramid of doom
const Pyramid = ({ children = null }) =>
  children?.reduceRight((acc, currentValue) => {
    if (Array.isArray(currentValue)) return currentValue;
    return cloneElement(currentValue, {}, acc);
  }, null);

export default Pyramid;
