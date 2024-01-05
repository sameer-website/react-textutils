const [btntext, setBtnText] = useState('Enable Dark Mode')

const toggleStyle=()=>{
  if(myStyle.color === 'black' && myStyle.backgroundColor === 'white' ){
    setMyStyle({
      color:'white',
      backgroundColor:'black',
      border:'1px solid white'
    })
    setBtnText('Enable Light Mode');
  }
  else{
    setMyStyle({
      color:'black',
      backgroundColor:'white'
    })
    setBtnText('Enable Dark Mode');
  }
}