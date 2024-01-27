import React from 'react';

const JsonView = ({ jsonExpressions }) => {
  const jsonData = {
    rules: jsonExpressions[0].rules.map((expression) => ({
      key: expression.key,
      output: {
        value: expression.output.value,
        operator: expression.output.operator,
        score: expression.output.score,
      },
    })),
    combinator: jsonExpressions[0].combinator,
  };

  return (
    <div className="mt-5 bg-black text-white p-4 shadow-sm rounded">
      <h2>JSON View</h2>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default JsonView;
