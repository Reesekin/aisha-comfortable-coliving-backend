import { Resolver } from '@nestjs/graphql';

@Resolver()
export class SideMenuResolver {
  //side menu doesn't require resolvers other than for basic types (firstName, profilePhoto) which are already automatically created
}
