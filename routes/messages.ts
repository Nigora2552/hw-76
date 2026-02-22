import express from "express";
import {Request, Response} from "express";
import fileDb from "../fileDb";

const messagesRouter = express.Router();


messagesRouter.get('/', async (_req: Request, res: Response) => {
    const allMessages = await fileDb.getMessage()
    res.send(allMessages)
});

messagesRouter.post('/', async (req: Request, res: Response) => {
    if (!req.body.author || !req.body.message) {
        return res.status(400).send({error: 'Author and message must be present in the request'})
    }

    const newMessage = {
        author: req.body.author,
        message: req.body.message,
        datetime: new Date().toString(),
    };

    const savedMessage = await fileDb.addMessage(newMessage)
    return res.send(savedMessage)
});


export default messagesRouter;