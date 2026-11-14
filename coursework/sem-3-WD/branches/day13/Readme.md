patch : updates the already created data
post: client creates the data
get: data is
**middleware
 in between the Js functions which is used to complete accomplished the desired task
 its has access of request object and has capability to modify bothe of them 
 client-----> MIDDLEWARE--------> DB
<!-- --------------------------------------------------------------------------------------- -->
# Node.js, Express.js, HTTP and REST API

## Node.js
Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser, especially on the server side.

Node.js can create servers using its built-in `http` module without using Express.

## HTTP
HTTP stands for HyperText Transfer Protocol.

It is a communication protocol used between a client and a server.

Example:

Client → HTTP Request → Server  
Server → HTTP Response → Client

HTTP itself does not create the server. Node.js provides the built-in `http` module that can be used to create an HTTP server.

## Express.js
Express.js is a lightweight web framework for Node.js.

It is available as an npm package and simplifies backend development by providing features such as:

- Routing
- Middleware
- Request handling
- Response handling
- API development
- Error handling

Express is used because writing server and API code with it is generally simpler and more organized than using Node's `http` module directly.

### Relationship

Node.js can work without Express.

Express.js runs on top of Node.js.

```text
Node.js
   ↓
Express.js
   ↓
Backend / API
### Middle ware imp
cors 
###Schema

## Authentication routes

Copy `.env.example` to `.env`, set a private `JWT_SECRET`, and install this branch's dependencies with `npm install`.

- `POST /auth/register` accepts `name`, `email`, and `password` and returns a bearer token.
- `POST /auth/login` accepts `email` and `password` and returns a bearer token.
- Write operations under `/user` and `/packages` require `Authorization: Bearer <token>`.

Passwords are stored as bcrypt hashes. The sample data remains suitable only for local coursework use.

