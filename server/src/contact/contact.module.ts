import { Module } from "@nestjs/common";
import { ContactModuleBase } from "./base/contact.module.base";
import { ContactService } from "./contact.service";
import { ContactController } from "./contact.controller";

@Module({
  imports: [ContactModuleBase],
  controllers: [ContactController],
  providers: [ContactService],
  exports: [ContactService],
})
export class ContactModule {}
