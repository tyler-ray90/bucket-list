import Lists from '../Components/Lists/Lists';

function Main({ lists, handleDelete, handleUpdate }) {
    return (
      <main>
        <Lists 
          lists={lists}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </main>
    );
}

export default Main;
