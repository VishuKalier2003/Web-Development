# ${\color{lightblue} Tailwindcss \space Installation}$

## ${\color{lightgreen} Overview}$
This markdown file will help in installation of Tailwindcss in local machine. It provides the step by step visualisations for installing Tailwind.

## ${\color{lightgreen} Installation}$

### Step - 1
Reach the local directory where the Project folder is located and create two files `Index.html` and `Style.css`. The Folder may look like this.

    |--> Project Folder
    |        |
    |        |--> Index.html
    |        |
    |        |--> Style.css

### Step - 2
Open the Terminal for the Project folder and run the following command. This will install the Tailwind in the local Project Folder.

    npm install -D tailwindcss autoprefixer vite

### Step - 3
Run the following command on the same terminal to initialise the tailwind. A file named `tailwind.config.css` will be created in the Project root folder.
    
    npx tailwindcss init -p
