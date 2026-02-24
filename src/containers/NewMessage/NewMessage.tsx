import Form from "../../components/Form/Form.tsx";
import type {MessageMutation} from "../../types";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {createMessage, selectLoading} from "../../app/MessagesSlice.ts";
import {useNavigate} from "react-router-dom";

const NewMessage = () => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectLoading);
    const navigate = useNavigate();

    const onSubmitForm = async (item: MessageMutation) => {
        await dispatch(createMessage(item));
        navigate('/');
    };

    return (
        <Form onSubmitForm={onSubmitForm} loading={loading}/>
    );
};

export default NewMessage;