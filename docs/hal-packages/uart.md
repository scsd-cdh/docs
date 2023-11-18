---
title: UART 
description: What is UART?
sidebar_position: 3
---

# UART 

## Introduction

UART, or universal asynchronous receiver-transmitter, is one of the most used device-to-device communication protocols.
The transmitting UART is connected to a controlling data bus that sends data in a parallel form. From this, the data will now be transmitted on the transmission line (wire) serially, bit by bit, to the receiving UART. This, in turn, will convert the serial data into parallel for the receiving device.

For more info go to [UART info](https://www.analog.com/en/analog-dialogue/articles/uart-a-hardware-communication-protocol.html)


## Breaking down the [UART](https://github.com/AdaCore/Ada_Drivers_Library/blob/master/hal/src/hal-uart.ads) code step by step

- Package HAL.UART:

This package defines a module or namespace for UART-related functionality in a HAL context.

- pragma Preelaborate;:

This pragma indicates that the package is preelaborated, which means that its subprograms (procedures and functions) are elaborated at the start of the program execution.

- UART_Status Enumeration:

UART_Status is an enumeration type that defines different status codes for UART communication.
Possible values include Ok, Err_Error, Err_Timeout, and Busy.

- UART_Data_Size Enumeration:

UART_Data_Size is another enumeration type that represents the data size used in UART communication.
Possible values include Data_Size_8b (8 bits) and Data_Size_9b (9 bits).

- UART_Data_8b and UART_Data_9b Types:

These are array types representing UART data.
UART_Data_8b represents an array of 8-bit unsigned integers.
UART_Data_9b represents an array of 9-bit unsigned integers.
The types are defined as arrays of natural ranges, which allows for dynamic sizing.

- UART_Port Type:

UART_Port is defined as a limited interface type. It appears to be a generic interface for UART communication.

- Any_UART_Port Type:

Any_UART_Port is an access type to objects of any class derived from UART_Port. It allows for creating references to objects of different UART port implementations.

- Data_Size Function:

Data_Size is an abstract function that takes a UART_Port as input and returns the UART_Data_Size associated with the port.
It is used to determine the data size supported by a specific UART port.

- Transmit Procedures:

There are two overloaded Transmit procedures.
These procedures are used for transmitting UART data.
They take the UART port (This), data to be transmitted, a status variable, and an optional timeout as input.
The Transmit procedures are abstract, indicating that they must be implemented by derived types.
There are preconditions specified using Pre'Class to ensure that the data size of the port matches the size of the data being transmitted (8 bits or 9 bits).

- Receive Procedures:

Similar to Transmit, there are two overloaded Receive procedures.
These procedures are used for receiving UART data.
They take the UART port (This), a variable to store received data, a status variable, and an optional timeout as input.
Like Transmit, the Receive procedures are abstract and have preconditions regarding the data size of the port.

## Example of using the HAL UART in Ada

```ada
with HAL.UART; -- Import the UART package

procedure SendDataToUART is
MyUART : HAL.UART.Any_UART_Port; -- Declare an instance of UART_Port
DataToSend : HAL.UART.UART_Data_8b := (1, 2, 3, 4); -- Data to send
Status : HAL.UART.UART_Status;
begin
-- Initialize MyUART with a specific UART port, if available.
-- For this example, let's assume you have a specific UART port instance.

-- Now, send data through the UART port
HAL.UART.Transmit(MyUART, DataToSend, Status);

-- Check the status to see if the transmission was successful
case Status is
when HAL.UART.Ok =>
-- Transmission was successful
null;
when HAL.UART.Err_Error =>
-- There was an error
null;
when HAL.UART.Err_Timeout =>
-- Timeout occurred
null;
when HAL.UART.Busy =>
-- UART port is busy
null;
end case;
end SendDataToUART;
```

In the above example:

HAL.UART.Any_UART_Port is a type that can be used to declare a UART port instance. You would need to initialize MyUART with a specific UART port instance that you have access to.

DataToSend is the data you want to transmit through the UART port.

The HAL.UART.Transmit procedure is used to send the data through the UART port. The Status variable will contain the status of the transmission after the procedure call.

You can then check the Status to determine if the transmission was successful or if there were any errors or timeouts.



