---
title: GPIO
description: What is the GPIO?
sidebar_position: 2
---

# GPIO

## Introduction

GPIO, which stands for General-Purpose Input/Output, is a versatile feature found in many microcontrollers, embedded systems, and hardware platforms. In the context of a Hardware Abstraction Layer (HAL), GPIO is used to abstract and provide a standardized interface for interacting with the general-purpose digital input and output pins on a device. These pins can be configured as inputs or outputs and are used for a variety of purposes.

## Breaking down the [GPIO](https://github.com/AdaCore/Ada_Drivers_Library/blob/master/hal/src/hal-gpio.ads) code step by step

- pragma Preelaborate;:

As in previous examples, this pragma indicates that the package is preelaborated, meaning that its subprograms (procedures and functions) are elaborated at the start of program execution.

- Capability Enumeration:

Capability is an enumeration type that defines different capabilities associated with GPIO pins. These capabilities include the mode of the GPIO (e.g., input or output) and the pull resistor configuration (e.g., floating, pull-up, or pull-down).

- Subtypes:

GPIO_Mode is defined as a subtype of Capability, which represents possible modes for a GPIO point. It includes values such as Unknown_Mode, Input, and Output.
GPIO_Config_Mode is a subtype of GPIO_Mode that represents the modes a GPIO point can be configured in.
GPIO_Pull_Resistor is a subtype of Capability that represents the pull resistor modes of a GPIO point.

- GPIO_Point Type:

GPIO_Point is defined as a limited interface type, representing an interface for interacting with a GPIO point.
Limited interfaces define a set of operations that types implementing the interface must provide.

- Any_GPIO_Point Type:

Any_GPIO_Point is an access type that allows for creating references to objects of any class derived from GPIO_Point'Class.

- Various Functions and Procedures:

The package defines a set of abstract functions and procedures for interacting with GPIO points:

    Support: Checks if a GPIO point supports a specific capability.

    Mode: Retrieves the current mode of the GPIO point.

    Set_Mode: Sets the mode of the GPIO point, provided that the mode is supported.

    Pull_Resistor: Retrieves the current pull resistor mode of the GPIO point.

    Set_Pull_Resistor: Sets the pull resistor mode of the GPIO point, provided that the mode is supported.

    Set: Reads the actual state of the GPIO point. This operation is possible even when the point is configured as an output.

    Set, Clear, and Toggle: These procedures allow controlling the state of the GPIO point. 
    The actual effect of these procedures depends on the configuration of the GPIO point and other connected devices.

This package specification provides a set of interfaces, functions, and procedures for interacting with GPIO points in a hardware abstraction layer. It allows for configuring and controlling the modes, pull resistor settings, and states of GPIO pins. Users can implement specific GPIO drivers that adhere to this interface to work with different microcontroller or hardware configurations. The package abstracts many aspects of GPIO management and provides flexibility for controlling digital I/O.


## Implementation of the GPIO drivers

To implement GPIO drivers for the STM32F4 Discovery board in Ada, you will typically follow these steps:

- Setup Development Environment:

Make sure you have a development environment set up for STM32 microcontrollers. You'll need a toolchain like GCC for ARM, and a development environment like STM32CubeIDE or an Ada-specific environment like GNAT.

- Include Appropriate Libraries:

Depending on your chosen environment, include the necessary Ada libraries for STM32F4. This may include Ada drivers provided by AdaCore or Ada support for STM32F4 libraries.

- Configure GPIO Pins:

Use the HAL (Hardware Abstraction Layer) provided by STM32Cube or other Ada-specific HAL if available to configure GPIO pins for input or output. HAL libraries typically provide a set of functions and procedures for configuring GPIO pins.

For example, in Ada using the HAL provided by AdaCore for STM32F4, you might configure a pin as output like this:


```ada
-- Configure GPIO pin as output
Set_Mode (LED1_GPIO_Port, LED1_Pin, GPIO_Mode_Output);
Set_Output_Type (LED1_GPIO_Port, LED1_Pin, GPIO_Output_PP);
Set_Speed (LED1_GPIO_Port, LED1_Pin, GPIO_Speed_50MHz);
```

- Implement GPIO Read and Write Procedures:

Create Ada procedures/functions for reading and writing to GPIO pins using the HAL functions provided. These procedures will allow you to set and clear output pins and read input pins.

For example, to toggle an LED using Ada and the HAL:

```ada
procedure Toggle_LED is
begin
-- Toggle the LED state
Toggle (LED1_GPIO_Port, LED1_Pin);
end Toggle_LED;
```

- Error Handling:

Implement error handling to handle invalid pin configurations, initialization failures, or any other issues that may arise during GPIO operations.

- Testing and Debugging:

Test your GPIO drivers with the STM32F4 Discovery board to ensure that they work as expected. Use debugging tools and techniques to diagnose and fix any issues.

- Optimization and Performance Tuning (Optional):

Depending on your application's requirements, you may need to optimize your GPIO drivers for performance or memory usage.

Please note that the exact implementation details and available Ada libraries may vary depending on the specific Ada environment you are using and the STM32F4 Discovery board's configuration. Refer to the documentation and resources provided by AdaCore and the STM32F4 Discovery board's documentation for more specific information and examples.
To turn an LED on and off on the STM32F4 Discovery board using Ada and the HAL (Hardware Abstraction Layer) provided by AdaCore, you can use the following code as an example:

Assuming you want to control one of the user LEDs (e.g., LD3), which is typically connected to pin PI1, you can create procedures to turn it on and off.

Ada code to turn the LED on and off:

```ada
with HAL.GPIO;
with Ada.Text_IO;  -- For printing messages (optional)

procedure LED_Control is
begin
-- Initialize the HAL GPIO
HAL.GPIO.Initialize;

-- Set the LED pin (PI1) as an output
HAL.GPIO.Set_Mode (PI1, HAL.GPIO.Mode_Output);
HAL.GPIO.Set_Output_Type (PI1, HAL.GPIO.Output_Push_Pull);
HAL.GPIO.Set_Speed (PI1, HAL.GPIO.Speed_50MHz);

-- Turn the LED on
HAL.GPIO.Write_Pin (PI1, True);  -- True for ON, False for OFF

-- You can add a delay here to keep the LED on for a moment
-- Ada.Text_IO.Delay_Duration (1.0);  -- 1 second delay (optional)

-- Turn the LED off
HAL.GPIO.Write_Pin (PI1, False);

-- You can add another delay here if needed
-- Ada.Text_IO.Delay_Duration (1.0);  -- 1 second delay (optional)

-- Cleanup (optional, as typically the program would not reach this point)
HAL.GPIO.Finalize;
end LED_Control;
```

This code initializes the GPIO, sets the LED pin as an output, turns the LED on, waits for a moment (optional), turns the LED off, and then cleans up the GPIO configuration (optional).

You can adjust the delay duration and LED pin as needed for your specific application. Make sure to consult the STM32F4 Discovery board's documentation and the HAL documentation for precise pin mappings and other configuration details.

Writing low-level drivers from scratch for microcontroller peripherals like GPIO, I2C, SPI, and UART is a common approach in embedded systems programming. It gives full control over the hardware and ensures that the code is portable across different microcontroller platforms. In Ada, you can achieve this by using the Hardware Abstraction Layer (HAL) to access and control hardware resources.

Here's a high-level overview of how you can implement low-level drivers for these protocols:

- GPIO (General-Purpose Input/Output):

Define a set of functions to configure and control GPIO pins.
Create procedures to set pin direction (input/output), read pin values, and write to pins.
Use appropriate register-level programming to configure GPIO registers based on the microcontroller datasheet.

- I2C (Inter-Integrated Circuit):

Implement functions for initializing the I2C bus, setting the clock speed, and configuring slave/master mode.
Write functions to send and receive data over I2C, handling start/stop conditions and acknowledgments.
Use register-level programming to configure I2C peripheral registers.

- SPI (Serial Peripheral Interface):

Create functions to initialize and configure the SPI interface, including setting the data format, clock polarity, and phase.
Implement functions to send and receive data using the SPI protocol.
Configure SPI peripheral registers using register-level programming.

- UART (Universal Asynchronous Receiver/Transmitter):

Define functions for initializing the UART communication parameters (baud rate, data bits, stop bits, parity).
Implement functions for sending and receiving data via UART.
Configure UART peripheral registers using register-level programming.


When implementing these low-level drivers, it's essential to consult the microcontroller's datasheet or reference manual to understand the register map and how to interact with hardware resources properly. Also, consider encapsulating the low-level driver code in reusable packages or modules for better organization and maintainability.


Create a GPIO HAL Package:

First, create a package to define the GPIO HAL interface. This package will contain procedures and functions to configure and control GPIO pins. Here's a simplified example:

```ada
package GPIO_HAL is
procedure Initialize;
procedure Configure_Pin(Pin_Number: Integer; Direction: Boolean);
procedure Set_Pin(Pin_Number: Integer);
procedure Clear_Pin(Pin_Number: Integer);
function Read_Pin(Pin_Number: Integer) return Boolean;
end GPIO_HAL;
Implement the GPIO HAL:
```

In a separate Ada package body, implement the GPIO HAL procedures and functions using register-level programming specific to your microcontroller. For example:

```ada
package body GPIO_HAL is
-- Include necessary with clauses and declare appropriate registers and bit masks.

procedure Initialize is
begin
-- Initialize GPIO hardware as needed
end Initialize;

procedure Configure_Pin(Pin_Number: Integer; Direction: Boolean) is
begin
-- Configure the GPIO pin direction based on the microcontroller's registers
end Configure_Pin;

procedure Set_Pin(Pin_Number: Integer) is
begin
-- Set the GPIO pin based on the microcontroller's registers
end Set_Pin;

procedure Clear_Pin(Pin_Number: Integer) is
begin
-- Clear the GPIO pin based on the microcontroller's registers
end Clear_Pin;

function Read_Pin(Pin_Number: Integer) return Boolean is
begin
-- Read the GPIO pin state based on the microcontroller's registers
return False; -- Replace with actual read logic
end Read_Pin;

end GPIO_HAL;
Application Code:
```

You can then use the GPIO HAL functions without directly interacting with the hardware registers:

```ada
with GPIO_HAL;

procedure Main is
begin
GPIO_HAL.Initialize;

-- Configure and control GPIO pins using the HAL
GPIO_HAL.Configure_Pin(1, True);  -- Configure pin 1 as output
GPIO_HAL.Set_Pin(1);             -- Set pin 1 high
delay_ms(1000);                  -- Delay for 1 second
GPIO_HAL.Clear_Pin(1);           -- Clear pin 1
-- ...
end Main;
```

This approach separates the hardware-specific details into the GPIO HAL, making the application code more portable. When you need to switch to a different microcontroller, you can create a new implementation of the GPIO HAL tailored to that microcontroller's hardware while keeping the application code unchanged.

