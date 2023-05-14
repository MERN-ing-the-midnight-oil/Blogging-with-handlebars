# 14 Model-View-Controller (MVC): Tech Blog

## Functionality

This application allows users to create a user by choosing a username and password, write and submit content in the form of blog posts, and comment on blog posts written by any user.

## Technologies used

The folder structure follows the Model-View-Controller paradigm. It uses Handlebars.js implimented by the express-handlebars package to render the views in-browser. It uses MySQL2 and Sequelize to connect the backend database to the Models, and uses an Express.js API for the controllers. It also takes advantage of the dotevn package for environmental variables, the bcyrpt package to hash passwords, and the express-session (to store session data in a cookie) and connect-session-sequelize packages to add user-authentification.

## Deployment

The app can be found on github at https://github.com/Noctiluca-scintillans/Blogging-with-handlebars,
and is deployed on Heroku at https://dashboard.heroku.com/apps/stormy-gorge-58008

## License:

MIT

Copyright <2023>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
