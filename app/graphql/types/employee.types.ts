import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from "graphql";

export const EmployeeObjectType = new GraphQLObjectType({
  name: "EmployeeObjectType",
  fields: {
    id: { type: GraphQLID },
    unique_id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
  extensions: {},
});

export const GetEmployeeInputObjectType = new GraphQLInputObjectType({
  name: "GetEmployeeInputObjectType",
  fields: {
    unique_id: { type: new GraphQLNonNull(GraphQLString) },
  },
  extensions: {},
});

export const CreateEmployeeInputObjectType = new GraphQLInputObjectType({
  name: "CreateEmployeeInputObjectType",
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    position: { type: new GraphQLNonNull(GraphQLString) },
  },
  extensions: {},
});
