---
title: Real Time Clock
description: What is the Real Time Clock?
sidebar_position: 11
---

# Real Time Clock

## Introduction

Working with real-time clock (RTC) devices in a hardware abstraction layer (HAL) context. RTCs are used for keeping track of the current time and date.

## Breaking down the [Real Time Clock](https://github.com/AdaCore/Ada_Drivers_Library/blob/master/hal/src/hal-real_time_clock.ads) code step by step


- pragma Preelaborate;:

As in previous examples, this pragma indicates that the package is preelaborated, meaning that its subprograms (procedures and functions) are elaborated at the start of program execution.

- Time and Date Types:

The package defines several custom types for representing time and date components:

    RTC_Hour, RTC_Minute, and RTC_Second are types for hours, minutes, and seconds. They are defined using modular arithmetic to restrict values within valid ranges (e.g., 0-23 for hours).

    RTC_Time is a record type that represents a time with hours, minutes, and seconds.

    RTC_Month is an enumeration type for months of the year.

    RTC_Day_Of_Week is an enumeration type for days of the week.

    RTC_Day is a subtype representing days of the month within the range of 1-31.

    RTC_Year is a subtype representing the year within the range of 00-99.

    RTC_Date is a record type that combines the day of the week, day, month, and year to represent a complete date.

- Enumeration Mapping:

The code provides mapping for enumeration values to integers using the for statements. This allows for assigning numeric values to month and day of the week names.

- RTC_Device Type:

RTC_Device is defined as a limited interface type, representing an interface for interacting with an RTC device.
Limited interfaces define a set of operations that types implementing the interface must provide.

- Any_RTC_Device Type:

Any_RTC_Device is an access type that allows for creating references to objects of any class derived from RTC_Device'Class.

- Procedures and Functions:

The package defines a set of abstract procedures and functions for interacting with RTC devices:

    Set: This procedure is used to set the time and date on the RTC device. It takes both time and date values as parameters.

    Get: This procedure is used to retrieve the current time and date from the RTC device. It ensures that time and date values are coherent.

    Get_Time: This function retrieves the current time from the RTC device and returns it as an RTC_Time value.

    Get_Date: This function retrieves the current date from the RTC device and returns it as an RTC_Date value.

The package specification provides a set of data types, interfaces, procedures, and functions for interacting with RTC devices in a hardware abstraction layer. It allows for setting, getting, and managing the current time and date on RTC devices. Users can implement specific RTC device drivers that adhere to this interface to work with various RTC devices and microcontroller configurations. The package abstracts the low-level details of RTC management, making it suitable for a hardware abstraction layer.




