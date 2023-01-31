---
title: Plausible Analytics for Prestashop
date: 2023-01-31
description : "Add Plausible Analytics in Prestashop. Plausible Analytics is an open source, simple, lightweight and privacy-friendly Google Analytics alternative."
technos : [prestashop]
repository: https://github.com/Pixel-Open/prestashop-cloudflare-turnstile
image: "projects/plausible-prestashop/cover.jpg"
tags: ["prestashop", "plausible", "Google Analytics alternative"]
highlight: true

---
Plausible Analytics is :
- open source
- simple
- lightweight
- privacy-friendly Google Analytics alternative


<!-- break -->

## Requirements

- Prestashop >= 1.7.6.0
- PHP >= 7.2.0

## Installation

Download the pixel_plausible.zip file from the [last release](https://github.com/Pixel-Open/prestashop-plausible/releases/) assets.

### Admin

Go to the admin module catalog section and click **Upload a module**. Select the downloaded zip file.

### Manually

Move the downloaded file in the Prestashop **modules** directory and unzip the archive. Go to the admin module catalog section and search for "Plausible".

## Configuration

From the module manager, find the module and click on configure.

| Field                  | Description                                                                                           | Example                                                  | Required |
|:-----------------------|:------------------------------------------------------------------------------------------------------|----------------------------------------------------------|----------|
| Add JavaScript snippet | Enable stats by including the Plausible snippet in the head of your website                           | Yes                                                      | Y        |
| Shared Link            | The shared link allows to display stats in the "Statistics > Plausible" menu                          | https://plausible.io/share/website.prestashop?auth=xxxxx | N        |
| Enable goals           | Enable goal events: contact, cart, checkout-step-X, order                                             | Yes                                                      | Y        |
| Contact goal name      | Plausible goal name when customer send a contact message. Leave empty to ignore.                      | contact                                                  | N        |
| Cart goal name         | Plausible goal name when customer goes to the cart. Leave empty to ignore.                            | cart                                                     | N        |
| Checkout goal name     | Plausible goal name prefix when customer goes to a checkout step {goalName}-X. Leave empty to ignore. | checkout-step                                            | N        |
| Order goal name        | Plausible goal name when customer submits order. Leave empty to ignore                                | order                                                    | N        |

Create the **shared link** in your Plausible settings for the site in *Visibility > Shared links > + New link*

## Stats

In the Prestashop admin, the Plausible stats are available in the *Statistics > Plausible* menu.

## Goals

The module includes goal events when enabled in module configuration.

- Contact message sent
- Cart view
- Checkout step X
- Order complete

You need to add goal events in your Plausible website configuration:

![Plausible Golas](/projects/plausible-prestashop/goals.png)

The Plausible event name must be the same as the name in the Prestashop module configuration.

### How to add a custom goal?

In any template or JS file, use the `plausible` method to send the event to Plausible. Example:

```html
<input type="button" value="My Button" id="my-form-button" />

<script type="text/javascript">
    const myButton = document.getElementById('my-form-button');
    if (myButton) {
        myButton.addEventListener('click', function() {
            plausible('my-form-button'); // "my-form-button" is the Plausible goal event name
        });
    }
</script>
```

## Changelog


### 1.0.0 (27/01/2023)

+ Custom event name and props added
+ First release

![The module allows Turnstile to protect your Prestashop forms](/projects/plausible-prestashop/screenshot.png)
