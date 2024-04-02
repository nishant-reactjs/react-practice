import React, { useContext } from 'react'
import { data, data2 } from './Child1'


// data.Consumer can only accept funtion
// Solution of this problem is useContext hook

// useContext Hook

const Child3 = () => {
    const name = useContext(data);
    const gender = useContext(data2)
  return (
    <div>
        <div>
            Hello from useContext Hook
            <p>my name is {name} and my gender is {gender}</p>
        </div>

        <div>
            <data.Consumer>
                {
                    (name) =>{
                        return (
                            <data2.Consumer>
                                {
                                    (gender)=>{
                                        return(
                                            <div>
                                                Hello from context api
                                                <h4>my name is {name} and my gender is {gender}</h4>
                                            </div>
                                        )
                                    }
                                }
                            </data2.Consumer>
                        )
                    }
                }
            </data.Consumer>
        </div>
    </div>
  )
}

export default Child3