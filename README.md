# Why I Autha

Build out auth

See [demo app](https://alchemycodelab.github.io/solutions-web/user-auth/) (demo has profiles as well)

## Setup

Use [this template](https://github.com/alchemycodelab/web-finish-why-i-autha) for this deliverable.

Use the information below to guide you:

-   Finish Steps
-   Work Incrementally
-   Rubric

## Finish Steps

### Part A

Sign In and Sign Up:

-   service calls in `fetch-utils.js`
-   in `auth.js`, complete auth calls and redirect

### Part B

Implement Sign Out

-   service call in `fetch-utils.js`
-   In `auth/user.js`, attached signout to link

### Part C

Redirects

-   service call in `fetch-utils.js`
-   Add logic in `auth/user.js` to check if there is a user and redirect if not
-   Add logic in `auth.js` to check if there is a user and redirect if so

### Part D

Add another page `other-page` that requires the user to be signed in:

-   Simple text message okay like "on other page"
-   Nearly identical to home page, but the links will be slightly different

## Work Incrementally

Build out your project step by step, this is **not** an exercise in changing variable names!

## Rubric

The following is required for your assignment to be graded:

-   PR open from `dev` to `main`
-   PR Passes CI (lint + tests)
-   PR preview on netlify

| Commits with working...     | **10** |
| --------------------------- | ------ |
| Part A: Sign in and Sign up | 3      |
| Part B: Sign out            | 2      |
| Part C: Redirects           | 2      |
| Part D: Other Page          | 3      |
