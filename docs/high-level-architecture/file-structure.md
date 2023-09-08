---
title: File Structure
description: Definition of what an AstroCore project's file structure will contain.
---

# Introduction

:::danger WIP
This section is used for brainstorming and very-early designs. It will change during development.
:::

```
├── src/
|   ├── services/
|   |   ├── adcs/
|   |   ├── imaging/
|   |   ├── inference/
|   |   ├── communications/
|   ├── operations/
|   |   ├── commands/
|   |   |   ├── core/
|   |   |   ├── comms/
|   |   |   ├── adcs/
|   |   |   ├── eps/
|   |   ├── modes/
|   |   |   ├── initialization/
|   |   |   |   ├── initialization.adb
|   |   |   ├── idle/
|   |   |   |   ├── idle.adb
|   |   |   ├── detumbling/
|   |   |   |   ├── detumbling.adb
|   ├── utils/
|   ├── tests/
```