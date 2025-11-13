import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { ReceptionService } from "./reception.service";
import { Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { ReceptionApiResponse } from "../vo/reception-api-response";
import { HttpCode } from "@nestjs/common/decorators/http/http-code.decorator";
import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import type {
  FindHaitaReqParams,
  FindHaitaResObj,
  UpdateHaitaReqParams,
} from "@reception";
import { Body } from "@nestjs/common/decorators/http/route-params.decorator";

@Controller("/rx-touch/uketsukeTaburetto")
class ReceptionController {
  constructor(private readonly receptionService: ReceptionService) {}

  @Post("/getUketsukeData")
  @HttpCode(HttpStatus.OK)
  getUketsukeData() {
    return ReceptionApiResponse.SUCCESS({
      data: this.receptionService.createUketsukeData(6),
    });
  }

  @Post("/getShokiUketsuke")
  @HttpCode(HttpStatus.OK)
  getShokiUketsuke() {
    return ReceptionApiResponse.SUCCESS({
      data: this.receptionService.createShokiUketsukeData(),
    });
  }

  @Post("/updateUketsuke")
  @HttpCode(HttpStatus.OK)
  updateUketsuke() {
    return ReceptionApiResponse.SUCCESS({
      data: true,
    });
  }

  @Post("/cancelHatsuban")
  @HttpCode(HttpStatus.OK)
  cancelHatsuban() {
    return ReceptionApiResponse.SUCCESS({
      data: true,
    });
  }

  @Post("/getKanjya")
  @HttpCode(HttpStatus.OK)
  getKanjya() {
    return ReceptionApiResponse.SUCCESS({
      data: this.receptionService.createKanjyaData(),
    });
  }

  @Post("/updateKanjya")
  @HttpCode(HttpStatus.OK)
  updateKanjya() {
    return ReceptionApiResponse.SUCCESS({
      data: true,
    });
  }

  @Post("/updateOnlineToKanjya")
  @HttpCode(HttpStatus.OK)
  updateOnlineToKanjya() {
    return ReceptionApiResponse.SUCCESS({
      data: true,
    });
  }

  @Post("/sameNameCheck")
  @HttpCode(HttpStatus.OK)
  sameNameCheck() {
    const kanjyaNoList: string[] = ["0000000001", "0000000002"];

    return ReceptionApiResponse.SUCCESS({
      data: kanjyaNoList,
    });
  }

  @Post("/findHaita")
  @HttpCode(HttpStatus.OK)
  findHaita(@Body() _params: FindHaitaReqParams) {
    return ReceptionApiResponse.SUCCESS<FindHaitaResObj>({
      // eslint-disable-next-line no-constant-condition
      data: false
        ? {
            isHaita: true,
            haitaMessage: "XXXX",
            haitaType: 1,
          }
        : {
            isHaita: false,
            haitaMessage: "",
            haitaType: 0,
          },
    });
  }

  @Post("/updateHaita")
  @HttpCode(HttpStatus.OK)
  updateHaita(@Body() _params: UpdateHaitaReqParams) {
    return ReceptionApiResponse.SUCCESS({
      data: true,
    });
  }
}

export { ReceptionController };
