# Lemon's frontend technical assignment

Hey, welcome to Lemon’s frontend technical assignment.

This project contains an application with many bugs such as:

- Logic errors;
- Failing tests;
- Misuse of React and browser APIs. _There are no bugs in using any other dependencies_;
- Visual bugs;

The test goal is pretty straightforward: **map and fix all the bugs you can find**. Read the instructions and description carefully and work on the application so the functionality and layout are the closest possible from what is described.

Here is the reference for the design:
https://www.figma.com/file/OD9LiTeMw52njecO1n47KU/Frontend-Recruitment-Assignment?node-id=0%3A1

The application is a simplification of the architecture used by Lemon in its projects. We encourage you to study, understand and try to keep your solutions within the standards presented. However, you can use any technology, technique and/or dependencies necessary to achieve the objective. **We guarantee that it is possible to fix all bugs without installing any new dependencies**.

We also suggest that you study the documentation for the following dependencies that are used before you start:

- [styled-components](https://styled-components.com/)
- [react-router](https://reactrouter.com/)
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)

We hope you have fun and learn something during the challenge! Let’s go!

## The application

The application has two pages. The first (/intro) should be read carefully, as it contains the last instructions for your test!

The test starts on the second page (/assignment). It works as follows:

1. When the user accesses the `/assignment` page, the application should request a list of 50 users and their data via the [GitHub APIs](https://docs.github.com/en/rest) and we present a list of cards, each containing a single user's information. While the request is not completed, a loading bar should appear at the top of the screen and increase its width indicating the progress of the request.
2. When the user scrolls the list up to its lower limit (end of the list - 800px), a new request is started automatically and when complete, the list of cards must be updated with the new users.
3. When used on desktops, if the user hovers over a card, there is a visual change on the card that indicates the user's action. Check the design on [Figma](https://www.figma.com/file/OD9LiTeMw52njecO1n47KU/Frontend-Recruitment-Assignment?node-id=0%3A1).
4. If the user clicks on any card, an alert message should appear and wait for confirmation.
   - If canceled, continue to the page;
   - If confirmed, redirect to the clicked user’s GitHub profile;

## Quick start

1. Clone this repo

```
$ git clone ...
```

2. Remove `.github/` folder and create a new repo in your Github's account. **DON'T FORK OR OPEN PULL REQUESTS IN THIS REPO**

```
$ cd <DIRECTORY> && rm -rf .github
$ git remote add origin <REPO_URL>
$ git push -u origin master
```

3. Install the dependencies

```
$ npm install
```

4. Duplicate `.env.example` e and rename it to `.env`

```
$ cp ./.env.example ./.env
```

5. Fill `.env` file with your GitHub's login and [personal access token](https://github.com/settings/tokens)

## Available scripts

1. `npm start`: starts development mode
2. `npm test`: starts tests and watch files
3. `npm run lint`: runs ESLint verification and fix bugs
