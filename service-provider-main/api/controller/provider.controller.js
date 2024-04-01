const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
// const ObjectId = mongoose.Types.ObjectId;
const Provider = mongoose.model("Provider");

const ProviderController = {};

const errorHandler = (res, error) => {
  res.status(500).send(error);
};

ProviderController.getAllProviders = (req, res) => {
  Provider.find({})
    .then((providers) => {
      res.json(providers);
    })
    .catch((err) => {
      errorHandler(res, err);
    });
};

ProviderController.getProviderById = (req, res) => {
  Provider.findOne({ _id: new ObjectId(req.params.id) })
    .then((provider) => {
      res.json(provider);
    })
    .catch((err) => {
      errorHandler(res, err);
    });
};

ProviderController.createProvider = async (req, res) => {
  const providerPayload = req.body.provider;
  const provider = await Provider.findOne({
    "company.email": providerPayload.company.email,
  });
  if (provider) {
    return res
      .status(500)
      .json({ status: "error", error: "Entered Email is already in use." });
  }
  const providerDocument = new Provider(providerPayload);
  providerDocument
    .save()
    .then((provider) => {
      res.status(201).json(provider);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

ProviderController.deleteProviderById = (req, res) => {
  Provider.findOneAndDelete({ _id: new ObjectId(req.params.id) })
    .then((result) => {
      if (!result) {
        res.json({ status: "error", message: "provider does not exist" });
      } else {
        res.json({ status: "success", result });
      }
    })
    .catch((err) => {
      errorHandler(res, err);
    });
};

ProviderController.deleteAllProvider = (req, res) => {
  Provider.deleteMany({})
    .then((result) => {
      if (result.deletedCount === 0) {
        res.json({ status: "nothing to delete" });
      } else {
        res.json({ status: "success" });
      }
    })
    .catch((err) => {
      errorHandler(res, err);
    });
};

ProviderController.updateProviderById = (req, res) => {
  let provider = req.body.provider;
  Provider.findOneAndUpdate({ _id: new ObjectId(req.params.id) }, provider, {
    new: true,
  })
    .then((provider) => {
      if (!provider) {
        res.json({ status: "error", message: "provider does not exist" });
      }
      res.json(provider);
    })
    .catch((err) => {
      errorHandler(res, err);
    });
};

module.exports = ProviderController;
