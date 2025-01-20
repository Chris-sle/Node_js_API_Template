# Node.js API Template

This template provides a basic setup for a Node.js API application using Express. It includes support for HTTP and HTTPS, basic routing, security enhancements, and error handling.

## Features

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.
- **HTTP and HTTPS Support**: Easily switch between HTTP and HTTPS protocols.
- **Security with Helmet**: Secure your app by setting various HTTP headers.
- **CORS Support**: Allows your API to accept requests from different origins.
- **Modular Routing**: Structure your routes for scalability and maintainability.
- **Error Handling**: Centralized error handling middleware.

## Project Structure

```
node-api-template/
├── routes/
│   ├── template.js
│   ├── ...
├── ssl/
│   ├── server-key.pem
│   └── server-cert.pem
├── middleware/
│   └── errorHandler.js
├── .env
├── server.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- **Node.js**: Install from [nodejs.org](https://nodejs.org/).
- **npm**: Comes with Node.js, ensure it’s updated.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/node-api-template.git
   cd node-api-template
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory:

   ```plaintext
   APP_PORT=3001
   ```

4. **SSL Certificates**:

   Place your SSL certificate (`server-cert.pem`) and key (`server-key.pem`) in the `ssl` directory.

### Running the Application

- To start both HTTP and HTTPS servers, run:

  ```bash
  node server.js
  ```

  - HTTP Server will run on `http://localhost:3000`.
  - HTTPS Server will run on `https://localhost:3001`.

### Adding Routes

- Add new routes in the `routes` directory. Example:

  ```javascript
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {
      res.send('Resource list');
  });

  module.exports = router;
  ```

### Error Handling

- Add custom error handling logic in `middleware/errorHandler.js`.

### Security

- Review security settings in `server.js` with the help of [Helmet documentation](https://www.npmjs.com/package/helmet).

## Usage

Modify and expand this template for your project needs. Ensure to update the CORS settings and routes as per your application's requirements.

## Contributing

Feel free to fork this repository, make enhancements, and submit pull requests. Contributions are welcomed to improve features and add new ones.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.