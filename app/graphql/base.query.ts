import { GraphQLList, GraphQLObjectType, GraphQLResolveInfo } from "graphql";

import { getAllEmployees, getEmployee } from "./resolver/employee.resolvers";

import {
  EmployeeObjectType,
  GetEmployeeInputObjectType,
} from "./types/employee.types";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllEmployees: {
      type: new GraphQLList(EmployeeObjectType),
      resolve: getAllEmployees,
    },
    getEmployee: {
      type: EmployeeObjectType,
      args: {
        input: { type: GetEmployeeInputObjectType },
      },
      resolve: (parent, args, context, info: GraphQLResolveInfo) => {
        return getEmployee(args.input.unique_id);
      },
    },
  },
});

export default RootQuery;
