import component from '.';

export default {
  title: 'ImageGrid',
  component,
};

const parameters = {
  screenshot: {
    viewport: {
      width: 412, // half the width of github README.md on desktop
      height: 400,
    },
  },
};

export const Square1 = {
  parameters,
  args: {
    images: ['http://localhost:6006/view?filename=01'],
  },
};

export const Square2 = {
  parameters,
  args: {
    images: [
      'http://localhost:6006/view?filename=01',
      'http://localhost:6006/view?filename=02',
    ],
  },
};

export const Square3 = {
  parameters,
  args: {
    images: [
      'http://localhost:6006/view?filename=01',
      'http://localhost:6006/view?filename=02',
      'http://localhost:6006/view?filename=03',
    ],
  },
};

export const Square4 = {
  parameters,
  args: {
    images: [
      'http://localhost:6006/view?filename=01',
      'http://localhost:6006/view?filename=02',
      'http://localhost:6006/view?filename=03',
      'http://localhost:6006/view?filename=04',
    ],
  },
};

export const Square25 = {
  parameters,
  args: {
    images: [
      'http://localhost:6006/view?filename=01',
      'http://localhost:6006/view?filename=02',
      'http://localhost:6006/view?filename=03',
      'http://localhost:6006/view?filename=04',
      'http://localhost:6006/view?filename=05',
      'http://localhost:6006/view?filename=06',
      'http://localhost:6006/view?filename=07',
      'http://localhost:6006/view?filename=08',
      'http://localhost:6006/view?filename=09',
      'http://localhost:6006/view?filename=10',
      'http://localhost:6006/view?filename=11',
      'http://localhost:6006/view?filename=12',
      'http://localhost:6006/view?filename=13',
      'http://localhost:6006/view?filename=14',
      'http://localhost:6006/view?filename=15',
      'http://localhost:6006/view?filename=16',
      'http://localhost:6006/view?filename=17',
      'http://localhost:6006/view?filename=18',
      'http://localhost:6006/view?filename=19',
      'http://localhost:6006/view?filename=20',
      'http://localhost:6006/view?filename=21',
      'http://localhost:6006/view?filename=22',
      'http://localhost:6006/view?filename=23',
      'http://localhost:6006/view?filename=24',
      'http://localhost:6006/view?filename=25',
    ],
  },
};

export const Square50 = {
  parameters,
  args: {
    images: [
      'http://localhost:6006/view?filename=01',
      'http://localhost:6006/view?filename=02',
      'http://localhost:6006/view?filename=03',
      'http://localhost:6006/view?filename=04',
      'http://localhost:6006/view?filename=05',
      'http://localhost:6006/view?filename=06',
      'http://localhost:6006/view?filename=07',
      'http://localhost:6006/view?filename=08',
      'http://localhost:6006/view?filename=09',
      'http://localhost:6006/view?filename=10',
      'http://localhost:6006/view?filename=11',
      'http://localhost:6006/view?filename=12',
      'http://localhost:6006/view?filename=13',
      'http://localhost:6006/view?filename=14',
      'http://localhost:6006/view?filename=15',
      'http://localhost:6006/view?filename=16',
      'http://localhost:6006/view?filename=17',
      'http://localhost:6006/view?filename=18',
      'http://localhost:6006/view?filename=19',
      'http://localhost:6006/view?filename=20',
      'http://localhost:6006/view?filename=21',
      'http://localhost:6006/view?filename=22',
      'http://localhost:6006/view?filename=23',
      'http://localhost:6006/view?filename=24',
      'http://localhost:6006/view?filename=25',
      'http://localhost:6006/view?filename=26',
      'http://localhost:6006/view?filename=27',
      'http://localhost:6006/view?filename=28',
      'http://localhost:6006/view?filename=29',
      'http://localhost:6006/view?filename=30',
      'http://localhost:6006/view?filename=31',
      'http://localhost:6006/view?filename=32',
      'http://localhost:6006/view?filename=33',
      'http://localhost:6006/view?filename=34',
      'http://localhost:6006/view?filename=35',
      'http://localhost:6006/view?filename=36',
      'http://localhost:6006/view?filename=37',
      'http://localhost:6006/view?filename=38',
      'http://localhost:6006/view?filename=39',
      'http://localhost:6006/view?filename=40',
      'http://localhost:6006/view?filename=41',
      'http://localhost:6006/view?filename=42',
      'http://localhost:6006/view?filename=43',
      'http://localhost:6006/view?filename=44',
      'http://localhost:6006/view?filename=45',
      'http://localhost:6006/view?filename=46',
      'http://localhost:6006/view?filename=47',
      'http://localhost:6006/view?filename=48',
      'http://localhost:6006/view?filename=49',
      'http://localhost:6006/view?filename=50',
    ],
  },
};

// export const Landscape1 = {
//   parameters,
//   args: {
//     images: ['https://placehold.co/1344x768?text=01'],
//   },
// };
// export const Landscape2 = {
//   parameters,
//   args: {
//     images: [
//       'https://placehold.co/1344x768?text=01',
//       'https://placehold.co/1344x768?text=02',
//     ],
//   },
// };

// export const Landscape50 = {
//   parameters,
//   args: {
//     images: [
//       'https://placehold.co/1344x768?text=01',
//       'https://placehold.co/1344x768?text=02',
//       'https://placehold.co/1344x768?text=03',
//       'https://placehold.co/1344x768?text=04',
//       'https://placehold.co/1344x768?text=05',
//       'https://placehold.co/1344x768?text=06',
//       'https://placehold.co/1344x768?text=07',
//       'https://placehold.co/1344x768?text=08',
//       'https://placehold.co/1344x768?text=09',
//       'https://placehold.co/1344x768?text=10',
//       'https://placehold.co/1344x768?text=11',
//       'https://placehold.co/1344x768?text=12',
//       'https://placehold.co/1344x768?text=13',
//       'https://placehold.co/1344x768?text=14',
//       'https://placehold.co/1344x768?text=15',
//       'https://placehold.co/1344x768?text=16',
//       'https://placehold.co/1344x768?text=17',
//       'https://placehold.co/1344x768?text=18',
//       'https://placehold.co/1344x768?text=19',
//       'https://placehold.co/1344x768?text=20',
//       'https://placehold.co/1344x768?text=21',
//       'https://placehold.co/1344x768?text=22',
//       'https://placehold.co/1344x768?text=23',
//       'https://placehold.co/1344x768?text=24',
//       'https://placehold.co/1344x768?text=25',
//       'https://placehold.co/1344x768?text=26',
//       'https://placehold.co/1344x768?text=27',
//       'https://placehold.co/1344x768?text=28',
//       'https://placehold.co/1344x768?text=29',
//       'https://placehold.co/1344x768?text=30',
//       'https://placehold.co/1344x768?text=31',
//       'https://placehold.co/1344x768?text=32',
//       'https://placehold.co/1344x768?text=33',
//       'https://placehold.co/1344x768?text=34',
//       'https://placehold.co/1344x768?text=35',
//       'https://placehold.co/1344x768?text=36',
//       'https://placehold.co/1344x768?text=37',
//       'https://placehold.co/1344x768?text=38',
//       'https://placehold.co/1344x768?text=39',
//       'https://placehold.co/1344x768?text=40',
//       'https://placehold.co/1344x768?text=41',
//       'https://placehold.co/1344x768?text=42',
//       'https://placehold.co/1344x768?text=43',
//       'https://placehold.co/1344x768?text=44',
//       'https://placehold.co/1344x768?text=45',
//       'https://placehold.co/1344x768?text=46',
//       'https://placehold.co/1344x768?text=47',
//       'https://placehold.co/1344x768?text=48',
//       'https://placehold.co/1344x768?text=49',
//       'https://placehold.co/1344x768?text=50',
//     ],
//   },
// };

// export const Portrait1 = {
//   parameters,
//   args: {
//     images: ['https://placehold.co/768x1344?text=01'],
//   },
// };

// export const Portrait2 = {
//   parameters,
//   args: {
//     images: [
//       'https://placehold.co/768x1344?text=01',
//       'https://placehold.co/768x1344?text=02',
//     ],
//   },
// };

// export const Portrait50 = {
//   parameters,
//   args: {
//     images: [
//       'https://placehold.co/768x1344?text=01',
//       'https://placehold.co/768x1344?text=02',
//       'https://placehold.co/768x1344?text=03',
//       'https://placehold.co/768x1344?text=04',
//       'https://placehold.co/768x1344?text=05',
//       'https://placehold.co/768x1344?text=06',
//       'https://placehold.co/768x1344?text=07',
//       'https://placehold.co/768x1344?text=08',
//       'https://placehold.co/768x1344?text=09',
//       'https://placehold.co/768x1344?text=10',
//       'https://placehold.co/768x1344?text=11',
//       'https://placehold.co/768x1344?text=12',
//       'https://placehold.co/768x1344?text=13',
//       'https://placehold.co/768x1344?text=14',
//       'https://placehold.co/768x1344?text=15',
//       'https://placehold.co/768x1344?text=16',
//       'https://placehold.co/768x1344?text=17',
//       'https://placehold.co/768x1344?text=18',
//       'https://placehold.co/768x1344?text=19',
//       'https://placehold.co/768x1344?text=20',
//       'https://placehold.co/768x1344?text=21',
//       'https://placehold.co/768x1344?text=22',
//       'https://placehold.co/768x1344?text=23',
//       'https://placehold.co/768x1344?text=24',
//       'https://placehold.co/768x1344?text=25',
//       'https://placehold.co/768x1344?text=26',
//       'https://placehold.co/768x1344?text=27',
//       'https://placehold.co/768x1344?text=28',
//       'https://placehold.co/768x1344?text=29',
//       'https://placehold.co/768x1344?text=30',
//       'https://placehold.co/768x1344?text=31',
//       'https://placehold.co/768x1344?text=32',
//       'https://placehold.co/768x1344?text=33',
//       'https://placehold.co/768x1344?text=34',
//       'https://placehold.co/768x1344?text=35',
//       'https://placehold.co/768x1344?text=36',
//       'https://placehold.co/768x1344?text=37',
//       'https://placehold.co/768x1344?text=38',
//       'https://placehold.co/768x1344?text=39',
//       'https://placehold.co/768x1344?text=40',
//       'https://placehold.co/768x1344?text=41',
//       'https://placehold.co/768x1344?text=42',
//       'https://placehold.co/768x1344?text=43',
//       'https://placehold.co/768x1344?text=44',
//       'https://placehold.co/768x1344?text=45',
//       'https://placehold.co/768x1344?text=46',
//       'https://placehold.co/768x1344?text=47',
//       'https://placehold.co/768x1344?text=48',
//       'https://placehold.co/768x1344?text=49',
//       'https://placehold.co/768x1344?text=50',
//     ],
//   },
// };
