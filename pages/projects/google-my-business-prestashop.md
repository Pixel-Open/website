---
title: Google My Business for Prestashop
date: 2022-10-22
description : "Import and display any Google place data on the frontend : opening hours, overall customer rating, customer reviews..."
technos : [prestashop]
repository: https://github.com/Pixel-Open/prestashop-googlemybusiness
image: "projects/prestashop-google-my-business/cover.jpg"
tags: ["prestashop", "google my business"]
highlight: true

---
Import and display any Google place data on the frontend.
<!-- break -->

## Requirements

- Prestashop >= 1.7.6.0
- PHP >= 7.2.0

## Installation

Download the **pixel_googlemybusiness.zip** file from the [last release](https://github.com/Pixel-Open/prestashop-googlemybusiness/releases/latest) assets.

### Admin

Go to the admin module catalog section and click **Upload a module**. Select the downloaded zip file.

### Manually

Move the downloaded file in the Prestashop **modules** directory and unzip the archive. Go to the admin module catalog section and search for "Google My Business".

## Configuration

From the module manager, find the module and click on configure.

| Field             | Description                                  | Example                          | Required |
|:------------------|:---------------------------------------------|----------------------------------|----------|
| Google API Key    | The Google Places API key.                   | D5MyLvpGOTI2GYXpisyJQCKw9ED3wdk7 | Y        |
| Google Place IDs  | Google place ids to import, one id per line. | ChIJLU7jZClu5kcR4PcOOO6p3I0      | Y        |

## Import

At the command prompt, go to the Prestashop root directory and  execute the following command:

```bash
./bin/console google_my_business:import_place {language}
```

- *language*: ISO 639-1 (en, de, fr...)

## Reviews

It is only possible to retrieve the last 5 reviews. Import often to accumulate the reviews.

## Display

In any template, add the following Widget:

```html
{widget name='pixel_googlemybusiness' display='name,rating,opening-hours,reviews'}
```

**Display excepted options:**

* name: Place name (Eiffel tower)
* rating: Average Rating (4/5)
* opening-hours: Opening hours (Monday: 12:00 – 19:00, Tuesday: 10:00 – 19:00...)
* review: the last reviews

For example, to display only reviews:

```html
{widget name='pixel_googlemybusiness' display='reviews'}
```

**Review filters:**

* review_number: the number of review to display
* review_min_rating: only show reviews with rating greater or equal than this value

```html
{widget name='pixel_googlemybusiness' display='reviews' review_number=5 review_min_rating=3}
```

**Place filter:**

Filter by place id with the `place_ids` widget param (comma separated):

```html
{widget name='pixel_googlemybusiness' place_ids='ChIJLU7jZClu5kcR4PcOOO6p3I0' display='name,rating,opening-hours,reviews'}
```

**Note:** Only places imported in the current context language will be displayed

## Translations

In admin, go to the **Translations** page under the **International** menu.

![](/news/2022/prestashop-google-my-business/screenshot.png)
