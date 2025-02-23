import logo from './logo.svg';
import './App.css';
import Button from './Button/button';
import Student from './Student.jsx'

function App() {
  
  return(
    <>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="SquidWard" age={50} isStudent={false} />
      <Student name="sandy" age={42} isStudent={false} />
    </>
  )
}

export default App;
