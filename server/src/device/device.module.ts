import { Module } from "@nestjs/common";
import { DeviceModuleBase } from "./base/device.module.base";
import { DeviceService } from "./device.service";
import { DeviceController } from "./device.controller";

@Module({
  imports: [DeviceModuleBase],
  controllers: [DeviceController],
  providers: [DeviceService],
  exports: [DeviceService],
})
export class DeviceModule {}
