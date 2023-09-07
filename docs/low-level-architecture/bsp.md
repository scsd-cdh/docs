---
title: Board Support Packages
description: Implementation of BSPs.
sidebar_position: 2
---

# Board Support Packages (BSP)

## Introduction

The Board Support Package (BSP) is a crate which should provide the following drivers:

1. An HAL implementation for the MCU.
2. Middleware implementation.
3. Implementation of drivers for various components such as sensors, ICs, analog signals, and more that are found on the board.

This crate will be added as a dependency to an AstroCore project (or any other project which could benefit from this implementation), and should supply an interface for all of the low-level implementations that will make it simple and intuitive to build a functional application.

The board support package will use the HAL implementation to implement the drivers for the components. As an example, to write the drivers for a NOR Flash chip which uses SPI as its serial communication protocol. The board support package will use the drivers supplied by the `HAL.SPI` package. However, inside the AstroCore application. There should be a simple interface to the NOR Flash. Such package could look like this:

```ada
-- Provides the implementation for the SPI protocol.
with HAL.SPI;

package Components.NOR_Flash

    -- Constants for NOR Flash commands
    Flash_Write_Enable : constant Positive := 0x06;
    Flash_Write_Disable : constant Positive := 0x04;
    Flash_Read : constant Positive := 0x03;
    Flash_Write : constant Positive := 0x02;
    Flash_Erase_Sector : constant Positive := 0x20;
    Flash_Erase_Block : constant Positive := 0xD8;

    -- Subprograms for NOR Flash operations
    procedure Initialize;
    procedure Read_Data(address: Positive; data: out Unsigned_8_Array);
    procedure Write_Data(address: Positive; data: Unsigned_8_Array);
    procedure Erase_Sector(sector_address: Positive);
    procedure Erase_Block(block_address: Positive);

end Components.NOR_Flash;
```

For the implementation of each of these functions, the functions provided by the HAL.SPI package would be used.


## Creating a Board Support Package
*To do*
