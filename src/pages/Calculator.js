import React, { useState } from 'react';
import './calculator.css'

function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.label}
    </button>
  );
}

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleNumberClick = (num) => {
    if (waitingForSecondOperand) {
      setDisplay(num.toString());
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? num.toString() : display + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (operator !== null && !waitingForSecondOperand) {
      // Evaluate previous operation
      calculate();
    } else {
      setResult(parseFloat(display));
    }
    setOperator(op);
    setWaitingForSecondOperand(true);
  };

  const handleEqualClick = () => {
    if (operator !== null) {
      calculate();
      setOperator(null);
      setWaitingForSecondOperand(false);
    }
  };

  const calculate = () => {
    const secondOperand = parseFloat(display);
    let newResult = result !== null ? result : 0;
    switch (operator) {
      case '+':
        newResult += secondOperand;
        break;
      case '-':
        newResult -= secondOperand;
        break;
      case '*':
        newResult *= secondOperand;
        break;
      case '/':
        newResult /= secondOperand;
        break;
      default:
        newResult = secondOperand;
    }
    setResult(newResult);
    setDisplay(newResult.toString());
  };

  const handleClear = () => {
    setDisplay('0');
    setResult(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

return (
  <div className="calculator">
    <div className="display">{display}</div>
    <div className="buttons">
      <div className="row">
        <Button label="7" onClick={() => handleNumberClick(7)} />
        <Button label="8" onClick={() => handleNumberClick(8)} />
        <Button label="9" onClick={() => handleNumberClick(9)} />
        <Button label="+" onClick={() => handleOperatorClick('+')} />
      </div>
      <div className="row">
        <Button label="4" onClick={() => handleNumberClick(4)} />
        <Button label="5" onClick={() => handleNumberClick(5)} />
        <Button label="6" onClick={() => handleNumberClick(6)} />
        <Button label="-" onClick={() => handleOperatorClick('-')} />
      </div>
      <div className="row">
        <Button label="1" onClick={() => handleNumberClick(1)} />
        <Button label="2" onClick={() => handleNumberClick(2)} />
        <Button label="3" onClick={() => handleNumberClick(3)} />
        <Button label="*" onClick={() => handleOperatorClick('*')} />
      </div>
      <div className="row">
        <Button label="0" onClick={() => handleNumberClick(0)} />
        <Button label="C" onClick={handleClear} />
        <Button label="=" onClick={handleEqualClick} />
        <Button label="/" onClick={() => handleOperatorClick('/')} />
      </div>
    </div>
  </div>
);
}

export default Calculator;



// import React, { useState } from 'react';

// interface ButtonProps {
//   label: string;
//   onClick: () => void;
// }

// const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
//   return (
//     <button onClick={onClick}>
//       {label}
//     </button>
//   );
// }

// const Calculator: React.FC = () => {
//   const [display, setDisplay] = useState<string>('0');
//   const [result, setResult] = useState<number | null>(null);
//   const [operator, setOperator] = useState<string | null>(null);
//   const [waitingForSecondOperand, setWaitingForSecondOperand] = useState<boolean>(false);

//   const handleNumberClick = (num: number) => {
//     if (waitingForSecondOperand) {
//       setDisplay(num.toString());
//       setWaitingForSecondOperand(false);
//     } else {
//       setDisplay(display === '0' ? num.toString() : display + num);
//     }
//   };

//   const handleOperatorClick = (op: string) => {
//     if (operator !== null && !waitingForSecondOperand) {
//       // Evaluate previous operation
//       calculate();
//     } else {
//       setResult(parseFloat(display));
//     }
//     setOperator(op);
//     setWaitingForSecondOperand(true);
//   };

//   const handleEqualClick = () => {
//     if (operator !== null) {
//       calculate();
//       setOperator(null);
//       setWaitingForSecondOperand(false);
//     }
//   };

//   const calculate = () => {
//     const secondOperand = parseFloat(display);
//     let newResult: number = result !== null ? result : 0;
//     switch (operator) {
//       case '+':
//         newResult += secondOperand;
//         break;
//       case '-':
//         newResult -= secondOperand;
//         break;
//       case '*':
//         newResult *= secondOperand;
//         break;
//       case '/':
//         newResult /= secondOperand;
//         break;
//       default:
//         newResult = secondOperand;
//     }
//     setResult(newResult);
//     setDisplay(newResult.toString());
//   };

//   const handleClear = () => {
//     setDisplay('0');
//     setResult(null);
//     setOperator(null);
//     setWaitingForSecondOperand(false);
//   };

//   return (
//     <div className="calculator">
//       <div className="display">{display}</div>
//       <div className="buttons">
//         <div className="row">
//           <Button label="7" onClick={() => handleNumberClick(7)} />
//           <Button label="8" onClick={() => handleNumberClick(8)} />
//           <Button label="9" onClick={() => handleNumberClick(9)} />
//           <Button label="+" onClick={() => handleOperatorClick('+')} />
//         </div>
//         <div className="row">
//           <Button label="4" onClick={() => handleNumberClick(4)} />
//           <Button label="5" onClick={() => handleNumberClick(5)} />
//           <Button label="6" onClick={() => handleNumberClick(6)} />
//           <Button label="-" onClick={() => handleOperatorClick('-')} />
//         </div>
//         <div className="row">
//           <Button label="1" onClick={() => handleNumberClick(1)} />
//           <Button label="2" onClick={() => handleNumberClick(2)} />
//           <Button label="3" onClick={() => handleNumberClick(3)} />
//           <Button label="*" onClick={() => handleOperatorClick('*')} />
//         </div>
//         <div className="row">
//           <Button label="0" onClick={() => handleNumberClick(0)} />
//           <Button label="C" onClick={handleClear} />
//           <Button label="=" onClick={handleEqualClick} />
//           <Button label="/" onClick={() => handleOperatorClick('/')} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calculator;
