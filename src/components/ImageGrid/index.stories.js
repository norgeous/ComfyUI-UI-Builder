import component from '.';

export default {
  title: 'ImageGrid',
  component,
  parameters: {
    screenshot: {
      viewport: {
        width: 412, // half the width of github README.md on desktop
        height: 400,
      },
    },
  },
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
  // parameters,
  args: {
    images: ['http://localhost:6006/view?filename=01&width=1024&height=1024'],
  },
};

export const Square2 = {
  // parameters,
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

export const Landscape1 = {
  parameters,
  args: {
    imageSize: [1344, 768],
    images: ['http://localhost:6006/view?filename=01&width=1344&height=768'],
  },
};

export const Landscape2 = {
  parameters,
  args: {
    imageSize: [1344, 768],
    images: [
      'http://localhost:6006/view?filename=01&width=1344&height=768',
      'http://localhost:6006/view?filename=02&width=1344&height=768',
    ],
  },
};

export const Landscape50 = {
  parameters,
  args: {
    imageSize: [1344, 768],
    images: [
      'http://localhost:6006/view?filename=01&width=1344&height=768',
      'http://localhost:6006/view?filename=02&width=1344&height=768',
      'http://localhost:6006/view?filename=03&width=1344&height=768',
      'http://localhost:6006/view?filename=04&width=1344&height=768',
      'http://localhost:6006/view?filename=05&width=1344&height=768',
      'http://localhost:6006/view?filename=06&width=1344&height=768',
      'http://localhost:6006/view?filename=07&width=1344&height=768',
      'http://localhost:6006/view?filename=08&width=1344&height=768',
      'http://localhost:6006/view?filename=09&width=1344&height=768',
      'http://localhost:6006/view?filename=10&width=1344&height=768',
      'http://localhost:6006/view?filename=11&width=1344&height=768',
      'http://localhost:6006/view?filename=12&width=1344&height=768',
      'http://localhost:6006/view?filename=13&width=1344&height=768',
      'http://localhost:6006/view?filename=14&width=1344&height=768',
      'http://localhost:6006/view?filename=15&width=1344&height=768',
      'http://localhost:6006/view?filename=16&width=1344&height=768',
      'http://localhost:6006/view?filename=17&width=1344&height=768',
      'http://localhost:6006/view?filename=18&width=1344&height=768',
      'http://localhost:6006/view?filename=19&width=1344&height=768',
      'http://localhost:6006/view?filename=20&width=1344&height=768',
      'http://localhost:6006/view?filename=21&width=1344&height=768',
      'http://localhost:6006/view?filename=22&width=1344&height=768',
      'http://localhost:6006/view?filename=23&width=1344&height=768',
      'http://localhost:6006/view?filename=24&width=1344&height=768',
      'http://localhost:6006/view?filename=25&width=1344&height=768',
      'http://localhost:6006/view?filename=26&width=1344&height=768',
      'http://localhost:6006/view?filename=27&width=1344&height=768',
      'http://localhost:6006/view?filename=28&width=1344&height=768',
      'http://localhost:6006/view?filename=29&width=1344&height=768',
      'http://localhost:6006/view?filename=30&width=1344&height=768',
      'http://localhost:6006/view?filename=31&width=1344&height=768',
      'http://localhost:6006/view?filename=32&width=1344&height=768',
      'http://localhost:6006/view?filename=33&width=1344&height=768',
      'http://localhost:6006/view?filename=34&width=1344&height=768',
      'http://localhost:6006/view?filename=35&width=1344&height=768',
      'http://localhost:6006/view?filename=36&width=1344&height=768',
      'http://localhost:6006/view?filename=37&width=1344&height=768',
      'http://localhost:6006/view?filename=38&width=1344&height=768',
      'http://localhost:6006/view?filename=39&width=1344&height=768',
      'http://localhost:6006/view?filename=40&width=1344&height=768',
      'http://localhost:6006/view?filename=41&width=1344&height=768',
      'http://localhost:6006/view?filename=42&width=1344&height=768',
      'http://localhost:6006/view?filename=43&width=1344&height=768',
      'http://localhost:6006/view?filename=44&width=1344&height=768',
      'http://localhost:6006/view?filename=45&width=1344&height=768',
      'http://localhost:6006/view?filename=46&width=1344&height=768',
      'http://localhost:6006/view?filename=47&width=1344&height=768',
      'http://localhost:6006/view?filename=48&width=1344&height=768',
      'http://localhost:6006/view?filename=49&width=1344&height=768',
      'http://localhost:6006/view?filename=50&width=1344&height=768',
    ],
  },
};

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
