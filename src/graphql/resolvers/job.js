const Job = require('../../models/job');

const jobResolver = {
    Query: {
      job: async id => {
        const job = await Job.findById(id);
        return job;
      },
      jobs: async () => {
        const jobs = await Job.find();
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