---
title: AstroCore Project Configuration Tool 
description: CLI/GUI tool to quickly create and configure an AstroCore project.
---

# Introduction

This project is an idea for a future implementation. It is not a priority in the design process as of now, however it could be an interesting thing to configure to make the framework easier to use and more accessible.

Space Concordia is a student organization, where the software team is composed mostly of undergraduate students and where the turnover is relatively high.

In order to make contributing to the project more accessible, it could be interesting to have a tool which implements the following.

## Project Configuration

My initial idea was for us to have a file format, such as JSON or XML where we can have the structure of what the mission-logic is. This includes but is not limited to defining the modes of operations, the commands, and automation of these commands.

After this definition file is produced, the tool would take this file generate the code based on what is provided in these files. This would make the structure of the project cleaner and consistent, as well as allow us to add / remove sections faster.