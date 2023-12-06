import React from 'react';
import { Link } from 'react-router-dom';

function Socialp() {
  return (
    <div>
      <div id="paragraph">
      
          <p>
          "Science is an incredible journey of exploration and discovery. It helps us understand the world around us, from the smallest particles to the vastness of the universe. In 8th grade, you'll delve into various branches of science, such as physics, chemistry, biology, and earth science. Physics explores the fundamental laws governing motion and energy. Chemistry delves into the properties and interactions of matter. Biology reveals the wonders of life, from cells to ecosystems. Earth science unravels the mysteries of our planet's geology, climate, and more. Through experiments, observations, and critical thinking, you'll uncover the secrets of the natural world and develop a deeper appreciation for the beauty and complexity of science."
          </p>
      </div>

      <Link to="/Social2">
        <button id="startQuizButton">Start Quiz</button>
      </Link>
    </div>
  );
}

export default Socialp;