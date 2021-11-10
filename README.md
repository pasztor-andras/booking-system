# Book a table

## Story

Your parents wants to start to open a family business, a pizzeria.
For this purpose, they ask you, their son/daughter, to create a web site where the people can see information about the menu
and can book a table.

## What are you going to learn?


- DOM manipulation with Javascript
- Responsive design
  

## Tasks

1. The landing page will not just introduce the user in the web site, but show the menu also. The page must be responsive and fluid,  so the page is readable for most of the platforms and mobile devices.
    - When we get to the web site, an image with the name of the pizzeria welcomes us
    - When we scroll down a short introduction present the business
    - Under the introduction, we can see the menu's options, the topping and the price
    - The welcome section fill up the entire user screen (including a monitor screen or a mobile device screen)
    - While the menu in a monitor screen structured in 2 columns, in a mobile device, it is shown in one column

2. In the landing page there is a possibility to booking a table. The form is presented in a different page. The user needs to fill up a form with its name, email address, booking date and time and the number of seats the user want to book.
    - There is a `Booking a table` button in the bottom of the page, when we click the button a booking form shows up
    - The form contains input fields for name and email address, a date and time picking input and a number of person picking input
    - All inputs are required
    - If the email address is wrong formatted, the text `Wrong email format` shows up under the field
    - We can't book a table before the actual date
    - We can't book a table one hour before the actual time
    - When we click the `Book the table` button at the bottom of the form, it logs out the booking information to the console

## General requirements

None

## Hints


- Use eventlisteners for the error handling. Whenever an input lost focus, you can check if the input value is valid for the rules.
- You can use different background images for the different platforms sizes.
  

## Background materials


- <i class="far fa-exclamation"></i> [Js eventListeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener)
- <i class="far fa-exclamation"></i> [Blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
- <i class="far fa-exclamation"></i> [Tips and tricks to responsive design](https://business.tutsplus.com/articles/quick-responsive-web-design-tips-tricks--cms-30684)
- <i class="far fa-book-open"></i> [Responsive design principles](https://blog.prototypr.io/principals-of-responsive-design-64c637402e7)
  
