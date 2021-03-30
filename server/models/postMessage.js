import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  creator: {
    type: String,
    required: true,
    trim: true,
  },
  tags: [String],
  likes: {
    type: [String],
    default: [],
  },
  selectedFile: {
    type: String,
    required: false,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
