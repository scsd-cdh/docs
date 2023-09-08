---
title: AstroCore Project Configuration Tool 
description: CLI/GUI tool to quickly create and configure an AstroCore project.
---

# Introduction

This project is an idea for a future implementation. It is not a priority in the design process as of now, however it could be an interesting thing to configure to make the framework easier to use and more accessible.

Space Concordia is a student organization, where the software team is composed mostly of undergraduate students and where the turnover is relatively high.

In order to make contributing to the project more accessible to less experienced developers, it could be interesting to have a tool which implements the following.

## Project Configuration

My initial idea was for us to have a file format, such as JSON or XML where we can have the structure of what the mission-logic is. This includes but is not limited to defining the modes of operations, the commands, the services, etc... Anything that the developer will eventually need to implement the functionality for.

After this definition file is produced, the tool would take this file generate the code based on what is provided in these files. This would make the structure of the project cleaner and consistent, as well as allow us to add / remove sections faster.

This project should not generate the structure for the low-level architecture. It should exclusively be used to initially configure an AstroCore project, allowing the user to select a pre-existing BSP and HAL, as well as the middleware to include.

## Use Case

### Project Generation 

Here is an example of what a configuration file could look like as XML:

```xml
<AstroCore name="sc_freyr">
    <BSP source="samv71_xplained_bsp" profile="light_tasking">
    <Middleware>
        <Filesystem impl="fat"> 
        <CommunicationProtocol impl="libcsp">
    </Middleware> 
    <CustomServices>
        <CustomService name="ADCS" enabled="true"> 
        <CustomService name="Thermal" enabled="true"> 
        <CustomService name="Imaging" enabled="false"> 
        <CustomService name="Laboratory" enabled="false"> 
    </CustomServices>
    <Commands>
        <CommandModule prefix="CORE" modes="any">
            <Command title="Enter Mode">
                <CommandParam name="mode" type="Operation_Mode"></CommandParam> 
            </Command>
        </CommandModule>
        <CommandModule prefix="COMMS">
            <Command title="Ping" modes="idle">Sends a ping back to the ground station.</Command>
            <Command title="Get Version" modes="idle">Sends a packet back containing the current AstroCore version.</Command>
        </CommandModule>
    </Commands>
    <Operations>
        <OpMode name="initialization">
        <OpMode name="idle">
        <OpMode name="safe" pre="idle">
        <OpMode name="detumble" pre="idle">
        <OpMode name="imaging" pre="idle">
        <OpMode name="inference" pre="idle">
        <OpMode name="communications" pre="idle">
        <OpMode name="beaconing" pre="idle">
        <OpMode name="laboratory" pre="idle">
    </Operations>
</AstroCore>
```

The outcome of parsing this file should result in the creation of many Ada specification files, which will contain the declaration of the features specified in the XML file. As an example, we the output for the example above might result in this code section.

```ada
-- src/commands/sc_freyr_core_commands.ads

with SC_FREYR.Operation_Modes; use SC_FREYR.Operation_Modes;

package SC_FREYR.Commands.Core

end package;

```
