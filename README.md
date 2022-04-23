# blog_v1

Roman's blog

## Description

This is my 'personal blog project', which was started 2 years ago, but only now
I have got some time to finally deploy it.

There were several attempts to start and develop it, I tried different stacks,
starting from pure HTML/CSS/jquery, through the PUG, my own server on the
NODE.js, PostgreSQL and so on. Now I decided to stop my experiments and
concentrated on my primary stack. I'm a frontend/react junior, so let it be
REACT.js. As for the database, it occurred to be quite easy to use the Firebase
as storage and not to invent some 'crutches'. So,

## Stack

Typescript REACTjs react-create-app Context for the shared state SCSS Firebase

## What is it for?

I had been trying to avoid TypeScript for a long time, but finally, I found it
is a cool thing. Yes, it makes the coding process longer, however it stimulates
you to be more accurate. I decide to use TS in all my following projects so that
I can master it (Unfortunately, my work projects didn't require it).

## To-do

I implemented basic functions: read, log in and write new posts with primitive
design. There are a lot of things to do and I have not decided what to do first.
Anyway:

1. Separate admin's and users pages. Admin's page has adding message form and
   some additional functions.
2. Add and configure css-modules.
3. CSS and selectors refactoring. All are made hastily and require to be
   revised.
4. Markup for the post. Now they are just strings without any layout. I use
   'html-parser' for that old posts were layouted with HTML, but it's not the
   best solution.
5. Revise state management. Now I use Context to control the logging-in, and
   control showing/closing of the modal with closures. It works, but I'm afraid
   it makes the code complicated and confusing.

6. Add confirmation prompt to closing the modal if it is not empty.

7. Add mobile friendly design

8. Add form validation

complete: Added separate login page with disclaimer, that now it is only for
admin // no need the disclaimer

complete: Added saving new post text in context. Teporary, revise soon when add
the redux

complete: Added back-to-top-button
