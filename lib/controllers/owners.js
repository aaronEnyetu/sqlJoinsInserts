const { Router } = require('express');
const { Owner } = require('../models/Owner');


module.exports = Router()
  .post('/', async (req, res, next) => {
    const owner = await Owner.insert(req.body); //{name: 'Franny'}
    if (req.body.petIds) {
      await Promise.all(req.body.petIds.map((id) => owner.addPetById(id)));
    }
    res.json(owner);
  });
