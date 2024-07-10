const express = require("express");

const router = express.Router();

const Employees = require("../models/employee");

//test
router.get("/test", (req, res) => res.send("Employee routes is working"));

router.post("/", (req, res) => {
    Employees.create(req.body)
    .then(() => res.json({msg:"Employee added successfully"}))
    .catch(()=> res.status(400).json({msg:"Employee adding failed"}));
});

router.get("/", (req, res) => {
    Employees.find()
    .then((employees) => res.json(employees))
    .catch(()=> res.status(400).json({msg:"No employees found"}));
});

router.get("/:id", (req, res) => {
    Employees.findById(req.params.id)
    .then((employees) => res.json(employees))
    .catch(()=> res.status(400).json({msg:"cannot find this  employees"}));
});

router.put("/:id",(req, res) => {
    Employees.findByIdAndUpdate(req.params.id, req.body)
   .then(() => res.json({msg:"Update successfully"}))
   .catch(() => res.status(400).json({msg: "Update failed"}));

});

router.delete("/:id", (req, res) => {
    Employees.findByIdAndDelete(req.params.id)
   .then(() => res.json({msg:"Delete successfully"}))
   .catch(() => res.status(400).json({msg: "Delete failed"}));
});

module.exports = router;