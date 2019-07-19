import HttStatus from "http-status-codes";

export const fetchUser = (req, res) => {
  console.log(req.user);
  return res.status(HttStatus.OK).json({ message: "Fetching User" });
};
