import React from 'react';
import { Link } from 'react-router-dom';

function Socialp() {
  return (
    <div>
      <div id="paragraph">
      
          <p>
          "Social science is a fascinating subject that helps us understand the world and our place in it. It encompasses various disciplines like history, geography, civics, and economics. In history, we explore the past, learn about ancient civilizations, and understand how events have shaped our present. Geography takes us on a journey around the globe, teaching us about countries, landscapes, and cultures. Civics helps us understand the principles of democracy, our rights, and responsibilities as citizens. Economics delves into the world of money, trade, and resources. Together, these subjects provide valuable insights into the complex and interconnected world we live in, preparing us to be informed and responsible global citizens."
          </p>
      </div>

      <Link to="/Social2">
        <button id="startQuizButton">Start Quiz</button>
      </Link>
    </div>
  );
}

export default Socialp;
