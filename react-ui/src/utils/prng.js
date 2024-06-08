const mersenne8 = 2 ** 31 - 1;
const cyv = 7 ** 5;

const sanitise = seed => {
  const newSeed = seed % mersenne8;
  return newSeed > 0 ? newSeed : newSeed + (mersenne8 - 1);
};

const format = num => (num - 1) / (mersenne8 - 1); // format as fraction between 0 and 1

const prng = (seed = 0) => {
  let prn = sanitise(seed);

  const next = () => {
    prn = (prn * cyv) % mersenne8; // generate pseudo random number
    return format(prn);
  };

  return next;
};

export default prng;
