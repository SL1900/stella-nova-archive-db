# Properties

```
{
  "id": string,
  "type": string,
  "category": string,
  "sub-category": string | null,
  "title": string,
  "source": string,

  "meta": {
    "width": integer,
    "height": integer
  },

  "overlays": [
    {
      "id": string,
      "frames": { "s": integer, "e": integer } | null,
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

# Categories

- illustration
- L2D
- disc
  - rarity `types: 3☆, 4☆, 5☆`
  - element `types: aqua, ignis, terra, ventus, lux, umbra`
- battle stage
  - monolith ascension
    - domain `types: battle, choice, trade, rival's, boss's`
- UI
  - in-game
  - encyclopedia (guide)
- other
