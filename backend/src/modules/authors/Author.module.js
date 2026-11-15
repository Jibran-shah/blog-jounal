import { Schema, model } from "mongoose";

const authorSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
      maxlength: 300,
    },
    avatar: {
      url: String,
      publicId: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Author = model("Author", authorSchema);
