const mongoose = require("../mongoConfid");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

module.exports = {
  model: User,
  create: params => new User(params).save()
};
