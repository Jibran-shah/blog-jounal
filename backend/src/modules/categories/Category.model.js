import { Schema, model } from "mongoose"


const categorySchema = new Schema(
  {
    name:{
      type:String,
      required:true
    },

    slug:{
      type:String,
      unique:true,
      required:true
    },

    scope: {
      type: String,
      enum: ["blogs"],
      required: true,
    },

    count: {
      type: Number,
      default: 0,
      min: 0,
    }

  },

  {
    timestamps:true
  }
)

categorySchema.index("name");

export const Category = model("Category",categorySchema)