---
title: Time
description: What is the Time package?
sidebar_position: 13
---

# Time package

## Introduction

An interface for implementing various delay functions related to time management.

## Breaking down the [Time Package](https://github.com/AdaCore/Ada_Drivers_Library/blob/master/hal/src/hal-time.ads) code step by step

- Delays Interface:

This interface represents a set of time-related delay functions that can be implemented for specific hardware or platforms.

- Any_Delays Access Type:

This access type allows for referencing objects of any type derived from the Delays interface.

- Delay_Microseconds Procedure:

This procedure is abstract, meaning it needs to be implemented by concrete types derived from the Delays interface.
It takes an instance of the Delays object (This) and an Us parameter, which is an integer representing the number of microseconds to delay.
The purpose of this procedure is to introduce a delay in microseconds. The actual implementation of the delay will depend on the specific hardware or platform.

- Delay_Milliseconds Procedure:

Similar to Delay_Microseconds, this procedure is abstract and takes an instance of the Delays object (This) and an Ms parameter representing the number of milliseconds to delay.
The purpose is to introduce a delay in milliseconds. The actual implementation will depend on the specific hardware or platform.

- Delay_Seconds Procedure:

Again, this procedure is abstract, and it takes an instance of the Delays object (This) and an S parameter representing the number of seconds to delay.
This procedure is intended for introducing a delay in seconds, and the implementation details will vary based on the underlying hardware or platform.

The primary purpose of this package is to provide a common interface for handling delays in microseconds, milliseconds, and seconds. By using this interface, you can write platform-independent code that relies on these delay functions, and the actual implementation can be tailored to the specific hardware or platform where the code is executed. The implementation of these delay procedures would involve low-level timing mechanisms or hardware-specific functionality to ensure accurate timing.




