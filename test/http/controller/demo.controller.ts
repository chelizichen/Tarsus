import { Inject } from "../../../decorator/ioc";
import { UseInterCeptor } from "../../../decorator/web/aop";
import { Controller } from "../../../decorator/web/controller";
import { Get, Post } from "../../../decorator/web/method";
import { query } from "../../../decorator/web/params/type";
import { Goods } from "../entity/goods.entity";
import { LogInterCeptor } from "../interceptor/log";
import { TestService } from "../service/test.service";


@Controller("/demo")
class demoController {


  @Inject(TestService) TestService: TestService;

  @Get("/test") @UseInterCeptor(new LogInterCeptor())
  public async test(req: query<Goods>) {
    const { id, SortTypeId } = req.query;
    // @ts-ignore
    req.query.getList();
    const ret = await this.TestService.hello(id, SortTypeId);
    return { ret };
  }

  @Post("/say")
  public say(req:Request) {
    return {
      body:req.body
    }
  }

}

export { demoController };
