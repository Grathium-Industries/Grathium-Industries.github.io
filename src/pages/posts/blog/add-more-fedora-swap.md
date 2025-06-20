---
layout: "../../../layouts/BlogArticle.astro"
title: "How to Add More swap / zram on Fedora Linux"
---

# How to Add More swap / zram on Fedora Linux

Published: 09/10/2022

## Description

zram is the Fedora Linux's compressed equvilant of swap which comes with [https://linuxreviews.org/The_Benefits_Of_Having_A_Compressed_zram_Swap_Device_On_Linux](many benefits) in comparison to swap on Windows, MacOS, or Ubuntu. However, it can be more difficult to configure as a traditional `0600 /swapfile` is not compatible with zram, as zram uses storage partitions in replacement of files.

## zram Configuration File

Fedora Linux Location of zram config file
`/etc/systemd/zram-generator.conf`

### Example zram Configuration File with 1.8 times RAM space _(Figure 1)_

```sh
$ cat /etc/systemd/zram-generator.conf
>
```

```sh
[zram0] <br>
zram-fraction=1.8
```

### Modifying zram space using nano

```sh
$ sudo nano /etc/systemd/zram-generator.conf
>
```

### Modifying zram space using vim

```sh
$ sudo vim /etc/systemd/zram-generator.conf
>
```

---

### Config File Breakdown of _Figure 1_

`[zram0]` The zram mounting partition. On Fedora, the default zram name is zram0, therefore, the config setup will be partition name surounded in sqaure brackets.

`zram-fraction=1.8` Specifies the size of the zram partition. By default on Fedora, this is `1.0`. This sets the size of the zram partition to a scalar multiple of the RAM size.

e.g. If the computer has 8GB of RAM, a `zram-fraction=1.5` will create a zram partition of size 12GB.
