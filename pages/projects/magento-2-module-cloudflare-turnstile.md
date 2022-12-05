---
title: Cloudflare Turnstile for Magento 2
date: 2022-11-07
description: "A simple package to help integrate Cloudflare Turnstile on Magento 2 Forms (login, create account, contact...). Turnstile protects your form to spam bots."
technos : [magento]
repository: https://github.com/Pixel-Open/magento-cloudflare-turnstile
image: "projects/magento-2-cloudflare-turnstile/cover.jpg"
tags: ["magento 2", "cloudflare turnstile", "security"]
highlight: true
---
Turnstile is Cloudflare's smart CAPTCHA alternative. The module allows Turnstile to protect your Magento or Adobe Commerce forms:

+ Contact
+ Login
+ Register 
+ Reset password
+ Review

<!-- break -->

## Requirements

- Magento >= 2.4.4
- PHP >= 7.4.0

## Installation

```
composer require pixelopen/magento-cloudflare-turnstile
```

## Configuration

### Disable all Magento Captcha

*Stores > Configuration > Customers > Customer Configuration > CAPTCHA*

- **Enable CAPTCHA on Storefront**: no

*Stores > Configuration > Security > Google reCAPTCHA Storefront > Storefront*

- **Enable for Customer Login**: no
- **Enable for Forgot Password**: no
- **Enable for Create New Customer Account**: no
- **Enable for Contact Us**: no
- **Enable for Product Review**: no

### Enable Cloudflare Turnstile

*Stores > Configuration > Customers > Cloudflare Turnstile > Settings*

- **Enable**: enable Cloudflare Turnstile
- **Sitekey**: the sitekey given for the site in your Cloudflare dashboard
- **Secret key**: the secret key given for the site in your Cloudflare dashboard
- **Theme**: the Turnstile theme (auto, light or dark)
- **Forms to validate**: the forms where a Turnstile validation is required

### Testing

Use the following sitekeys and secret keys for testing purposes:

**Sitekey**

| Sitekey                  | Description                     |
|--------------------------|---------------------------------|
| 1x00000000000000000000AA | Always passes                   |
| 2x00000000000000000000AB | Always blocks                   |
| 3x00000000000000000000FF | Forces an interactive challenge |

**Secret key**

| Secret key                          | Description                          |
|-------------------------------------|--------------------------------------|
| 1x0000000000000000000000000000000AA | Always passes                        |
| 2x0000000000000000000000000000000AA | Always fails                         |
| 3x0000000000000000000000000000000AA | Yields a "token already spent" error |

![The module allows Turnstile to protect your Magento or Adobe Commerce forms](/projects/magento-2-cloudflare-turnstile/contact-form.png)