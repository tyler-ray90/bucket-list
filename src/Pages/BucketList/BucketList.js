import Form from '../../Components/Form/Form';

function BucketList(props) {
    return (
        <>
        <div>This is the BucketList</div>
        <Form handleAdd={props.handleAdd}/>
        </>

    );
};

export default BucketList;