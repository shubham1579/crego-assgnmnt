import React, { useState } from 'react';

const Expression = ({ setShowExpressionForm, setShowJsonView, jsonExpressions, setJsonExpressions, combinator }) => {

  const [key, setKey] = useState('Age');
  const [operator, setOperator] = useState('>');
  const [value, setValue] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = () => {
    let updatedExpressions = [...jsonExpressions]
    const newExpression = { edit: false, key, output: { value, operator, score } }
    const rulesArray = updatedExpressions[0]?.rules || [];
    rulesArray.push(newExpression);
    updatedExpressions[0] = { rules: rulesArray, combinator };
    console.log(updatedExpressions);
    setJsonExpressions(updatedExpressions);
    setShowExpressionForm(false);
    setShowJsonView(true);
  }


  return (
    <div className="mb-3 border p-3 shadow-sm bg-body-tertiary rounded">
      <h4>Expression</h4>
      <div className="d-flex gap-4">
        <div className="mb-3 w-25">
          <label className="mb-1 fw-semibold">Rule Type</label>
          <select
            className="form-select"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          >
            <option value="age">Age</option>
            <option value="creditScore">Credit Score</option>
            <option value="accountBalance">Account Balance</option>
          </select>
        </div>
        <div className="mb-3 w-25">
          <label className="mb-1 fw-semibold">Operator</label>
          <select
            className="form-select"
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          >
            <option value=">">{'>'}</option>
            <option value="<">{'<'}</option>
            <option value=">=">{'>='}</option>
            <option value="<=">{'<='}</option>
            <option value="=">{'='}</option>
          </select>
        </div>
        <div className="mb-3 w-25">
          <label className="mb-1 fw-semibold">Value</label>
          <input
            type="text"
            className="form-control"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="mb-3 w-25">
          <label className="mb-1 fw-semibold">Score</label>
          <input
            type="text"
            className="form-control"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
      </div>
      <div className='d-flex justify-content-between'>
        <button className="btn btn-danger" onClick={() => setShowExpressionForm(false)}>
          Delete Expression
        </button>
        <button className="btn btn-success" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Expression;
