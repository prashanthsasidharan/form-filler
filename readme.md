
# Embeddable Form Filler Widget

The Auto-Fill Form Filler Widget is a powerful tool designed to streamline the process of filling out forms. By automatically populating fields in under 2 seconds, this widget significantly reduces manual data entry time by up to 80%.




## Demo

[Demo](https://form-filler-backend.onrender.com/) - Kindly wait for a minute or two if the demo is still loading


https://user-images.githubusercontent.com/64402931/220498492-f4e29bf3-d9e8-40b1-aa1d-d41243dbde3f.mov



## Tech Stack

**Client:** React, React-Bootstrap

**Server:** Node, Express, mongodb


## Features

 - Draggable - place anywhere on the screen
 - Configure data to be filled - create, edit, delete autofill data
 - Autofill result detection - green border if successfully autofilled, red wiggly border if autofill failed


## Run Locally

Clone the project

```bash
  Git clone https://github.com/prashanthsasidharan/form-filler.git
```

Go to the project directory

```bash
  cd form-filler
```

Install dependencies

```bash
  yarn
```

Backend Server runs at http://localhost:3000/

```bash
  cd packages/filler-backend, yarn start
```

Server runs at http://localhost:3001/

```bash
  cd packages/filler-demo, yarn start
```

Server runs at http://localhost:3002/

```bash
  cd packages/form-filler, yarn start
```

View the app using http://localhost:3000/ in browse tab


## Environment Variables

Add .env file in root folder of filler-backend

`DATABASE_URL=mongodb://localhost/filler`

`PORT=3000`

## How to use in your application

- Create api’s listed [here](https://github.com/prashanthsasidharan/form-filler/tree/main/packages/filler-backend) with the specified endpoints
- In the form add a form data selector for identifying the form(ex - data-form=“payments”), and add fields selectors  (ex: data-field=“email”) for identifying and autofilling the fields
- Embed **<script src=“https://embeddable-form-filler.netlify.app/bundle.min.js” can-edit=“true”>** in your app
- Configure credentials that needs to be autofilled by clicking the edit option on the filler
- Once successfully configuring autofill data, you can remove`can-edit` attribute in script to prevent others from editing or configuring it.


## Contributing

Contributions are always welcome!


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://prashtalks.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/prashanth-sasidharan-7a32301a8/)
[![devto](https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white)](https://dev.to/prashan81992916)

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## License

[MIT](https://choosealicense.com/licenses/mit/)


