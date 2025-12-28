# Format

## Naming

All file name have to be **lowercase-with-dash**

To not make file name unnecessary long, see [prefixes](#prefixes)

File extensions: image `webp/png`, video `mp4`, metadata `json`

> Template

```
assets/
├ <cat>/
│ ├ <sub_cat>/
│ ├ ├ <title>.<png/mp4>
│ ├ ├ <title>.webp
│ ├ └ ...
│ └ ...
└ ...

data/
├ <cat>-<sub_cat>-<title>.json
└ ...
```

> Example

```
assets/illustration/background/sample.jpg
assets/illustration/background/sample.webp

data/illu-bg-sample.json
```

## Prefixes

- illustration `illu` / live2d `l2d`
  - background `bg`
  - character `char`
  - disc `disc`
    - element `aqua, ignis, terra, ventus, lux, umbra`
    - rarity (☆) `3, 4, 5`
- battle_stage `bat`
  - monolith_ascension `mono`
    - domain `battle, choice, trade, rival, boss`
- ui `ui`
  - in_game `game`
  - encyclopedia (guide) `guide`
- other `other`
