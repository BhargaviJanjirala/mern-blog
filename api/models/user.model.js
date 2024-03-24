import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          // Regular expression to validate email format
          return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(v);
        },
      },
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://tse2.mm.bing.net/th?id=OIP.eCrcK2BiqwBGE1naWwK3UwHaHa&pid=Api&P=0&h=180",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
