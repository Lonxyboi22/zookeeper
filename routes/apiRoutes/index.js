const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeeperRoutes = require('../apiRoutes/zookeepers')

router.use(animalRoutes);
router.use(zookeeperRoutes);

module.exports = router;