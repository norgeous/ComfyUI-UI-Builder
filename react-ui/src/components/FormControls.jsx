import Button from './Button';

const FormControls = ({
  executePrompt,
  executeInterrupt,
  promptLoading,
  isGenerating,
  interruptLoading,
}) => (
  <Button.Group>
    <Button
      fullWidth
      onClick={executePrompt}
      loading={promptLoading || isGenerating}
    >
      Generate
    </Button>
    {isGenerating && (
      <Button
        variant="outline"
        onClick={executeInterrupt}
        loading={interruptLoading}
      >
        Interrupt
      </Button>
    )}
  </Button.Group>
);

export default FormControls;
