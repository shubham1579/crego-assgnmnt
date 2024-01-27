import { useState } from "react";


const ExpressionList = ({ jsonExpressions, setJsonExpressions }) => {

    const [key, setKey] = useState('Age');
    const [operator, setOperator] = useState('>');
    const [value, setValue] = useState('');
    const [score, setScore] = useState('');

    const onDelete = (index) => {
        let updatedExpressions = [...jsonExpressions];
        updatedExpressions[0].rules.splice(index, 1);
        setJsonExpressions(updatedExpressions);
    };
    
    const handleEdit = (expression) => {
        let updatedExpressions = [...jsonExpressions];
        const index = updatedExpressions[0].rules.findIndex(exp => exp.key === expression.key);
    
        if (index !== -1) {
            updatedExpressions[0].rules[index].edit = true;
            setKey(expression.key);
            setOperator(expression.output.operator);
            setValue(String(expression.output.value));
            setScore(String(expression.output.score));
            setJsonExpressions(updatedExpressions);
        }
    };  
    
    const handleUpdate = (index) => {
        let updatedExpressions = [...jsonExpressions];
        updatedExpressions[0].rules[index] = {
            edit: false,
            key,
            output: { value, operator, score },
        };
        setJsonExpressions(updatedExpressions);
    };

    return (
        <div>
            {jsonExpressions[0].rules.map((expression, index) => (
                <div key={index} className="mb-4 border p-3 shadow-sm bg-body-tertiary rounded">
                    <h4 className="text">Expression {index + 1}</h4>
                    <div className="d-flex gap-4">
                        <div className="mb-3 w-25">
                            <label className="mb-1 fw-semibold">Rule Type</label>
                            <select
                                className="form-select"
                                value={!expression.edit ? expression.key : key}
                                disabled={!expression.edit}
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
                                value={!expression.edit ? expression.output.operator : operator}
                                disabled={!expression.edit}
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
                                value={!expression.edit ? expression.output.value : value}
                                disabled={!expression.edit}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 w-25">
                            <label className="mb-1 fw-semibold">Score</label>
                            <input
                                type="text"
                                className="form-control"
                                value={!expression.edit ? expression.output.score : score}
                                disabled={!expression.edit}
                                onChange={(e) => setScore(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        {!expression.edit ? (
                            <button className="btn btn-warning" onClick={() => handleEdit(expression)}>
                                Edit
                            </button>
                        ) : (
                            <button className="btn btn-warning" onClick={() => handleUpdate(index)}>
                                Update
                            </button>
                        )}
                        <button className="btn btn-danger" onClick={() => onDelete(index)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExpressionList;
