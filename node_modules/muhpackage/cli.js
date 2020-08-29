#!/usr/bin/env node
const { exec } = require("child_process");

const fs = require("fs");

exec("echo installing things and stuff", (error, data, getter) => {
  if(error){
    console.log("error",error.message);
		return;
	}
 console.log(data)
});


fs.mkdir("./muhpackage", { recursive: true }, (err) => {
  if (err) throw err;
  exec("echo Created root file", (error, data, getter) => {
    if(error){
      console.log("error",error.message);
      return;
    }
   console.log(data)
  });

});

fs.writeFile(
  "./muhpackage/.gitignore",
  `.gitignore
  noce_modules
  `,
  (err) => {
    if (err) throw err;
   exec("echo Created .gitignore", (error, data, getter) => {
    if(error){
      console.log("error",error.message);
      return;
    }
   console.log(data)})
  }
);
if (process.platform === "win32") {
  exec("echo You runnin Wandows && echo package JSON created.", (error, data, getter) => {
    if(error){
      console.log("error",error.message);
      return;
    }
   console.log(data)})
  fs.writeFile(
    "./muhpackage/package.json",
    `
    {
        "description": "My new site made with nPoP",
        "main": "server.js",
        "scripts": {
          "start": "nodemon server.js",
          "pop": "start http://localhost:3333 && npm start"
        },
        "keywords": [
          "many"
        ],
        "author": "Shyaboi",
        "license": "ISC",
        "dependencies": {
        }
      }`,
    (err) => {
      if (err) throw err;
    }
  );
    
} else {
  exec(`echo You runnin ${process.platform} && echo package JSON created.`, (error, data, getter) => {
    if(error){
      console.log("error",error.message);
      return;
    }
   console.log(data)})
 fs.writeFile(
    "./muhpackage/package.json",
    `
    {
        "description": "My new site made with nPoPr",
        "main": "server.js",
        "scripts": {
          "start": "nodemon server.js",
          "pop": "open http://localhost:3333 && npm start"
        },
        "keywords": [
          "many"
        ],
        "author": "Shyaboi",
        "license": "ISC",
        "dependencies": {
        }
      }`,
    (err) => {
      if (err) throw err;
      console.log("package JSON made (unix/gnu build)")
    }
  );
}





// exec("cd muhpackage && npm i express", (error, data) => {
// 	if(error){
// 		console.log("error",error.message);
// 		return;
// 	}

// 		console.log("data",data);

//   console.log("express installed")
// });



exec("cd muhpackage && npm i muhpackage express nodemon", (error, data, getter) => {
  if(error){
    console.log("error",error.message);
		return;
  }
  console.log(data)
  console.log("muhpackage installed itself, nodemon and exxoresss")
  console.log("starting yoour site ( ͡° ͜ʖ ͡°)")
  console.log("Have fun with muhpackage!")
  console.log("If you want to close the server press ctrl+c")
});

// exec("cd muhpackage && npm i nodemon", (error, data, getter) => {
//   if(error){
//     console.log("error",error.message);
// 		return;
// 	}
//   console.log("muhpackage installed itself")
//   console.log("Have fun with muhpackage!")
// });


fs.writeFile(
  "./muhpackage/server.js",
  `var Muhpackage = require("muhpackage");
  var server = new Muhpackage()
  
  server.pop()`,
  (err) => {
    if (err) throw err;
  }
  );
  console.log("Server Created")


  
  
  fs.mkdir("./muhpackage/views", { recursive: true }, (err) => {
    if (err) throw err;
  });
  console.log("views folder created")
     
  
  
  
  exec("cd muhpackage && cd views", (error, data, getter) => {
            if(error){
              console.log("error",error.message);
              return;
            }
            console.log(data)
            console.log("view move")
          });



fs.writeFile(
  "./muhpackage/views/index.html",
  `<html>
  <head>
      <title>nPoP</title>
      <link rel="stylesheet" href="style.css">
  </head>

  <body>
      <canvas id="tv-screen"></canvas>
      <div id="ss">nPoP</div>
      <a href="/index" id="index">Index</a>
      <a href="/dexy" id="dexy">Dexy</a>

  </body>
  <script src="dvd.js"></script>
</html>`,
  (err) => {
    if (err) throw err;
  }
  );
  console.log("index.html created")


fs.writeFile(
  "./muhpackage/views/index2.html",
  `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nPoP</title>
    </head>
    <body>
    <h1>anoterh 1 </h1>
    a 2nd page for things.
    This is very much a work in progress.
    <a href="/">home</a>
    <a href="/dexy">dexy</a>
    
    </body>
    </html>`,
  (err) => {
    if (err) throw err;
  }
);
console.log("index2.html created")


fs.writeFile(
  "./muhpackage/views/dexy.html",
  `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nPoP</title>
    </head>
    <body>
     jsons here maybe?
      <a href="/index">index</a>
      <a href="/">home</a>
      
      </body>
      </html>`,
  (err) => {
    if (err) throw err;
  }
);
console.log("dexy.html created")



fs.mkdir("./muhpackage/views/imgs", { recursive: true }, (err) => {
  if (err) throw err;
});
console.log("images folder created")

exec("cd muhpackage/views/imgs && curl -o logo.png https://i.ibb.co/sWr5Tpb/logo.png", (error, data) => {
	if(error){
		console.log("error",error.message);
		return;
	}

		console.log(data);

  console.log("cuuuuuuuuuuuuuuurl")
});

exec("cd muhpackage/views/styles && echo making it stlyeish", (error, data) => {
	if(error){
		console.log("error",error.message);
		return;
	}
  console.log("cd")
		console.log(data);
});

fs.mkdir("./muhpackage/views/styles", { recursive: true }, (err) => {
  if (err) throw err;
});
exec("cd muhpackage/views/styles && echo went to style folder", (error, data) => {
	if(error){
		console.log("error",error.message);
		return;
	}
  console.log("cd")
		console.log(data);
});

fs.writeFile(
  "./muhpackage/views/styles/style.css",
  `  * {margin:0; padding: 0; color:red;}
  #ss{
    text-align: center;
   position: absolute;
   font-size: 98px;
   top: 5vw;
   right: 40vw;
   overflow: hidden;
   color: blue;
 }
 
 
  #index{
     position: absolute;
     font-size: 65px;
     top: 10vw;
     right: 50vw;
     overflow: hidden;
 }
 
 
 #dexy{
     position: absolute;
     font-size: 65px;
     top: 20vw;
     right: 50vw;
     overflow: hidden;
 }
 
 body::-webkit-scrollbar {
     display: none;
   }`,
  (err) => {
    if (err) throw err;
  }
);
console.log("style.css created")

exec("cd muhpackage/views && echo making JavaScript", (error, data) => {
	if(error){
		console.log("error",error.message);
		return;
	}
  console.log("makeing js folder")
		console.log(data);
})

fs.mkdir("./muhpackage/views/js", { recursive: true }, (err) => {
  if (err) throw err;
});

exec("cd muhpackage/views/js && echo making JavaScript2", (error, data) => {
	if(error){
		console.log("error",error.message);
		return;
	}
  console.log("makeing js file")
		console.log(data);
})


fs.writeFile(
  "./muhpackage/views/js/dvd.js",
  `// stolen from https://github.com/AlessioMaddaluno/bouncing-dvd-logo

  let speed = 20;
  let scale = 0.40; 
  let canvas;
  let ctx;
  let logoColor;
  
  let dvd = {
      x: 200,
      y: 300,
      xspeed: 4,
      yspeed: 4,
      img: new Image()
  };
  
  (function main(){
      canvas = document.getElementById("tv-screen");
      ctx = canvas.getContext("2d");
      dvd.img.src = 'logo.png';
  
      //Draw the "tv screen"
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
  
      pickColor();
      update();
  })();
  
  function update() {
      setTimeout(() => {
          //Draw the canvas background
          ctx.fillStyle = '#000';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          //Draw DVD Logo and his background
          ctx.fillStyle = logoColor;
          ctx.fillRect(dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
          ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
          //Move the logo
          dvd.x+=dvd.xspeed;
          dvd.y+=dvd.yspeed;
          //Check for collision 
          checkHitBox();
          update();   
      }, speed)
  }
  
  //Check for border collision
  function checkHitBox(){
      if(dvd.x+dvd.img.width*scale >= canvas.width || dvd.x <= 0){
          dvd.xspeed *= -1;
          pickColor();
      }
          
      if(dvd.y+dvd.img.height*scale >= canvas.height || dvd.y <= 0){
          dvd.yspeed *= -1;
          pickColor();
      }    
  }
  
  //Pick a random color in RGB format
  function pickColor(){
      r = Math.random() * (254 - 0) + 0;
      g = Math.random() * (254 - 0) + 0;
      b = Math.random() * (254 - 0) + 0;
  
      logoColor = 'rgb('+r+','+g+', '+b+')';
  }`,
  (err) => {
    if (err) throw err;
  }
);
console.log("js homepage made")

exec("git init && echo initted git", (error, data) => {
  if(error){
    console.log("error",error.message);
    return;
  }

    console.log(data);
console.log("opening default code editor")
    

});


const donus = function () {
exec("cd muhpackage && npm run pop", (error, data) => {
	if(error){
		console.log("error",error.message);
		return;
	}
  console.log("pop script starting")

		console.log(data);

    

});}
const doonus = function () {
  exec("cd muhpackage && code .", (error, data) => {
    if(error){
      console.log("error",error.message);
      return;
    }
  
      console.log(data);
  console.log("opening default code editor")
      
  
  });}

setTimeout(() => {
donus()  
doonus()
}, 10000);
