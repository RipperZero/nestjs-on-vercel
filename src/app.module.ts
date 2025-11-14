import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TimeModule } from "./time/time.module";
import { ADLModule } from "./adl/adl.module";
import { ReceptionModule } from "./reception/reception.module";
import { CommonModule } from "./@common/common.module";

@Module({
  imports: [TimeModule, CommonModule, ADLModule, ReceptionModule],
  controllers: [AppController],
  providers: [AppService],
})
class AppModule {}

export { AppModule };
