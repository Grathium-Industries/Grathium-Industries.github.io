---
layout: "../../../layouts/BlogArticle.astro"
title: "What is Screen Cast and how to use it"
---

# What is Screen Cast and how to use it

Published: 13/11/2022

[https://github.com/hudson-newey/screen-cast](Screen Cast Source Code & Download)

## Description

Screen cast is open source alternative to Chromecast capable of rendering websites on a remote display over a local area network (LAN). There are two important components of screen cast which cannot operate without the other, the screen cast server  / window, and the screen cast client.

## Setting up the Screen / Display

The screen cast server & window is the main screen which will be used as the display. Is recommended to run this on a Raspberry Pi or similar cheap device. However, the screen cast screen is compatible with any Windows, MacOS, or Linux device which supports display rendering. To start the screen either run npm start or `$ ./start_screen.sh`. This will open an application in full screen and the always on top property. To close the screen cast screen, either press Alt+F4 or close it via the command line; as there will be no window buttons to close the screen application.

> Technical information: By default, the screen cast display window runs an express HTTP server on port `:8080` on the local network, and can be manually queried through a HTTP GET request following the format `127.0.0.1:8080?q=[website URL]`.

---

## Using the Command Line as a Client

To provide a client interface to change the website rendered on the display, both a command line interface (CLI) and web application is available. To use the command line interface, either run `$ ./start_client.sh` or use `go run cli_client.go`. Note: to use the command line interface for screen cast, you will require go lang.

## Using the Web Client

The web client is more suited to the average user and can be used on any device (including mobile), and is accessible via the local area network (LAN). To start, either you can use the server built in go, or serve the index.html web page located in `client/web_client/index.html`. To use the provided HTTP server written in Go, run go run `$ ./client/web_client/server.go` from the command line. By default from here, you will be able to access the web client through your local area network IP address + port `:8081`.

From both the command line and web interface client, you will have to provide a display IP address and port number. This is not the machine you are connecting via the client from, but the display which you are running on either your raspberry pi or laptop. There are several articles online showing you how to find your local IP address, and by default the port number of the display screen is port `:8080` (this can be changed under `src/window.ts`). Your display screen IP address + port number should look something like `127.0.0.1:8080` (replacing `127.0.0.1` with the display screens IP address).
