# TODO

## Known Bugs

- seed > randomise dice icon doesnt randomise on generation or autogen
- interrupt prompt doesn't work in dev mode (connect to same address as ws)
- the websocket is needlessly refreshing when switching workflows. pyramid order
- comfy dungeon: ethnic bias broken vs original implimentation, use a PRNG based on seed to select one (or two) from the list
- ImageGrid: stops listening to window resize (?) after hitting generate again
- theme switching is not working inside of storybook
- rescale CFG does not activate?

## Now

## Next

- interrupt and queue features (styling 50% done already)
  - using multiple instances, how should queue work? clientId adjustments...
- autogen should fire when any form field changes and the queue is empty
- combine InputTextarea, InputSpeech and InputText into a single type of input
  - up and down arrows for prompt weights are shown, but do nothing
    - more work on adjust weight with CTRL+UP or CTRL+DOWN
  - various problems with speech capture
    - make an adjustable limit for tail, separate from "speech" entirely + how to do UI for this?
    - fix how words are appended into prompt
      - currently it just overrides the entire value, but ideally the last word said is appended into the exisiting value
      - how to handle when utterances are updated?

## Future

- preview "completed" prompt in sidebar?
- image input (for ipa)
  - example UI
- storybook mocks
  - mock for comfyui websocket
  - mock images for image grid component, so we can remove storycap skip parameter on image grid stories
- ws reconnect / error message overlay or toaster
- ImageGrid: show spinner while images are loading
- error handling of missing ckpt or lora
- errors should appear in a relevent place, eg ckpt
- CI issues
  - separate out commiting storycaps job (its kindof hidden)
  - separate out `npm outdated` job, it can run in parallel with lint, etc
  - delete preview job also runs the release by accident
  - needs to be checked more if CI is working
    - probs doesnt handle lint failure properly
  - add job summaries for compose and deploy jobs
  - smaller job summaries
  - versioning
  - using github releases?
- save current formData to LS?
  - reset all to default button?
- pwa
- video input and output (for animatediff)
- pm2 for single "dev" command
- make SB a11y tests also test dark mode
- url routing, so can link to workflows directly in readme
- README redo / docs
  - how to make UIB workflows and example links
  - more screenshots of UIB
- add lint staged + husky

## Ideas

- choose component set / layout in ui config, alternative layouts abstraction
- interface builder (with UI for building UIs)
- more UIs
  - ipadapter example
  - differential diffusion inpainting example
  - animatediff example
  - SD3M example
