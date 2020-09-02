const PoP = require("npop");
const n = new PoP()
const zipGet = (req, res) =>{
    const file = `${__dirname}/nPoP-installer-win32-x64.zip`;
    res.download(file);
}
  
n.pop(
    undefined, 
    zipGet, 
    undefined, 
    undefined,
    [undefined,undefined, route3="/downloadzip"]
    )

