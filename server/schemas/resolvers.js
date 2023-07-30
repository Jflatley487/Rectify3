const { AuthenticationError } = require("apollo-server-express");
const { User, Therapist } = require("../models");
const { signToken } = require("../utils/auth");
// Define the resolvers object containing the GraphQL resolver functions
const resolvers = {
  Query: {
    therapists: async () => {
      try {
        const therapists = await Therapist.find();
        return therapists;
      } catch (error) {
        throw new Error("Failed to fetch therapists");
      }
    },
    // Resolver for the 'me' query, fetching the authenticated user's data
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("thoughts");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  // Mutation resolvers
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      if (!username || !email || !password)
        throw new AuthenticationError("Please try again, add text to fields! ");
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new AuthenticationError(
          " User already exists, please signup with different email!"
        );
      }
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // Resolver for the 'login' mutation
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found with this email address!");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      console.log(user, token);

      return { token, user };
    },

      // Resolver for the 'addComment' mutation
      addComment: async (_, { therapistId, commentTitle, commentBody }) => {
        return Therapist.findByIdAndUpdate(
          therapistId,
          { $push: { comments: { commentTitle, commentBody } } },
          { new: true, runValidators: true }
        );
      },
    },
  };


// Export the resolvers object
module.exports = resolvers;