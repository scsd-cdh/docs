---
title: Touch Panels
description: What is the Touch Panels package?
sidebar_position: 14
---

# Tocuh Panels package

## Introduction

An interface for working with touch panels or touch-sensitive input devices.

## Breaking down the [Touch Panels Package](https://github.com/AdaCore/Ada_Drivers_Library/blob/master/hal/src/hal-touch_panel.ads) code step by step

- TP_Touch_State Record:

This record defines the touch state, including the X and Y coordinates of the touch and a weight (pressure or intensity of the touch). The values are of type Natural, which typically represents positive integers.

- Null_Touch_State Constant:

This constant initializes a touch state with all values set to zero, representing a null touch state.

- Swap_State Enumeration:

This defines an enumeration Swap_State with three possible values: Invert_X, Invert_Y, and Swap_XY. These values likely represent different transformations or configurations for the touch panel.

- Touch_Identifier Subtype:

This defines a subtype Touch_Identifier, which represents an identifier for touch points. It is limited to values in the range from 0 to 10.

- TP_State Array:

This array type TP_State is an array of touch states indexed by touch identifiers. It is used to store the touch state of multiple touch points.

- Touch_Panel_Device Interface:

This interface represents a touch panel device. It defines several abstract procedures for setting screen bounds, retrieving the number of active touch points, and getting touch point information.

- Any_Touch_Panel Access Type:

This access type allows for referencing objects of any type derived from the Touch_Panel_Device interface.

- Set_Bounds Procedure:

This abstract procedure is used to set the screen bounds for the touch panel device. It takes the device instance (This), the screen width, screen height, and a Swap parameter to specify transformation or configuration.

- Active_Touch_Points Function:

This abstract function retrieves the number of active touch points on the touch panel device.

- Get_Touch_Point Function:

This abstract function is used to retrieve the touch state of a specific touch point identified by Touch_Id.

- Get_All_Touch_Points Function:

This abstract function retrieves the touch state of all active touch points on the device.

- Private Section:

In the private section of the package, additional constants for Invert_X, Invert_Y, and Swap_XY are defined with specific binary values.

The package is to provide an abstract interface for interacting with touch panels or touch-sensitive input devices. The actual implementation of the procedures and the interpretation of the touch data would depend on the specific touch panel hardware and its driver. By using this interface, developers can write touch-sensitive applications that can work with various touch panel devices without being tied to specific hardware details.



