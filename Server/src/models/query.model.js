import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

const Query = mongoose.model("Query", querySchema);

export default Query;
