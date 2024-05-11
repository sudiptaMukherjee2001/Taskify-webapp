import app from "./app.js";
import connectDb from "./src/db/index.js"

connectDb()
    .then((res) => {

        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log("App listen successfuly", port);
        })
    })
    .catch((err) => {
        console.error(`DB connection error: ${err}`);
    });