---
layout: "../../../layouts/BlogArticle.astro"
title: "Server Alert Online Documentation"
---

# Server Alert Online Documentation

Published: 14/11/2022

## Description

Server alert is a passive network connectivity monitor that validates that a web server is reachable. This basic shell script can be run either through a CRON job, daemon, or through the terminal window. Server alert can be set up in two modes, reporting or logging. Logging simply echos the time, date, server which couldn't be contacted, and the number of times it failed to ping. As server alert runs through Bash by default, this logging output can then be piped or written to a log file / reporting service.

Native inbuilt reporting is the most useful tool which Server Alert provides. It allows a HTML email template to be sent the the predetermined point of escalation. Since this notification is sent over SMTP, this email notification is also compatible with Slack alerting, and similar alerting services such as Pager Duty.

---

## How to Use - Alert Message / Template

To use server alert, you will have to edit the script file located under [https://github.com/hudson-newey/Server-Alert](the GitHub Repo). In here you will find three files & variables which you will most likely want to configure. The first file which you will want to edit is the `alertTemplate.txt` file. This file provides a template for the alert message that will be sent when an ICMP ping to the server has failed _x_ amount of times.

## Settings the Monitored Server

Next, you will want to edit the checkUp method located at line _8_ by default. By default, the pinging IP address will be set to `192.168.1.12`. You will want to change this either to your public IP address (if the server is intended to be accessed from the public internet), or your local area network address (if the server is ONLY intended to be accessed from behind a firewall or from the LAN).

## Points of Escalation

To set your point of escalation, change the email address on line _23_ by default (`email@domain.com`) to your point of escalations email address. This will send the `alertTemplate.txt` file to the point of escalation when _x_ number of pings have failed consecutively. This _x_ number of failed consecutive pings is defined on line _30_ by default `("$failedDataPoints" == 4)`, and you can change the number of failed consecutive pings before the point of escalation is contacted. By default this value is set to four failed consecutive pings before the point of escalation is notified, but you may want to raise or lower this threshold depending on your threat model / requirements. e.g. If you wanted to set the point of escalation to be notified after _20_ failed consecutive pings, you would change `"$failedDataPoints" == 4` to `"$failedDataPoints" == 20`.
