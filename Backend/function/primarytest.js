const funct1 = (req, res) => {
  const v1 = req.params.p1;
  console.log(req.body);
  res.send(`This is  code for test3 with parameter ${v1}`);
};
const funct2 = (req, res) => {
  res.send("This is a test2!");
};
module.exports = {
  funct1,
  funct2,
};
