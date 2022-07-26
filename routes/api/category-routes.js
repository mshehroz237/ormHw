const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll(
    {
      include:[
        Product
      ]
    }
  )
  .then(dbUserData =>res.json(dbUserData))
  .catch(err =>{
    console.log(err);
    res.status(500).json(err)
    
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where:{
      id: req.params.id
    },
      include:[
        Product
      ]
  })
  .then(dbUserData =>{
    res.json(dbUserData)
  })
  .catch(err=>{
    console.log(err)
    res.status(500).json(err)
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  }).then(dbUserData =>{
    res.json(dbUserData)
  })
  .catch(err=>{
    console.log(err)
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    req.body
  ,{
    where: {
      id: req.params.id
    }
  } ) .then(dbUserData =>{
    res.json(dbUserData)
  })
  .catch(err=>{
    console.log(err)
    res.status(500).json(err)
  })
})
router.delete('/:id', (req, res) => {
  Category.destroy({
    where:{
      id: req.params.id
    }
  }) .then(dbUserData =>{
    res.json(dbUserData)
  })
  .catch(err=>{
    console.log(err)
    res.status(500).json(err)
  })
});

module.exports = router;
