import { taskInfo } from "../model/task-info.model.js"

const getAllTask = async (req, res) => {

    try {
        const allTask = await taskInfo.find();
        if (!allTask) {
            res
                .status(401)
                .json({ Error: "No task is found !!!" })
        }

        console.log("All task ==>>", allTask);
        return res
            .status(201)
            .json({
                Success: "All task has  fetched",
                data: allTask
            })

    } catch (error) {
        return res.status(500).json({ Error: "Get all task func is not working" });

    }

}

export default getAllTask;