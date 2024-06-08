# TODO

## Now

- a short break

## known bugs

- seed doesnt randomise when using autogen
- various problems with speech capture
  - fix how words are appended into prompt
    - currently it just overrides the entire value, but ideally the last word said is appended into the exisiting value
    - how to handle when utterances are updated?
- up and down arrows for prompt weights are shown, but do nothing

## Next

- make an adjustable limit for tail, separate from "speech" entirely + how to do UI for this?
- github CI build process
  - build storybook to github pages
  - build vite dist to main (default) branch, move code to develop branch
- combine InputTextarea, InputSpeech and InputText into a single type of input
- README redo, how to make UIB workflows
- image input (for ipa)
  - example UI
- interrupt and queue features
  - using multiple instances, how should queue work? clientId adjustments...
- ws reconnect / error message overlay or toaster
- error handling of missing ckpt or lora
- errors should appear in a relevent place, eg ckpt
- adjust weight with CTRL+UP or CTRL+DOWN

## Future

- save current formData to LS
  - reset all to default button
- pwa?
- video input (for animatediff)
- video output
- fix linting
- add lint staged + husky

## Ideas

- connect to remote comfyui
- choose component set / layout in ui config, alternative layouts abstraction
- interface builder
- more UIs
  - ipadapter example
  - differential diffusion inpainting example
  - animatediff example
