import workflowBasic from './basic_portrait.json';

const config = {
  formConfig: [
    {
      name: 'ckpt',
      type: 'select',
      options: (context) => context.ckptOptions,
    },
    // {
    //   name: 'gender',
    //   type: 'slider',
    //   min: 0,
    //   max: 3,
    //   step: 1,
    //   defaultValue: 0,
    // eslint-disable-next-line max-len
    //   info: 'Femininity/Masculinity slider trait is temptative, the result may not be what you expect.',
    // },
    // {
    //   name: 'autoCFG',
    //   type: 'switch',
    //   defaultValue: false,
    // },
  ],
  adapter: (formData) => {
    // override the ckpt_name
    workflowBasic['1'].inputs.ckpt_name = formData.ckpt;

    // gender slider
    const genderConfig = {
      0: {
        pos: 'female',
        neg: 'horror, ',
      },
      1: {
        pos: '(masculine:1.1) female',
        neg: 'beard, ',
      },
      2: {
        pos: '(queer:0.9) feminine male',
        neg: 'zombie, beard, ',
      },
      3: {
        pos: 'male',
        neg: '',
      },
    };
    const { pos, neg } = genderConfig[formData.gender];

    // override the positive and negative prompts
    workflowBasic['4'].inputs.text = pos;
    workflowBasic['5'].inputs.text = neg;

    // return the adapted workflow
    return workflowBasic;
  },
};

export default config;
