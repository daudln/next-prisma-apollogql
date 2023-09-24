import { GraphQLObjectType } from "graphql";
import {
  CreateEmployeeInputObjectType,
  EmployeeObjectType,
} from "./types/employee.types";
import { createEmployee } from "./resolver/employee.resolvers";
import { CreateUserInputObjectType, UserObjectType } from "./types/user.types";
import { createUser } from "./resolver/user.resolvers";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createEmployee: {
      type: EmployeeObjectType,
      args: {
        input: { type: CreateEmployeeInputObjectType },
      },
      resolve: (parent, args, info, context) => createEmployee(args.input),
    },
    createUser: {
      type: UserObjectType,
      args: {
        input: { type: CreateUserInputObjectType },
      },
      resolve: (parent, args, info, context) => createUser(args.input),
    },
  },
});

export default mutation;
