import Notice from './Notice.js';

function Lists({ Lists, handleDelete, handleUpdate }) {
    return (
      <div>
        {lists.map(list => 
          <Notice 
            key={list.id} 
            list={list}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )}
      </div>
    );
}

export default Lists;