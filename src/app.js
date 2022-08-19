import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { fileURLToPath } from "url";
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
import { schema } from "../src/schemas/index.js";
import { getErrorCode } from "./utils/error.js";
import {
  UserQuery,
  UserMutations,
  UserResolver,
} from "./schemas/user/index.js";

import { PetQuery, PetMutations } from "./schemas/pet/index.js";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
// const root = {
//   Upload: GraphQLUpload,
// User: UserResolver,
//   ...UserQuery,
//   ...UserMutations,
//   ...PetQuery,
//   ...PetMutations,
// };
// console.log(root);

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));

const loggingMiddleware = (req, res, next) => {
  console.log("ip:", req.ip);
  next();
};
app.use(loggingMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use(
  "/graphql",
  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),

  graphqlHTTP((request, response, graphQLParams) => ({
    schema: schema,
    graphiql: true,
    context: {
      request: request,
      test: "Example context value",
    },
  }))
);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export { app };
