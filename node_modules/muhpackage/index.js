// Main class exported with extra  legacy functions
  class Pop {
    hello() {
        console.log('Hello npm friends');
    }

    nThing(){
      console.log(pop);

    }

    shyaboi() {
      console.log('Shysadasaboi!');
  }
}
module.exports = Pop



class Server extends Pop {

  pop(
  pN=process.env.PORT||3333,
   route1="/",
    route2="/index",
     route3="/dexy",
      index="../../views/index.html",
      dex="../../views/index2.html",
       dexy="../../views/dexy.html"
        ){
    
    const express = require('express')
    var path = require('path');
    const app = express()
    // var pNum = pN
    // var portNumber = process.env || pNum
    const port = pN

    app.use("/", express.static("./views/imgs"));
    app.use("/index", express.static("./views/imgs"));
    app.use("/dexy", express.static("./views/imgs"));
    app.use("/dexy", express.static("./views/js"));
    app.use("/index", express.static("./views/js"));
    app.use("/", express.static("./views/js"));
    app.use("/", express.static("./views/styles"));
    app.use("/index", express.static("./views/styles"));
    app.use("/dexy", express.static("./views/styles"));


    

    app.get(route1, function (req, res, next) {
  res.sendFile(path.join(__dirname, index));
});

app.get(route2, function (req, res, next) {
  res.sendFile(path.join(__dirname, dex));
});

app.get(route3, function (req, res, next) {
  res.json([{ Expample: 'This is some data that could be resed by nPoP if you set the server GET settings.' }, {anoter1:"this is more data"}]);
});

app.post(route3, function (req, res, next) {
 res.json({ Title: "This is POST data"}, {Expample: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'});
});

    
    app.listen(port, () => console.log(`App listening at http://localhost:${port}`))


  }}

module.exports = Server


// var pak = new Pop()
// var ok = new Ok()


// pak.pop('fdsgdg')
// ok.otherThing()
// pak.shyaboi()