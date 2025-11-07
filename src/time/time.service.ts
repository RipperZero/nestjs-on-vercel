import dayjs from "dayjs";
import { Injectable } from "@nestjs/common";

@Injectable()
class TimeService {
  createTimestamp() {
    return dayjs().unix();
  }
}

export { TimeService };
