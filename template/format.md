# Format

## Naming

All file name have to be **lowercase-with-dash**

To not make file name unnecessary long, see [prefixes](#prefixes)

File extensions: image `webp/jpg`, video `mp4`, metadata `json`

> Template

```
assets/
├ <cat>/
│ ├ <sub_cat>-<title>.<jpg/mp4>
│ ├ <sub_cat>-<title>.<webp>
│ └ ...
└ ...

data/
├ <cat>-<sub_cat>-<title>.json
└ ...
```

> Example

```
assets/illustration/bg-sample.jpg
assets/illustration/bg-sample.webp

data/illu-bg-sample.json
```

## Prefixes

- illustration `illu` / live2D `l2d`
  - background `bg`
  - character `char`
  - disc `disc`
    - element `aqua, ignis, terra, ventus, lux, umbra`
    - rarity (☆) `3, 4, 5`
- battle stage `bat`
  - monolith ascension `mono`
    - domain `battle, choice, trade, rival, boss`
- UI `ui`
  - in-game `game`
  - encyclopedia (guide) `guide`
- other `other`
