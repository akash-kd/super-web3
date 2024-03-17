import express from "express";

export class RouteHandler {
  constructor() {
    this.router = express.Router();
    this.current_path = "";
    this.method = "";
    this.current_controller = (req, res) => {
      res
        .status(200)
        .json({ message: `Using Default ${path} ${method} Controller` });
    };
    this.current_validator = (req, res, next) => next();
  }

  setMiddleware(middleware) {
    this.router.use(middleware);
    return this;
  }

  setPath(path) {
    this.current_path = path;
    return this;
  }
  setMethod(path, method) {
    this.current_path = path;
    this.method = method;
    return this;
  }

  setValidator(validator) {
    this.current_validator = validator;
    return this;
  }

  setController(controller) {
    function controller_template() {
      try {
        controller();
      } catch (error) {
        console.error(
          `-> Error in User Controller: ${this.current_path} ${this.method}`,
          error
        );
      }
    }
    this.current_controller = controller;
    return this;
  }

  setErrorHandler(handler) {
    this.router.use(handler);
    return this;
  }

  addMethod() {
    switch (this.method) {
      case "get":
        this.router.get(
          this.current_path,
          this.current_validator,
          this.current_controller
        );
        break;
      case "post":
        this.router.post(
          this.current_path,
          this.current_validator,
          this.current_controller
        );
        break;
      case "put":
        this.router.put(
          this.current_path,
          this.current_validator,
          this.current_controller
        );
        break;
      case "delete":
        this.router.delete(
          this.current_path,
          this.current_validator,
          this.current_controller
        );
        break;
      default:
        console.log("-> point");
        throw new Error(`Method not defined: ${this.method}`);
    }
    return this;
  }

  mount(app) {
    app.use(this.router);
    return this;
  }
}

export default RouteHandler;
