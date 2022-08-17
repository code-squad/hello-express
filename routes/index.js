var express = require('express');
var router = express.Router();

const arr = [];
for (let i = 1; i <= 45; i++) arr.push(i);

const compare = (a, b) => {
  return a - b;
};

const lotto = ()=> {
  for (let i = 44; i >= 0; i--) {
    const j = parseInt(Math.random() * 1000) % (i + 1);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; 
  }
  const ret = arr.slice(0, 6);
  ret.sort(compare);
  return ret;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', lotto: lotto() });
});

module.exports = router;
