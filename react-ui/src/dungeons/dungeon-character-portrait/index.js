import workflowBasic from './basic_portrait.json';

const config = {
  formConfig: [
    {
      title: 'Generation params',
      children: [
        {
          type: 'range',
          name: 'quality',
          initialState: { quality: 1 },
          label: 'Quality',
          options: [
            { quality: 0.25 },
            { quality: 0.5 },
            { quality: 0.75 },
            { quality: 1 },
          ],
          minLabel: 'Speed',
          maxLabel: 'Accuracy',
        },
        {
          type: 'range',
          name: 'batchSize',
          initialState: { batchSize: 1 },
          label: 'Results per generation',
          options: [
            { batchSize: 1 },
            { batchSize: 2 },
            { batchSize: 3 },
            { batchSize: 4 },
          ],
          pipLabels: ['1', '2', '3', '4'],
        },
        {
          type: 'select',
          name: 'preset',
          initialState: {
            preset: 'illustration-accurate',
            model: 'ProteusV0.3',
            stylePositive: 'illustration digital painting',
            styleNegative: 'photo, anime,',
            baseSteps: 14,
            stepMultiplier: 14,
            cfg: 6.5,
            samplerName: 'dpmpp_2m',
            scheduler: 'exponential',
          },
          label: 'Style & Model',
          colSpan: 2,
          options: [
            {
              label: 'Illustration - Fast',
              preset: 'illustration-fast',
              model: 'ProteusV0.3',
              stylePositive: 'illustration digital painting',
              styleNegative: 'photo, anime,',
              baseSteps: 4,
              stepMultiplier: 4,
              cfg: 2.5,
              samplerName: 'lcm',
              scheduler: 'normal',
            },
            {
              label: 'Illustration - Accurate',
              preset: 'illustration-accurate',
              model: 'ProteusV0.3',
              stylePositive: 'illustration digital painting',
              styleNegative: 'photo, anime,',
              baseSteps: 14,
              stepMultiplier: 14,
              cfg: 6.5,
              samplerName: 'dpmpp_2m',
              scheduler: 'exponential',
            },
            {
              label: 'Anime - Fast',
              preset: 'anime-fast',
              model: 'ProteusV0.3',
              stylePositive: 'anime illustration',
              styleNegative: 'photo, fanart,',
              baseSteps: 4,
              stepMultiplier: 4,
              cfg: 2.5,
              samplerName: 'lcm',
              scheduler: 'normal',
            },
            {
              label: 'Anime - Accurate',
              preset: 'anime-accurate',
              model: 'ProteusV0.3',
              stylePositive: 'anime illustration',
              styleNegative: 'photo, fanart,',
              baseSteps: 14,
              stepMultiplier: 14,
              cfg: 6.5,
              samplerName: 'dpmpp_2m',
              scheduler: 'exponential',
            },
            {
              label: 'Cinematic',
              preset: 'cinematic',
              model: 'DreamShaperXLTurboV2',
              stylePositive: 'film still cinematic photo',
              styleNegative: 'illustration, anime, cosplay,',
              baseSteps: 6,
              stepMultiplier: 4,
              cfg: 2,
              samplerName: 'dpmpp_sde',
              scheduler: 'karras',
            },
          ],
        },
      ],
    },
    {
      title: 'Scene', // previously called "setting"
      children: [
        {
          type: 'select',
          name: 'style', // previously called "setting"
          initialState: {
            style: 'fantasy',
            stylePost: '(D&D:1.1), (Lord of the rings:0.9)',
          },
          label: 'Style',
          options: [
            {
              label: 'Fantasy',
              style: 'fantasy',
              stylePost: '(D&D:1.1), (Lord of the rings:0.9)',
            },
          ],
        },
        {
          type: 'select',
          name: 'background',
          initialState: {
            background: '',
            backgroundNegative: '',
          },
          label: 'Background',
          options: [
            { label: '-- undefined --', background: '', backgroundNegative: '' },
            { label: 'Cave', background: 'inside a cave', backgroundNegative: 'flat background' },
            { label: 'Desert', background: 'in the desert', backgroundNegative: 'flat background' },
            { label: 'Dungeon', background: 'inside a dungeon', backgroundNegative: 'flat background' },
            { label: 'Flames', background: 'flames in background', backgroundNegative: 'flat background' },
            { label: 'Forest', background: 'forest in background', backgroundNegative: 'flat background' },
            { label: 'Glacier', background: 'on a glacier', backgroundNegative: 'flat background' },
            { label: 'Magical aura', background: 'magical aura in background', backgroundNegative: 'flat background' },
            { label: 'Mountains', background: 'mountains in background', backgroundNegative: 'flat background' },
            { label: 'Plain background', background: 'flat plain background', backgroundNegative: 'flat background' },
            { label: 'Study', background: 'in the study, scrolls and potions', backgroundNegative: 'flat background' },
            { label: 'Temple', background: 'inside a temple', backgroundNegative: 'flat background' },
            { label: 'Town', background: 'on the streets of an old town', backgroundNegative: 'flat background' },
          ],
        },
        {
          type: 'select',
          name: 'mood',
          initialState: { mood: '' },
          label: 'Mood',
          options: [
            { label: 'Angry', mood: 'angry evil' },
            { label: 'Somber', mood: 'wise thoughtful serious mood' },
            { label: 'Neutral', mood: '' },
            { label: 'Cunning', mood: 'cunning smirk mood' },
            { label: 'Serene', mood: 'serene joyful dreamy' },
            { label: 'Happy', mood: 'happy jovial (smiling:0.85)' },
          ],
        },
        {
          type: 'select',
          name: 'colorHint',
          initialState: { colorHint: '' },
          label: 'Color hint',
          info: 'The picture will have a predominat color.',
          options: [
            { label: '-- undefined --', colorHint: '' },
            { label: 'Burgundy', colorHint: 'burgundy' },
            { label: 'Scarlet', colorHint: 'scarlet red' },
            { label: 'Pink', colorHint: 'pink' },
            { label: 'Beige', colorHint: 'beige' },
            { label: 'Brown', colorHint: 'brown' },
            { label: 'Orange', colorHint: 'orange' },
            { label: 'Yellow', colorHint: 'yellow' },
            { label: 'Green', colorHint: 'green' },
            { label: 'Emerald', colorHint: 'emerald' },
            { label: 'Aquamarine', colorHint: 'aquamarine' },
            { label: 'Cerulean', colorHint: 'cerulean' },
            { label: 'Blue', colorHint: 'blue' },
            { label: 'Purple', colorHint: 'purple' },
            { label: 'Magenta', colorHint: 'magenta' },
            { label: 'White', colorHint: 'white' },
            { label: 'Gray', colorHint: 'gray' },
            { label: 'Black', colorHint: 'black' },
            { label: 'Bronze', colorHint: 'bronze' },
            { label: 'Copper', colorHint: 'copper' },
            { label: 'Silver', colorHint: 'silver' },
            { label: 'Gold', colorHint: 'gold' },
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
          initialState: {
            gender: 0,
            isFemale: true,
            genderPositive: 'female',
            genderNegative: 'horror, ',
          },
          label: 'Gender',
          info: 'Femininity/Masculinity slider trait is temptative, the result may not be what you expect.',
          options: [
            { 
              gender: 0,
              isFemale: true,
              genderPositive: 'female',
              genderNegative: 'horror, ',
            },
            { 
              gender: 1,
              isFemale: true,
              genderPositive: '(masculine:1.1) female',
              genderNegative: 'beard, ',
            },
            {
              gender: 2,
              isFemale: false, // male
              genderPositive: '(queer:0.9) feminine male',
              genderNegative: 'zombie, beard, ',
            },
            {
              gender: 3,
              isFemale: false, // male
              genderPositive: 'male',
              genderNegative: '',
            },
          ],
          minLabel: 'Femininity',
          maxLabel: 'Masculinity',
        },
        {
          type: 'range',
          name: 'age',
          initialState: { age: '30yo' },
          label: 'Age',
          options: [
            { age: 'young' }, 
            { age: '30yo' }, 
            { age: '45yo' }, 
            { age: '60yo' },
          ],
          minLabel: 'Young',
          maxLabel: 'Old',
        },
        {
          type: 'range',
          name: 'bodyStructure',
          initialState: { bodyStructure: '' },
          label: 'Body structure',
          options: [
            { bodyStructure: 'slender' },
            { bodyStructure: '' },
            { bodyStructure: 'strong' },
            { bodyStructure: 'chubby' },
            
          ],
          minLabel: 'Slender',
          maxLabel: 'Chubby',
        },
        {
          type: 'spacer',
        },
        {
          type: 'select',
          name: 'race',
          initialState: {
            race: 'human',
            isStocky: false,
            racePositive: 'human',
            raceNegative: '(elf, long pointy ears:1.2)',
          },
          label: 'Race',
          options: [
            {
              label: 'Dwarf',
              race: 'dwarf',
              isStocky: true,
              racePositive: 'dwarf',
              raceNegative: '',
            },
            {
              label: 'Elf',
              race: 'elf',
              isStocky: false,
              racePositive: 'elven', // have to use Elven instead of Elf to avoid Christmas contamination
              raceNegative: 'green, beard, christmas',
            },
            {
              label: 'Gnome',
              race: 'gnome',
              isStocky: true,
              racePositive: 'gnome',
              raceNegative: 'garden',
            },
            {
              label: 'Half-Elf',
              race: 'half-elf',
              isStocky: false,
              racePositive: 'half-elf, pointy ears.',
              raceNegative: '',
            },
            {
              label: 'Halfling',
              race: 'halfling',
              isStocky: true,
              racePositive: 'halfling, pointy ears.',
              raceNegative: '',
            },
            {
              label: 'Human',
              race: 'human',
              isStocky: false,
              racePositive: 'human',
              raceNegative: '(elf, long pointy ears:1.2)',
            },
            {
              label: 'Tiefling',
              race: 'tiefling',
              isStocky: false,
              racePositive: 'tiefling',
              raceNegative: '',
            },
          ],
        },
        {
          type: 'select',
          name: 'ethnicBias',
          initialState: { ethnicBias: '' },
          label: 'Ethnic bias',
          info: 'Adds a random ethnicity to the character based on the area selected. It\'s a light conditioning that helps making the generations more interesting; it doesn\'t guarantee an exact nationality.',
          options: [
            { label: '-- undefined --', ethnicBias: '' },
            { label: 'Completely Random', ethnicBias: '' },

            { label: 'Africa: Eastern', ethnicBias: 'Eritrean,Djiboutian,Ethiopian,Somali,Kenyan,Ugandan,Rwandan,Burundian,Tanzanian,Malagasy,Mauritian,Seychellois' },
            { label: 'Africa: Middle', ethnicBias: 'Chadian,Sudanese,Central African,Cameroonian,Gabonese,Equatorial Guinean,Sao Tomean,Angolan,Congolese,Zambian,Malawian,Mozambican,Madagascan,Comorian,Mauritian,Seychellois' },
            { label: 'Africa: Northen', ethnicBias: 'Egyptian,Libyan,Tunisian,Algerian,Moroccan,Mauritanian,Sahrawi,Tuareg' },
            { label: 'Africa: Southern', ethnicBias: 'Namibian,South African,Botswanan,Zimbabwean,Zambian,Malawian,Mozambican,Swazi,Lesotho,Basotho' },
            { label: 'Africa: Western', ethnicBias: 'Mauritanian,Senegalese,Malian,Nigerien,Burkinabe,Ivorian,Ghanaian,Togolese,Beninese,Nigerian,Cameroonian,Equatorial Guinean,Sao Tomean,Gabonese,Congolese' },

            { label: 'America: Central', ethnicBias: 'Belizean,Costa Rican,Salvadoran,Guatemalan,Honduran,Nicaraguan,Panamanian' },
            { label: 'America: Northern', ethnicBias: 'Antiguan,Bahamian,Barbadian,Cuban,Dominican,Dominican,Grenadian,Haitian,Jamaican,Kittian and Nevisian,Lucian,Vincentian,Trinidadian and Tobagonian' },
            { label: 'America: Sourthern', ethnicBias: 'Argentine,Bolivian,Brazilian,Chilean,Colombian,Ecuadorian,Guyanese,Paraguayan,Peruvian,Surinamese,Uruguayan,Venezuelan' },

            { label: 'Asia: Central', ethnicBias: 'Kazakhstani,Kyrgyzstani,Tajikistani,Turkmen,Uzbekistani' },
            { label: 'Asia: Eastern', ethnicBias: 'Chinese,Japanese,Korean,Mongolian,Taiwanese' },
            { label: 'Asia: South-Eastern', ethnicBias: 'Bangladeshi,Bhutanese,Indian,Maldivian,Nepalese,Pakistani,Sri Lankan' },
            { label: 'Asia: Southern', ethnicBias: 'Burmese,Cambodian,Filipino,Indonesian,Laotian,Malaysian,Singaporean,Thai,Timorese,Vietnamese' },
            { label: 'Asia: Western', ethnicBias: 'Afghan,Armenian,Azerbaijani,Bahraini,Cypriot,Georgian,Iranian,Iraqi,Israeli,Jordanian,Kuwaiti,Lebanese,Omani,Palestinian,Qatari,Saudi,Syrian,Turkish,Emirati,Yemeni' },

            { label: 'Australia & New Zealand', ethnicBias: 'Australian,Fijian,I-Kiribati,Marshallese,Micronesian,Nauruan,New Zealander,Palauan,Papua New Guinean,Samoan,Solomon Islander,Tongan,Tuvaluan,Vanuatuan' },

            { label: 'European: Eastern', ethnicBias: 'Belarusian,Bulgarian,Czech,Hungarian,Polish,Moldovan,Romanian,Russian,Slovak,Ukrainian' },
            { label: 'European: Northern', ethnicBias: 'Estonian,Latvian,Lithuanian' },
            { label: 'European: Southern', ethnicBias: 'Albanian,Bosnian,Croatian,Greek,Italian,Maltese,Montenegrin,North Macedonian,Portuguese,Serbian,Slovenian,Spanish' },
            { label: 'European: Western', ethnicBias: 'Austrian,Belgian,Dutch,French,German,Liechtensteiner,Luxembourger,Monacan,Swiss' },
            { label: 'European: Islandic', ethnicBias: 'Icelandic,Irish,Manx,British' },

            // { label: 'Carribean', ethnicBias: 'Cuban,Dominican,Haitian,Jamaican,Puerto Rican,Trinidadian' },
            { label: 'Mela/Micro/Poly-nesia', ethnicBias: 'Fijian,Papua New Guinean,Solomon Islander,Vanuatuan,Kiribati,Marshallese,Micronesian,Nauruan,Palauan,Samoan,Tongan,Tuvaluan' },
          ],
        },
        {
          type: 'select',
          name: 'characterClass',
          initialState: { characterClass: 'fighter' },
          label: 'Class',
          options: [
            { label: 'Cleric', characterClass: 'cleric' },
            { label: 'Fighter', characterClass: 'fighter' },
            { label: 'Mage', characterClass: 'mage' },
            { label: 'Noble person', characterClass: 'noble person' },
            { label: 'Paladin', characterClass: 'paladin' },
            { label: 'Peasant', characterClass: 'peasant' },
            { label: 'Ranger', characterClass: 'ranger' },
            { label: 'Shaman', characterClass: 'shaman' },
            { label: 'Thief', characterClass: 'thief' },
          ],
        },
        {
          type: 'select',
          name: 'clothing',
          initialState: { clothing: '' },
          label: 'Clothing / Armor', // rename to Attire?
          options: [
            { label: '-- undefined --', clothing: '' },
            { label: 'Casual clothing', clothing: 'wearing casual clothing' },
            { label: 'Elegant clothing', clothing: 'wearing elegant garments' },
            { label: 'Furs', clothing: 'wearing furs clothing' },
            { label: 'Light armor', clothing: 'wearing a leather armor' },
            { label: 'Minimal', clothing: 'wearing minimal simple clothing' },
            { label: 'Heavy armor', clothing: 'wearing a heavy armor' },
            { label: 'Noble clothing', clothing: 'wearing noble clothing' },
            { label: 'Rags', clothing: 'wearing rags' },
            { label: 'Robe', clothing: 'wearing a robe' },
          ],
        },
        {
          type: 'select',
          name: 'hairstyle',
          initialState: { hairstyle: '', hairLength: '', canColourHair: false },
          label: 'Hairstyle',
          info: 'Please note that some hairstyles work better (or at all) with a specific gender and/or ethnicity.',
          options: [
            { label: '-- undefined --', hairstyle: '', hairLength: '', canColourHair: false },
            { label: 'Bald', hairstyle: 'bald', hairLength: '', canColourHair: false },
            { label: 'Braids', hairstyle: 'simple braid hairstyle', hairLength: '', canColourHair: false },
            { label: 'Buzz cut', hairstyle: 'buzz haircut', hairLength: '', canColourHair: false },
            { label: 'Cornrows', hairstyle: 'cornrows hairstyle', hairLength: '', canColourHair: false },
            { label: 'Curly Long', hairstyle: 'curly hair' , hairLength: 'long', canColourHair: true },
            { label: 'Curly Short', hairstyle: 'curly hair' , hairLength: 'short', canColourHair: true },
            { label: 'Dreadlocks', hairstyle: 'dreadlocks hairstyle', hairLength: '', canColourHair: false },
            { label: 'Long hair', hairstyle: 'hair' , hairLength: 'long', canColourHair: true },
            { label: 'Long disheveled', hairstyle: 'disheveled hair' , hairLength: 'long', canColourHair: true },
            { label: 'Long straight', hairstyle: 'straight hair' , hairLength: 'long', canColourHair: true },
            { label: 'Mohawk', hairstyle: 'short mohawk hairstyle', hairLength: '', canColourHair: false },
            { label: 'Pixie cut', hairstyle: 'pixie haircut', hairLength: '', canColourHair: false },
            { label: 'Ponytail', hairstyle: 'ponytail hairstyle', hairLength: '', canColourHair: false },
            { label: 'Short hair', hairstyle: 'hair' , hairLength: 'short', canColourHair: true },
            { label: 'Short disheveled', hairstyle: 'disheveled hair' , hairLength: 'short', canColourHair: true },
            { label: 'Short straight', hairstyle: 'straight hair' , hairLength: 'short', canColourHair: true },
          ],
        },
        {
          type: 'select',
          name: 'hairColor',
          initialState: { hairColor: '' },
          label: 'Hair color',
          options: [
            { label: '-- undefined --', hairColor: '' },
            { label: 'Blond', hairColor: 'blond' },
            { label: 'Dark Blond', hairColor: 'dark blond' },
            { label: 'Medium Brown', hairColor: 'medium brown' },
            { label: 'Dark Brown', hairColor: 'dark brown' },
            { label: 'Reddish Brown', hairColor: 'reddish brown' },
            { label: 'Red', hairColor: 'red' },
            { label: 'Black', hairColor: 'black' },
            { label: 'Graying', hairColor: 'canescent' },
            { label: 'Gray', hairColor: 'gray' },
            { label: 'White', hairColor: 'white' },
          ],
        },
      ],
    },
    {
      title: 'Custom',
      children: [
        {
          type: 'textarea',
          name: 'customPrompt',
          initialState: { customPrompt: '' },
          label: 'Custom Prompt',
          info: 'Keep it simple. Don\'t be too discoursive, write the element that you\'d want to add. Eg: "red scarf" or "silver tiara". You might need to add strength with the syntax "(silver tiara:1.2)".<br/>If the element is generic and could be misinterpreted try to give context. Eg: instead of "crown" try with "wearing a silver crown on his head".',
        },
        {
          type: 'selectckpt',
          name: 'ckpt',
          initialState: { ckpt: undefined },
          label: 'Checkpoint',
        },
        {
          type: 'seed',
          name: 'seed',
          initialState: { seed: 1337 },
          label: 'Seed',
        },
      ],
    },
  ],
  adapter: ({
    ckpt,
    seed,
    batchSize,
    quality,
    baseSteps,
    stepMultiplier,
    cfg,
    samplerName,
    scheduler,
    style,
    stylePositive,
    styleNegative,
    age,
    bodyStructure,
    ethnicBias,
    racePositive,
    raceNegative,
    genderPositive,
    genderNegative,
    characterClass,
    isStocky,
    isFemale,
    hairLength,
    canColourHair,
    hairColor,
    hairstyle,
    clothing,
    background,
    backgroundNegative,
    mood,
    stylePost,
    colorHint,
  }) => {
    const ethnicOptions = ethnicBias?.split(',') || [];
    const randomEthnicBias = ethnicOptions[Math.floor(Math.random() * ethnicOptions.length)];

    const positivePrompt1 = [
      style,
      stylePositive,
      'closeup of a',
      age,
      ...(isStocky ? ['stocky'] : []),
      bodyStructure,
      ...(isFemale && bodyStructure === 'strong' ? ['muscular'] : []),
      randomEthnicBias,
      racePositive,
      genderPositive,
      characterClass,
      ...(hairstyle ? ['with'] : []),
      hairLength,
      ...(canColourHair ? [hairColor]: []),
      hairstyle,
      clothing,
      background,
    ].filter(value => value).join(' ');

    const positivePrompt2 = [
      'High quality, detailed, high resolution,',
      stylePost,
    ].filter(value => value).join(' ');

    const positivePrompt3 = [
      mood,
      colorHint,
    ].filter(value => value).join(' ');

    const positivePrompt = [
      positivePrompt1,
      positivePrompt2,
      positivePrompt3,
    ].join('. ').trim();

    const negativePrompt = [
      styleNegative,
      raceNegative,
      'rendering',
      'blurry',
      'noisy',
      'deformed',
      'text',
      genderNegative,
      'scars',
      'blood',
      'dirty',
      'niles',
      'naked',
      'boobs',
      'cleavage',
      'face mask',
      'zippers',
      'ill',
      'lazy eye',
      backgroundNegative,
      'author',
      'signature',
      '3d',
    ].join(', ');

    const getIdByNodeTitle = (title) => Object.entries(workflowBasic).find(([, node]) => node._meta.title === title)[0]; 

    // override things in workflow
    workflowBasic[getIdByNodeTitle('Load Checkpoint')].inputs.ckpt_name = 'XL1.0\\ProteusV0.3.safetensors';//ckpt;
    workflowBasic[getIdByNodeTitle('Positive Prompt')].inputs.text = positivePrompt;
    workflowBasic[getIdByNodeTitle('Negative Prompt')].inputs.text = negativePrompt;
    workflowBasic[getIdByNodeTitle('Empty Latent Image')].inputs.batch_size = batchSize;
    workflowBasic[getIdByNodeTitle('KSampler')].inputs.seed = seed;
    workflowBasic[getIdByNodeTitle('KSampler')].inputs.steps = baseSteps + Math.round(quality * stepMultiplier);
    workflowBasic[getIdByNodeTitle('KSampler')].inputs.cfg = cfg;
    workflowBasic[getIdByNodeTitle('KSampler')].inputs.sampler_name = samplerName;
    workflowBasic[getIdByNodeTitle('KSampler')].inputs.scheduler = scheduler;

    // return the adapted workflow
    return workflowBasic;
  },
};

export default config;
