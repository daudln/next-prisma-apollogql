import { GraphQLObjectType, GraphQLList } from "graphql";
import { getAllEmployees, getEmployee } from "../resolver/employee.resolvers";
import {
  EmployeeObjectType,
  GetEmployeeInputObjectType,
} from "../types/employee.types";

const EmployeeQuery = new GraphQLObjectType({
  name: "Query",
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
      resolve: (parent, args) => {
        return getEmployee(args.input.unique_id);
      },
    },
  },
});

export default EmployeeQuery;
