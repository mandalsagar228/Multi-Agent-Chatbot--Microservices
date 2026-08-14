import admin from "firebase-admin";
import { app } from "../config/firebase.js";
import User from "../models/user.model.js";
import { getAuth } from "firebase-admin/auth";
import redis from "../../../shared/redis/redis.js";

export const login = async (req, res) => {
  // const auth = admin.auth();
  try {
    const { token } = req.body;
    console.log("toekn from the server:", token);
    const decoded = await getAuth(app).verifyIdToken(token);
    let user = await User.findOne({ firebaseUid: decoded.uid });

    if (!user) {
      user = await User.create({
        firebaseUid: decoded.uid,
        name: decoded.name,
        email: decoded.email,
        avatar: decoded.picture,
      });
    }

    const sessionId = crypto.randomUUID();
    res.cookie("session", sessionId, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    await redis.set(`session-${sessionId},JSON.stringify({
      userId.user._id,
      name:user.name,
      email:user.email,
      avatar:user.avatar})`);
    console.log("user:", user);
    return res
      .status(200)
      .json({ message: "User created successfully.", data: user });
  } catch (error) {
    console.log("error from login server:", error);
    res.status(500).json({ message: error });
  }
};
