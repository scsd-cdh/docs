---
title: Flash
description: What is Flash?
sidebar_position: 8
---

# Flash

## Introduction

Flash memory retains data even when power is removed and is commonly used in microcontrollers, embedded systems, and other devices where persistent storage is needed.


## Breaking down the [Flash](https://github.com/AdaCore/Ada_Drivers_Library/blob/master/hal/src/hal-flash.ads) code step by step

- pragma Preelaborate;:

As in previous examples, this pragma indicates that the package is preelaborated, meaning that its subprograms (procedures and functions) are elaborated at the start of program execution.

- Flash_Memory Type:

Flash_Memory is defined as a limited interface type.
It represents an interface for interacting with flash memory devices.
Limited interfaces define a set of operations that types implementing the interface must provide.

- Any_Flash_Memory Type:

Any_Flash_Memory is an access type that allows for creating references to objects of any class derived from Flash_Memory'Class.

- Size Function:

Size is an abstract function that takes a Flash_Memory and returns the size of the flash memory in bytes.
It provides information about the capacity of the flash memory device.

- Is_Busy Function:

Is_Busy is an abstract function that takes a Flash_Memory and returns a boolean value indicating whether an erase or write operation is currently in progress.
It allows checking the operational status of the flash memory device.

- Memory_Region Record Type:

Memory_Region is a record type that defines a memory region with "From" and "To" fields, representing the start and end addresses of a memory range.

- Erasable_Region Function:

Erasable_Region is an abstract function that takes a Flash_Memory and a Memory_Region as input and returns a Memory_Region.
It calculates the minimum enclosing region that could be erased in the flash memory.

- Erase Procedure:

Erase is an abstract procedure that takes a Flash_Memory, a Memory_Region, and an output boolean Success.
It erases a region in the flash memory.
This operation transitions the memory into a busy state and should not be invoked when the device is already busy.

- Write Procedure:

Write is a procedure that takes a Flash_Memory, an Offset, an input Data array of 8-bit unsigned integers, and an output boolean Success.
It writes data to the flash memory at a specified offset.
The procedure mentions that specific memory models may have limitations depending on data size and offset, which can affect execution time. However, this procedure is not abstract and does not have a precondition regarding device busyness.

- Read Procedure:

Read is an abstract procedure that takes a Flash_Memory, an Offset, an output Data array, and an output boolean Success.
It reads bytes from the flash memory into the Data array, starting at the given offset.
This operation should not be invoked when the device is busy.

This package specification provides a set of interfaces, functions, and procedures for interacting with flash memory devices. It allows for operations such as reading, writing, erasing, and checking the status of the device. Users can implement specific flash memory drivers that adhere to this interface to work with various flash memory hardware configurations. The package abstracts the underlying details of flash memory operations, making it suitable for a hardware abstraction layer.




