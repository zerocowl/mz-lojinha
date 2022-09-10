import { Module } from "@nestjs/common";
import { FeatureTemplateModuleBase } from "./base/featureTemplate.module.base";
import { FeatureTemplateService } from "./featureTemplate.service";
import { FeatureTemplateController } from "./featureTemplate.controller";

@Module({
  imports: [FeatureTemplateModuleBase],
  controllers: [FeatureTemplateController],
  providers: [FeatureTemplateService],
  exports: [FeatureTemplateService],
})
export class FeatureTemplateModule {}
