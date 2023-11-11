---
title: Overview 
description: What do the HAL packages do?
sidebar_position: 1
---

# Overview 

## Introduction

Hardware Abstraction Layer (HAL): In the context of computer hardware and software, HAL can refer to a Hardware Abstraction Layer. It is a software layer that provides a consistent interface for interacting with hardware components, allowing higher-level software to work with various hardware configurations without needing to be modified for each specific hardware setup. HALs are commonly used in operating systems and drivers to abstract the hardware details and provide a uniform interface to the rest of the system.

## Keywords for implementing packages

Keyword for implementing packages to use in ADA : `with`

Keyword for implementing packages so their contents are visible (no need to put package name for each use of the function) : `use`

## [HAL / src ](https://github.com/AdaCore/Ada_Drivers_Library/tree/master/hal/src)

This Github repository contains the basic packages necessary for:

- [Opening, closing, reading ; Files ](https://github.com/AdaCore/Ada_Drivers_Library/blob/master/hal/src/hal-filesystem.ads)
- Delays (microseconds, milliseconds, seconds
- Real time (date, time)
- [UART](https://github.com/AdaCore/Ada_Drivers_Library/blob/master/hal/src/hal-uart.ads) (Provides functions for Receiving & Transmiting data for UART)
- [SPI](https://github.com/AdaCore/Ada_Drivers_Library/blob/master/hal/src/hal-spi.ads) (Provides functions for Receiving & Transmitting data for SPI)




