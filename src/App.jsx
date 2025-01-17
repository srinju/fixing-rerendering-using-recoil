
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';

function App() {
  
  return ( //we cover everything inside this recoil root tag
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
      <EvenCountRenderer />
    </RecoilRoot>
  </div>
}

//useRecoilState --> this is like usestate in react where you basically put two values one is for the state and one is for how to update the state 
//useRecoilValue --> this is for the currrent value of the state we want to use in a component , we use this when we dont care about updating the state
//useSetRecoilValue --> this is like setocunt where you want to update the state of the component , exactly same as setCount in react 

function CountRenderer(){
  const count = useRecoilValue(countAtom); //we just need the final value of the count 
  return <div>
    {count}
  </div>
}

/* ugly code >> that is without selectors , here it is like useMemo , we dont want this conditional statement to run when the code is not even,in react we would have used usememo or use react but in recoil we would use recoil selectors 
function EvenCountRenderer(){
  const count = useRecoilValue(countAtom);
  return <div>
    {(count % 2 == 0) ? "It is even" : Null}
  </div>
}
*/

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {(isEven)? "It is even": null}
  </div>
}


//we use useSetRecoilState when we dont want unncecassary re renders here below we see that the count is not required so we only do setcount as useSetRecoilState 
function Buttons() {
  const setCount = useSetRecoilState(countAtom); //if we use count here it is nothing but making the buttons re render when we click on it but it shouldnt so we are just updating the count and using the usesetrecoil state

  return <div>
    <button style={{margin:10,color:"pink"}} onClick={() => {
      setCount(count => count + 1);
    }}>Increase</button>

    <button style={{margin:10,color:"pink"}} onClick={() => {
      setCount(count => count - 1);
    }}>Decrease</button>
  </div>
}

export default App
