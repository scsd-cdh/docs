---
title: Configuration Crate
description: Implementation of the configuration crate.
sidebar_position: 5
---

# Configuration Crate

## Introduction

The configuration crate contains all of the configuration variables for the HAL project. This includes:
- Which MCU bindings to use (the `mcu` variable)
- Which Ada Runtime to use (the `runtime` variable)
- Anything other configuration that might be relevant to the MCU

These variables are stored in the `alire.toml` file contained within the crate. These variables will be made available to all other crates with a dependency on the `_config` crate.

## Why the need for a configuration crate?

As previously mentioned, the SVD bindings crate might not always be present. This means that without a dedicated configuration crate, some projects would have the variables defined in the HAL crate, and others in the SVD crate. Having a separate crate for the configuration variables will allow us to make the structure more consistent across all projects.

## Configuration Example

This is an example using the contents of the `alire.toml` from the `samv71_config` crate.

```
[configuration.variables]
mcu = { type = "Enum", values = ["samv71q21b"], default = "samv71q21b" }
runtime = { type = "Enum", values = ["embedded", "light", "light_tasking"], default = "light_tasking" }
```