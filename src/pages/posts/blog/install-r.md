---
layout: "../../../layouts/BlogArticle.astro"
title: "How to install R studio on Ubuntu 22"
date: "18/07/2022"
---

## Fixes Errors

- `rstudio: error while loading shared libraries: libcrypto.so.1.1: cannot open shared object file: No such file or directory`
- `rstudio /usr/lib/rstudio/bin/rsession: error while loading shared libraries: libssl.so.1.1: cannot open shared object file: No such file or directory`
- `Dependency is not satisfiable: libssl1.0.0|libssl1.0.2|libssl1.1`

## Description

Installing R-Studio on Ubuntu 22 is currently bugged and does not work with the instructions listen
on the official R-studio Page.

## Problem

After running the following commands, R-Studio will not install or start.

```sh
$ rstudio
>
```

```sh
$ sudo gdebi ./rstudio-2022.07.0-546-amd64.deb
>
```

## Solution

[exec/r-sudio-ubuntu-22.sh](Download Solution)

Uninstall the current R-Studio instance

```sh
$ sudo gdebi -r rstudio
>
```

Reinstall RStudio

```sh
sudo apt update
sudo apt install gdebi-core && sudo apt install r-base
wget https://s3.amazonaws.com/rstudio-ide-build/desktop/jammy/amd64/rstudio-2022.07.0-546-amd64.deb
sudo gdebi install ./rstudio-2022.07.0-546-amd64.deb && ./rstudio-2022.07.0-546-amd64.deb
var="sudo locate libcrypto.so.1.1 -n 1" && SSLLoc=$(eval $var) && cp $SSLLoc /usr/lib/libcrypto.so.1.1
```
