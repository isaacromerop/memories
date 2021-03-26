import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
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
  selectedFile: {
    type: String,
    required: false,
    trim: true,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
