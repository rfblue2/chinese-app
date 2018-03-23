import { GraphQLID } from 'graphql';
import Module from '../types/Module';
import { Modules } from '../mocks';

export default {
  type: Module,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (root, args, context, info) => {
    const { id } = args;
    return Modules.find(m => m.id == id);
  },
};
