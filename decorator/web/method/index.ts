import { routers } from "../controller/routers";

export enum METHODS{
  GET = "get",
  POST = "post",
  VIEW = "view"
}

const Get = (url: string) => {
  return (value: any, context: ClassMethodDecoratorContext) => {
      routers.set({ url, method: METHODS.GET }, value)
  };
};
const Post = (url: string) => {
  return (value: any, context: ClassMethodDecoratorContext) => {
      routers.set({ url, method: METHODS.POST }, value)
  };
};

export { Get, Post };
