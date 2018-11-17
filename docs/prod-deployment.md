### Steps for prod deployment

#### First time deployment

1. Navigate to the applications parent directory `c:/HCCC/yne/frontend/`
2. Clone the repo `https://github.com/hcccecit/hccc-web.git`
3. Navigate to the root folder `cd hccc-web`


#### Subsequesnt deployments

1. Navigate to the applications root directory `c:/HCCC/yne/frontend/hccc-web`
2. Stash any manual changes to the repo `git stash`
3. Get the latest code `git fetch --prune`
4. Rebase to the latest in master `git rebase origin/master`


#### All deployments

1. Install dependencies `npm install`
2. set NODE-ENV 
    - powershell `$env:NODE_ENV="production"`
    - cmd `set NODE_ENV=production`
3. Copy certs
4. Copy config file
5. Open cmd using `Run as Administrator`
5. Start the application `npm run start-with-node`

