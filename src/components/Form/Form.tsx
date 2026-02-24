import {CircularProgress, Container, TextField} from "@mui/material";
import {useState} from "react";
import type {MessageMutation} from "../../types";
import Button from "@mui/material/Button";

interface Props {
    initialValues?: MessageMutation;
    onSubmitForm: (item: MessageMutation) => void;
    isEdit?: boolean;
    loading?: boolean;
}

const Form: React.FC<Props> = ({initialValues, onSubmitForm, isEdit, loading = false}) => {
    const [form, setForm] = useState<MessageMutation>(initialValues || {
        author: '',
        message: '',
        datetime: '',
    });

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value,
        })
    }

    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.author.trim().length > 0 && form.message.trim().length > 0) {
            onSubmitForm({...form, datetime: new Date().toISOString()})
            setForm({
                author: '',
                message: '',
                datetime: '',
            })
        } else {
            alert('Message and author cannot be empty!');
        }
    }
    return (
        <Container maxWidth='md' sx={{textAlign: 'center'}}>
            <h3 style={{textAlign: 'center', marginTop: '20px'}}>{isEdit ? 'Edit' : 'Add'} message</h3>
            {loading && <CircularProgress/>}
            <form onSubmit={onHandleSubmit}>
                <TextField
                    fullWidth
                    type='text'
                    id="author"
                    label="Author"
                    variant="outlined"
                    name='author'
                    value={form.author}
                    onChange={onInputChange}
                />
                <TextField
                    sx={{marginY: '20px'}}
                    fullWidth
                    type='message'
                    id="message"
                    label="Message"
                    variant="outlined"
                    name='message'
                    value={form.message}
                    onChange={onInputChange}

                />
                <Button type='submit' fullWidth disabled={loading}>{isEdit ? 'Edit' : 'Add'} message</Button>
            </form>
        </Container>
    );
};

export default Form;