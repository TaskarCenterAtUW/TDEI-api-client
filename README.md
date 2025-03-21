## tdei-client@1.1.83
This repository is a **GitHub Workflow-triggered OpenAPI client generator**. Using the **Swagger Generate Tool**, it creates **TypeScript/JavaScript client stubs** based on the OpenAPI specification. The generated client utilizes [Axios](https://github.com/axios/axios) for making HTTP requests.  

This client simplifies API interactions by generating structured Axios-based requests, making it easy to integrate with TDEI services.

The generated Node module can be packaged as an **npm library** or used directly by clients to write API test cases and interact with TDEI services.  

## **Supported Environments**  

- **Runtime:**  
  - Node.js  
  - Webpack  
  - Browserify  

- **Language Compatibility:**  
  - ES5 (requires Promises/A+ library)  
  - ES6  

- **Module Systems:**  
  - CommonJS  
  - ES6 module system  

The client is compatible with both **TypeScript and JavaScript**. In TypeScript, type definitions are automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))  

## **Building**  

To install dependencies and compile TypeScript to JavaScript, run:  

```sh
npm install
npm run build
```

## **Publishing**  

After building the package, publish it to npm using:  

```sh
npm publish
```

## **Consuming the Package**  

To use the package in a project, install it using one of the following methods:  

- **From npm (recommended):**  

  ```sh
  npm install tdei-client@1.1.83 --save
  ```  

- **From a local build (not recommended):**  

  ```sh
  npm install PATH_TO_GENERATED_PACKAGE --save
  ```  


