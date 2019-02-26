const Company = require("../../models/company");

const companyResolver = {
    Query: {
      company: async id => {
        const company = await Company.findById(id);
        return company;
      },
      companys: async () => {
        const companys = await Company.find();
        return companys;
      }
    },
    Mutation: {
      createCompany: async (_, data) => {
        const company = await Company.create(data);
        return company;
      }
    }
  }

  module.exports = companyResolver;