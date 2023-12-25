import profile_photo from '../assets/profile_photo.jpeg';
import { TypeAnimation } from 'react-type-animation';

function HomePage() {

  var currentHour = new Date().getHours();

  let greetingSequence = ["Hello!", 1500, "您好!", 1500];

  if (currentHour < 12) {
    greetingSequence.push("Good morning!");
  } else if (currentHour < 18) {
    greetingSequence.push("Good afternoon!");
  } else {
    greetingSequence.push("Good evening!");
  }
  greetingSequence.push(1500);

  const headerStyles = {
    color: '#415B41',
    fontSize: 64,
    marginLeft: 8,
    paddingTop: 128,
  }

  const bodyStyles = {
    color: '#415B41',
    marginLeft: 10,
    fontSize: 24,
  }

  const profilePhotoStyles = {
    borderRadius: 70,
    height: 140,
    width: 140,
  }
  
  const profilePhotoAndLogosDiv = {
    marginTop: 120,
    paddingRight: 12,
  }

  const flexBoxDisplay = {
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'space-between',
  }
  
  const textBoxDisplay = {
    paddingTop: 128
  }

  return (
    <div style={flexBoxDisplay}>
      <div style={textBoxDisplay}>
      <header>
        <TypeAnimation 
        sequence={greetingSequence}
        speed={30}
        repeat={Infinity}
        style={headerStyles}/>
      </header>
      <body style={bodyStyles}>
        My name is Kenny.
        <br/>
        I am a 4th year student at the University of Toronto studying Computer Science.
      </body>
      </div>
      <div style={profilePhotoAndLogosDiv}>
      <img src={profile_photo} style={profilePhotoStyles}/>
      </div>
    </div>
  );
}

export default HomePage;
