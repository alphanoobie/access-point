const passwordutil = require("../utils/users");
const User = require("../models/users");

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    //validation
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Password is required and should be minimum 6 characters long");
    }
    let userExists = await User.findOne({ email }).exec();
    if (userExists) {
      return res.status(400).send("Email is taken");
    }
    //hash password
    const hashedPassword = await passwordutil.hashPassword(password);

    //register
    const user = new User({
      email,
      password: hashedPassword,
    });
    await user.save();
    console.log("saved user", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try Again");
  }
};

const login = async (req, res) => {
  try {
    //console.log(req.body)
    const { email, password } = req.body;
    //check if db has user
    const user = await User.findOne({ email }).exec();
    if (!user) return res.status(400).send("No User Found");
    //check pw
    const match = await passwordutil.comparePassword(password, user.password);
    if (!match) {
      return res.status(400).send("Wrong password");
    }
    res.json(user)
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try Again");
  }
};

module.exports = { signup, login };
