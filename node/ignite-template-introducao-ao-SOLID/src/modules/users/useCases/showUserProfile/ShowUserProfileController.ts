import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const user = this.showUserProfileUseCase.execute({ user_id: request.params.user_id });
    response.send(user);
  }
}

export { ShowUserProfileController };
