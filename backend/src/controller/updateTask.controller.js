import { taskInfo } from "../model/task-info.model.js";

const handelUpdateController = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res
                .status(400)
                .json({ message: "Id invaild !!!" })
        }






        const taskDetails = await taskInfo.findByIdAndUpdate(id,
            {
                $set: { ...req.body }
            }
            ,
            { new: true },//return the updated user notifiction
        );
        console.log("UPDATED TASK==>", taskDetails);

        if (!taskDetails) {
            res
                .status(404)
                .json({ message: "Task not found !!!" })
        }

        return res
            .status(201)
            .json({
                success: "Task updated successfuly",
                data: taskDetails
            })

    } catch (error) {
        console.log("handelUpdateController error : ", error);
        res.status(500).send('Task is not updated / edited successfuly');

    }
}

export default handelUpdateController;