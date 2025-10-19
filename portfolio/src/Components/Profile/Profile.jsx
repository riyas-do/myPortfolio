import './profile.css'
import myImage from '/MyPassportPhoto.png';
function Profile(){
   return <div className="profile">
     <img alt='myImage' src={myImage} width={250}/>
     <h2>Mohammed Riyas Gafoor</h2>
     <h2>Software Engineer | gafoorriyas54@gmail.com | +919940999151</h2>
   </div> 
}

export default Profile;