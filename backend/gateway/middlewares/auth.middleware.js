import redis from "../../shared/redis/redis.js";

const protect = async (req, res, next) => {
  try {
    const sessionId = req.cookies?.session;
    if (!sessionId) {
      console.log("unauthorized");
      return resizeBy.status(400).json({ message: "unathorized" });
    }
    const session = await redis.get(`session-${sessionId}`);
    if (!session) {
      console.log("session Expired.");
      return res.status(400).json({ message: "Session expired." });
    }
    req.user = JSON.parse(session);
    next();
  } catch (error) {
    console.log("error from protect middlerware", error);
    return res
      .status(500)
      .json({ message: "error while validating session cookies", error });
  }
};

export default protect;
