---
title: Middleware
description: Implementation of the middleware.
sidebar_position: 5
---

# Middleware

## Introduction

The middleware is the implementation for things such as the filesystem, communication protocols, messaging systems, sensor fusion, encryption, etc... These may or may not be part of the BSP crate as many BSPs will probably need to implement the same. However, the BSP should provide the configuration on how to use the middleware.

As an example, should the filesystem be mounted on the internal flash storage of the MCU, or should it be mounted on an external SRAM chip or SD card?

These are questions that will need to be asked when we get closer to completing the implementation of the BSPs.

We should decide whether we want to bundle every middleware up in one crate (e.g: `astrocore_middleware`), or if we want to separate them and include them all individually (e.g: `astrocore_fat` or `astrocore_libcsp`).