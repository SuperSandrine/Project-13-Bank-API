<a name="readme-top"></a>
<div align="center">
  <h1 align="center">Utilisez une API pour un compte utilisateur bancaire avec React</h1>

  <p align="center">
    Open-Classroom, P13/14, Formation Développeur Front-End, Javascript React mars2022/mai2023
    <br />
  </p>
</div>

<details>
  <summary>Table des matières</summary>
  <ol>
    <li><a href="#Remede-Agency-for-ArgentBank"> Remede Agency for ArgentBank</a>
    <ul>
      <li><a href="#General-information">General information</a></li>
      <ul>
        <li><a href="#Built-with">Built with</a></li>
        <li><a href="#Technologies">Technologies</a></li>
        <li><a href="#Naming-conventions">Naming conventions</a></li>
      </ul>
      <li><a href="#Getting-start">Getting start</a></li>
      <ul>
        <li><a href="#Prerequisites">Prerequisites</a></li>
        <li><a href="#Database">Database</a></li>
        <li><a href="#Back-end">Back-end</a></li>
        <li><a href="#Front-end">Front-end</a></li>
      </ul>
      <li><a href="#Author">Author</a></li>
    </ul>
  </li>
  </ol>
</details>

# Remede Agency for ArgentBank.

Remede Agency is a web application development company. They got a contract with a new bank to create their web app. First the front end functionnalities to authentification have to be coded, then the transactions structures have to be designed. 

With the support of mokup on the designs files, and the back-end provided, I coded the front end part in javascript, react.

## General information

### Built with

- [![Vite in a badge][ViteBadge]](https://vitejs.dev/)
- ![React in a badge][ReactBadge]
- ![Reduc in badge][ReduxBadge]
- ![StyledComponents in badge][StyledComponentsBadge]
- ![ VS in a badge][VisualStudioBadge]
- ![ Git in a badge][GitBadge]
- ![ GitHub in a badge][GitHubBadge]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Technologies

- ![html][HtmlBadge]
- ![css][CssBadge]
- ![JS][JsBadge]
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Structure

```bash
OC-PROJET-13/
|
|-github/
|  |- ... (elements as issues to complete or fix)
|
|-SportSee-back/
|  |- ... (element for Back from the repo : P10-Argent-Bank-API)
|
|-SportSee-front/
|  |- ...
|  |- src
|      |- assets
|      |- Components
|      |      |-component1
|      |            |- component1.jsx
|      |            |- sub-component1.jsx
|      |            |- Styled-component1.jsx
|      |- pages
|      |- redux
|      |- styles
|      |- main.jsx
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Naming conventions

#### CSS:

- class names : `camelCase`

#### JS:

- variables (const, let) : `camelCase`
- functions : `camelCase`
- components : `PascalCase`
- hooks : `camelCase`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting start

This repo contains all the front-end and back-end code to run the BankArgent web app. 
I'll provide the step by step to get start in an apple environment case.


### Prerequisites

- ![Node][NodeBadge]
- ![Npm][NpmBadge]
- ![HomeBrew][HomeBrewBadge]

<p align="right">(<a href="#readme-top">back to top</a>)</p> 

#### Let's Go:
**1.** Fork the repository
**2.** Clone it on your computer
```sh
git clone https://github.com/SuperSandrine/Project-13-Bank-API.git
```

#### Database

Mongo DB manage the database, in case of further problem, i used this ["how to"](https://ichi.pro/fr/comment-installer-mongodb-sur-mac-catalina-141283459760910) to install and launch the Database at the beginning of the project.

**3.** then you can get in the ArgentBank-Back
```sh
 cd ArgentBank-Back
```

**4.** Install the dependencies with :
```sh
 npm install
```

**5.** Install the database:
  - 1. Install Mongo-db:
```sh
brew tap mongodb/brew
```
```sh
brew install mongodb-community
```
```sh
sudo mkdir -p /System/Volumes/Data/data/db
```
  - 2. Give permission:
```sh
sudo chown -R `id -un` /System/Volumes/Data/data/db
```
```sh
brew services run mongodb-community
```

  - 3. Once installation is settled, you just have to:
```sh
brew services list
```
Wait few seconds and you should see:
`mongodb-community started`.


#### Back-end

Note that the Back-end get is own original Readme on the ArgentBank-Back File, as its a fork of the [repo here](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API) .

**6.** Run the back in another terminal:
```sh
 cd ArgentBank-Back
```
```sh
 npm run dev:server 
```
Wait few seconds and you should see:
`[nodemon] starting 'node ./server/server.js'
Server listening on http://localhost:3001
Database successfully connected`

**7.** Once server is running, you have to populate the database in a new terminal:
```sh
 cd ArgentBank-Back
```
```sh
 npm run populate-db 
```
Wait few seconds and you should see a lot of objects filled, ended with `... isAxiosError: true,
  toJSON: [Function (anonymous)]}`

#### Front-end

Once you have your Backend running and your database is running and filled in, you can run the front:

**8.** open a new terminal and :

```sh
 cd ArgentBank-Front
```

**9.** Install the dependencies with:
```sh
 npm install
```

**10.** Run the front:
```sh
npm run dev
```

Wait for a second and you should see:

```console
VITE v4.1.3 ready in 289 ms
➜ Local: http://127.0.0.1:5173/
➜ Network: use --host to expose
➜ press h to show help
```

If the navigator window did not open, your can use the link provide in your terminal at 'local', which is your local port.

Now, back and front are connected.
Keep in mind that you have to run the back-end before the front-end to get the data fetched from back and displayed. 
Also in a future opening, you only have to repeat part number 5.3., 6., 7.,8. et 10.

Enjoy !

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Author

![author][MeBadge]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[MeBadge]: https://img.shields.io/badge/Author-Sandrine%20Mestas-blue?style=for-the-badge
[JsBadge]: https://img.shields.io/badge/Language-JavaScript-yellow
[CssBadge]: https://img.shields.io/badge/Language-css-blue
[HtmlBadge]: https://img.shields.io/badge/Language-html-orange
[ReactBadge]: https://img.shields.io/badge/Library-React-mediumaquamarine
[ReduxBadge]: https://img.shields.io/badge/Library-Redux-blueviolet
[StyledComponentsBadge]: https://img.shields.io/badge/Library-StyledComponents-coral
[VisualStudioBadge]: https://img.shields.io/badge/IDE-VisualStudio-steelblue
[ViteBadge]: https://img.shields.io/badge/Frontend%20Tooling-Vite-orchid
[GitBadge]: https://img.shields.io/badge/Versionning-Git-orangered
[GitHubBadge]: https://img.shields.io/badge/Versionning-GitHub-black
[NodeBadge]: https://img.shields.io/badge/Node-v%2014.21.1-forestgreen
[NpmBadge]: https://img.shields.io/badge/Npm-v%206.14.17-firebrick
[HomeBrewBadge]: https://img.shields.io/badge/HomeBrew-v%204.0.6-darkgoldenrod

