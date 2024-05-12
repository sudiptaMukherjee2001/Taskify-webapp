import { taskInfo } from "../model/task-info.model.js";

const handelTaskCreation = async (req, res) => {
    /*
    1. get all the task from user
    2. check fields are empty or not . If fields are empty then return a error
    3.If all the fields are filled properly then store it to the database
    4. return a res with status code , data and message .
    */

    const { taskHeading, taskDueDate, taskPriority, taskDescription } = req.body;
    if (!(taskHeading && taskDueDate && taskPriority && taskDescription)) {
        return res
            .status(401)
            .json({
                error: "please filled all the fields"
            })
    }

    //This create func is used to saved the data in mongodb
    const task_Info_Instance = await taskInfo.create({
        taskHeading,
        taskDueDate,
        taskPriority,
        taskDescription
    })

    console.log("This is instance of model taskInfo==>", task_Info_Instance);
    return res
        .status(201)
        .json({
            success: "Task created successfuly",
            data: task_Info_Instance
        })


}

export default handelTaskCreation;