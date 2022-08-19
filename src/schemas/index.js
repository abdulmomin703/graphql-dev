import { gql } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import {
  UserQuery,
  UserTypes,
  UserMutations,
  UserResolver,
} from "./user/index.js";

import { PetQuery, PetTypes, PetMutations } from "./pet/index.js";
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";

const typeDefs = gql`
  scalar Upload
  type Query
  type Mutation

  ${UserTypes}
  ${PetTypes}
`;

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    ...UserQuery,
    ...PetQuery,
  },

  Mutation: {
    ...PetMutations,
    ...UserMutations,
  },

  User: UserResolver,
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
