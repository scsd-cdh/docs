---
title: SVD Bindings
description: Implementation of SVD Bindings.
sidebar_position: 4
---

The SVD Bindings is a crate which provides Ada bindings generated from CMSIS-SVD descriptions for ARM Cortex-M MCUs. It is a crate which is optional, meaning instead of creating drivers from the SVD bindings, it is possible to implement the HAL by linking a vendor-specific library which already implements the functionality for each drivers. As an example, Microchip provides the Atmel Software Framework 4 (ASF4), which we could link to our crate and call the functions that are provided by the framework. However, to streamline the process, we can choose to implement these drivers ourselves. This way whenever we need to add support to implement support for a new MCU, there won't be a need to learn a brand new framework everytime, we can just do the same process for each MCUs no matter who the vendor is. Starting from scratch however would be a very big undertaking which would require a lot of research and refering to the MCU's users guide which are typically very large documents that are easy to get lost in.

## CMSIS-SVD

Relying on CMSIS-SVD has the following benefits:

- Consistency between the header files and what is displayed by the debugger.
- Detailed information about peripherals, registers, fields and bit values.
- Detailed information about the interrupts.
- Improved software development efficiency.


## svd2ada

### What is it?

It is an open-source program which takes in a CMSIS-SVD definition and outputs .ads files containing the necessary types and packages to implement the drivers. It can be found in [this repository](https://github.com/AdaCore/svd2ada).

### Where can I get CMSIS-SVD files?

For most MCUs, you will be able to find the SVD file within the CMSIS-Pack for the MCU you are implementing the drivers for [here](https://keil.arm.com/packs).

### How can I use svd2ada?

Here is an example of how to generate the files using svd2ada:

```bash
svd2ada \                                   # The command-line tool
    ../svd/ATSAMV71Q21B.svd \               # The input SVD file
    --boolean \                             # Represent single-bit fields as Booleans
    -o src \                                # Output directory
    -p SAM_SVD \                            # The root package name for the generated spec hierarchy
    --base-types-package HAL \              # Use base types from the HAL package
    --gen-uint-always \                     # Generate UInt* for base types; do not use the Bit and Byte variants
```