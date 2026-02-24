import express from "express";
import {Request, Response} from "express";
import fileDb from "../fileDb";

const messagesRouter = express.Router();


messagesRouter.get('/', async (req: Request, res: Response) => {
    const allMessages = await fileDb.getMessage();
    const limit = 30
    let arrayWithLimit = allMessages.slice(-limit);


    const queryDate = req.query.datetime as string;
    const date = new Date(queryDate);
    if (isNaN(date.getDate())) {
        return res.send({invalid: 'Invalid date'})
    }
    if (!queryDate) {
        return res.send({message: 'No query'})
    }

    const filterMessage = arrayWithLimit.filter(message => new Date(message.datetime) > date);
        return res.send(filterMessage)

});

messagesRouter.post('/', async (req: Request, res: Response) => {
    if (!req.body.author || !req.body.message) {
        return res.status(400).send({error: 'Author and message must be present in the request'})
    }

    const newMessage = {
        author: req.body.author,
        message: req.body.message,
        datetime: req.body.datetime,
    };

    const savedMessage = await fileDb.addMessage(newMessage)
    return res.send(savedMessage)
});


export default messagesRouter;