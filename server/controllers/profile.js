import HttStatus from "http-status-codes";

export const fetchUser = (req, res) => {
  return res.status(HttStatus.OK).json({ message: "Fetching User" });
};
