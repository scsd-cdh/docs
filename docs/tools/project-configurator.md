---
title: AstroCore Project Configuration Tool 
description: CLI/GUI tool to quickly create and configure an AstroCore project.
---

# Introduction

This project is an idea for a future implementation. It is not a priority in the design process as of now, however it could be an interesting thing to configure to make the framework easier to use and more accessible.

Space Concordia is a student organization, where the software team is composed mostly of undergraduate students and where the turnover is relatively high.

In order to make contributing to the project more accessible to less experienced developers, it could be interesting to have a tool which implements the following.

## Project Configuration

My initial idea was for us to have a file format, such as JSON or XML where we can have the structure of what the mission-logic is. This includes but is not limited to defining the modes of operations, the commands, and automation of these commands.

After this definition file is produced, the tool would take this file generate the code based on what is provided in these files. This would make the structure of the project cleaner and consistent, as well as allow us to add / remove sections faster.

## Use Case

Here is an example of what a configuration could look like as XML:

```xml
<AstroCore name="samv71_ping_log">
    <BSP source="samv71_xplained_bsp" profile="light_tasking">
    <Middleware>
        <Filesystem impl="fat"> 
        <Comms impl="libcsp">
    </Middleware>
    <Operations>
        <OpMode name="safe">
        <OpMode name="detumble">
        <OpMode name="idle">
        <OpMode name="imaging">
        <OpMode name="inference">
        <OpMode name="communications">
        <OpMode name="beaconing">
        <OpMode name="laboratory">
    </Operations> 
    <Commands>
        <Command code="FREYR-COMMS-001" title="Ping" modes="idle">Sends a ping back to the ground station.</Command>
        <Command code="FREYR-COMMS-002" title="Get Version" modes="idle">Sends a packet back containing the current AstroCore version.</Command>
    </Commands>
</AstroCore>
```