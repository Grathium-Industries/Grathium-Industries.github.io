---
layout: "../../../layouts/BlogArticle.astro"
title: "How to Fix 'App not enabled for this user' When Signing in with Google"
---

# How to Fix 'App not enabled for this user' When Signing in with Google

Published: 27/07/2022

## Fixes Errors

`403 app_not_enabled_for_user error`

## Description

When using SSO with Google, sometimes you will meet the error 403 app_not_enabled_for_user error. This is most common on mobile devices. You may be able to connect using the Google account on another device, but fail to log in on another.

## Problem

After logging into an external application (Slack, Calendar, etc...) with Google SSO, you will be met with a nasty error code.

## Solution

One of two things is happening.

1) You are trying to log in with a different account, rather than the one which has the app enabled
2) or Your system administrator has not allowed you to use the app

- The quickest fix for this problem, is to install a separate web browser which you do not currently have installed. Sign into the account you want to sign in with on that browser. Switch the default browser to the new web browser. Click the "Sign in with Google" button again. This should force your sign in to use the specified account. _Note: Don't forget to change the web browser back later!_
- Contact your System administrator to gain access to the app

## For Sysadmin

- Navigate to your [Google Admin Portal](https://admin.google.com/)
- Navigate to "Users" in the side panel
- Search for your user
- Go to "Apps"
- Make sure the App is enabled for the user under "External Apps"
- If not, you may need to enable the app, or change the users OU or group where the app is enabled
