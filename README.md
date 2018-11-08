# youth-and-education-web

### To Setup

1. Clone the repository: `git clone https://github.com/hcccecit/hccc-web.git`
2. Change into the directory: `cd hccc-web`
3. Install dependencies: `npm install`
4. Change to mock-backend directory: `cd mock-backend`
5. Install dependencies for mock-backend: `npm install`
6. Change back to root directory: `cd ..`
7. Start Application: `npm start`
8. Navigate to `localhost:4200` on a browser to view the webapp

### New Setup instructions with Java backend

1. Clone the repository: `git clone https://github.com/hcccecit/hccc-web.git`
2. Change into the directory: `cd hccc-web`
3. Install dependencies: `npm install`
4. take the certs from `https://github.com/hcccecit/hccc-api/tree/master/config/security/certs` 
5. Copy `cid_key.key` and `cid_crt.crt` at `hccc-web/server/certs`
7. Start Application: `npm start`
8. Navigate to `localhost:4200` on a browser to view the webapp

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

### To get the latest code

1. Fetch the latest from GitHub `git fetch --prune`
2. Assuming you are on the `master` branch, rebase your master with origin/master `git rebase origin/master`
3. Install dependencies: `npm install`
4. Change to mock-backend directory: `cd mock-backend`
5. Install dependencies for mock-backend: `npm install`
6. Change back to root directory: `cd ..`
7. Start Application: `npm start`
8. Navigate to `localhost:4200` on a browser to view the latest app


