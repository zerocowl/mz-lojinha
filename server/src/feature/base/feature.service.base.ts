/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Feature, FeatureTemplate, Profile } from "@prisma/client";

export class FeatureServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FeatureFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeatureFindManyArgs>
  ): Promise<number> {
    return this.prisma.feature.count(args);
  }

  async findMany<T extends Prisma.FeatureFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeatureFindManyArgs>
  ): Promise<Feature[]> {
    return this.prisma.feature.findMany(args);
  }
  async findOne<T extends Prisma.FeatureFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeatureFindUniqueArgs>
  ): Promise<Feature | null> {
    return this.prisma.feature.findUnique(args);
  }
  async create<T extends Prisma.FeatureCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeatureCreateArgs>
  ): Promise<Feature> {
    return this.prisma.feature.create<T>(args);
  }
  async update<T extends Prisma.FeatureUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeatureUpdateArgs>
  ): Promise<Feature> {
    return this.prisma.feature.update<T>(args);
  }
  async delete<T extends Prisma.FeatureDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeatureDeleteArgs>
  ): Promise<Feature> {
    return this.prisma.feature.delete(args);
  }

  async findFeatureTemplates(
    parentId: string,
    args: Prisma.FeatureTemplateFindManyArgs
  ): Promise<FeatureTemplate[]> {
    return this.prisma.feature
      .findUnique({
        where: { id: parentId },
      })
      .featureTemplates(args);
  }

  async getProfile(parentId: string): Promise<Profile | null> {
    return this.prisma.feature
      .findUnique({
        where: { id: parentId },
      })
      .profile();
  }
}
