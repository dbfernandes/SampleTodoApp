import { ActionController } from "./controller/ActionController";

export const Routes = [
  {
    method: "get",
    route: "/actions",
    controller: ActionController,
    action: "all",
  },
  {
    method: "get",
    route: "/action/:id",
    controller: ActionController,
    action: "one",
  },
  {
    method: "post",
    route: "/action/add",
    controller: ActionController,
    action: "add",
  },
  {
    method: "post",
    route: "/action/complete/:id",
    controller: ActionController,
    action: "complete",
  },
  {
    method: "delete",
    route: "/actions/:id",
    controller: ActionController,
    action: "remove",
  },
];
