---
layout: "../../../layouts/BlogArticle.astro"
title: "2UNU Online Documentation"
---

# 2UNU Online Documentation

Published: 27/07/2023

[2UNU Source Code & Download](https://github.com/hudson-newey/2unu)

## Description

2UNU is a recreation of the Unix/GNU command line applications. It's goal is to be able to run a complete custom implementation from the shell level down. 2UNU is used for command line applications and shell as part of [GrathiumOS](https://github.com/hudson-newey/GrathiumOS), an attempt to create a completely custom operating system with my own custom desktop environment [NeonX2.0](https://github.com/hudson-newey/NeonX2.0) and command line (2UNU).

## How to use

Clone the repository

```sh
$ git clone https://github.com/hudson-newey/2UNU.git
>
```

Enter the directory

```sh
> cd ./2UNU
$
```

Create the build directory

```sh
$ mkdir ./build && cd ./build
>
```

Run CMake

```sh
$ cmake ..
>
```

Run Make

```sh
$ make .
>
```

This will create all the programs as POSIX compliant executables under `./2UNU/build/bin`. This path can either be added to your environment PATH, or replace the appropriate executables in your system (usually `/bin/`) with the ones in the build directory.
