import mongoose from "mongoose";
import { type } from "os";

const { Schema, model } = mongoose;

const contentNodeSchema = new Schema(
  {
    id:{
      type:String,
      required:true,
    },

    parentId:{
      type:String
    },

    type: {
      type: String,
      required: true,
    },

    content: {
      type: Schema.Types.Mixed,
      default: null,
    },

    children: {
      type: [Schema.Types.Mixed],
      default: [],
    },
  },
  { _id: false }
);

contentNodeSchema.add({
  children: {
    type: [contentNodeSchema],
    default: [],
  },
});


contentNodeSchema.add({
  parentId: {
    type: [contentNodeSchema],
    default: [],
  },
});

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: Schema.Types.ObjectId,
      ref: "File",
      default: null,
    },

    content: {
      type: contentNodeSchema,
      default:{
        type:"default",
        content:{},
        children:[]
      }
    },

    category:{
      type: Schema.Types.ObjectId,
      ref:"Category",
      required:true
    },
    
    author: {
      type: Schema.Types.ObjectId,
      ref: "Author"
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    publishedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

export const Blog = model("Blog", blogSchema);