const express = require('express')
const app = express()
const PORT=process.env.PORT ||2000

app.use(function(eq,res,next)){
  if(req.headers['x-fowarded-proto']=='https'){
    res.redirect('http://'+req.hostname+req.url);
  }else {
    next();
  }
});

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Website is running on localhost:'+PORT);
});
