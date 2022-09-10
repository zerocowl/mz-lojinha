import { Module } from "@nestjs/common";
import { FeatureModuleBase } from "./base/feature.module.base";
import { FeatureService } from "./feature.service";
import { FeatureController } from "./feature.controller";

@Module({
  imports: [FeatureModuleBase],
  controllers: [FeatureController],
  providers: [FeatureService],
  exports: [FeatureService],
})
export class FeatureModule {}
