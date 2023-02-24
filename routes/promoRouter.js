const express = require('express');
const bodyparser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyparser.json());

promoRouter.route('/')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req,res,next) => {
    res.end('List of the promoter is in progress');
})
.post((req,res,next) => {
    res.end('will add the promoter: ' + req.body.name + 'with description' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403
    res.end('PUT method not supported')
})
.delete((req,res,next) => {
    res.end('Deleting all promoters');
});

promoRouter.route('/:promoId')
.get((req,res,next) => {
    res.end('Will send details of the promoter ' + req.params.promoId + ' to you!');
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promoters/' + req.params.promoId);
})
.put((req,res,next) => {
    res.write('Updating the promoter: ' + req.params.promoId + '\n');
    res.end('Will update the promoter: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req,res,next) =>{
    res.end('Deleting promoter: ' + req.params.promoId);
});

module.exports = promoRouter;