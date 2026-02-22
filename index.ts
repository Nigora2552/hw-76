import express from "express";
import messagesRouter from "./routes/messages";
import fileDb from "./fileDb";


const app = express();
const port = 8000;


app.use(express.json());

app.use('/messages', messagesRouter)


const run = async () => {
    await fileDb.init();

    app.listen(port, () => {
        console.log('Server is running on port ' + port);
    });
};

 run().catch((err) => console.error(err))




