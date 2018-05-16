const register = (req, res) => {
  console.log(req.body.username, req.body.password);
  req.app
    .get("db")
    .register([req.body.username, req.body.password])
    .then(response => {
      console.log("register HIT");
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};
const login = (req, res) => {
  req.app
    .get("db")
    .login([req.body.username, req.body.password])
    .then(response => {
      console.log("login HIT");
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

module.exports = {
  register,
  login
};
