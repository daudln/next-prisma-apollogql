import { GraphQLSchema } from "graphql";
import query from "./base.query";
import mutation from "./base.mutation";

const schema = new GraphQLSchema({ query, mutation });

export default schema;
