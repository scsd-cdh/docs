---
title: IDE
description: Installing and configuring the Integrated Development Environment (IDE).
sidebar_position: 1
---

# Integrated Development Environment 

## Introduction

In order to start writing SPARK / Ada code, you will need a code editor. There are different options you can choose from, the easiest one to get setup and working would be GNAT Studio.

:::tip USING THE IDE
Alire projects should be accessed through the `alr edit` command, rather than being directly chosen from the IDE. When you use the `alr edit` command, it will set up certain environment variables and then launch your IDE. Failure to use this command may lead to potential issues.
:::

## Options

### GNAT Studio (Recommended)

GNAT Studio can be installed from [this GitHub repository](https://github.com/AdaCore/gnatstudio), you can find the installers for Windows and Linux in the Releases section.

If you are on macOS, you may be able to find versions of GNAT Studio that will compile and run (though it will be different whether your computer has an Intel or Silicon processor). If you are able to get the IDE to work on your computer, please update this section with the instructions.

GNAT Studio is the default IDE that Alire will try to open when using the `alr edit` command, so you do not need to do any modifications. Make sure that after installation, `gnatstudio` is available in your PATH, otherwise Alire will not be able to find it.

### Visual Studio Code

Visual Studio Code has an extension you can download to get Ada to work. The ID of the extension is: `AdaCore.ada`, search the in the extensions section and download it. It will install the `ada_language_server` automatically.

You will need to modify the default editor Alire will try to open for the project. You will need to use the following command while inside your project.

```bash
alr config --set editor.cmd "code ."
```

### LSP

It is possible to download the `ada_language_server` separately from the Visual Studio Code extension. Configuration will vary depending on which editor you are planning on using (Neovim, Emacs, QtCreator, etc). The instructions for installation and configuration can be found in the [ada_language_server repository](https://github.com/AdaCore/ada_language_server).

After this is done, you will need to follow the same instructions as for Visual Studio Code, but replace the command by whatever command you need to open your IDE.

```bash
# Example on how to change it to use Neovim.
alr config --set editor.cmd "nvim ."

# Example on how to change it to use Emacs.
alr config --set editor.cmd "emacs ."
```