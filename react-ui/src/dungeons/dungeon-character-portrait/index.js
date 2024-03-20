import workflowBasic from './basic_portrait.json';

const config = {
  formConfig: [
    {
      title: 'Generation params',
      children: [
        {
          type: 'range2',
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
          type: 'range2',
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
          initialState: { model: 'ProteusV0.3' },
          label: 'Style & Model',
          options: [
            { label: 'Illustration - Fast', value: 'ProteusV0.3-LCM' },
            { label: 'Illustration - Accurate', value: 'ProteusV0.3' },
            { label: 'Anime - Fast', value: 'ProteusV0.3-LCM-Anime' },
            { label: 'Anime - Accurate', value: 'ProteusV0.3-Anime' },
            { label: 'Cinematic', value: 'DreamShaperXLTurboV2-Cinematic' },
          ],
          // valueConvert: {
          //   'ProteusV0.3-LCM': {
          //     stylePositive: 'illustration digital painting',
          //     styleNegative: 'photo, anime, ',
          //   },
          // },
        },
      ],
    },
    {
      title: 'Scene',
      children: [
        {
          type: 'select',
          name: 'sceneType', // aka "setting"
          initialState: { sceneType: 'fantasy' },
          label: 'Type',
          options: [
            { label: 'Fantasy', value: 'fantasy' },
            { label: 'Sci-Fi', value: 'Sci-Fi' },
          ],
        },
        {
          type: 'select',
          name: 'background',
          initialState: { background: '' },
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
          initialState: { mood: '' },
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
          initialState: { colorHint: '' },
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
          type: 'range2',
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
          type: 'range2',
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
          type: 'range2',
          name: 'bodyStructure',
          initialState: { bodyStructure: '' },
          label: 'Body structure',
          options: [
            { bodyStructure: 'slender' },
          ],
          // min: 0,
          // max: 3,
          // step: 1,
          minLabel: 'Slender',
          maxLabel: 'Chubby',
          // adapter: ({ bodyStructure, isFemale, isStocky }) => {
          //   // 0 slender
          //   if (bodyStructure === '0') return {
          //     ,
          //   };

          //   // 1 not stocky
          //   if (bodyStructure === '1' && !isStocky) return {
          //     bodyStructure: '',
          //   };
          //   // 1 stocky
          //   if (bodyStructure === '1' && isStocky) return {
          //     bodyStructure: 'stocky',
          //   };

          //   // 2 male not stocky
          //   if (bodyStructure === '2' && !isStocky && !isFemale) return {
          //     bodyStructure: 'strong',
          //   };
          //   // 2 female not stocky
          //   if (bodyStructure === '2' && !isStocky && isFemale) return {
          //     bodyStructure: 'strong muscular',
          //   };
          //   // 2 male stocky
          //   if (bodyStructure === '2' && isStocky && !isFemale) return {
          //     bodyStructure: ' stocky strong',
          //   };
          //   // 2 female stocky
          //   if (bodyStructure === '2' && isStocky && isFemale) return {
          //     bodyStructure: 'stocky strong muscular',
          //   };

          //   // 3 not stocky
          //   if (bodyStructure === '3' && !isStocky) return {
          //     bodyStructure: 'chubby',
          //   };
          //   // 3 stocky
          //   if (bodyStructure === '3' && isStocky) return {
          //     bodyStructure: 'stocky chubby',
          //   };
          // },
        },
        {
          type: 'spacer',
        },
        {
          type: 'select2',
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
        {
          type: 'select',
          name: 'characterClass',
          initialState: { characterClass: 'fighter' },
          label: 'Class',
          options: [
            { label: 'Cleric', value: 'cleric' },
            { label: 'Fighter', value: 'fighter' },
            { label: 'Mage', value: 'mage' },
            { label: 'Noble person', value: 'noble person' },
            { label: 'Paladin', value: 'paladin' },
            { label: 'Peasant', value: 'peasant' },
            { label: 'Ranger', value: 'ranger' },
            { label: 'Shaman', value: 'shaman' },
            { label: 'Thief', value: 'thief' },
          ],
        },
        {
          type: 'select',
          name: 'clothing',
          initialState: { clothing: '' },
          label: 'Clothing / Armor', // rename to Attire?
          options: [
            { label: '-- undefined --', value: '' },
            { label: 'Casual clothing', value: 'casual clothing' },
            { label: 'Elegant clothing', value: 'elegant garments' },
            { label: 'Furs', value: 'furs clothing' },
            { label: 'Light armor', value: 'a leather armor' },
            { label: 'Minimal', value: 'minimal simple clothing' },
            { label: 'Heavy armor', value: 'a heavy armor' },
            { label: 'Noble clothing', value: 'noble clothing' },
            { label: 'Rags', value: 'rags' },
            { label: 'Robe', value: 'a robe' },
          ],
        },
        {
          type: 'select',
          name: 'hairstyle',
          initialState: { hairstyle: '' },
          label: 'Hairstyle',
          options: [
            { label: '-- undefined --', value: '' },
            { label: 'Bald', value: 'bald' },
            { label: 'Braids', value: 'simple braid hairstyle' },
            { label: 'Buzz cut', value: 'buzz haircut' },
            { label: 'Cornrows', value: 'cornrows hairstyle' },
            { label: 'Curly Long', value: 'long {{COLOR}} curly hair' },
            { label: 'Curly Short', value: 'short {{COLOR}} curly hair' },
            { label: 'Dreadlocks', value: 'dreadlocks hairstyle' },
            { label: 'Long hair', value: 'long {{COLOR}} hair' },
            { label: 'Long disheveled', value: 'long {{COLOR}} disheveled hair' },
            { label: 'Long straight', value: 'long {{COLOR}} straight hair' },
            { label: 'Mohawk', value: 'short mohawk hairstyle' },
            { label: 'Pixie cut', value: 'pixie haircut' },
            { label: 'Ponytail', value: 'ponytail hairstyle' },
            { label: 'Short hair', value: 'short {{COLOR}} hair' },
            { label: 'Short disheveled', value: 'short {{COLOR}} disheveled hair' },
            { label: 'Short straight', value: 'short {{COLOR}} straight hair' },
          ],
          adapter: ({ hairColor, hairstyle }) => ({
            hair: hairstyle.replace('{{COLOR}}', hairColor),
          }),
        },
        {
          type: 'select',
          name: 'hairColor',
          initialState: { hairColor: '' },
          label: 'Hair color',
          options: [
            { label: '-- undefined --', value: '' },
            { label: 'Blond', value: 'blond' },
            { label: 'Dark Blond', value: 'dark blond' },
            { label: 'Medium Brown', value: 'medium brown' },
            { label: 'Dark Brown', value: 'dark brown' },
            { label: 'Reddish Brown', value: 'reddish brown' },
            { label: 'Red', value: 'red' },
            { label: 'Black', value: 'black' },
            { label: 'Graying', value: 'canescent' },
            { label: 'Gray', value: 'gray' },
            { label: 'White', value: 'white' },
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
    sceneType,
    stylePositive,
    styleNegative,
    age,
    bodyStructure,
    ethnicBias,
    racePositive,
    raceNegative,
    genderPositive,
    genderNegative,
  }) => {

    const ethnicOptions = ethnicBias?.split(',') || [];
    const randomEthnicBias = ethnicOptions[Math.floor(Math.random() * ethnicOptions.length)];

    const positivePrompt = `${sceneType} ${stylePositive} closeup of a ${age} \
    ${bodyStructure} ${randomEthnicBias} ${racePositive} ${genderPositive} \
    {{CLASS}} {{HAIR_COLOR}} {{HAIRSTYLE}} {{GEAR}}. {{RACE_HELPER}} \
    {{BACKGROUND}} High quality, detailed, high resolution{{SETTING_HELPER}}. \
    {{MOOD}}{{ATMOSPHERE}}`;

    const negativePrompt = `${styleNegative} ${raceNegative} rendering, \
    blurry, noisy, deformed, text, ${genderNegative}, scars, blood, dirty, \
    nipples, naked, boobs, cleavage, face mask, zippers, ill, lazy eye, \\
    {{BACKGROUND}} author, signature, 3d`;

    // console.log({ positivePrompt, negativePrompt });

    // override things in workflow
    workflowBasic['1'].inputs.ckpt_name = ckpt;
    workflowBasic['4'].inputs.text = positivePrompt;
    workflowBasic['5'].inputs.text = negativePrompt;

    // return the adapted workflow
    return workflowBasic;
  },
};

export default config;
