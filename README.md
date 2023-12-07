# E-commerce 

## Overview
This Express.js API serves as the back end for an e-commerce website, providing functionality for managing categories, products, and tags. The API is built using the latest technologies, including Sequelize as the ORM for MySQL database interactions.
## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Routes](#api-routes)
  - [POST, PUT, DELETE Routes](#post-put-delete-routes)
- [License](#license)
## Getting Started

### Prerequisites

Before getting started, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MySQL

### Installation

1. Clone the repository: git@github.com:Clarisagonzalez/E-commerce.git
2. npm install
3. create .env file

## API routes
Use Insomnia Core or any API testing tool to access the following routes:

Categories: http://localhost:3001/api/categories
Products: http://localhost:3001/api/products
Tags: http://localhost:3001/api/tags

## POST, PUT, DELETE Routes
est API routes for creating, updating, and deleting data:

Create a new category: POST http://localhost:3001/api/categories
Update an existing category: PUT http://localhost:3001/api/categories/:id
Delete a category: DELETE http://localhost:3001/api/categories/:id

## License 
This project is licensed under the MIT License.
