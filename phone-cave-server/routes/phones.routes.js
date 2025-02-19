const router = require("express").Router();
const data = require("../data/phones.json");

//GET "api/phones" Show all phones
router.get("/", (req, res, next) => {
    res.json(data)
})

//GET "api/phones/:id" Show phone details
router.get("/:id", (req, res, next) => {
    const { id } = req.params;
    const phone = data.find(eachPhone => eachPhone.id == id)
    res.json(phone)
})

module.exports = router;