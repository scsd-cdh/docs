---
title: File System
description: What is the File System?
sidebar_position: 7
---

# File System

## Introduction

A file system is a method of organizing and storing files on a storage medium, such as a hard drive, solid-state drive, or other storage devices. The file system manages how data is stored, retrieved, and organized on the storage medium. In the context of a hardware abstraction layer (HAL), which abstracts low-level hardware details, a file system serves several purposes:

- Abstraction of Storage Devices:

The file system abstracts the details of how data is physically stored on a storage device. The HAL interacts with the file system to perform higher-level operations such as reading and writing files without needing to know the intricacies of the underlying hardware.

- Logical Organization of Data:

File systems provide a logical organization of data into files and directories. This logical structure allows users and applications to organize and access data in a hierarchical manner.

- Access Control and Permissions:

File systems often include mechanisms for access control and permissions. This means that the file system determines who can read, write, or execute specific files or directories. The HAL may interact with these mechanisms to enforce security policies.

- File Metadata:

File systems store metadata about each file, including attributes such as file size, creation date, modification date, and file type. The HAL may use this metadata for various purposes, such as optimizing file access or providing information to higher-level software layers.

- Error Handling and Recovery:

File systems include mechanisms for error detection and recovery. The HAL may interact with these mechanisms to handle errors at the hardware level, ensuring data integrity and reliability.

- Caching and Buffering:

Some file systems implement caching and buffering mechanisms to improve performance. The HAL may work with these mechanisms to optimize data transfer between the storage medium and the system's memory.

- Virtual File Systems:

In some cases, the file system may provide a virtualization layer, allowing the HAL to access different types of storage devices in a uniform way. This can include various types of storage media, network-attached storage, or even virtual file systems.

## Breaking down the [File System](https://github.com/AdaCore/Ada_Drivers_Library/blob/master/hal/src/hal-filesystem.ads) code step by step

- pragma Preelaborate;:

As in previous examples, this pragma indicates that the package is preelaborated, meaning that its subprograms (procedures and functions) are elaborated at the start of program execution.

- Status_Code Enumeration:

Status_Code is an enumeration type that defines various status codes for filesystem operations.
Possible values include success codes (OK) and various error codes representing different filesystem-related issues.

- File_Mode Enumeration:

File_Mode is an enumeration type that represents different file access modes.
Possible values include Read_Only, Write_Only, and Read_Write, which correspond to read-only, write-only, and read-write file access, respectively.

- Seek_Mode Enumeration:

Seek_Mode is an enumeration type that represents different seek modes for file positioning.
Possible values include From_Start, From_End, Forward, and Backward, which determine how to position within a file during seek operations.

- File_Size Type:

File_Size is defined as a new subtype of HAL.UInt64, representing file sizes.
It is a 64-bit type, allowing for handling large file sizes without limitation to 32-bit values.

- Filesystem_Driver Type:

Filesystem_Driver is defined as a limited interface type.
It appears to be a generic interface for filesystem driver functionality.

- Any_Filesystem_Driver Type:

Any_Filesystem_Driver is an access type that allows for creating references to objects of any class derived from Filesystem_Driver'Class.


- Directory_Handle, File_Handle, and Node_Handle Types:

These types represent handles to directories, files, and filesystem nodes, respectively.
Each of them is defined as a limited interface type, allowing for common operations on these objects.

- Various Functions and Procedures:

The package defines a wide range of abstract functions and procedures for performing filesystem operations. These include opening and managing directory handles, file handles, and node handles, as well as reading and writing data, seeking within files, and closing handles.
Operations are provided for interacting with directories, files, and nodes, and there are various error codes to handle different scenarios.

- Various Functions and Procedures for Filesystem Drivers:

The package also includes functions and procedures for handling filesystem driver operations, such as opening directory handles, creating files, and removing directories.
Additionally, there are operations for handling the root node and reading directory entries.

This package specification provides a comprehensive set of types, enumerations, and abstract procedures for handling filesystem operations in a hardware abstraction layer. It allows for the development of platform-independent filesystem drivers and operations while providing various error codes to handle different filesystem-related issues. Specific implementations of the interfaces defined in this package are expected to be provided for different filesystem drivers and filesystem access methods.



