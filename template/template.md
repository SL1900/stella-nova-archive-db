# Properties

```
{
  "id": string,
  "type": string,
  "category": string,
  "sub-category": string[] | null,
  "title": string,
  "source": string,

  "meta": {
    "width": integer,
    "height": integer,
    "frames": integer | null,
    "version": string
  },

  "overlays": [
    {
      "id": string,
      "frame": { "s": integer, "e": integer } | null,
      "bounds": { "x": integer, "y": integer, "w": integer, "h": integer },
      "bounds-end": bounds | null,
      "text": string,
      "notes": string | null
    }, {
      ...
    }
  ]
}
```

## ID

Usually the same as file name.

## Type

`types: "image", "video"`

## Category

`types: "illustration", "live2D", "battle-stage", "UI", "other"`

## Sub-Category

- illustration / live2D
  - background
  - character
  - disc
    - element `types: "aqua", "ignis", "terra", "ventus", "lux", "umbra"`
    - rarity (☆) `types: 3, 4, 5`
- battle stage
  - monolith ascension
    - domain `types: "battle", "choice", "trade", "rival", "boss"`
- UI
  - in-game
  - encyclopedia (guide)

## Title

Title of the content. A good starting point to name [ID](#id)

## Source

A path from root to target directory.
`assets/<category>/<file>`

```
assets/
├ illustration/
├ live2D/
├ battle-stage/
├ UI/
└ other/
```

## Meta

Basic metadata for backend convenience

- `"width"` - full width of the content
- `"height"` - full height of the content
- `"frames"` - total frames of the content __(video only)__
- `"version"` - game version that the content was added to the game

## Overlays

Overlay part on the content to highlight Nova language text.

- `"id"` - unique id of an overlay
- `"frame"` - start/end frame when overlay applies __(video only)__
- `"bounds"`: bound of the overlay on the __image__, or start frame of the __video__
- `"bounds-end"`: bound of the overlay at end frame __(video only)__
- `"text"`: text content inside the overlay bound
- `"notes"`: _optional_ context addition
