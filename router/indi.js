const router = require('express').Router();
const apiKeyMiddleware =require('../middlewares/apikey');
router.get('/',(req,res)=>{
    res.render('index',{
        title: 'my home page'
    });
});
router.get('/about',(req,res)=>{
  res.render('about',{
      title:"my about page"
  });
}); 
router.get('/products',(req,res)=>{
    res.render('products',{
        title:"my product page"
    });
  }); 
  router.get('/api/products',(req,res)=>{
      res.json({'id':'123'});
  })
// router.get('/api/products',apiKeyMiddleware,(req,res)=>{
//     res.json([{
//         id:'123',
//         name:'chrome'
//     },
//     {
//         id:'124',
//         name:'firefox'
//     }
// ])
//     });














module.exports=router;