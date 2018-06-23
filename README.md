# youth-and-education-web

### To Setup

1. Clone the repository: `git clone https://github.com/hcccecit/youth-and-education-web.git`
2. Change into the directory: `cd youth-and-education-web`
3. Install dependencies: `npm install`
4. Change to mock-backend directory: `cd mock-backend`
5. Install dependencies for mock-backend: `npm install`
6. Change back to root directory: `cd ..`
7. Start Application: `npm start`
8. Navigate to `localhost:4200/yande/home` on a browser to view the webapp

Always run `npm install` after pulling latest code from GitHub.

### To generate mock backend after making changes to the API Specification

1. Update the API Specification at `swagger.json`
2. Make sure you have `swagger-codegen` cli installed on your computer
3. Delete old contents in the mock-backend directory `rm -rf mock-backend && mkdir mock-backend`
4. Generate mock-backend `swagger-codegen generate -i swagger.json -l nodejs-server -o ./mock-backend/`
5. Change to mock-backend directory: `cd mock-backend`
6. Install dependencies for mock-backend: `npm install`
7. Run mock-server: `npm start`
8. Navigate to `localhost:8080/docs` on a browser to view the APIs on Swagger UI 
9. Change back to root directory: `cd ..`


### To toggle between user roles in dev environment

Refer [here](http://nategood.com/quickly-add-and-edit-cookies-in-chrome) to add new cookies on chrome.

```angularjs
//devotee
javascript:document.cookie="sessionInfo=username=devotee"

//y&e chair
javascript:document.cookie="sessionInfo=username=yande"
```
