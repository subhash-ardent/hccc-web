### To toggle between user roles in dev environment

Refer [here](http://nategood.com/quickly-add-and-edit-cookies-in-chrome) to add new cookies on chrome.

* Step 1: Open Chrome Dev Tools >> Applications Tab >> Storage >> Cookies >> http://localhost:4200 and clear all the existing cookies
 
* Step 2: Paste either of the below strings on the browser's address bar and hit enter

```angularjs
//devotee
javascript:document.cookie="sessionInfo=username=devotee"

//y&e chair
javascript:document.cookie="sessionInfo=username=yande"
```

* Step 3: Make sure the browser display's the below text 

```angularjs
sessionInfo=username=devotee
or
sessionInfo=username=yande
```
 * Step 4: Paste the below url on the browser address bar and hit enter
 
```angularjs
http://localhost:4200/yande
```
