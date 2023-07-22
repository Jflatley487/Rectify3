const { AuthenticationError } = require('apollo-server-express');
const { User, Therapist } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    therapists: async () => {
      try {
        const therapists = await Therapist.find();
        return therapists;
      } catch (error) {
        throw new Error('Failed to fetch therapists');
      }
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      console.log(user,token)

      return { token, user };

      addComment: async (_, { therapistId, commentTitle, commentBody }) => {
        return Therapist.findIdAndUpdate(
          therapistId,
          { $push: { comments: { commentTitle, commentBody } } },
          { new: true, runValidators: true }
        );
      }
    },
  },
};


module.exports = resolvers;
