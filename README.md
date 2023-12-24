# Ads Management Resident Website

## Installation

### Steps

1. Clone repo.

2. Install required packages

   - Run `npm i`

   - When install package, run `npm install <package-name>`.

3. Run localhost:

   - Run `npm start`.

   - Navigate to `localhost:3000`.

## Folder Structure

```shell
ads-management-resident
├── database                                    # DATABASE
│     ├── models
│     │    └── <ModelName>.js                   # Model's schema declaration
│     └── Connection.js                         # Database connection
├── middlewares                                 # Middlewares declaration
│     └── <MiddlewareName>.mdw.js
├── routes                                      # Routes declaration - CONTROLLER
│     └── <RouteName>.route.js
├── services                                    # Database services declaration - MODEL
│     └── <ServiceName>.js
├── views                                       # VIEW
│     ├── layouts
│     │    └── <LayoutName>.hbs                 # Layouts declaraction
│     └── vw<ViewName>                          
│          └── <ViewName>.hbs                   # Page view declaration
└── public                                      # Public assets for static render
```

## Available Scripts

- `npm start`: Run localhost
