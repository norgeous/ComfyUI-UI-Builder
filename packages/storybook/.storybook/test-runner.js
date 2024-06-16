import { injectAxe, checkA11y, configureAxe } from 'axe-playwright';
// import { getStoryContext } from '@storybook/test-runner';

// eslint-disable-next-line no-unused-vars
export const preVisit = async (page, context) => {
  await injectAxe(page);
};

// eslint-disable-next-line no-unused-vars
export const postVisit = async (page, context) => {
  // Get the entire context of a story, including parameters, args, argTypes, etc.
  // const storyContext = await getStoryContext(page, context);

  const axeOptions = {
    detailedReport: true, // per node with an array of numbers of which violations from the summary affect that node
    // detailedReportOptions: { html: true }, // includes the html of the offending node
    verbose: false, // hide the "No accessibility violations detected!" message
  };

  const skipFailures = false;

  await configureAxe(page, {
    rules: [{ id: 'color-contrast', selector: '*:not(.muted):not(.muted *)' }],
  });

  // the report type: default, v2 or html
  // note: the html reporter will disable terminal logging of failures, the tests wont fail
  console.log('!1!');
  await checkA11y(page, '#storybook-root', axeOptions, skipFailures, 'v2');
  console.log('!2!');

  const axeOptions2 = {
    detailedReport: true, // per node with an array of numbers of which violations from the summary affect that node
    // detailedReportOptions: { html: true }, // includes the html of the offending node
    verbose: false, // hide the "No accessibility violations detected!" message
  };

  const output = await checkA11y(
    page,
    '#storybook-root',
    axeOptions2,
    false,
    'html',
    {
      outputDir: '.',
      reportFileName: 'exampleReport.html',
    },
  );
  console.log('!3!', output);
};
