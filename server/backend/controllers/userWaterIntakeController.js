import asyncHandler from "express-async-handler";
import UserWaterIntake from "../models/userWaterIntakeModel.js";

const logWaterIntake = asyncHandler(async (req, res) => {
  const { litersDrank } = req.body;
  const date = new Date().toISOString().split("T")[0]; 

  let waterIntake = await UserWaterIntake.findOne({
    userId: req.user._id,
    date,
  });

  if (!waterIntake) {
    waterIntake = await UserWaterIntake.create({
      userId: req.user._id,
      date,
      litersDrank,
    });
    res.status(201).json(waterIntake);
  } else {t
    waterIntake.litersDrank += litersDrank;

    const updatedWaterIntake = await waterIntake.save();
    res.status(200).json(updatedWaterIntake);
  }
});

const updateWaterIntake = asyncHandler(async (req, res) => {
  const { litersDrank } = req.body;
  const { date } = req.params;
  const userId = req.user._id;

  const currentDate = date ? new Date(date) : new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];

  let waterIntake = await UserWaterIntake.findOne({
    userId,
    date: formattedDate,
  });

  if (waterIntake) {
    waterIntake.litersDrank = litersDrank;

    const updatedWaterIntake = await waterIntake.save();
    res.status(200).json(updatedWaterIntake);
  } else {
    waterIntake = new UserWaterIntake({
      userId,
      date: formattedDate,
      litersDrank,
    });

    const newWaterIntake = await waterIntake.save();
    res.status(201).json(newWaterIntake);
  }
});

const getUserWaterIntake = asyncHandler(async (req, res) => {
  const { date } = req.params;
  const userId = req.user._id;

  const startOfDay = new Date(date);
  startOfDay.setUTCHours(0, 0, 0, 0);

  const endOfDay = new Date(date);
  endOfDay.setUTCHours(23, 59, 59, 999);

  const waterIntake = await UserWaterIntake.findOne({
    userId,
    date: { $gte: startOfDay, $lte: endOfDay },
  });

  if (waterIntake) {
    res.json(waterIntake);
  } else {
    res.json({ litersDrank: 0 });
  }
});

export { logWaterIntake, updateWaterIntake, getUserWaterIntake };