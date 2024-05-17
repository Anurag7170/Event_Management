import User from "../models/user.model.js";

export const UserSignup = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;

    //if user exist
    const userExist = await User.find({
      $or: [{ email }, { phoneNumber }],
    });

    if (userExist.length > 0) {
      return res.json({
        success: false,
        userExist,
        message: `User is Already Exist`,
      });
    }
    const response = await User.create({
      name,
      email,
      password,
      phoneNumber,
      role: "ADMIN",
    });

    return res.json({
      success: true,
      message: `Event is created`,
      data: response,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: `Something went wrong ${error}`,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({
      email,
    }).select("-password");

    if (!userExist) {
      return res.json({
        success: false,
        message: `User does not Exist`,
      });
    }
    const options = {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    };

    const passwordCorrect = (userExist.password = password);
    if (!passwordCorrect) {
      return res.json({
        success: false,
        message: `Password is Incorrect`,
      });
    }

    res.cookie("USER", userExist, options).json({
      success: true,
      userExist,
      message: "Succesfully logined in ",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: `Something went wrong ${error}`,
    });
  }
};
