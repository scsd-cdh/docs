---
description: How to install and use the Alire package manager.
---

# Alire

Alire serves as a package manager tailored for the Ada and SPARK programming languages.

Within Alire, the building blocks of projects, libraries, and programs are referred to as `crates`. These crates can establish dependencies on other crates, which in turn can have their dependencies.

It's important to note that a single crate may have multiple dependencies. Alire efficiently handles the retrieval, compilation, and maintenance of crates within the entire dependency graph automatically.

The primary interface for working with Alire is the alr command-line utility.

This section is meant to explain the basics of using the Alire package manager, for more extensive documentation please refer to [Alire's official documentation](https://alire.ada.dev/docs).

## Installing Alire

:::danger GNAT Community 2021
To ensure a smooth installation process and avoid potential conflicts later when installing the toolchains, it is crucial to **fully uninstall** GNAT Community 2021 from your computer before proceeding.
:::

### Windows
1. Get the Alire installer from [the official website](https://alire.ada.dev/).
2. Run the installer executable and complete the setup process.
3. During the installation process, you will be asked if you want to install `msys2`. It is recommended to do so as it will automatically install missing tools such as `git` or `make`.
3. You're done!

### Linux
1. Get the Alire installer from [the official website](https://alire.ada.dev/).
2. Extract the contents of the archive.
3. Move the `alr` binary to a location in your PATH (e.g., /usr/bin/ or ~/.local/bin/).
4. You're done!

### macOS
*To do*

## Creating a New Crate

:::tip Project Name Style
When using Alire to create a crate, it is important that the name does not contain capitalizations and uses the snake_case format.
:::

### Initial Configuration

The first time you run the `alr init` command, Alire will prompt you for the following information.
- `GitHub Login`: used to identify the maintainer of the crate.
- `Full Name`: name of the author of the crate.
- `Email Address`: email of the author of the crate.

### Executables
To create an executable with Alire, you can use the following command:

```bash
$ alr init --bin <crate_name>
```

### Libraries
To create a library with Alire, you can use the following command:

```bash
$ alr init --lib <crate_name>
```

## Building and Running the Crate
After creating your crate using Alire, you can compile and run it easily. Here are the steps to run your Alire project:

Navigate to your crate directory using the command line.

```bash
$ cd <crate_name>
```

To build your crate, use the following command:
```bash
$ alr build
```

This command will compile your crate and generate the necessary binaries.

Once the build process is complete, you can run your crate by executing the generated binary. For executable crates, this is typically the same as your project name:

```bash
$ ./<project_name>
```

To build & run your crate in one step, use the following command:
```bash
$ alr run
```

For library crates, you will need to integrate the library into your application or project.

## Using the Space Concordia Alire Index
In order to let Alire find crates managed by Space Concordia, you may use the following command:

```
$ alr index --add git+https://github.com/scs-cdh/alire-index.git#stable-1.2.1 --name scs-cdh
```

This will add the Space Concordia index to your Alire installation. As an example, this will allow you to add a dependency to projects such as `astrocore`.