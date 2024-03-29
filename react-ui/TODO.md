# TODO

## Now

- update system (and uib workflows) to work with comfy ui workflow v0.4
- dungeon LCM needs to work, mode:4 is bypass
- dungeon lora finder, similar to ckpt finder (in case the user has folders in the lora folder)
- import / export uib workflows, can it be refactored into json only?

## Next

- loader spinner, interrupt and queue features
  - using multiple instances, how should queue work? clientId adjustments...
  - ws reconnect
- click image to zoom / carousel function

## Future

- workflow switcher (dungeon, example2, etc)
  - fastgen example?
  - alternative layouts abstraction?
- debug prompt / workflow checkbox
- add air-bnb
- code tidy up
  - fix all prop-types
  - fix linting
  - fix uik-kit warnings
- error handling of missing ckpt or lora
- save current formData to LS
  - reset to defaults
- pwa?
- README redo, how to make UIB workflows
- github CI build process
- image input (for ipa)
- video input (for animatediff)
- video output
- adjust weight with CTRL+UP or CTRL+DOWN

## Ideas

- swap component set
- interface builder?
