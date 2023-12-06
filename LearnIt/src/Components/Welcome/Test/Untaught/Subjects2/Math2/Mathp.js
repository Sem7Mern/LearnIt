import React from 'react';
import { Link } from 'react-router-dom';

function Socialp() {
  return (
    <div>
      <div id="paragraph">
      
          <p>
          "Percentages are a fundamental concept in mathematics that helps us express fractions of a whole in a familiar way. The term 'percent' means 'per hundred,' and it allows us to compare and represent values out of 100. For example, if you score 80% on a test, it means you got 80 correct answers out of every 100 questions. Percentages are useful in various real-life situations, such as calculating discounts during a sale, determining the percentage of a budget spent, or analyzing data in statistics. Understanding percentages is essential in financial calculations, data interpretation, and many aspects of daily life."
          
          </p>
      </div>

      <Link to="/Social2">
        <button id="startQuizButton">Start Quiz</button>
      </Link>
    </div>
  );
}

export default Socialp;