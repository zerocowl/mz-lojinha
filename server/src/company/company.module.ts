import { Module } from "@nestjs/common";
import { CompanyModuleBase } from "./base/company.module.base";
import { CompanyService } from "./company.service";
import { CompanyController } from "./company.controller";

@Module({
  imports: [CompanyModuleBase],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
