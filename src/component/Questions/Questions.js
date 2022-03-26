import React from 'react';

const Questions = () => {
    return (
        <>
            <div>
                <h3>How React Works?</h3>
                <p>
                    React works declarative code using  virtual dom.At first react looking for the change and create a virtual dom.After creating it's compare between virtual dom and actual dom and give the final result.
                </p>
            </div>
            <div>
                <h3>State Vs Props</h3>
                <p>
                    <u>Props</u>:Props are re-usable by giving data to its child component.Props are read only.Props are immutable.
                </p>
                <p>
                    <u>States</u>:State are not usable to any component without where the state decleared.State can be changed.State are mutable.
                </p>
            </div>
            <div>
                <h3>How useState works?</h3>
                <p>Usestate is a react hook.It returns a variable and a function.The function used for set the variable value.But at the begining of declaration, we've to set a initial value of the variable inside of useStare like <code> ( const [some,setSome] = useState([])   ).</code>Here empty array is the initial value of variable some.</p>
            </div>
        </>
    );
};

export default Questions;