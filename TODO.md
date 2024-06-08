# TODO

## Now

- a short break

## known bugs

- seed > randomise checkbox doesnt randomise
- rescale CFG does not activate
- various problems with speech capture
  - fix how words are appended into prompt
    - currently it just overrides the entire value, but ideally the last word said is appended into the exisiting value
    - how to handle when utterances are updated?
- up and down arrows for prompt weights are shown, but do nothing
- pressing escape when in fullscreen does not unfullscreen the html element
- ethnic bias broken in comfy dungeon vs original implimentation, use a PRNG based on seed to select one (or two) from the list
- interrupt prompt doesn't work in dev mode (connect to same address as ws)

## Next

- make an adjustable limit for tail, separate from "speech" entirely + how to do UI for this?
- github CI build process
  - build storybook to github pages
  - build vite dist to main (default) branch, move code to develop branch
- combine InputTextarea, InputSpeech and InputText into a single type of input
- README redo
  - how to make UIB workflows and example links
  - screenshots of UIB
- image input (for ipa)
  - example UI
- interrupt and queue features
  - using multiple instances, how should queue work? clientId adjustments...
- ws reconnect / error message overlay or toaster
- error handling of missing ckpt or lora
- errors should appear in a relevent place, eg ckpt
- more work on adjust weight with CTRL+UP or CTRL+DOWN

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
