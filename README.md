# mvc-blog

#### You can view the deployed app by [clicking here!](https://fudge88.github.io/day-planner-app/)

A fully responsive blog, that has an authentication system allowing users to login and create, read update and delete blogs they have written. The app has protected routes and allows user access to certain functions and pages once authorized. Users are able to use the CRUD functionalities if they were the authors of the blog; however all other authorized users are able to comment on any blog.

This app has followed the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

![portfolio demo](./assets/images/app.gif)

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Languages

- HTML5
- CSS
- JavaScript
- JQuery
- MySQL
- Sequelize

## Frameworks used

- Bootstrap
- Font Awesome
- Google Fonts
- Node JS
- Express JS
- Handlebars JS
- MVC Paradigm
- bcrypt

## Installation:

If you are interest in making contribution to the code, you can install this repository by following the instructions below:

You are able to clone this repository, by clicking [here](https://github.com/fudge88/dating-app) and then clicking on the `code` button. Select how you would like to clone the repository.

If you have your SSH keys set up, you are able to copy the link from the drop down and paste the following into your terminal application:

```
git clone git@github.com:fudge88/dating-app.git
```

Then change your directory so you are now in your newly cloned project and then open the code in your chosen source-code editor.

You need to install all dependencies that are listed in the `package.json` file:

```
npm install
```

Check to see that the following code is in the `package.json`, this will ensure npm to 'start' the application from your entry file

```
"start": node src/index.js
```

## How to run the application:

To run the start script, use the following code in the terminal.

```
npm run start
```

## Restful API:

To Create an restful API i began by defining the EndPoints which needed to be created first. EndPoints can be found in the routes for the API that i created. I used HTTP verbs such as GET, POST, and PUT.

GET is used to get data from the server or better known as READ, POST is used to CREATE new data, PUT is used to UPDATE data, and DELETE is used to delete data.

Or better known as CRUD (Create-Read-Update-Delete) functionality.

## Reference

[Flexbox positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)

[Mozilla.org](https://developer.mozilla.org/en-US/docs/)

[Stack Overflow](https://stackoverflow.com/questions/46050840/sequelize-cannot-add-foreign-key-constraint)

[Masonry grid](https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb)

[Bootstrap](https://getbootstrap.com/)

[unsplash] (https://unsplash.com/@clickandlearnphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

## License

This project is licensed under the terms of the MIT license.

## License

![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=<COLOR>)

This project is licensed under the terms of the MIT license.

## Questions

- If you have any questions about this project
- would like further information
- would like to report and issue

please contact me through the links below:

[GitHub](https://github.com/fudge88) Profile

Email: akhlaq.fahra@gmail.com
