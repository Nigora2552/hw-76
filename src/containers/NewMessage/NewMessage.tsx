import Form from "../../components/Form/Form.tsx";
import type {MessageMutation} from "../../types";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {createMessage, selectLoading} from "../../app/MessagesSlice.ts";


const NewMessage = () => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectLoading);

    const onSubmitForm = async (item: MessageMutation) => {
        await dispatch(createMessage(item));
    };

    return (
        <Form onSubmitForm={onSubmitForm} loading={loading}/>
    );
};

export default NewMessage;