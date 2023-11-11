---
title: SPI 
description: What is SPI?
sidebar_position: 3
---

# SPI 

## Introduction

Serial Peripheral Interface (SPI) is an interface bus commonly used to send data between microcontrollers and small peripherals such as shift registers, sensors, and SD cards. It uses separate clock and data lines, along with a select line to choose the device you wish to talk to.
SPI works in a slightly different manner. It's a "synchronous" data bus, which means that it uses separate lines for data and a "clock" that keeps both sides in perfect sync.


For more info go to [SPI info](https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi/all)


## Breaking down the [SPI](https://github.com/AdaCore/Ada_Drivers_Library/blob/master/hal/src/hal-spi.ads) code step by step

- Pragma Preelaborate:

This pragma indicates that the package does not need to be elaborated explicitly before it can be used. In Ada, elaboration refers to the process of initializing data structures and performing any necessary setup before a package can be used. In this case, the pragma suggests that the package does not require explicit initialization and can be used as-is.

- Enumeration Types (SPI_Status and SPI_Data_Size):

SPI_Status is an enumeration type that defines four possible values: Ok, Err_Error, Err_Timeout, and Busy. These values likely represent different status conditions that can occur during SPI communication.
SPI_Data_Size is another enumeration type that defines two possible values: Data_Size_8b and Data_Size_16b. These values probably indicate the size of data that can be transmitted or received (8 bits or 16 bits).

- Array Types (SPI_Data_8b and SPI_Data_16b):

SPI_Data_8b and SPI_Data_16b are array types that are parameterized by Natural (a non-negative integer type).
SPI_Data_8b likely represents an array of 8-bit data values.
SPI_Data_16b likely represents an array of 16-bit data values.

- Interface Types (SPI_Port and Any_SPI_Port):

SPI_Port is an interface type. It defines a contract for how objects implementing this interface should behave. It appears to be the interface for interacting with SPI hardware.
Any_SPI_Port is an access type that allows creating references to any implementation of SPI_Port.

- Abstract Procedures (Transmit and Receive):

The package defines two overloaded procedures named Transmit and two overloaded procedures named Receive. The overloading is based on the size of data being transmitted or received (8 bits or 16 bits).
These procedures are marked as abstract, which means that they do not have an implementation in this package. Instead, any type implementing the SPI_Port interface must provide its own implementations of these procedures.

The procedures take various parameters:

This: An in out parameter representing the SPI port to use.
Data: The data to be transmitted (Transmit) or received (Receive).
Status: An out parameter to store the status of the operation.
Timeout: An optional parameter specifying a timeout value in milliseconds (default is 1000 ms).

- **Preconditions (Pre'Class):

Each procedure has a precondition defined using Pre'Class. Preconditions specify conditions that must be satisfied before the procedure can be called.
The preconditions check that the Data_Size of the SPI port (This) matches the expected data size for the operation (either 8 bits or 16 bits).


## Example of using the HAL SPI in Ada

```ada
with HAL.SPI;

-- Create an instance of your concrete SPI implementation
MySPI : HAL.SPI.Any_SPI_Port := new MySPIImplementation;

-- Prepare data to send
Data : HAL.SPI.SPI_Data_8b := (1, 2, 3);  -- Sample data

-- Send the data
Status : HAL.SPI.SPI_Status;
MySPI.Transmit(Data => Data, Status => Status);

-- Check the status to handle any errors
if Status = HAL.SPI.Ok then
   -- Data sent successfully
else
   -- Handle the error
end if;

```

In the above example:

This code sets up an SPI transmission, sends data using a specific SPI implementation, and checks the status to determine whether the transmission was successful. If successful, it proceeds with an optional success action; otherwise, it suggests handling errors.


