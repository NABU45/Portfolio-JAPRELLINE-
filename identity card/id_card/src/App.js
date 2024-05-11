import Card from './components/Card';
// import Validate from './components/Validate';
import './Card.css'
import { useState } from "react";
function App() {

  const[addStudent , setAddStudent]= useState([
    {
       name:"Nabin Japrel",
       dob:"2058/03/19",
       address:"Durgathali-5,bajhang",
       level:"Bachelor",
       faculty:"BSC.CSIT",
       contact:"9800242452",
      //  date_expired: new Date("2024-04-03")

    }
  ]);
  const handelAddStudent =() =>{
    const newStudent={
      name:"Nabin Japrel",
      dob:"2058/03/19",
      address:"Durgathali-5,bajhang",
      level:"Bachelor",
      faculty:"BSC.CSIT",
      contact:"9800242452",
      // date_expired: new Date("2025-01-01")
    };
    setAddStudent(prevState => [...prevState,newStudent]);
  };
  const [name , setName]=useState();
  const handleNameChange=(e)=>{
    setName(e.target.value);
  }
  const [dob, setDOB]=useState();
  const handelDateOBirth=(e)=>{
    setDOB(e.target.value);
  }




  
  const [cardList, setCardList] = useState([
    {

      date_expired: new Date("2024-04-03")
    },
    {
      date_expired: new Date("2025-04-06")
    }
  ])
  return (
    <>
    {name}<br/>
    <input type='text' onChange={handleNameChange} value={name} placeholder='Enter name'></input><br/>
    {dob}<br/>
    <input type='date' onChange={handelDateOBirth} value={dob} placeholder=''></input>

    <button onClick={handelAddStudent}>Add Student</button>
    <div className="App">
      {addStudent.map((student, index) =>(
      <Card
        key={index}
        name={student.name}
        dob={student.dob}
        address={student.address}
        level={student.level}
        faculty={student.faculty}
        contact={student.contact}
        
        />
        ))}
      </div>

       <main>
      {
        cardList.map(card => {
          return (
            <div>
              <p
                style={{
                  backgroundColor: new Date() > card.date_expired ? "red" : "green",
                }}
                >Date expired: { card.date_expired.toString() }</p>
            </div>
          );
        })
      }
    </main> 
   </>
   
  );
  
}

export default App;