var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/:email', (req, res, next) => {
  res.type('application/vnd.api+json').send({
    id: req.params.email,
    type: 'user',
    data: {
      attributes: {
        firstName: 'Jack',
      }
    },
  });
});

module.exports = router;
