/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressListRelationFilter } from "../../address/base/AddressListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ContactListRelationFilter } from "../../contact/base/ContactListRelationFilter";
import { DeviceListRelationFilter } from "../../device/base/DeviceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../../user/base/UserListRelationFilter";
@InputType()
class CompanyWhereInput {
  @ApiProperty({
    required: false,
    type: () => AddressListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AddressListRelationFilter)
  @IsOptional()
  @Field(() => AddressListRelationFilter, {
    nullable: true,
  })
  addresses?: AddressListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ContactListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ContactListRelationFilter)
  @IsOptional()
  @Field(() => ContactListRelationFilter, {
    nullable: true,
  })
  contacts?: ContactListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DeviceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DeviceListRelationFilter)
  @IsOptional()
  @Field(() => DeviceListRelationFilter, {
    nullable: true,
  })
  devices?: DeviceListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  document?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  logo?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserListRelationFilter)
  @IsOptional()
  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  users?: UserListRelationFilter;
}
export { CompanyWhereInput };
