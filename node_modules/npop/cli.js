#!/usr/bin/env node
const { exec } = require("child_process");

const fs = require("fs");

exec("echo installing things and stuff", (error, data, getter) => {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log(data);
});

fs.mkdir("./nPoP", { recursive: true }, (err) => {
  if (err) throw err;
  exec("echo Created root file", (error, data, getter) => {
    if (error) {
      console.log("error", error.message);
      return;
    }
    console.log(data);
  });
});

exec("cd nPoP && echo gitignorifying", (error, data, getter) => {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log(data);
});

fs.writeFile(
  "./nPoP/.gitignore",
  `.gitignore
node_modules
  `,
  (err) => {
    if (err) throw err;
    exec("echo Created .gitignore", (error, data, getter) => {
      if (error) {
        console.log("error", error.message);
        return;
      }
      console.log(data);
    });
  }
);
if (process.platform === "win32") {
  exec(
    "echo You runnin Wandows && echo package JSON created.",
    (error, data, getter) => {
      if (error) {
        console.log("error", error.message);
        return;
      }
      console.log(data);
    }
  );
  fs.writeFile(
    "./nPoP/package.json",
    `{
      "name":"newnpopsite",
    "version":"1.0.0",
      "description": "My new site made with nPoP",
        "main": "server.js",
        "scripts": {
          "start": "nodemon server.js",
          "pop": "start http://localhost:3333 && nodemon server.js"
        },
        "author": "Shyaboi"
      }`,
    (err) => {
      if (err) throw err;
    }
    
    );
    console.log("package JSON made for windows");
} 
if(process.platform === "darwin")  {
  exec(
    `echo You runnin ${process.platform} && echo package JSON created.`,
    (error, data, getter) => {
      if (error) {
        console.log("error", error.message);
        return;
      }
      console.log(data);
    }
  );
  fs.writeFile(
    "./nPoP/package.json",
    `{
      "name":"newnpopsite",
      "version":"1.0.0",
        "description": "My new site made with nPoP",
        "main": "server.js",
        "scripts": {
          "start": "node server.js",
          "pop": "open http://localhost:3333 && nodemon server.js"
        },
        "author": "Shyaboi",
        "license": "ISC",
        "dependencies": {
        }
      }`,
    (err) => {
      if (err) throw err;
      console.log("package JSON made for macs");
    }
  );
}


if(process.platform === "linux")  {
  exec(
    `echo You runnin ${process.platform} && echo package JSON created.`,
    (error, data, getter) => {
      if (error) {
        console.log("error", error.message);
        return;
      }
      console.log(data);
    }
  );
  fs.writeFile(
    "./nPoP/package.json",
    `{
      "name":"newnpopsite",
      "version":"1.0.0",
      "description": "My new site made with nPoP",
      "main": "server.js",
      "scripts": {
        "start": "node server.js",
        "pop": "nodemon server.js"
      },
      "author": "Shyaboi",
      "license": "ISC",
      "dependencies": {
      }
    }`,
    (err) => {
      if (err) throw err;
      console.log("package JSON made for linux");
    }
  );
}

// exec("cd nPoP && npm i express", (error, data) => {
// 	if(error){
// 		console.log("error",error.message);
// 		return;
// 	}

// 		console.log("data",data);

//   console.log("express installed")
// });

exec(
  "cd nPoP && npm i npop express nodemon",
  (error, data, getter) => {
    if (error) {
      console.log("error", error.message);
      return;
    }
    console.log(data);
    console.log("nPoP installed itself, nodemon and exxoresss");
    console.log("starting yoour site ( ͡° ͜ʖ ͡°)");
    console.log("Have fun with nPoP!");
    console.log("If you want to close the server press ctrl+c");
    console.log("Server running on http://localhost:3333");

  }
);

// exec("cd nPoP && npm i nodemon", (error, data, getter) => {
//   if(error){
//     console.log("error",error.message);
// 		return;
// 	}
//   console.log("nPoP installed itself")
//   console.log("Have fun with nPoP!")
// });

fs.writeFile(
  "./nPoP/server.js",
  `var PoP = require("npop");
  var n = new PoP()
  
  n.pop()`,
  (err) => {
    if (err) throw err;
  }
);
console.log("Server Created");

fs.mkdir("./nPoP/views", { recursive: true }, (err) => {
  if (err) throw err;
});
console.log("views folder created");

exec("cd nPoP && cd views", (error, data, getter) => {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log(data);
  console.log("view move");
});

fs.writeFile(
  "./nPoP/views/index.html",
  `<html>
  <head>
      <title>nPoP</title>
      <link rel="stylesheet" href="style.css">
  </head>

  <body>
      <canvas id="tv-screen"></canvas>
      <div id="ss">nPoP
        <br>
      <a href="/index" id="index">Documentation</a>
<br>
      <a href="/dexy" id="dexy">Dexy</a>
    </div>
  </body>
  <script src="dvd.js"></script>
</html>`,
  (err) => {
    if (err) throw err;
  }
);
console.log("index.html created");

fs.writeFile(
  "./nPoP/views/index2.html",
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>nPoP</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <div id="mainContainer">
      <h1>Documentation</h1>
      a 2nd page for things. (This is very much a work in progress.)
      <a href="/">home</a>
      <a href="/dexy">dexy</a>
      <h1 id="npop">nPoP</h1>
      <p>
        In its current form (nPoP ex) nPoP is a quick-start package/dead simple
        server built on top of the express framework. <br />
      </p>
      <h1 id="installation-there-are-two-option-for-using-installing-npop">
        Installation: There are two option for using/installing nPoP
      </h1>
      <h2 id="npx-npop">npx npop</h2>
      <p>
        Make sure you already have Nodejs installed, to check, open a terminal and
        type
      </p>
      <code><span class="hljs-keyword">node --version</span> </code>
      <p>
        If you do not have Nodejs installed, you can find a link here
        <a href="https://nodejs.org/en/download/"
          >https://nodejs.org/en/download/</a
        >
      </p>
      <p>
        Once you have node installed, simply open a terminal to the
        directory/folder you want nPoP installed in, and type:
      </p>
      <pre><code>npx npop</code></pre>
      <p>
        A full nPoP server with 3 routes and associated HTML files with routes set
        up to handle images/js/css/ and a JSON get/post route. This will all be
        set up and if you have vs code, your editor will open the nPoP folder and
        your default browser will open to the default localhost:3333
      </p>
      <h2 id="install-the-starter-package">Install the Starter Package</h2>
      <p>To install a barebones nPoP server. In your open project,</p>
      <pre><code>npm install npop</code></pre>
      <p>
        this will have nPoP installed with express as a dependency and those that
        come with express(body-parser...etc)
      </p>
      <p>to use nPoP in your Nodejs project add:</p>
      <pre><code>const <span class="hljs-keyword">PoP</span> = require(<span class="hljs-string">"npop"</span>);
      const n = <span class="hljs-keyword">new</span> <span class="hljs-keyword">PoP</span>()
      n.<span class="hljs-keyword">pop</span>()</code></pre><p>
        If you have made a &quot;views&quot; dicrectory/folder the server will
        have 3 default routes pointed at the views dicrectory/folder.
      </p>
      <h1 id="npop-parameters">nPoP Parameters</h1>
      <p>You can pass in the following parameters into the npop function(example shows default parameters):</p>
      <pre><code>npop(<span class="hljs-name">dexyGet</span>(),
          PORT<span class="hljs-symbol">:process</span>.env.PORT||<span class="hljs-number">3333</span>,
          route1:<span class="hljs-string">"/"</span>,
          route2:<span class="hljs-string">"/index"</span>,
          route3:<span class="hljs-string">"/dexy"</span>
          (<span class="hljs-name">path</span> to index.hmtl)=<span class="hljs-string">"../../views/index.html"</span>,
          (<span class="hljs-name">path</span> to <span class="hljs-number">2</span>nd hmtlpage)=<span class="hljs-string">"../../views/index2.html"</span>,
          (<span class="hljs-name">not</span> currently in use)=<span class="hljs-string">"string"</span>
      )</code></pre>
      <p>An example of leaving the default values and only changing the later paramerters:</p>
      <pre><code><span class="hljs-keyword">const</span> PoP = <span class="hljs-built_in">require</span>(<span class="hljs-string">"npop"</span>);
      <span class="hljs-keyword">const</span> n = <span class="hljs-keyword">new</span> PoP()
      n.pop(<span class="hljs-literal">undefined</span>, <span class="hljs-number">3000</span>)</code></pre><p>In the above function the dexyGet function is left default, and only the port has been set manualy. This can be done for any number of paramerters that want to be left default, just use &quot;undefined&quot; in the parameters place.</p>
      
      <h1 id="dexyget-">dexyGet()</h1>
      <p>dexyGet( ) is the first customizable route function in nPoP</p>
      <p>
        Basically dexyGet( ) is the function parameter of the Express GET request
        for route3 built into nPoP.
      </p>
      <p>an example of how the dexyGet( ) route is working is like so:</p>
      <pre><code>app.<span class="hljs-keyword">get</span>(route3, 
          dexyGet(<span class="hljs-built_in">request</span>,<span class="hljs-built_in">response</span>){}
      )</code></pre>
      <p>
        The parameters inside of the dexyGet function are user created variables
        such as:
      </p>
      <pre><code><span class="hljs-function"><span class="hljs-title">dexyGet</span><span class="hljs-params">(yourReqVar, yourResVar)</span></span>{}</code></pre>
      <p>
        For brevity; I will be referring to the variables hereafter as req and
        res. So if you want to customize the dexyGet( ) route, you can do so just
        like the function parameter of an express GET route.
      </p>
      <p>In the first parameter of the nPoP function Write:</p>
      <pre><code><span class="hljs-keyword">const</span> PoP = <span class="hljs-built_in">require</span>(<span class="hljs-string">"npop"</span>);
      <span class="hljs-keyword">const</span> n = <span class="hljs-keyword">new</span> PoP()
      n.pop(<span class="hljs-function">(<span class="hljs-params">req,res</span>) =&gt;</span> {res.send(<span class="hljs-string">'hiwrld'</span>)})</code></pre><p>Or you can pass in the function as a variable such as:</p>
      <pre><code><span class="hljs-keyword">const</span> PoP = <span class="hljs-built_in">require</span>(<span class="hljs-string">"npop"</span>);
      <span class="hljs-keyword">const</span> n = <span class="hljs-keyword">new</span> PoP()    
      <span class="hljs-keyword">const</span> dexyGet = <span class="hljs-function">(<span class="hljs-params">req,res</span>)=&gt;</span> {res.send(<span class="hljs-string">'hiwrld'</span>)}
      n.pop(dexyGet)</code></pre>
      <p>
        All sequential parameters are optional and will be set by default unless
        otherwise given a parameter.
      </p>
    </body>
  </html>
  </div>`,
  (err) => {
    if (err) throw err;
  }
);
console.log("index2.html created");

fs.writeFile(
  "./nPoP/views/dexy.html",
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
console.log("dexy.html created");

fs.mkdir("./nPoP/views/imgs", { recursive: true }, (err) => {
  if (err) throw err;
});
console.log("images folder created");

exec(
  "cd nPoP/views/imgs && curl -o logo.png https://i.ibb.co/sWr5Tpb/logo.png",
  (error, data) => {
    if (error) {
      console.log("error", error.message);
      return;
    }

    console.log(data);

    console.log("cuuuuuuuuuuuuuuurl");
  }
);

exec(
  "echo making it downloaded logo",
  (error, data) => {
    if (error) {
      console.log("error", error.message);
      return;
    }
    console.log("cd");
    console.log(data);
  }
);


fs.mkdir("./nPoP/views/styles", { recursive: true }, (err) => {
  if (err) throw err;
});
exec(
  "cd nPoP/views/styles && echo making it stlyeish",
  (error, data) => {
    if (error) {
      console.log("error", error.message);
      return;
    }
    console.log("cd");
    console.log(data);
  }
);

fs.writeFile(
  "./nPoP/views/styles/style.css",
  `   * {margin:0; padding: 0;}
  #ss{
    text-align: center;
   position: absolute;
   font-size: 98px;
   top: 5vw;
   right: 40vw;
   overflow: hidden;
   color: blue;
 }
 
 #mainContainer{
   padding: 3rem 26rem 26rem 26rem;
 }


 
 body::-webkit-scrollbar {
     display: none;
   }

code{
  background: #000;
  color: green;
}`,
  (err) => {
    if (err) throw err;
  }
);
console.log("style.css created");

exec("cd nPoP/views && echo making JavaScript", (error, data) => {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log("makeing js folder");
  console.log(data);
});

fs.mkdir("./nPoP/views/js", { recursive: true }, (err) => {
  if (err) throw err;
});

exec("cd nPoP/views/js && echo making JavaScript2", (error, data) => {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log("makeing js file");
  console.log(data);
});

fs.writeFile(
  "./nPoP/views/js/dvd.js",
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
console.log("js homepage made");

exec("cd nPoP && git init", (error, data) => {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log(data);
});

exec("echo git initted", (error, data) => {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log(data);
});

const donus = function () {
  exec("cd nPoP && npm run pop", (error, data) => {
    if (error) {
      console.log("error", error.message);
      return;
    }
    exec("echo opening default browser to http://localhost:3333", (error, data) => {
      if (error) {
        console.log("You don't have vs code installed, or dont have the PATH set.");
        return;
      }
  
      console.log(data);
  
    });

  });

};
const doonus = function () {
  exec("cd nPoP && code .", (error, data) => {
    if (error) {
      console.log("You don't have vs code installed, or dont have the PATH set.");
      return;
    }

    console.log(data);
    console.log("opening VS Code");

  });
};
const linuxDonus = function () {
  exec("x-www-browser http://localhost:3333 && echo opening default browser to http://localhost:3333", (error, data) => {
    if (error) {
      console.log("You don't have vs code installed, or dont have the PATH set.");
      return;
    }

    console.log(data);

  });
  exec("x-terminal-emulator && nano server.js", (error, data) => {
    if (error) {
      return;
    }

    console.log(data);
    console.log("Opening nano you linux 1337");

  });
};
if (process.platform === "linux") {
  setTimeout(() => {
    linuxDonus()
  }, 15000);
}
if (process.platform === "win32" || "darwin") {
  setTimeout(() => {
    donus();
    doonus();
  }, 15000);
}

