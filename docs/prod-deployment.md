### Steps for prod deployment

#### First time deployment

1. Navigate to the applications parent directory `c:/HCCC/yne/frontend/`
2. Clone the repo `https://github.com/hcccecit/hccc-web.git`
3. Navigate to the root folder `cd hccc-web`
4. Install PM2 `npm install pm2 -g`


#### Subsequesnt deployments

1. Navigate to the applications root directory `c:/HCCC/yne/frontend/hccc-web`
2. Stash any manual changes to the repo `git stash`
3. Get the latest code `git fetch --prune`
4. Rebase to the latest in master `git rebase origin/master`


#### All deployments

1. Install dependencies `npm install`
2. Copy all cert files from `c:/HCCC/yne/frontend/cert` to `c:/HCCC/yne/frontend/hccc-web/server/cert`
3. Copy `prod.json` config file from `c:/HCCC/yne/frontend/config` to `c:/HCCC/yne/frontend/hccc-web/server/config`
4. Open `cmd` using `Run as Administrator`
5. Set NODE-ENV `set NODE_ENV=prod`
6. Start the application `npm run start-node-on-win`


#### PM2 commands

- To list `pm2 list`
- To stop a process `pm2 stop <id>`
