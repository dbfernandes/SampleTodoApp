import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Action } from "../entity/Action";

export class ActionController {
  private actionRepository = getRepository(Action);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.actionRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.actionRepository.findOne(request.params.id);
  }

  async add(request: Request, response: Response, next: NextFunction) {
    return this.actionRepository.save(request.body);
  }

  async complete(request: Request, response: Response, next: NextFunction) {
    return this.actionRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let actionToRemove = await this.actionRepository.findOne(request.params.id);
    await this.actionRepository.remove(actionToRemove);
  }
}
