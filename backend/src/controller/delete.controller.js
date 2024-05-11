import { taskInfo } from "../model/task-info.model.js";

const handelDeleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res
                .status(400)
                .json({ error: "Invalid task ID" });
        }
        // find the task by its id from the database and remove it
        const deletedTask = await taskInfo.findByIdAndDelete(id);

        console.log("Deleted task==>", deletedTask);

        if (!deletedTask) {
            return res
                .status(404)
                .json({ error: "No Task Found with this Id !!!" })
        }

        return res
            .status(200)
            .json({ Success: "Task deleted successfuly", data: deletedTask });

    } catch (error) {
        console.log("Error in handelDeleteTask function", error);

    }

}

export default handelDeleteTask;