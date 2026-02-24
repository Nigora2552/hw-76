import {Paper} from "@mui/material";
import  dayjs from "dayjs";
import type {IMessages} from "../../types";

interface Props {
    message: IMessages;
}

const Card: React.FC<Props> = ({message}) => {
    return (
        <Paper sx={{border: '1px solid black', padding: '10px'}}>
            <h5>{message.author}</h5>
            <p>{message.message}</p>
            <span>{dayjs(message.datetime).format('DD.MM.YYYY HH.mm') }</span>

        </Paper>
    );
};

export default Card;