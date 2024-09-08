---
layout: "../../../layouts/BlogArticle.astro"
title: "How to Configure DNS over HTTPS on PiHole"
---

# How to Configure DNS over HTTPS on PiHole

Published: 25/07/2022

## Description

1.1.1.1 is a privacy respecting DNS provided by Cloudflare. It is a DNS server that is used to resolve domain names to IP addresses. However, by default, pihole does not use DNS over HTTPS to resolve DNS names. This can result in a loss of privacy as anyone who can conduct a MITM aattack can see the DNS requests made by the user.

## Set up DNS Over HTTPS Proxy on PiHole
Copy the ARM binary URL location [https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/)

And run the following commands on your PiHole to configure DNS over HTTPS:

```sh
$ cd /tmp
$ wget [ARM Binary URL Location]
$ sudo mv cloudflared /usr/local/bin
$ sudo chmod +x /usr/local/bin/cloudflared
$ sudo useradd -s /usr/sbin/nologin -r -M cloudflared
$ sudo chown cloudflared:cloudflared /usr/local/bin/cloudflared
>
```

Copy the following config text into a file called / located under `/etc/default/cloudflared`

```sh
CLOUDFLARED_OPTS=--port 5053 --upstream https://1.1.1.1/dns-query --upstream https://1.0.0.1/dns-query
```

Copy the following config text into a file called / located under `/lib/systemd/system/cloudflared.service`

```toml
[Unit]
Description=cloudflared DNS over HTTPS proxy
After=syslog.target network-online.target

[Service]
Type=simple
User=cloudflared
EnvironmentFile=/etc/default/cloudflared
ExecStart=/usr/local/bin/cloudflared proxy-dns $CLOUDFLARED_OPTS
Restart=on-failure
RestartSec=10
KillMode=process

[Install]
WantedBy=multi-user.target
```

Run from Terminal

```sh
$ sudo systemctl daemon-reload
$ sudo systemctl enable cloudflared
$ sudo systemctl start cloudflared
>
```

To verify the proxy is working

```sh
$ sudo systemctl status cloudflared
>
```

---

## Configure PiHole to use DNS over HTTPS Proxy

- Navigate to [https://pi.hole/admin](https://pi.hole/admin) in your web browser
- Go to Settings -> DNS
- Untick all current checkboxes in the top DNS section
- Tick custom IPV4 DNS
- Add `127.0.0.1#5053` as the customer IPV4 DNS server
- Click "Save" down the bottom and restart PiHole
