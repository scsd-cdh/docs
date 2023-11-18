---
title: Framebuffer
description: What is the Framebuffer?
sidebar_position: 9
---

# Framebuffer

## Introduction

The framebuffer in a Hardware Abstraction Layer (HAL) is a region of memory that is dedicated to holding the pixel data representing the content of a graphical display. It acts as a buffer between the graphics hardware and the software that generates the graphical user interface or other graphical content.

## Breaking down the [Framebuffer](https://github.com/AdaCore/Ada_Drivers_Library/blob/master/hal/src/hal-framebuffer.ads) code step by step


- pragma Preelaborate;:

As in previous examples, this pragma indicates that the package is preelaborated, meaning that its subprograms (procedures and functions) are elaborated at the start of program execution.

- FB_Color_Mode Subtype:

FB_Color_Mode is defined as a subtype of HAL.Bitmap.Bitmap_Color_Mode.
It represents different color modes supported by the frame buffer, such as ARGB_8888.
This indicates the color depth and encoding format for the frame buffer.

- Display_Orientation Enumeration:

Display_Orientation is an enumeration type that represents the possible display orientations, including Default, Landscape, and Portrait.
These values define how the display is oriented in terms of portrait or landscape mode.

- Wait_Mode Enumeration:

Wait_Mode is an enumeration type that represents different wait modes for frame buffer operations, such as Polling or Interrupt.
It defines how the system waits for frame buffer actions to complete.

- Frame_Buffer_Display Type:

Frame_Buffer_Display is defined as a limited interface type.
It represents an interface for interacting with a frame buffer display.
Limited interfaces define a set of operations that types implementing the interface must provide.

- Any_Frame_Buffer_Display Type:

Any_Frame_Buffer_Display is an access type that allows for creating references to objects of any class derived from Frame_Buffer_Display'Class.

- Various Functions and Procedures:

The package defines a set of abstract functions and procedures for interacting with frame buffer displays. These include operations for managing layers, setting display orientation and wait mode, checking initialization status, obtaining dimensions, updating layers, managing color modes, accessing hidden buffers, and more.

Some procedures allow the user to perform actions such as setting the background color and initializing display layers with specific attributes.

The package abstracts the underlying details of frame buffer operations, making it suitable for a hardware abstraction layer in the context of graphical displays.

Specification provides a set of interfaces, functions, and procedures for interacting with frame buffer displays in a hardware abstraction layer. It allows for various operations related to display management, layer handling, orientation, and color modes. Users can implement specific frame buffer display drivers that adhere to this interface to work with different display hardware configurations. The package abstracts many aspects of frame buffer management and provides flexibility for handling graphical output.



