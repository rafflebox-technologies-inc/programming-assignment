# Programming Assignment

In this assignment you will build a simple web application that allows someone to store and display weather information in a database.

The solution should include:

1. A `front end web application` that allows a user to enter and remove the `time` and `temperature` of a `city`.
2. An `api` that stores the `time` `temperature` and `city` into a local database (eg. SQL-Lite)
3. Once entered the front end should display the `time` `temperature` and `city`. It should always display the most recent `temperature` (and no more than single temperature for the same city). 

Your design should be built using the following technologies (if you use a different technology please explain the reasoning):

1. Front end web app - Vue.js
2. Backend api - Node.js (Express and TypeScript)
3. Database - SQL-Lite or PostgreSQL

Your solution should be...

- User friendly
- Responsive
- Have a clean design
- Contain validation at each layer

The solution will be scored on the following criteria:

- Clean code - `3 points`
- Creative / user-friendly design / styling - `2 points`
- Architectural design - `5 points`
- Simplicity - `3 points`
- Ease of deployment - `3 points`

Maximum Score: `15 points`

Once completed upload your solution to github. *Note: Please do not submit this as a Pull Request*

## Additional Points

Candidates who perform the additional work will score additional points

- Build and run your solution using Docker and Docker-compose - `3 points`
- Host your solution on AWS - `3 points`
- Host the Vue.js app on Cloud Flare - `2 points`
- Use `github actions` to create a CI/CD pipeline to deploy the solution to AWS/CF - `10 points`
- Test Driven Development using `jest` - `2 points`

Maximum Additional Score - `20 points`
