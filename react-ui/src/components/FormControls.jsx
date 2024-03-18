import Button from './Button';

const FormControls = ({
  executePrompt,
  executeInterrupt,
  promptLoading,
  isGenerating,
  interruptLoading,
}) => (
  <>
    <Button
      // fullWidth
      onClick={executePrompt}
      // loading={promptLoading || isGenerating}
    >
      Generate
    </Button>
    {isGenerating && (
      <Button
        // variant="outline"
        onClick={executeInterrupt}
        // loading={interruptLoading}
      >
        Interrupt
      </Button>
    )}
  </>
);

export default FormControls;
