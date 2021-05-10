import { useState, useEffect } from 'react';
import Input from '../Input/Input';


function Form(props) {
    const [ formState, setFormState ] = useState({
        bucketlist:'',
    });


useEffect(() => {
    if(props.editFormVisible) {
        const {bucketlist, id} = props.list;
        setFormState({
            bucketlist,
            id
        });
    }
}, [ props.editFormVisible, props.list ]);

function handleChange(event) {
    setFormState(prevState => ({
            ...prevState,
            [event.target.id] : event.target.value
        }));
}

function handleSubmit(event){
    event.preventDefault();
    if(props.editFormVisible) {
        props.handleUpdate(formState);
        props.toggleForm();
    } else {
        props.handleAdd(formState);
    }
}

return (

    <form onSubmit={handleSubmit}>
        <Input 
        handleChange={handleChange}
        name='title'
        placeholder='list title'
        type='text'
        value={formState.title}
        id='title'
        />
    </form>
);

}

export default Form;