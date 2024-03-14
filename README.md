# E-Comsite - <sup><sub><sub>[Click Here](https://jadhav-general-store.netlify.app/)<sub></sub></sup> 

E-Comsite is an e-commerce website built with HTML, CSS, and JavaScript using Vite. The website features a product listing, add-to-cart functionality, price updates, and a responsive design for different screen sizes.

## Table of Contents

1. [Project Description](#project-description)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installing](#installing)
3. [Features](#features)
4. [Built With](#built-with)

## Project Description

An E-commerce front-end website showcasing the power and flexibility of modern web technologies. It's built using HTML, CSS, and JavaScript, and utilizes Vite as the development environment. The website features a product listing, add-to-cart functionality, price updates, and a responsive design for different screen sizes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To install the software, you need to have Node.js installed. You can install it by running the following command:

```bash
npm install npm@latest -g
```

### Installing

Follow these steps to set up your development environment:

1. **Create a new directory for your project.**

   ```bash
   mkdir e-comsite
   cd e-comsite
   ```

2. **Run npm init to create a package.json file.**

   ```bash
   npm init -y
   ```

3. **Install Vite as a development dependency.**

   ```bash
   npm install vite --save-dev
   ```

4. **Create CSS, JavaScript, and HTML files.**

   ```bash
   touch styles/main.css script.js index.html vite.config.js
   ```

5. **Include the necessary links to your CSS and JavaScript files in the index.html file.**

   ```html
   <link rel="stylesheet" href="./styles/main.css" />
   <script type="module" src="./script.js"></script>
   ```

6. **Start the development server with Vite.**

   ```bash
   npm run dev
   ```

## Features

- Navigation bar with links to different sections of the website.
- Product listing with images, names, headlines, prices, and add-to-cart buttons.
- Price update functionality to reflect real-time changes in prices.
- Cart functionality that keeps track of added products and their quantities.
- Responsive design for different screen sizes.

## Built With

- Vite - Fast and lean development environment.
- npm - Dependency management.
