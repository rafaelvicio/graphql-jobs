const Job = require('../../models/job');

const jobResolver = {
    Query: {
      job: async (_, { id }) => {
        const job = await Job.findById(id).populate('company');
        return job;
      },
      jobs: async () => {
        const jobs = await Job.find().populate('company');
        return jobs;
      }
    },
    Mutation: {
      createJob: async (_, data) => {
        const job = await Job.create(data);
        return job;
      }
    }
  }

  module.exports = jobResolver;