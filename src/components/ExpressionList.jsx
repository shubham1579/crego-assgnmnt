import { useState } from "react";


const ExpressionList = ({ jsonExpressions, setJsonExpressions }) => {

    const [edit, setEdit] = useState(false);
    const [key, setKey] = useState('Age');
    const [operator, setOperator] = useState('>');
    const [value, setValue] = useState('');
    const [score, setScore] = useState('');

    const onDelete = (index) => {
        console.log('index to be deleted', index);
        let updatedExpressions = [...jsonExpressions]
        jsonExpressions.splice(index, 1);
        setJsonExpressions(updatedExpressions);
    }

    const handleEdit = (index) => {
        setEdit(true);
        console.log(index);
    }

    const handleUpdate = (index) => {
        console.log(index);
        console.log('key: ', key);
        console.log('operator: ', operator);
        console.log('value: ', value);
        console.log('score: ', score);
        let updatedExpressions = [...jsonExpressions]
        jsonExpressions.splice(index, 1);
        jsonExpressions.push({key, output: {value, operator, score}});
        // console.log(updatedExpressions);
        setJsonExpressions(updatedExpressions);
        setEdit(false)
    }

    return (
        <div className="mb-3 border p-3">
            {jsonExpressions.map((expression, index) => (
                <div key={index}>
                    <h4>Expression {index + 1}</h4>
                    <div className="mb-3">
                        <label>Rule Type:</label>
                        <select
                            className="form-select"
                            value={!edit ? expression.key : key}
                            disabled={!edit}
                            onChange={(e) => setKey(e.target.value)}
                        >
                            <option value="age">Age</option>
                            <option value="creditScore">Credit Score</option>
                            <option value="accountBalance">Account Balance</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label>Operator:</label>
                        <select
                            className="form-select"
                            value={!edit ? expression.output.operator : operator}
                            disabled={!edit}
                            onChange={(e) => setOperator(e.target.value)}
                        >
                            <option value=">">{'>'}</option>
                            <option value="<">{'<'}</option>
                            <option value=">=">{'>='}</option>
                            <option value="<=">{'<='}</option>
                            <option value="=">{'='}</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label>Value:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={!edit ? expression.output.value : value}
                            disabled={!edit}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Score:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={!edit ? expression.output.score : score}
                            disabled={!edit}
                            onChange={(e) => setScore(e.target.value)}
                        />
                    </div>
                    <div className='d-flex justify-content-between'>
                        {!edit ? (
                            <button className="btn btn-warning" onClick={() => handleEdit(index)}>
                                Edit
                            </button>
                        ) : (
                            <button className="btn btn-warning" onClick={() => handleUpdate(index)}>
                                Update
                            </button>
                        )}
                        <button className="btn btn-danger" onClick={() => onDelete(index)}>
                            Delete Expression
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExpressionList;
