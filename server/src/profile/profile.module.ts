import { Module } from "@nestjs/common";
import { ProfileModuleBase } from "./base/profile.module.base";
import { ProfileService } from "./profile.service";
import { ProfileController } from "./profile.controller";

@Module({
  imports: [ProfileModuleBase],
  controllers: [ProfileController],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
