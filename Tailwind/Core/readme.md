# ***Tailwindcss Installation***

## ***Overview***
This markdown file will help in installation of Tailwindcss in local machine. It provides the step by step visualisations for installing Tailwind.

## ***Installation***

### Step - 1
Reach the local directory where the Project folder is located and create two files `Index.html` and `Style.css`. The Folder may look like this.

    |--> Project Folder
    |        |
    |        |--> Index.html            (HTML file created)
    |        |
    |        |--> Style.css             (CSS file created)

----

### Step - 2

Open the Terminal for the Project folder and run the following command. This will install the Tailwind in the local Project Folder.

    npm install -D tailwindcss autoprefixer vite

----

### Step - 3
Run the following command on the same terminal to initialise the tailwind. A file named `tailwind.config.css` will be created in the Project root folder.
    
    npx tailwindcss init -p

The Project Folder formed will now look like this.

    |--> Project Folder
    |        |
    |        |--> Index.html
    |        |
    |        |--> Style.css
    |        |
    |        |--> tailwind.config.css            (Tailwind css file created)
    |

----

### Step - 4
Install the `package.json` file in the project directory by running the below command on the project terminal.

    npm init

After downloading the `package.json` file, open it and change the scripts to `"start" : "vite"`. This enables the file to be run on local machine under vite environment.

    |--> Project Folder
    |        |
    |        |--> Index.html
    |        |
    |        |--> Style.css
    |        |
    |        |--> tailwind.config.css
    |        |
    |        |--> package.json                        (Package.json file created for dependencies)
    |

----

### Step - 5
Open the `tailwind.config.css` file and set the value in the content parenthesis as `content : ["*"]`. This enables tailwind to import all the packages (component, utilities and base).

    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: ["*"],
      theme: {
        extend: {},
      },
      plugins: [],
    }

----

### Step - 6

In the `Style.css` file setup the tailwind by importing the utility, component and base package. This can be done using the import statements.

    @import 'tailwindcss/base';
    @import 'tailwindcss/utilities';
    @import 'tailwindcss/components';

----

### Step - 7

Setup the link to the `Index.html` from `Style.css` using the link tag and the script tag.

    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.tailwindcss.com"></script>

----

### Step - 8
In the project folder, open the terminal once again and run the following command to start the website locally with tailwindcss.

    npm run start

----

## ***Maintained By***
### ***Vishu Kalier}***

















