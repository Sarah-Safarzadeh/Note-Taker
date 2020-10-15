# Week 11 - Express.js
# Weekly Challenge Assignment: Note Taker
## The Coding Bootcamp at UT

### Task:
* This challenge is to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

* The application’s front end has already been created. The challenge requires building the back end, connecting the two, and then deploying the entire application to Heroku.

### [Deployed Application](https://sarah-safarzadeh.github.io/Note-Taker/)
### [GitHub Repository](https://github.com/Sarah-Safarzadeh/miniature-eureka/settings)
### [Heroku](https://intense-stream-00781.herokuapp.com/)

### User Story:
AS A small business owner\
I WANT to be able to write and save notes\
SO THAT I can organize my thoughts and keep track of tasks I need to complete

### Acceptance Criteria:
GIVEN a note-taking application\
WHEN I open the Note Taker\
THEN I am presented with a landing page with a link to a notes page\
WHEN I click on the link to the notes page\
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column\
WHEN I enter a new note title and the note’s text\
THEN a Save icon appears in the navigation at the top of the page\
WHEN I click on the Save icon\
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes\
WHEN I click on an existing note in the list in the left-hand column\
THEN that note appears in the right-hand column\
WHEN I click on the Write icon in the navigation at the top of the page\
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

### Bonus Material:
>As a bonus, see if you can add the DELETE route to the application using the following guideline:

>DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

## Grading Requirements

### Technical Acceptance Criteria: 40%
* Satisfies all of the preceding acceptance criteria plus the following:

* Application front end must connect to an Express.js back end.

* Application back end must store notes with unique IDs in a JSON file.

* Application must be deployed to Heroku.

## Deployment: 36%
* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

## Application Quality: 11%
* Application console is free of errors.

## Repository Quality: 13%
* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.

