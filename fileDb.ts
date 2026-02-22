import {IMessages, MessageWithoutId} from "./types";
import {promises as fs} from "fs";
import  crypto from "node:crypto";

const fileName = './db.json';

let data: IMessages[] = [];

const fileDb = {
    async init() {
        try {
            const fileContents = await fs.readFile(fileName)
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            data = [];
        }
    },
    async getMessage() {
        return data;
    },
    async addMessage(item: MessageWithoutId) {
        const id = crypto.randomUUID();
        const newMessage = {id, ...item};
        data.push(newMessage)
        await this.save();
        return newMessage;
    },
    async save() {
        return fs.writeFile(fileName, JSON.stringify(data));
    }
}

export default fileDb;