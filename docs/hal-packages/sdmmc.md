---
title: SDMMC
description: What is the SDMMC?
sidebar_position: 12
---

# SDMMC

## Introduction


An SD (Secure Digital) memory card controller in a Hardware Abstraction Layer (HAL) is responsible for providing an abstraction layer between the software (such as the operating system or application layer) and the physical SD memory card hardware. The controller facilitates communication and management of SD memory cards, which are commonly used for storage in a variety of devices, including cameras, smartphones, embedded systems, and other portable electronics.

## Breaking down the [SDMMC](https://github.com/AdaCore/Ada_Drivers_Library/blob/master/hal/src/hal-sdmmc.adb) code step by step

- Send_Cmd Procedure:

This procedure takes as input an instance of an SDMMC_Driver'Class, a Cmd of type SD_Command, an Arg of type UInt32, and an out parameter Status of type SD_Error.

The purpose of this procedure is to send a command to the SD card. It appears to be a wrapper around another Send_Cmd procedure, which is not defined in this package.
Inside the procedure, it calls the undetermined Send_Cmd procedure with the provided Cmd_Desc for the given Cmd (which appears to be some kind of command description) and the Arg.
The result of this operation is stored in the Status variable, indicating the status of the command execution.

- Send_ACmd Procedure:

This procedure takes as input similar parameters as the Send_Cmd procedure, but it additionally requires an Rca (Relative Card Address), which is a 16-bit value.
The purpose of this procedure is to send an application command (App_Cmd) to the SD card. It first sends an App_Cmd with the provided Rca and waits for the response. If the response status is not OK, the procedure returns without sending the specified Cmd. If the response is OK, it sends the specific command (Cmd) with the provided Arg.

The procedure makes use of the Send_Cmd procedure, which is assumed to be part of the overall SDMMC controller functionality.

This package body provides an implementation for sending commands to an SD card via the SDMMC controller. It abstracts the low-level details of sending commands and handling responses. The actual implementation of the Send_Cmd procedure (outside of this package) and the Send_ACmd procedure should be defined in the corresponding SDMMC_Driver'Class to work with specific hardware and SD card communication protocols




