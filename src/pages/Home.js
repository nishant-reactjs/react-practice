import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { bindActionCreators } from 'redux';
import { dipositMoney, withdrawMoney } from './redux/action/action';

const ReduxHome = () => {
  const amount = useSelector(state=> state.amount)
  const dispatch = useDispatch();
  return (
    <>
        <h2>Redux Home</h2>

        <h4>Deposit/withdraw money {amount}</h4>
        <button className='btn btn-primary' onClick={()=>dispatch(withdrawMoney(100))}>-</button>
            Update balance
        <button className='btn btn-primary' onClick={()=>dispatch(dipositMoney(100))}>+</button>
    </>
  )
}

export default ReduxHome