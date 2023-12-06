import React, { useState } from 'react';
import './MathsVideo.css';
const ScienceVideo = () => {
  // Sample videos and descriptions for each lesson
  const lessons = [
    {
      id: 1,
      videoUrl: 'https://www.youtube.com/embed/WnU0lH6C0EA',
      description: 'Description for Lesson 1.',
    },
    {
      id: 2,
      videoUrl: 'https://www.youtube.com/embed/WnU0lH6C0EA',

      description: 'Description for Lesson 2.',
    },
    {
        id: 3,
        videoUrl: 'https://www.youtube.com/embed/WnU0lH6C0EA',
        description: 'Description for Lesson 3.',
      }, {
        id: 4,
        videoUrl: 'https://www.youtube.com/embed/WnU0lH6C0EA',
        description: 'Description for Lesson 4.',
      }, {
        id: 5,
        videoUrl: 'https://www.youtube.com/embed/WnU0lH6C0EA',
        description: 'Description for Lesson 5.',
      },
    // Add more lessons as needed
  ];

  // State to track the selected lesson
  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);

  // State to manage video playback
  const [isPlaying, setIsPlaying] = useState(false);

 

  // Function to handle lesson selection
  const selectLesson = (lesson) => {
    setSelectedLesson(lesson);
    setIsPlaying(false); // Pause video when switching lessons
  };

  return (
    <div className='all-screen'>
    <div className="maths-video-container">
      <div className="lessons-container">
        <h2>Lessons</h2>
        <div className="lesson-buttons-container">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => selectLesson(lesson)}
              className={lesson.id === selectedLesson.id ? 'active' : ''}
            >
              Lesson {lesson.id}
            </button>
          ))}
        </div>
      </div>
      <div className="video-description-container">
        <div className="video-container">
          <iframe
            title={`Lesson ${selectedLesson.id}`}
            width="560"
            height="315"
            src={selectedLesson.videoUrl}
            frameBorder="0"
            allowFullScreen
            className="video-player"
          />
          
        </div>
        <div className="description-container">
          <h2>Description</h2>
          <p>{selectedLesson.description}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ScienceVideo;
