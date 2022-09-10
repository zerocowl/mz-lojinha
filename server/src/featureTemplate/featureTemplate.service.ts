import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FeatureTemplateServiceBase } from "./base/featureTemplate.service.base";

@Injectable()
export class FeatureTemplateService extends FeatureTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
