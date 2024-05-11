import { taskInfo } from "../model/task-info.model.js";

const getAllCompletedTask = async (req, res) => {

    try {

        const { id } = req.params; //  it will get the params

        if (!id) {
            return res
                .status(400)
                .json({ message: 'No user id provided' });
        }

        const updateThestatusOfTask = await taskInfo.findByIdAndUpdate(id,
            { $set: { taskStatus: true } }
            ,
            { new: true }
        );

        console.log("update The status Of task==>", updateThestatusOfTask);

        if (!updateThestatusOfTask) {
            return res.status(400).json({ msg: "No Task found" });
        }

        return res
            .status(201)
            .json(
                {
                    success: "Task status updated successfuly",
                    updateThestatusOfTask
                }
            );
    } catch (error) {
        console.log("Error in getAllCompletedTask function", error);
    }


}

export default getAllCompletedTask;