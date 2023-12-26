import {useState} from 'react';
import Table from './Table';
// import ReactDOM from 'react-dom';

const Form=()=>{ 
    const  [inputs, setInputs] = useState ({
        prenom: '',
        nom: '',
        email: '',
        telephone: ''
    })
    const [userData, setUserData] = useState([])
    //ajouter un user
    const [newUsers, setNewUsers] = useState(null)
    const handleChange = (e) => {
        setInputs ({
            ...inputs,[e.target.name]: e.target.value,
        })
    }

    /* const handleSubmit = (e) => {
        e.preventDefault();
        const {prenom, nom, email, telephone, modifier} = inputs
        if(!modifier === true){
            setInputs((prev) =>{
                const edUser = user.find(edUser => user.id === modifier)
                const updatedUsers = {edUser, prenon: prenom, nom: nom, email: email, telephone: telephone}

            })
        }
                
        const newUser = {
            id: Math.floor(Math.random() * 10000),
            value: inputs
          };
          console.log("newUser", newUser);

        console.log("inputs", inputs);
        setUserData([...userData, newUser]);
        setNewUsers(newUser)
        setInputs({
            prenom: '',
            nom: '',
            email: '',
            telephone: ''
        })
    }*/
    // console.log("userData", userData);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { prenom, nom, email, telephone, modifier } = inputs;
      
        if (modifier === true) {
          setInputs((prev) => {
            const userToUpdate = prev.user.find((user) => user.id === modifier);
      
            const updateUtilisateur = {
              ...userToUpdate,
              prenom: prenom,
              nom: nom,
              email: email,
              telephone: telephone,
            };
      
            const updatedUsers = prev.user.map((user) =>
              user.id === modifier ? updateUtilisateur : user
            );
      
            return {
              user: updatedUsers,
              prenom: '',
              nom: '',
              email: '',
              telephone: '',
              modifier: false,
            };
          });
        } else {
          const newUser = {
            id: Math.floor(Math.random() * 10000),
            prenom: prenom,
            nom: nom,
            email: email,
            telephone: telephone,
          };
      
          setNewUsers([...userData, newUser]);
          setInputs({
            prenom: '',
            nom: '',
            email: '',
            telephone: '',
            modifier: false,
          });
        }
      };
    
    const handleDelete = (index) => {
        const updatedUsers = [...userData];
        updatedUsers.splice(index, 1);
        setUserData(updatedUsers);
      };
    console.log(handleDelete);

    return <div className="App">       
    <h1>Jeemacoder-React</h1>
    <div className="container">
    <form className="p-3 mx-auto my-3 mb-5 shadow" onSubmit={handleSubmit}>
        <div className="mb-3 d-sm-flex">
            <div >
                <label htmlFor="text"
                 className="form-label">
                    Prenom</label>
                <input 
                htmlFor="text"
                name="prenom"
                value={inputs.prenom} 
                onChange={handleChange}
                className="form-control"  
                />
            </div>

            <div className="ms-sm-3">
                <label 
                htmlFor="text"
                className="form-label">
                Nom</label>
                <input 
                htmlFor="text"
                name="nom"
                value={inputs.nom}
                onChange={handleChange} 
                className="form-control"   
                />
            </div>
        </div>
        <div className="mb-3 d-sm-flex">
            <div className="">
                <label htmlFor="text"
                className="form-label">
                Email</label>
                <input 
                htmlFor="mail"
                name="email"
                value={inputs.email} 
                onChange={handleChange} 
                className="form-control" 
                id=""  
                />
            </div>

            <div className="ms-sm-3">
                <label htmlFor="text"
                className="form-label">
                Telephone</label>
                <input 
                htmlFor="tel"
                name="telephone" 
                value={inputs.telephone}  
                onChange={handleChange} 
                className="form-control" 
                id=""  
                />
            </div>
        </div>
        <button type="submit" className="btn btn-success w-100">Ajouter</button>
    </form> 

    </div>
    
    <Table newUsers={userData} handleDelete={handleDelete}/>
  </div>
};
export default Form;