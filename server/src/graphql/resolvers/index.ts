import { mergeResolvers } from "@graphql-tools/merge";

import commentResolver from "./Comment";
import productResolver from "./Product";

const resolvers = [commentResolver, productResolver]; 

export default resolvers;