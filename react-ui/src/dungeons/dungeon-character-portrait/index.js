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
            { quality: 1 },
            { quality: 2 },
            { quality: 3 },
            { quality: 4 },
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
        },
        {
          type: 'select',
          name: 'model',
          initialState: {
            model: 'ProteusV0.3',
            stylePositive: '',
            styleNegative: '',
          },
          label: 'Style & Model',
          options: [
            {
              label: 'Illustration - Fast',
              model: 'ProteusV0.3-LCM',
              stylePositive: 'illustration digital painting',
              styleNegative: 'photo, anime, '
            },
            {
              label: 'Illustration - Accurate',
              model: 'ProteusV0.3',
              stylePositive: '',
              styleNegative: '',
            },
            {
              label: 'Anime - Fast',
              model: 'ProteusV0.3-LCM-Anime',
              stylePositive: '',
              styleNegative: '',
            },
            {
              label: 'Anime - Accurate',
              model: 'ProteusV0.3-Anime',
              stylePositive: '',
              styleNegative: '',
            },
            {
              label: 'Cinematic',
              model: 'DreamShaperXLTurboV2-Cinematic',
              stylePositive: '',
              styleNegative: '',
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
          initialState: { style: 'fantasy' },
          label: 'Style',
          options: [
            { label: 'Fantasy', style: 'fantasy' },
            { label: 'Sci-Fi', style: 'sci-fi' }, // new
          ],
        },
        {
          type: 'select',
          name: 'background',
          initialState: { background: '' },
          label: 'Background',
          options: [
            { label: '-- undefined --', background: '' },
            { label: 'Cave', background: 'inside a cave' },
            { label: 'Desert', background: 'in the desert' },
            { label: 'Dungeon', background: 'inside a dungeon' },
            { label: 'Flames', background: 'flames in background' },
            { label: 'Forest', background: 'forest in background' },
            { label: 'Glacier', background: 'on a glacier' },
            { label: 'Magical aura', background: 'magical aura in background' },
            { label: 'Mountains', background: 'mountains in background' },
            { label: 'Plain background', background: 'flat plain background' },
            { label: 'Study', background: 'in the study, scrolls and potions' },
            { label: 'Temple', background: 'inside a temple' },
            { label: 'Town', background: 'on the streets of an old town' },
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
            { label: 'Casual clothing', clothing: 'casual clothing' },
            { label: 'Elegant clothing', clothing: 'elegant garments' },
            { label: 'Furs', clothing: 'furs clothing' },
            { label: 'Light armor', clothing: 'a leather armor' },
            { label: 'Minimal', clothing: 'minimal simple clothing' },
            { label: 'Heavy armor', clothing: 'a heavy armor' },
            { label: 'Noble clothing', clothing: 'noble clothing' },
            { label: 'Rags', clothing: 'rags' },
            { label: 'Robe', clothing: 'a robe' },
          ],
        },
        {
          type: 'select',
          name: 'hairstyle',
          initialState: { hairstyle: '', hairLength: '', canColourHair: false },
          label: 'Hairstyle',
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
          type: 'selectckpt',
          name: 'ckpt',
          initialState: { ckpt: undefined },
          label: 'Checkpoint',
        },
        {
          type: 'textarea',
          name: 'customPrompt',
          initialState: { customPrompt: '' },
          label: 'Custom Prompt',
          info: 'Keep it simple. Don\'t be too discoursive, write the element that you\'d want to add. Eg: "red scarf" or "silver tiara". You might need to add strength with the syntax "(silver tiara:1.2)".<br/>If the element is generic and could be misinterpreted try to give context. Eg: instead of "crown" try with "wearing a silver crown on his head".',
        },
      ],
    },
  ],
  adapter: ({
    ckpt,
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
    gear,
    background,
    mood,
    atmosphere,
  }) => {
    const ethnicOptions = ethnicBias?.split(',') || [];
    const randomEthnicBias = ethnicOptions[Math.floor(Math.random() * ethnicOptions.length)];

    const positivePrompt = [
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
      hairLength,
      ...(canColourHair ? [hairColor]: []),
      hairstyle,
      gear,
      '. ',
      background,
      'High quality, detailed, high resolution',
      mood,
      atmosphere,
    ].filter(value => value).join(' ');

    const negativePrompt = `${styleNegative} ${raceNegative} rendering, \
blurry, noisy, deformed, text, ${genderNegative}, scars, blood, dirty, \
nipples, naked, boobs, cleavage, face mask, zippers, ill, lazy eye, \
{{BACKGROUND}} author, signature, 3d`;

    console.log(positivePrompt);

    // override things in workflow
    workflowBasic['1'].inputs.ckpt_name = ckpt;
    workflowBasic['4'].inputs.text = positivePrompt;
    workflowBasic['5'].inputs.text = negativePrompt;

    // return the adapted workflow
    return workflowBasic;
  },
};

export default config;
