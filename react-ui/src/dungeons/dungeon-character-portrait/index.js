import workflowBasic from './basic_portrait.json';

const config = {
  formConfig: [
    {
      title: 'Generation parms',
      children: [
        {
          name: 'ckpt',
          type: 'select',
          label: 'Checkpoint',
          options: (context) => context.ckptOptions,
        },
        {
          name: 'quality',
          type: 'range',
          label: 'Quality',
          defaultValue: 1,
          min: 1,
          max: 4,
          step: 1,
          minLabel: 'Speed',
          maxLabel: 'Accuracy',
        },
        {
          name: 'batchSize',
          type: 'range',
          label: 'Results per generation',
          defaultValue: 1,
          min: 1,
          max: 4,
          step: 1,
        },
        {
          name: 'model',
          type: 'select',
          label: 'Style & Model',
          options: [
            { label: 'Illustration - Fast', value: 'ProteusV0.3-LCM' },
            { label: 'Illustration - Accurate', value: 'ProteusV0.3' },
            { label: 'Anime - Fast', value: 'ProteusV0.3-LCM-Anime' },
            { label: 'Anime - Accurate', value: 'ProteusV0.3-Anime' },
            { label: 'Cinematic', value: 'DreamShaperXLTurboV2-Cinematic' },
          ],
        },
      ],
    },
    {
      title: 'Setting',
      children: [
        {
          name: 'setting',
          type: 'select',
          label: 'Setting',
          options: [
            { label: 'Fantasy', value: 'fantasy' },
          ],
        },
        {
          name: 'background',
          type: 'select',
          label: 'Background',
          options: [
            { label: '-- undefined --', value: '' },
            { label: 'Cave', value: 'inside a cave' },
            { label: 'Desert', value: 'in the desert' },
            { label: 'Dungeon', value: 'inside a dungeon' },
            { label: 'Flames', value: 'flames in background' },
            { label: 'Forest', value: 'forest in background' },
            { label: 'Glacier', value: 'on a glacier' },
            { label: 'Magical aura', value: 'magical aura in background' },
            { label: 'Mountains', value: 'mountains in background' },
            { label: 'Plain background', value: 'flat plain background' },
            { label: 'Study', value: 'in the study, scrolls and potions' },
            { label: 'Temple', value: 'inside a temple' },
            { label: 'Town', value: 'on the streets of an old town' },
          ],
        },
      ],
    },
    {
      title: 'Character',
      children: [],
    },
    {
      title: 'Custom',
      children: [],
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
