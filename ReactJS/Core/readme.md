# ***ReactJS Installation***

## ***Overview***
This markdown file will help in installation of ReactJS in local machine.

## ***Installation***

### Step 1

Open the Terminal using `Ctrl + Shift + ~`. Run the Following command to setup the React packages and libraries. The name of the application must be in small 
letters only without any white spaces.

    npx create-react-app app-name

### Step 2

Enter the next command after all the dependencies are installed. We, now move to the app directory which is our current working directory.

    cd app-name

### Step 3

Now we finally run the server.

    npm start

----

## ***Folders Information***

### public

It stores the folders which are mostly front-end based. In here only the `index.html` and `manifest.json` files are important.

### src

It stores the folders which are mostly back-end based. In here the Javascript files `App.js` and `index.js` are important.

----


## ***Deployment***

### Step 1 

Download Git on desktop and set the environment variables for both the .bin and .cmd files. To confirm check using the below command.

    git --version

### Step 2

On the local terminal run the command to initialise git after reaching the respective app folder. Download the gh-pages extension as well.

    git init
    npm install --save gh-pages

### Step 3

In the `package.json` file set the homepage as the url link to the repo. Add the following scripts in also in the `package.json` file.

    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d build"

### Step 4

Use the following command.

    git remote add origin 'link to the repo'

### Step 5

Configure your Github Email and Username to git.

    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"

### Step 6

Finally Run the following command to set up your work.

    npm run deploy

----

## ***Maintained By***
### ***Vishu Kalier***

















