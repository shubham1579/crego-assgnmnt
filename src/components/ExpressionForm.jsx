// ExpressionForm.js
import React, { useState } from 'react';
import Expression from './Expression';
import JsonView from './JsonView';
import ExpressionList from './ExpressionList';

// Inside ExpressionForm.js
const ExpressionForm = () => {
  const [expressions, setExpressions] = useState([]);
  const [jsonExpressions, setJsonExpressions] = useState([]);
  const [combinator, setCombinator] = useState('and');
  const [showJsonView, setShowJsonView] = useState(false);
  const [showExpressionForm, setShowExpressionForm] = useState(false);

  const handleAddExpression = () => {
    setShowExpressionForm(true);
  };

  const handleDeleteExpression = (index) => {
    const updatedExpressions = [...expressions];
    updatedExpressions.splice(index, 1);
    setExpressions(updatedExpressions);
  };

  const handleCombinatorChange = (e) => {
    setCombinator(e.target.value);
  };

  return (
    <div className='d-flex justify-content-between'>
      <div style={{ width: '60%' }}>
        <button className="btn btn-primary mb-3" onClick={handleAddExpression}>
          Add Expression
        </button>
        {showExpressionForm &&
          <Expression
            jsonExpressions={jsonExpressions}
            setExpressions={setExpressions}
            onDelete={handleDeleteExpression}
            setShowJsonView={setShowJsonView}
            setShowExpressionForm={setShowExpressionForm}
          />
        }
        {jsonExpressions.length > 0 && <ExpressionList jsonExpressions={jsonExpressions} setExpressions={setExpressions} />}
        <div className="mb-3 mt-3">
          <label>Combinator:</label>
          <select
            className="form-select"
            value={combinator}
            onChange={handleCombinatorChange}
          >
            <option value="and">AND</option>
            <option value="or">OR</option>
          </select>
        </div>
      </div>

      <div style={{ width: '30%' }}>
        {(showJsonView && jsonExpressions.length > 0) && <JsonView expressions={jsonExpressions} combinator={combinator} />}
      </div>
    </div>
  );
};


export default ExpressionForm;
