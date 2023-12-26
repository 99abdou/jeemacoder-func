const Tbody = ({newUsers, handleDelete}) => {

    return         <tbody>
    {newUsers.map((user, index)=> (
      <tr key={index}>
        <td>{user.value.prenom}</td>
        <td>{user.value.nom}</td>
        <td>{user.value.email}</td>
        <td>{user.value.telephone}</td>
        <td>
        <button className="btn btn-warning" >Modifier</button>
          <button className="btn btn-danger" onClick={()=>handleDelete(index)}>Supprimer</button>
          </td>
      </tr>
      
    ))}
  </tbody>

}

export default Tbody;