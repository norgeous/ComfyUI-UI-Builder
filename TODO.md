# TODO

## Now

- image grid is broken, overflowing
- interrupt prompt doesn't work in dev mode (connect to same address as ws)
- range input's dual controls should step up / down, not go to max / min
- pressing escape when in fullscreen does not unfullscreen the html element
- style the range slider correctly on chrome
- style the progress bar correctly

## known bugs

- seed > randomise checkbox doesnt randomise
- theme switching is not working inside of storybook
- various problems with speech capture
  - fix how words are appended into prompt
    - currently it just overrides the entire value, but ideally the last word said is appended into the exisiting value
    - how to handle when utterances are updated?
- up and down arrows for prompt weights are shown, but do nothing
- ethnic bias broken in comfy dungeon vs original implimentation, use a PRNG based on seed to select one (or two) from the list
- keyboard a11y outlines are broken (broken during retheme work)
- rescale CFG does not activate?
- is the websocket needlessly refreshing when switching workflows?

## Next

- image input (for ipa)
  - example UI
- more work on adjust weight with CTRL+UP or CTRL+DOWN
- make an adjustable limit for tail, separate from "speech" entirely + how to do UI for this?
- combine InputTextarea, InputSpeech and InputText into a single type of input
- interrupt and queue features
  - using multiple instances, how should queue work? clientId adjustments...

## Future

- url routing, so can link to workflows directly in readme
- README redo / docs
  - how to make UIB workflows and example links
  - screenshots of UIB
- ws reconnect / error message overlay or toaster
- error handling of missing ckpt or lora
- errors should appear in a relevent place, eg ckpt
- storybook mocks
  - mock for comfyui websocket
  - mock images for image grid component
- CI issues
  - add job summaries for compose and deploy jobs
  - needs to be checked more if CI is working
  - probs doesnt handle lint failure properly
  - smaller job summaries
  - versioning
- save current formData to LS
  - reset all to default button
- pwa?
- video input (for animatediff)
- video output
- add lint staged + husky
- pm2 for single "dev" command

## Ideas

- choose component set / layout in ui config, alternative layouts abstraction
- interface builder (with UI for building UIs)
- more UIs
  - ipadapter example
  - differential diffusion inpainting example
  - animatediff example
