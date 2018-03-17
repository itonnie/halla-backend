var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  profile_photo_url: String,
  online: Boolean,
  authenticated: Boolean,
  account_status: String,
  active: Boolean,
  country: String,
  phone: Number,
  bio: String,
  fullName: String,
  homeTown: String,
  date_created: { type: Date, default: Date.now() },
  last_seen: Date,
  location: {
    lat: Number,
    lon: Number,
    speed: Number,
    altitude: Number,
  },
  stories: [],
});

var User = mongoose.model("User", userSchema, "users");

module.exports = User;
