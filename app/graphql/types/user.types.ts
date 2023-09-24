import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from "graphql";

export const UserObjectType = new GraphQLObjectType({
  name: "UserObjectType",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    image: { type: GraphQLString },
  },
});

export const GetUserInputObjectType = new GraphQLInputObjectType({
  name: "GetUserInputObjectType",
  fields: {
    unique_id: { type: new GraphQLNonNull(GraphQLString) },
  },
});

export const CreateUserInputObjectType = new GraphQLInputObjectType({
  name: "CreateUserInputObjectType",
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
});
