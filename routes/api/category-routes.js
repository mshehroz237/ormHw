const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//get to get all catoergy with product assosiation
router.get('/', (req, res) => {
  Category.findAll(
    {
      include: [
        Product
      ]
    }
  )
    //error funcationality and displaying it in json
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err)

    })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    //adding assosiation of product
    include: [
      Product
    ]
  })
    .then(dbUserData => {
      res.json(dbUserData)
    })
    //error funcationality and displaying it in json

    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});
//making a post to create 
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  }).then(dbUserData => {
    res.json(dbUserData)
  })
    //error funcationality and displaying it in json

    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});
//adding a put method to update using the id parameter
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    req.body
    , {
      where: {
        id: req.params.id
      }
      //error funcationality and displaying it in json
    }).then(dbUserData => {
      res.json(dbUserData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})
//creating a destroy function which will destroy based on the id
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbUserData => {
    res.json(dbUserData)
  })
    //error funcationality and displaying it in json
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});

module.exports = router;
