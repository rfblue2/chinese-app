import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';
import queries from './queries';

console.log(JSON.stringify(queries, null, 2));
export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: queries,
  }),
});
