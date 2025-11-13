import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TimeModule } from "./time/time.module";
import { ADLModule } from "./adl/adl.module";
import { ReceptionModule } from "./reception/reception.module";

@Module({
  imports: [TimeModule, ADLModule, ReceptionModule],
  controllers: [AppController],
  providers: [AppService],
})
class AppModule {}

export { AppModule };
