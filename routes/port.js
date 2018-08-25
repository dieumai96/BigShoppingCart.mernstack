const express = require('express');
const Port = require('./../models/port');
const router = express.Router();


// @route   GET api/admin/Test
// @desc    test admin
// @access  Public

router.get('/test', (req, res) => {
})

router.post('/add-port',(req,res,next)=>{
    Port.findOne({port : req.body.port})
    .then(rs => {
      if(rs){
        res.status(400).json({
          message : 'Cổng này đã tồn tại'
        });
      }else{
          const newPort = new Port({
            port  : req.body.port,
          })

          newPort.save()
          .then(rs => res.json(rs))
          .catch(err => res.status(400).json(err));
      }
    })
})
module.exports = router;