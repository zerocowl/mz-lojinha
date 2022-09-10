import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FeatureTemplateService } from "./featureTemplate.service";
import { FeatureTemplateControllerBase } from "./base/featureTemplate.controller.base";

@swagger.ApiTags("featureTemplates")
@common.Controller("featureTemplates")
export class FeatureTemplateController extends FeatureTemplateControllerBase {
  constructor(
    protected readonly service: FeatureTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
