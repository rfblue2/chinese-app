import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';
import Segment from './Segment';
import { Segments } from '../mocks';

const Module = new GraphQLObjectType({
  name: 'Module',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    last_updated: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLID },
    name: { type: GraphQLString },
    segments: { 
      type: new GraphQLNonNull(new GraphQLList(Segment)),
      resolve: module => {
        return Segments.filter(s => module.segmentIds.includes(s.id));
      },
    },
  }),
});

export default Module;
