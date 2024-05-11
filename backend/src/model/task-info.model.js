import { Timestamp } from "mongodb"
import mongoose, { Schema } from "mongoose"

/*
1.task heading
2. task due date
3. task priority
4. task status (completed/incomplete)
5. task description in array
*/

const taskDescTypeSchema = new Schema({
    taskDescType: String

})

const taskInfoSchema = new Schema({
    taskHeading: {
        type: String,
        required: true
    },
    taskDueDate: {
        type: String,
        required: true
    },
    taskPriority: {
        type: String,
        enum: ["low", "medium", "high"],
    },
    taskStatus: {
        type: Boolean,
        default: false
    },
    taskDescription: [String(taskDescTypeSchema)],



},
    {
        timestamps: true
    }
)

export const taskInfo = mongoose.model("taskInfo", taskInfoSchema)
