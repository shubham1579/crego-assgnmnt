import React, { useState } from 'react';
import Expression from './Expression';
import JsonView from './JsonView';
import ExpressionList from './ExpressionList';

const ExpressionForm = () => {
  const [jsonExpressions, setJsonExpressions] = useState([]);
  const [combinator, setCombinator] = useState('and');
  const [showJsonView, setShowJsonView] = useState(false);
  const [showExpressionForm, setShowExpressionForm] = useState(false);

  const handleAddExpression = () => {
    setShowExpressionForm(true);
  };

  const handleCombinatorChange = (e) => {
    setCombinator(e.target.value);
  };

  return (
    <div className='d-flex justify-content-between'>
      <div style={{ width: '65%' }}>
        <button className="btn btn-primary mb-3" onClick={handleAddExpression}>
          Add Expression
        </button>
        {showExpressionForm &&
          <Expression
            jsonExpressions={jsonExpressions}
            setJsonExpressions={setJsonExpressions}
            setShowJsonView={setShowJsonView}
            setShowExpressionForm={setShowExpressionForm}
            combinator={combinator}
          />
        }
        {jsonExpressions.length > 0 && 
          <ExpressionList 
            jsonExpressions={jsonExpressions} 
            setJsonExpressions={setJsonExpressions} 
          />
        }
        <div className="mb-3 mt-3">
          <label className="mb-1 fw-semibold">Combinator</label>
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

      <div style={{ width: '28%' }}>
        {(showJsonView && jsonExpressions.length > 0) && <JsonView jsonExpressions={jsonExpressions} combinator={combinator} />}
      </div>
    </div>
  );
};


export default ExpressionForm;
