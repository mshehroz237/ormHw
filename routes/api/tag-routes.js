const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // include its associated Product data
  Tag.findAll(
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

// find a single tag by its `id`
router.get('/:id', (req, res) => {
  // include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      Product
    ]
  })
    //error funcationality and displaying it in json
    .then(dbUserData => {
      res.json(dbUserData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});
//creating a post to create a new tag
router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  }).then(dbUserData => {
    res.json(dbUserData)
  })
    //error funcationality and displaying it in json

    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});
//using put to update using the paramater 
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
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
});
//creating a destroy function which will destroy based on the id
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
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
});

module.exports = router;
