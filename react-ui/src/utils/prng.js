const mersenne8 = 2 ** 31 - 1;
const cyv = 7 ** 5;

const sanitise = (seed) => {
  const newSeed = seed % mersenne8;
  return newSeed > 0 ? newSeed : newSeed + (mersenne8 - 1);
};

const prng = (seed = 0) => {
  let prn = sanitise(seed);
  let prf = (prn - 1) / (mersenne8 - 1);

  const next = () => {
    prn = prn * cyv % mersenne8;
    prf = (prn - 1) / (mersenne8 - 1);
    return prf;
  }

  // next();

  return next;
};

export default prng;
