function Card(props) {
  console.log(props)
  
  return (
    <>
      <div className="card">
      <div className="header-container">
        <div className='incident-info-container'>
          <div>
           <img className="tu-logo" src="https://th.bing.com/th/id/OIP.0DrC-k7fzNlVsBOedfL3uwHaI3?w=148&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="from online"/>
          </div>
          <div> 
            <span className="identity-card-title">TRIBHWAN UNIVERSITY</span><br />
            <span className="identity-card-sub-title">INSTUTE OF SCIENCE AND TECHNOLOGY</span><br />
            <span className="campus-name">SIDDHANATH SCIENCE CAMPUS</span><br />
            <span className="location-name">Mahendranagar,Kanchanpur</span><br />
          </div>
        </div>
        <div className="i-title">
          <h3 className="i-card-name">IDENTITY CARD</h3>
        </div>
      </div>
      <hr />
      <div className='student-info-container'>
        <div className='further-detail-item-container'>
          <small><span className="student-details">Name   : </span> {props.name} </small> <br/>
          <small><span className="student-details">DOB    : </span> {props.dob} </small>  <br/>
          <small><span className="student-details">Address  : </span> {props.address} </small>  <br/>
          <small><span className="student-details">Faculty  : </span> {props.faculty} </small>  <br/>
          <small><span className="student-details">Level  : </span> {props.level} </small>  <br/>
          <small><span className="student-details">Conatct  : </span> {props.contact} </small> <br/>
          {/* <small><span className="student-details">Valid upto  : </span> {props.date_expired} </small>  */}
        </div>
        <div className='further-detail-item-container'>
          <span><img className="id-card-photo" src="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-1/414095727_386575800608958_6318288145526292166_n.jpg?stp=dst-jpg_s320x320&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MswWDemzED8Ab6-993U&_nc_ht=scontent.fktm17-1.fna&oh=00_AfBYXu70fnweUsG37hKznFv6pLI4LXW6g-rbSAQEeZBj9g&oe=66154C68" alt="pp photo" /></span> <br />
          <span>......................</span><br/>
          <span>Campus Chif</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default Card;