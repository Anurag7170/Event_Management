import Event from "../models/event.model.js";
import Query from "../models/query.model.js";

//ContactUs Api
export const contantUs = async (req, res) => {
  try {
    const { name, email, question, comments } = req.body;

    if (!name || !email || !question || !comments) {
      return res.status(400).json({
        success: false,
        message: `Fill all the input`,
      });
    }

    const response = await Query.create({
      name,
      email,
      question,
      comments,
    });

    return res.status(200).json({
      success: true,
      message: `Query is created`,
      Data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Query has not be created ${error}`,
    });
  }
};
export const eventCreate = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, budget, date, eventType, location } =
      req.body;

    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !budget ||
      !date ||
      !eventType ||
      !location
    ) {
      return res.status(400).json({
        success: false,
        message: `Fill all the input`,
      });
    }

    const response = await Event.create({
      fullName,
      email,
      phoneNumber,
      eventType,
      location,
      date,
      budget,
    });

    res.status(200).json({
      success: true,
      message: `Event is created`,
      Data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Event has not be created ${error}`,
    });
  }
};

export const getAllEvent = async (req, res) => {
  try {
    const result = await Event.find({});
    res.json({
      success: true,
      message: `Event is created`,
      Data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Event has not be created ${error}`,
    });
  }
};

// exports.deleteEvent = async(req,res) => {
//   const {id} = req.params;

// }
