# Merns


<b> RULE for working on GitHub : </b>

```
1. Please create a new branch and work on that and it should be based on "develop"
2. Prefix such as feature/<your name>/<what you did>
3. Each commit should have a clear message and description
4. GITLENS must be installed in your IDE for visualization and monitoring your repository
5. You should hard test locally before pushing something on develop branch
6. Create a merge request if you want me to check your code and merge it into develop
P/S: DON'T push to master branch.
```

Example:

Quoc is backend developer, he is working on login API and he is going to push his code to develop branch. So he should do the following steps:

```
1. at "develop" in your local: git checkout -b <branch's name>
2. branch's name: feature/quocvm/login-api
3. git add . => git commit -m "login api" => git push origin feature/quocvm/login-api
4. Create a merge request to develop branch in GitHub.
5. Wait for me to check your code and merge it into develop branch.
```

<b>How to run this project</b>

START FRONT-END
```
1. cd client
2. npm i --force / yarn install
3. npm start
```

START BACK-END
```
1. cd server
2. npm i --force / yarn install
3. npm start
```

P/S: If you get something like: NODE_ENV, then you just delete `SET` in front of it in package.json file.