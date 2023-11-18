---
title: DSI 
description: What is DSI?
sidebar_position: 6
---

# DSI

## Introduction

The Display Serial Interface (DSI) is a standard for high-speed, serial communication between a host processor and a display module. It is well-suited for portable electronic devices that require efficient, high-resolution display capabilities with considerations for power consumption and cable simplicity.


## Breaking down the [DSI](https://github.com/AdaCore/Ada_Drivers_Library/blob/master/hal/src/hal-dsi.ads) code step by step

- pragma Preelaborate;:

As in previous examples, this pragma indicates that the package is preelaborated, meaning that its subprograms (procedures and functions) are elaborated at the start of program execution.

- DSI_Virtual_Channel_ID Subtype:

DSI_Virtual_Channel_ID is defined as a subtype of UInt2.
It represents a virtual channel identifier for the DSI.

- DSI_Data Type:

DSI_Data is an array type of 8-bit unsigned integers (UInt8).
It is used to represent data transmitted via the DSI.

- DSI_Pkt_Data_Type Enumeration:

DSI_Pkt_Data_Type is an enumeration type that represents different data packet types for DSI communication.
The enumeration includes various packet types, such as short writes, long writes, and reads, with different numbers of parameters.

- DSI_Short_Write_Packet_Data_Type Subtype:

DSI_Short_Write_Packet_Data_Type is defined as a subtype of DSI_Pkt_Data_Type.
It narrows down the range of packet types to only include those related to short writes (with fewer parameters).

- DSI_Long_Write_Packet_Data_Type Subtype:

DSI_Long_Write_Packet_Data_Type is another subtype of DSI_Pkt_Data_Type.
It narrows down the range of packet types to only include those related to long writes.

- DSI_Port Type:

DSI_Port is defined as a limited interface type.
It appears to be a generic interface for DSI communication.

- Any_DSI_Port Type:

Any_DSI_Port is an access type that allows for creating references to objects of any class derived from DSI_Port'Class.

- DSI_Short_Write Procedure:

DSI_Short_Write is an abstract procedure that takes a DSI_Port, a DSSI_Virtual_Channel_ID, a Mode representing the packet type, and two parameters (Param1 and Param2 of UInt8).
This procedure is used to perform a short write operation on the DSI interface.
The implementation of this procedure is expected to be provided by types that implement the DSI_Port interface.

- DSI_Long_Write Procedure:

DSI_Long_Write is another abstract procedure that takes a DSI_Port, a DSI_Virtual_Channel_ID, a Mode representing the packet type, a single Param1 of UInt8, and an array Parameters of DSI_Data.
This procedure is used to perform a long write operation on the DSI interface.
Like the previous procedure, its implementation is expected to be provided by types that implement the DSI_Port interface.

This package specification defines a set of types, subtypes, enumerations, and abstract procedures for handling DSI communication. The DSI interface is designed to handle various packet types with different parameters, allowing for communication with displays or other devices that use the DSI protocol. Specific implementations of the DSI_Port interface are expected to provide the functionality for DSI communication in a specific hardware context.






