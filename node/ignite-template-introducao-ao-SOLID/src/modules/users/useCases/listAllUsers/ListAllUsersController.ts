import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const users = this.listAllUsersUseCase.execute({user_id: request.headers.user_id});
    response.send(users);
  }
}

export { ListAllUsersController };
