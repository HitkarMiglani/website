import React from 'react';

interface Exercise {
    id: string;
    name: string;
    description: string;
    difficulty: string;
}

const ExerciseCard: React.FC<{ exercise: Exercise }> = ({ exercise }) => {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
            <h2 className="text-xl font-semibold mb-2">{exercise.name}</h2>
            <p className="text-gray-600 mb-2">{exercise.description}</p>
            <p className="text-sm text-gray-400">Difficulty: {exercise.difficulty}</p>
            <a 
                href={`/exercises/${exercise.id}`} 
                className="text-blue-500 mt-4 inline-block"
            >
                Start Exercise
            </a>
        </div>
    );
};

export default ExerciseCard;
