import workflowBasic from './basic_portrait.json';

const config = {
  formConfig: [
    {
      title: 'Generation params',
      children: [
        // {
        //   name: 'ckpt',
        //   type: 'select',
        //   label: 'Checkpoint',
        //   options: (context) => context.ckptOptions,
        // },
        {
          type: 'range',
          name: 'quality',
          label: 'Quality',
          defaultValue: 1,
          min: 1,
          max: 4,
          step: 1,
          minLabel: 'Speed',
          maxLabel: 'Accuracy',
        },
        {
          type: 'range',
          name: 'batchSize',
          label: 'Results per generation',
          defaultValue: 1,
          min: 1,
          max: 4,
          step: 1,
        },
        {
          type: 'select',
          name: 'model',
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
          type: 'select',
          name: 'setting',
          label: 'Setting',
          options: [
            { label: 'Fantasy', value: 'fantasy' },
          ],
        },
        {
          type: 'select',
          name: 'background',
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
        {
          type: 'select',
          name: 'mood',
          label: 'Mood',
          options: [
            { label: 'Angry', value: 'angry evil' },
            { label: 'Somber', value: 'wise thoughtful serious mood' },
            { label: 'Neutral', value: '' },
            { label: 'Cunning', value: 'cunning smirk mood' },
            { label: 'Serene', value: 'serene joyful dreamy' },
            { label: 'Happy', value: 'happy jovial (smiling:0.85)' },
          ],
        },
        {
          type: 'select',
          name: 'colorHint',
          label: 'Color hint',
          info: 'The picture will have a predominat color.',
          options: [
            { label: '-- undefined --', value: '' },
            { label: 'Burgundy', value: 'burgundy' },
            { label: 'Scarlet', value: 'scarlet red' },
            { label: 'Pink', value: 'pink' },
            { label: 'Beige', value: 'beige' },
            { label: 'Brown', value: 'brown' },
            { label: 'Orange', value: 'orange' },
            { label: 'Yellow', value: 'yellow' },
            { label: 'Green', value: 'green' },
            { label: 'Emerald', value: 'emerald' },
            { label: 'Aquamarine', value: 'aquamarine' },
            { label: 'Cerulean', value: 'cerulean' },
            { label: 'Blue', value: 'blue' },
            { label: 'Purple', value: 'purple' },
            { label: 'Magenta', value: 'magenta' },
            { label: 'White', value: 'white' },
            { label: 'Gray', value: 'gray' },
            { label: 'Black', value: 'black' },
            { label: 'Bronze', value: 'bronze' },
            { label: 'Copper', value: 'copper' },
            { label: 'Silver', value: 'silver' },
            { label: 'Gold', value: 'gold' },
          ],
        },
      ],
    },
    {
      title: 'Character',
      children: [
        {
          type: 'range',
          name: 'gender',
          label: 'Gender',
          info: 'Femininity/Masculinity slider trait is temptative, the result may not be what you expect.',
          min: 0,
          max: 3,
          step: 1,
          defaultValue: 0,
          minLabel: 'Femininity',
          maxLabel: 'Masculinity',
        },
        {
          type: 'range',
          name: 'age',
          label: 'Age',
          min: 0,
          max: 3,
          step: 1,
          defaultValue: 1,
          minLabel: 'Young',
          maxLabel: 'Old',
        },
        {
          type: 'range',
          name: 'bodyStructure',
          label: 'Body structure',
          min: 0,
          max: 3,
          step: 1,
          defaultValue: 1,
          minLabel: 'Slender',
          maxLabel: 'Chubby',
        },
        {
          type: 'select',
          name: 'race',
          label: 'Race',
          defaultValue: 'human',
          options: [
            { label: 'Dwarf', value: 'dwarf' },
            { label: 'Elf', value: 'elven' },
            { label: 'Gnome', value: 'gnome' },
            { label: 'Half-Elf', value: 'half-elf' },
            { label: 'Halfling', value: 'halfling' },
            { label: 'Human', value: 'human' },
            { label: 'Tiefling', value: 'tiefling' },
          ],
        },
        {
          type: 'select',
          name: 'setting',
          label: 'Ethnic bias',
          info: 'Adds a random ethnicity to the character based on the area selected. It\'s a light conditioning that helps making the generations more interesting; it doesn\'t guarantee an exact nationality.',
          options: [
            { label: '-- undefined --', value: '' },
            { label: 'Completely Random', value: '' },

            { label: 'Africa: Eastern', value: 'Eritrean,Djiboutian,Ethiopian,Somali,Kenyan,Ugandan,Rwandan,Burundian,Tanzanian,Malagasy,Mauritian,Seychellois' },
            { label: 'Africa: Middle', value: 'Chadian,Sudanese,Central African,Cameroonian,Gabonese,Equatorial Guinean,Sao Tomean,Angolan,Congolese,Zambian,Malawian,Mozambican,Madagascan,Comorian,Mauritian,Seychellois' },
            { label: 'Africa: Northen', value: 'Egyptian,Libyan,Tunisian,Algerian,Moroccan,Mauritanian,Sahrawi,Tuareg' },
            { label: 'Africa: Southern', value: 'Namibian,South African,Botswanan,Zimbabwean,Zambian,Malawian,Mozambican,Swazi,Lesotho,Basotho' },
            { label: 'Africa: Western', value: 'Mauritanian,Senegalese,Malian,Nigerien,Burkinabe,Ivorian,Ghanaian,Togolese,Beninese,Nigerian,Cameroonian,Equatorial Guinean,Sao Tomean,Gabonese,Congolese' },

            { label: 'America: Central', value: 'Belizean,Costa Rican,Salvadoran,Guatemalan,Honduran,Nicaraguan,Panamanian' },
            { label: 'America: Northern', value: 'Antiguan,Bahamian,Barbadian,Cuban,Dominican,Dominican,Grenadian,Haitian,Jamaican,Kittian and Nevisian,Lucian,Vincentian,Trinidadian and Tobagonian' },
            { label: 'America: Sourthern', value: 'Argentine,Bolivian,Brazilian,Chilean,Colombian,Ecuadorian,Guyanese,Paraguayan,Peruvian,Surinamese,Uruguayan,Venezuelan' },

            { label: 'Asia: Central', value: 'Kazakhstani,Kyrgyzstani,Tajikistani,Turkmen,Uzbekistani' },
            { label: 'Asia: Eastern', value: 'Chinese,Japanese,Korean,Mongolian,Taiwanese' },
            { label: 'Asia: South-Eastern', value: 'Bangladeshi,Bhutanese,Indian,Maldivian,Nepalese,Pakistani,Sri Lankan' },
            { label: 'Asia: Southern', value: 'Burmese,Cambodian,Filipino,Indonesian,Laotian,Malaysian,Singaporean,Thai,Timorese,Vietnamese' },
            { label: 'Asia: Western', value: 'Afghan,Armenian,Azerbaijani,Bahraini,Cypriot,Georgian,Iranian,Iraqi,Israeli,Jordanian,Kuwaiti,Lebanese,Omani,Palestinian,Qatari,Saudi,Syrian,Turkish,Emirati,Yemeni' },

            { label: 'Australia & New Zealand', value: 'Australian,Fijian,I-Kiribati,Marshallese,Micronesian,Nauruan,New Zealander,Palauan,Papua New Guinean,Samoan,Solomon Islander,Tongan,Tuvaluan,Vanuatuan' },

            { label: 'European: Eastern', value: 'Belarusian,Bulgarian,Czech,Hungarian,Polish,Moldovan,Romanian,Russian,Slovak,Ukrainian' },
            { label: 'European: Northern', value: 'Estonian,Latvian,Lithuanian' },
            { label: 'European: Southern', value: 'Albanian,Bosnian,Croatian,Greek,Italian,Maltese,Montenegrin,North Macedonian,Portuguese,Serbian,Slovenian,Spanish' },
            { label: 'European: Western', value: 'Austrian,Belgian,Dutch,French,German,Liechtensteiner,Luxembourger,Monacan,Swiss' },
            { label: 'European: Islandic', value: 'Icelandic,Irish,Manx,British' },

            // { label: 'Carribean', value: 'Cuban,Dominican,Haitian,Jamaican,Puerto Rican,Trinidadian' },
            { label: 'Mela/Micro/Poly-nesia', value: 'Fijian,Papua New Guinean,Solomon Islander,Vanuatuan,Kiribati,Marshallese,Micronesian,Nauruan,Palauan,Samoan,Tongan,Tuvaluan' },
          ],
        },
      ],
    },
    {
      title: 'Custom',
      children: [],
    },
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
