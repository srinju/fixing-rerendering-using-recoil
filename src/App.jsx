
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './store/atoms/count';

function App() {
  
  return (
    <div>
      <RecoilRoot>
        <Count  />  
      </RecoilRoot> 
    </div>
  )
}

function Count() {
  return <div>
    <RecoilRoot>
      <CountRenderer />
      <Buttons  />
    </RecoilRoot>
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom); //we just need the final value of the count 
  return <div>
    {count}
  </div>
}

function Buttons() {
  const [count,setCount] = useRecoilState(countAtom); //we are doing the both here coz both count and setcount is needed here 

  return <div>
    <button style={{margin:10,color:"pink"}} onClick={() => {
      setCount(count + 1);
    }}>Increase</button>

    <button style={{margin:10,color:"pink"}} onClick={() => {
      setCount(count-1);
    }}>Decrease</button>
  </div>
}

export default App
