import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { GraphQLError } from "graphql";
import { NextRequest } from "next/server";
import schema from "./schema";

const server = new ApolloServer({
  schema,
  includeStacktraceInErrorResponses: process.env.NODE_ENV === "development",
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async ({ headers }) => {
    const token = headers.get("authorization");

    // const user = getUser(token);
    if (!token)
      throw new GraphQLError("User is not authenticated", {
        extensions: {
          code: "UNAUTHENTICATED",
          http: { status: 401 },
        },
      });

    return { token };
  },
});

export { handler as GET, handler as POST };
