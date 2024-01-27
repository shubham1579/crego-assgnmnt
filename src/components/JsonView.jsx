// JsonView.js
import React from 'react';

const JsonView = ({ expressions, combinator }) => {
  console.log(expressions);
  const jsonData = {
    rules: expressions.map((expression) => ({
      key: expression.key,
      output: {
        value: expression.output.value,
        operator: expression.output.operator,
        score: expression.output.score,
      },
    })),
    combinator,
  };

  return (
    <div className="mt-5 bg-black text-white p-4">
      <h2>JSON View</h2>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default JsonView;
