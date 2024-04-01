const router = require("express").Router();
const { ProviderController } = require("../controller");

router.get("/", ProviderController.getAllProviders);

router.get("/:id", ProviderController.getProviderById);
router.post("/", ProviderController.createProvider);
router.delete("/:id", ProviderController.deleteProviderById);
router.put("/:id", ProviderController.updateProviderById);
router.delete("/", ProviderController.deleteAllProvider);

module.exports = router;
