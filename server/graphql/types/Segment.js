import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

const Segment = new GraphQLObjectType({
  name: 'Segment',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    last_updated: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    video_link: { type: GraphQLString },
    image_link: { type: GraphQLString },
    question_text: { type: GraphQLString },
    valid_text: { type: new GraphQLList(GraphQLString) },
  },
});

export default Segment;
