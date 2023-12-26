import Tbody from './Tbody';

const Table = ({newUsers, handleDelete})=> {

    return         <div className="container mt-4">
    <hr/>
            <h1 className="text-center fs-6">Utilisateurs</h1>
        <table className="table table-responsive">
            <thead>
                <tr>
                <th scope="col">Prenom</th>
                <th scope="col">Nom</th>
                <th scope="col">Email</th>
                <th scope="col">Telephone</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <Tbody newUsers={newUsers} handleDelete={handleDelete}/>
            </table>
        </div>
}
export default Table;