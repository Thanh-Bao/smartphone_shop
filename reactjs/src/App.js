import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const arr = [
  {
    id: 123,
    ls: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 999,
    ls: [11, 22, 33, 44, 55, 66]
  }
]

const Item = ({ id, ls }) => {
  const [isShowImg, setShowImg] = useState(false);
  const [currentImag, setCurrentImag] = useState();
  return <div>
    <h1>hello</h1>
    <h2>id là : {id}</h2>
    {ls.map(item => <div>
      <h3 onClick={() => { setShowImg(true); setCurrentImag(item) }}>ls item: {item}</h3>
    </div>)}
    <div style={{ display: isShowImg ? 'block' : 'none' }}> id ảnh chọn là: {currentImag}</div>
    <br />
    <hr></hr>
  </div>
}

function App() {
  return (
    <div>
      {arr.map(item => <Item id={item.id} ls={item.ls} />)}
    </div>
  );
}

export default App;
