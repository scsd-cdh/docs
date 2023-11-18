---
title: I2C
description: What is the I2C?
sidebar_position: 10
---

# I2C

## Introduction

Intended for interacting with I2C (Inter-Integrated Circuit) devices in a hardware abstraction layer (HAL) context. I2C is a popular communication protocol for connecting peripherals and microcontrollers.

## Breaking down the [I2C](https://github.com/AdaCore/Ada_Drivers_Library/blob/master/hal/src/hal-i2c.ads) code step by step

- pragma Preelaborate;:

As in previous examples, this pragma indicates that the package is preelaborated, meaning that its subprograms (procedures and functions) are elaborated at the start of program execution.

- I2C_Status Enumeration:

I2C_Status is an enumeration type that represents the possible status of I2C communication. Status values include Ok, Err_Error, Err_Timeout, and Busy.
These status values are used to indicate the outcome of I2C operations.

- I2C_Data Subtype:

I2C_Data is defined as a subtype of UInt8_Array, representing an array of 8-bit unsigned integers. It is used for transferring data over the I2C bus.

- I2C_Memory_Address_Size Enumeration:

I2C_Memory_Address_Size is an enumeration type that represents the size of memory addresses used in I2C communication. It can be either 8 bits or 16 bits.

- I2C_Address Subtype:

I2C_Address is defined as a subtype of UInt10, representing a 10-bit I2C device address.
It is used to address specific I2C devices on the bus.

- I2C_Port Type:

I2C_Port is defined as a limited interface type, representing an interface for interacting with an I2C port.
Limited interfaces define a set of operations that types implementing the interface must provide.

- Any_I2C_Port Type:

Any_I2C_Port is an access type that allows for creating references to objects of any class derived from I2C_Port'Class.

- Various Procedures:

The package defines a set of abstract procedures for performing I2C operations:

    Master_Transmit: Used for master device to transmit data to an I2C device.

    Master_Receive: Used for master device to receive data from an I2C device.

    Mem_Write: Used for writing data to a specific memory address on an I2C device.

    Mem_Read: Used for reading data from a specific memory address on an I2C device.

These procedures involve specifying the I2C address, data to transmit or receive, memory address size, and handling timeouts and status.

The package specification provides a set of interfaces and procedures for interacting with I2C devices in a hardware abstraction layer. It allows for performing common I2C operations such as transmitting and receiving data and reading/writing data to specific memory addresses on I2C devices. Users can implement specific I2C driver modules that adhere to this interface to work with different I2C devices and microcontroller configurations. The package abstracts the low-level details of I2C communication, making it suitable for a hardware abstraction layer.



