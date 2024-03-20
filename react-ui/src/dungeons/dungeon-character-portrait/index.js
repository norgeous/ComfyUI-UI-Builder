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
          adapter: ({ gender }) => {
            const converter = {
              0: {
                genderPositive: 'female',
                genderNegative: 'horror, ',
              },
              1: {
                genderPositive: '(masculine:1.1) female',
                genderNegative: 'beard, ',
              },
              2: {
                genderPositive: '(queer:0.9) feminine male',
                genderNegative: 'zombie, beard, ',
              },
              3: {
                genderPositive: 'male',
                genderNegative: '',
              },
            };
            const isFemale = gender === 0 || gender === 1;
            const { genderPositive, genderNegative } = converter[gender];

            return {
              gender, // value between 0 and 3
              isFemale, // boolean
              genderPositive, // pos prompt text fragment
              genderNegative, // neg prompt text fragment
            };
          },
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
          // valueConvert: {
          //   0: { age: 'young' },
          //   1: { age: '30yo' },
          //   2: { age: '45yo' },
          //   3: { age: '60yo' },
          // },
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
          // valueConvert: {
          //   0: { bodyStructure: 'slender' },
          //   1: {
          //     bodyStructure: '',
          //     bodyStructureHGD: 'stocky', // for halfling / gnome / dwarf
          //   },
          //   2: {
          //     bodyStructureMale: 'strong',
          //     bodyStructureFemale: 'strong muscular',
          //     bodyStructureMaleHGD: 'stocky strong', // for male halfling / gnome / dwarf
          //     bodyStructureFemaleHGD: 'stocky strong muscular', // for female halfling / gnome / dwarf
          //   },
          //   3: {
          //     bodyStructure: 'chubby',
          //     bodyStructureHGD: 'stocky chubby', // for halfling / gnome / dwarf
          //   },
          // },
          adapter: ({ bodyStructure, isFemale, isStocky }) => {
            // 0 slender
            if (bodyStructure === 0) return {
              bodyStructure: 'slender',
            };

            // 1 not stocky
            if (bodyStructure === 1 && !isStocky) return {
              bodyStructure: '',
            };
            // 1 stocky
            if (bodyStructure === 1 && isStocky) return {
              bodyStructure: 'stocky',
            };

            // 2 male not stocky
            if (bodyStructure === 2 && !isStocky && !isFemale) return {
              bodyStructure: 'strong',
            };
            // 2 female not stocky
            if (bodyStructure === 2 && !isStocky && isFemale) return {
              bodyStructure: 'strong muscular',
            };
            // 2 male stocky
            if (bodyStructure === 2 && isStocky && !isFemale) return {
              bodyStructure: ' stocky strong',
            };
            // 2 female stocky
            if (bodyStructure === 2 && isStocky && isFemale) return {
              bodyStructure: 'stocky strong muscular',
            };

            // 3 not stocky
            if (bodyStructure === 3 && !isStocky) return {
              bodyStructure: 'chubby',
            };
            // 3 stocky
            if (bodyStructure === 3 && isStocky) return {
              bodyStructure: 'stocky chubby',
            };
          },
        },
        {
          type: 'select',
          name: 'race',
          label: 'Race',
          defaultValue: 'human',
          options: [
            { label: 'Dwarf', value: 'dwarf' },
            { label: 'Elf', value: 'elf' },
            { label: 'Gnome', value: 'gnome' },
            { label: 'Half-Elf', value: 'half-elf' },
            { label: 'Halfling', value: 'halfling' },
            { label: 'Human', value: 'human' },
            { label: 'Tiefling', value: 'tiefling' },
          ],
          adapter: ({ race }) => {
            const isStocky = ['halfling','gnome','dwarf'].includes(race);

            const converter = {
              dwarf: {
                racePositive: 'dwarf',
                raceNegative: '',
              },
              elf: {
                racePositive: 'elven', // have to use Elven instead of Elf to avoid Christmas contamination
                raceNegative: 'green, beard, christmas',
              },
              gnome: {
                racePositive: 'gnome',
                raceNegative: 'garden',
              },
              'half-elf': {
                racePositive: 'half-elf, pointy ears.',
                raceNegative: '',
              },
              halfling: {
                racePositive: 'halfling, pointy ears.',
                raceNegative: '',
              },
              human: {
                racePositive: 'human',
                raceNegative: '(elf, long pointy ears:1.2)',
              },
              tiefling: {
                racePositive: 'tiefling',
                raceNegative: '',
              },
            };

            const {racePositive,raceNegative} = converter[race];

            return {
              race,
              isStocky,
              racePositive,
              raceNegative,
            };
          },
        },
        {
          type: 'select',
          name: 'ethnicBias',
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
  adapter: ({
    ckpt,
    setting, // always "Fantasy" at the moment
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

    const positivePrompt = `${setting} ${stylePositive} closeup of a ${age} \
    ${bodyStructure} ${randomEthnicBias} ${racePositive} ${genderPositive} \
    {{CLASS}} {{HAIR_COLOR}} {{HAIRSTYLE}} {{GEAR}}. {{RACE_HELPER}} \
    {{BACKGROUND}} High quality, detailed, high resolution{{SETTING_HELPER}}. \
    {{MOOD}}{{ATMOSPHERE}}`;

    const negativePrompt = `${styleNegative} ${raceNegative} rendering, \
    blurry, noisy, deformed, text, ${genderNegative}, scars, blood, dirty, \
    nipples, naked, boobs, cleavage, face mask, zippers, ill, lazy eye, \\
    {{BACKGROUND}} author, signature, 3d`;

    // override things in workflow
    workflowBasic['1'].inputs.ckpt_name = ckpt;
    workflowBasic['4'].inputs.text = positivePrompt;
    workflowBasic['5'].inputs.text = negativePrompt;

    // return the adapted workflow
    return workflowBasic;
  },
};

export default config;
