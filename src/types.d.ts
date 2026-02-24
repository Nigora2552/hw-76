export interface IMessages{
    id: string;
    author: string;
    message: string
    datetime: string;
}
export type MessageMutation = Omit<IMessages, 'id'>