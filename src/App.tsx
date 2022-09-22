import React from 'react';
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {incremented, decremented, reset, amountAdded} from "./features/counter/counterSlice";
// import {useFetchBreedsQuery} from "./features/dogs/dogsApiSlice";
import {useFetchPhotosQuery} from "./features/photos/photosApiSlice";
import './App.css';

function App() {

  const value = useAppSelector((state)=> state.counter.value)
  // const {data=[], isFetching} = useFetchBreedsQuery()
  const {data=[], isFetching} = useFetchPhotosQuery()
  const dispatch = useAppDispatch()

  console.log(data)

  return (
    <div className="App">
      <p>{value}</p>
      <button onClick={()=> dispatch(incremented())}>+</button>
      <button onClick={()=> dispatch(amountAdded(5))}>+5</button>
      <button onClick={()=> dispatch(reset())}>Reset</button>
      <button onClick={()=> dispatch(decremented())}>-</button>

      {/*<div>*/}
      {/*    <p>Number of dogs fetched: {data.length}</p>*/}
      {/*    <table>*/}
      {/*        <thead>*/}
      {/*          <tr>*/}
      {/*              <th>Name</th>*/}
      {/*              <th>Pic</th>*/}
      {/*          </tr>*/}
      {/*        </thead>*/}
      {/*        <tbody>*/}
      {/*          {data.map(breed => (*/}
      {/*              <tr key={breed.id}>*/}
      {/*                  <td>{breed.name}</td>*/}
      {/*                  <td>*/}
      {/*                      <img src={breed.image.url} alt={breed.name} height={100}/>*/}
      {/*                  </td>*/}
      {/*              </tr>*/}
      {/*          ))}*/}
      {/*        </tbody>*/}
      {/*    </table>*/}
      {/*</div>*/}
    </div>
  );
}

export default App;
