# NeoCirc Educational Platform
NeoCirc is an educational platform for teaching Doctors, Nurses, and Parents about neonatal circumcision.

This repository contains the frontend code for the platform written in React.

## Team Members
Khelan Modi\
Valentin Stelea\
Sebastian Wilson\
Kevin Quayle\
Masaki Asanuma

## Client
Dr. Emily Blum from [Georgia Urology](https://www.gaurology.com/our-physicians/physician/emily-blum-m-d/).

## Release Notes (v1.0)

We built the re-designed NeoCirc website, so this will be our first release.

<ins>New software features</ins>
- Side/navigation bar with buttons to access the Home, About Us, FAQ, and Contact pages.
- Module selection page with a short description of each of the module’s content
- For this release, we only have one module (parent) filled out.
- Home page with access buttons to the Parent’s or Doctor’s module selection pages.
- Only the parent’s modules are implemented in this release.
- About Us page containing information about NeoCirc as an organization.
- FAQ page containing frequently asked questions and answers.
- Contact page containing a short contact form that can be utilized to contact the organization.
- Parent’s module content pages with text, images, audio, and videos transferred from the original NeoCirc website.
- Parent’s module quiz pages with a short quiz assessing the content.
- Parent’s module quiz result page with feedback based on the user's quiz performance.
- Scalability for mobile devices in all pages.
- Login page with hashed password for authentication.

<ins>Bug fixes</ins>
- Push content to the side when the sidebar is opened.
- Close the sidebar when clicking outside of its area.
- Minor styling fixes in all pages.
- Multiple choice question options were not being recorded.

<ins>Known bugs and defects</ins>
- The contact page does not actually store or send any messages.
- Some stylings are off on certain mobile resolutions.
- The access code is not stored in a backend, so the client will have to manually change the password through the code.
- Browser cookies not used, so user has to re-login for different sessions.

## Install Guide

<ins>Pre-requisites</ins>

A modern desktop or laptop running Windows (10 or above) or MacOS (Catalina or above) will be required. For Windows, we recommend using the Windows Terminal instead of the command prompt.

The following software will be required to run the application:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- Browser of your choice (Chrome, Firefox, etc.)

You can confirm that Git and Node has been installed correctly by opening your Terminal and running the following command separately.

```
node -v
git --version
```

If installed correctly, these commands should display the version number of node and git.

<ins>Dependent Libraries</ins>

All dependent libraries for the application will be installed through the Node Package Manager (NPM).

<ins>Run Instructions</ins>

Head over to the NeoCirc GitHub repository and clone the repository by running the following command in your terminal.
```
git clone https://github.com/NeoCirc/neocirc-website.git
```

After the cloning is successful, enter the following command to switch in to the repository’s directory.
```
cd neocirc-website
```

Then, enter the following command to install all the dependencies required for this application. This instruction will take some time, so please be patient.
```
npm install
```

Note that there will be a lot of apparent error or warning messages but you can ignore these for now. Then, you can start up the application by running.
```
npm start
```

If everything is done correctly, you should be able to access the locally running application on http://localhost:3000/.

<ins>Troubleshooting</ins>

If this is your first time attempting to use the Terminal/Command prompt, you may encounter errors navigating through the command prompt. The best way of resolving any issues encountered during setup is to copy and paste the error into a Google search and you should be able to find many forums that tell you how to resolve the issue. There are also a wide range of tutorials available online for setting up React applications, and here are a few that would be useful if you are encountering issues.

[GeeksForGeeks ReactJS Tutorial](https://www.geeksforgeeks.org/how-to-learn-reactjs-a-complete-guide-for-beginners/)

[Command Prompt Tutorial](https://riptutorial.com/cmd/example/8646/navigating-in-cmd)

[Mac Terminal Tutorial](https://support.apple.com/guide/terminal/welcome/mac)

## Technologies Used

We have used various technologies to support the development of this website. You can check the complete list in package.json with version numbers, but here are the main technologies.

- [React](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.netlify.app/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Router](https://reactrouter.com/)
- [React Pro Sidebar](https://github.com/azouaoui-med/react-pro-sidebar)
- [styled-components](https://styled-components.com/)
