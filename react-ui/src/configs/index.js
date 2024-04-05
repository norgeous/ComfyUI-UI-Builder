import sdxlWorkflow from './basic-sdxl/workflow.json';
import sdxlConfig from './basic-sdxl/ui-config.json';

import dungeonWorkflow from './dungeon-character-portrait/workflow.json';
import dungeonConfig from './dungeon-character-portrait/ui-config.json';

const configList = [
  {
    baseWorkflow: sdxlWorkflow,
    configData: sdxlConfig,
  },
  {
    baseWorkflow: dungeonWorkflow,
    configData: dungeonConfig,
  },
];

export default configList;
