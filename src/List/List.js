import { useState } from 'react';
import Form from '../Components/Form/Form';

function List({ list, handleDelete, handleUpdate }) {

    const [editFormVisible, setEditFormVisible] = useState(false);

    function toggleForm() {
      setEditFormVisible(!editFormVisible);
    }

    return (
      <>
        {
          editFormVisible ?
          <Form 
            editFormVisible={editFormVisible}
            toggleForm={toggleForm}
            handleUpdate={handleUpdate} 
            list={list}
            />
          :
          <div className="notice">
            <h3>{list.title}</h3>
            <button onClick={() => handleDelete(notice.id)}>X</button>
            <button onClick={toggleForm}>Edit</button>
          </div>
        }
      </>
    );
}

export default List;