import { Module } from "@nestjs/common";
import { GroupModuleBase } from "./base/group.module.base";
import { GroupService } from "./group.service";
import { GroupController } from "./group.controller";

@Module({
  imports: [GroupModuleBase],
  controllers: [GroupController],
  providers: [GroupService],
  exports: [GroupService],
})
export class GroupModule {}
