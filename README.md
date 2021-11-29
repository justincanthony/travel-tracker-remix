<!-- Frequently Used Links 
https://shields.io/

My GitHub Profile
* [My GitHub Profile](github.com/justincanthony)

Websites
* [Javascript](https://www.javascript.com/)
* [HTML](https://html.com/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [eslint](https://eslint.org/)
* [node](https://nodejs.org/en/)
* [WebPack](https://webpack.js.org/)
* [Express](https://expressjs.com/)
-->


<!-- Project Spec
https://frontend.turing.edu/projects/travel-tracker.html

OG Vanilla JS
https://github.com/justincanthony/travel-tracker

OG API
https://github.com/turingschool-examples/travel-tracker-api

Updated API
https://github.com/justincanthony/travel-tracker-remix-api -->

<!-- PROJECT Details -->

  <h1 align="center">Travel Tracker Remix</h1>

  <p align="center">Your Destination Station
    <br />
    <a href=https://github.com/justincanthony/travel-tracker-remix><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://travel-tracker-remix.herokuapp.com">Deploy Link</a>
    ·
    <a href="https://github.com/justincanthony/travel-tracker-remix/issues">Report Bug</a>
    ·
    <a href="https://github.com/justincanthony/travel-tracker-remix/issues">Request Feature</a>

</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

### About the Project
<!-- Describe what the over all scope and learning goal of the project is, and what set-up the challenge was framed in-->
This was a personal project that challenged me to refactor a <a href="https://github.com/justincanthony/travel-tracker">previous project</a>  written in `vanilla JS` to `React`. The previous version of "Travel Tracker" was a representation of my first 2 months of coding. This "remix" version reflects my progress as a frontend developer 8 weeks later. Learning goals were extended to include working with `Express js` by adding new endpoints to the api found <a href="https://github.com/justincanthony/travel-tracker-remix-api">here</a>. 

The original project spec can be found <a href="https://frontend.turing.edu/projects/travel-tracker.html">here</a>. 

This project challenged the developer to create an application that managed a single user's travels. Fetch calls were originally made to locally hosted server (now refactored and deplyed on Heroku) that contained three different data sets `travelers`, `destinations`, and `trips`. With this information, students were given creative control of how to display all relevant information to the user. 

Key features of the application include making `POST` requests to book a new trip,  `GET` requests to view previous trips, pending trips, and upcomming approved trips. Additional application features included displaying the cost of logding and cost flights while booking, displaying a total trip cost prior to confirming the trip, and user ability to make a `DELETE` request to cancel the trip .  Users also have the ability to log in and out through a "mock" login page. 

Particular challenges included making different network requests containing data sets that required filtering and matching `userID's` in order to display accurate trip information. This challenge was simplified by refactoring the original API mentioned above to handle new network requests and give desired specific user inforamtion removing the frontend logic and uneeded extra data from the original endpoints. More details about the api refactor can be found <a href="https://github.com/justincanthony/travel-tracker-remix-api/blob/main/README.md">here</a>.

### Built With

[![React Hooks][react-hooks-shield]][react-hooks-url]
<br>
[![React Router][react-router-shield]][react-router-url]
<br>
[![NPM][npm-shield]][npm-url]
<br>
[![Visual Studio Code][visual-studio-code-shield]][visual-studio-code-url]
<br>
[![MUI][material-components-shield]][material-components-url]
<br/>
* [React Micro-Modal](https://www.npmjs.com/package/react-micro-modal)
* [Dayjs](https://day.js.org/)
* [React Toastify](https://www.npmjs.com/package/react-toastify) 
* 
<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
* NPM
* React Router 5
* Dayjs



### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/justincanthony/travel-tracker-remix.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```


## USAGE                       
<!--DESCRIBE WHAT THE USAGE EXPERIENCE IS LIKE/BUILT ON -->


Screen Size EXAMPLES 

Mobile Spec              |  Desktop Spec
:----------------------------:|:-------------------------:
![mobile_gif](https://user-images.githubusercontent.com/82064981/143930858-b9ad418e-9c24-463e-8afb-76f7aae53311.gif)|![desktop_gif](https://user-images.githubusercontent.com/82064981/143931462-86de7ec3-3069-4ff2-a2d3-53ca4a98d25a.gif)


<!-- ROAD MAP -->
## Road Map

See the [open issues](https://github.com/justincanthony/travel-tracker-remix/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact
<p>Justin Anthony</p>
<a href="https://github.com/justincanthony">GitHub</a>
<br/>
<a class="u-email Link--primary " href="mailto:justincanthony@gmail.com">justincanthony@gmail.com</a>
<br/>
<a class="Link--primary" href="https://www.linkedin.com/in/justincanthony/">LinkedIn</a>

[project-spec-url]: https://https://frontend.turing.edu/projects/travel-tracker.html
[turing-shield]: https://img.shields.io/badge/Project%20-Spec-blue
[contributors-shield]: https://img.shields.io/badge/Contributors-1-blue
[contributors-url]: https://github.com/orgs/travel-tracker-remix/people
[issues-shield]: https://img.shields.io/badge/Issues-6-blue
[issues-url]: https://github.com/justincanthony/travel-tracker-remix/issues
[react-hooks-shield]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[react-hooks-url]: https://reactjs.org/docs/hooks-intro.html
[react-router-shield]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[react-router-url]: https://reactrouter.com/
[npm-shield]: https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: https://www.npmjs.com/
[cypress-shield]: https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e
[cypress-url]: https://docs.cypress.io/guides/overview/why-cypress
[visual-studio-code-shield]: https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white
[visual-studio-code-url]: https://code.visualstudio.com/
[circle-ci-shield]: https://img.shields.io/badge/CIRCLECI-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white
[circle-ci-url]: https://circleci.com/
[material-components-shield]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white
[material-components-url]: https://mui.com/
[heroku-url]: https://id.heroku.com/login
[heroku-shield]: https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white
[github-url]: https://github.com/
[github-shield]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white

