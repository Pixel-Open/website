---
title: Cloudflare Turnstile for Symfony
date: 2022-10-01
description: "A simple package to help integrate Cloudflare Turnstile on Symfony Form. Turnstile protects your form to spam bots."
technos : [symfony]
repository: https://github.com/Pixel-Open/cloudflare-turnstile-bundle
image: "projects/symfony-cloudflare-turnstile/cover.jpg"
tags: ["symfony", "cloudflare turnstile"]
highlight: true
---
A simple package to help integrate Cloudflare Turnstile on Symfony Form.

Cloudfare Turnstile is an alternative to Google reCaptcha.
<!-- break -->

## Installation

You can install the package via Composer:

```bash
composer require pixelopen/cloudflare-turnstile-bundle
```

Add bundle into config/bundles.php file :

```php
PixelOpen\CloudflareTurnstileBundle\PixelOpenCloudflareTurnstileBundle::class => ['all' => true]
```
Add a config file into config/packages/pixel_open_cloudflare_turnstile.yaml :

```yaml
pixel_open_cloudflare_turnstile:
  key: '%env(TURNSTILE_KEY)%'
  secret: '%env(TURNSTILE_SECRET)%'
```

Visit Cloudflare to create your site key and secret key and add them to your `.env` file.

```
TURNSTILE_KEY="1x00000000000000000000AA"
TURNSTILE_SECRET="2x0000000000000000000000000000000AA"
```

### Use with your Symfony Form

![Cloudflare Turnstile on Symfony Form](/projects/symfony-cloudflare-turnstile/screenshot.png)

Create a form type and insert an Turnstile Type to add a Cloudflare Turnstile :

```php
<?php

namespace App\Form;

use App\Entity\Contact;
use PixelOpen\CloudflareTurnstileBundle\Type\TurnstileType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, ['label' => false, 'attr' => ['placeholder' => 'name']])
            ->add('message', TextareaType::class, ['label' => false, 'attr' => ['placeholder' => 'message']])
            ->add('security', TurnstileType::class, ['attr' => ['data-action' => 'contact', 'data-theme' => 'dark'], 'label' => false])
            ->add('submit', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}
```

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

## Todo

+ Add phpunit to test field and validator
+ Add demo for Symfony 5 and 6

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

## Changelog

### 0.1.3 (05/12/2022)

+  Add explicit return type to avoid deprecation warnings on Symfony 6.2 #1 (thank you shmshd)

### 0.1.2 (10/22/2022)

+ Complete documentation
- Remove recipe (add recipe into recipes-contrib https://github.com/symfony/recipes-contrib/pull/1447)

### 0.1.1 (10/22/2022)

+ Add recipe
+ Change namespace
- Fix installation on readme file

### 0.1.0 (10/22/2022)

+ First release