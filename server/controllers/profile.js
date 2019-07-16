import HttStatus from "http-status-codes";

export const fetchUser = (req,res) => {
    res.send(HttStatus.Ok).json({message:"Fetching User"});
}