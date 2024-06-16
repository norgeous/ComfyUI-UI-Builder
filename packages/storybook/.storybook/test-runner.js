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

  // the report type: default, v2 or html
  // note: the html reporter will disable terminal logging of failures, the tests wont fail
  const reporter = 'v2';

  await configureAxe(page, {
    rules: [{ id: 'color-contrast', selector: '*:not(.muted):not(.muted *)' }],
  });

  await checkA11y(page, '#storybook-root', axeOptions, skipFailures, reporter);
};
