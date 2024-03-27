<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Question;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'role' => 'admin',
            'email_verified_at' => now(),
            'password' => \Hash::make('password'),
            'remember_token' => \Str::random(10),
        ]);

        $topics = [
            "Mathematics",
            "Biology",
            "Chemistry",
            "Physics",
            "Programming",
            "History",
            "Environmental Science",
        ];

        foreach ($topics as $topic) {
            \App\Models\Topic::create([
                'name' => $topic
            ]);
        }

        $questions = [
            [
                'details' => 'What is the capital of France?',
                'answer_option' => 'a',
                'topic_id' => rand(1,7),
                'a' => 'Paris',
                'b' => 'London',
                'c' => 'Berlin',
                'd' => 'Madrid',
                'difficulty' => 'easy',
            ],
            [
                'details' => 'Who wrote "To Kill a Mockingbird"?',
                'answer_option' => 'b',
                'topic_id' => rand(1,7),
                'a' => 'J.K. Rowling',
                'b' => 'Harper Lee',
                'c' => 'Stephen King',
                'd' => 'Ernest Hemingway',
                'difficulty' => 'medium',
            ],
            [
                'details' => 'What is the chemical symbol for water?',
                'answer_option' => 'c',
                'topic_id' => rand(1,7),
                'a' => 'Au',
                'b' => 'Fe',
                'c' => 'H2O',
                'd' => 'O2',
                'difficulty' => 'easy',
            ],
            [
                'details' => 'What is the powerhouse of the cell?',
                'answer_option' => 'd',
                'topic_id' => rand(1,7),
                'a' => 'Ribosome',
                'b' => 'Nucleus',
                'c' => 'Endoplasmic reticulum',
                'd' => 'Mitochondria',
                'difficulty' => 'easy',
            ],
            [
                'details' => 'Which planet is known as the "Red Planet"?',
                'answer_option' => 'b',
                'topic_id' => rand(1,7),
                'a' => 'Venus',
                'b' => 'Mars',
                'c' => 'Jupiter',
                'd' => 'Saturn',
                'difficulty' => 'easy',
            ],
            [
                'details' => 'What is the largest mammal?',
                'answer_option' => 'c',
                'topic_id' => rand(1,7),
                'a' => 'Elephant',
                'b' => 'Blue whale',
                'c' => 'Sperm whale',
                'd' => 'Giraffe',
                'difficulty' => 'easy',
            ],
            [
                'details' => 'What is the chemical symbol for gold?',
                'answer_option' => 'a',
                'topic_id' => rand(1,7),
                'a' => 'Au',
                'b' => 'Ag',
                'c' => 'Pb',
                'd' => 'Cu',
                'difficulty' => 'easy',
            ],
            [
                'details' => 'Who painted the Mona Lisa?',
                'answer_option' => 'c',
                'topic_id' => rand(1,7),
                'a' => 'Vincent van Gogh',
                'b' => 'Pablo Picasso',
                'c' => 'Leonardo da Vinci',
                'd' => 'Michelangelo',
                'difficulty' => 'medium',
            ],
            [
                'details' => 'What is the square root of 144?',
                'answer_option' => 'd',
                'topic_id' => rand(1,7),
                'a' => '10',
                'b' => '11',
                'c' => '12',
                'd' => '12',
                'difficulty' => 'easy',
            ],
            [
                'details' => 'Which gas do plants use to perform photosynthesis?',
                'answer_option' => 'b',
                'topic_id' => rand(1,7),
                'a' => 'Oxygen',
                'b' => 'Carbon dioxide',
                'c' => 'Nitrogen',
                'd' => 'Hydrogen',
                'difficulty' => 'easy',
            ],
            [
                'details' => 'Who is known as the "Father of Computers"?',
                'answer_option' => 'a',
                'topic_id' => rand(1,7),
                'a' => 'Charles Babbage',
                'b' => 'Alan Turing',
                'c' => 'Ada Lovelace',
                'd' => 'Tim Berners-Lee',
                'difficulty' => 'medium',
            ],
            [
                'details' => 'Which element has the chemical symbol "Na"?',
                'answer_option' => 'c',
                'topic_id' => rand(1,7),
                'a' => 'Nickel',
                'b' => 'Nitrogen',
                'c' => 'Sodium',
                'd' => 'Neon',
                'difficulty' => 'easy',
            ],
            [
                'details' => 'Who is the author of "1984"?',
                'answer_option' => 'b',
                'topic_id' => rand(1,7),
                'a' => 'Aldous Huxley',
                'b' => 'George Orwell',
                'c' => 'Ray Bradbury',
                'd' => 'Arthur C. Clarke',
                'difficulty' => 'medium',
            ],
            [
                'details' => 'What is the largest organ in the human body?',
                'answer_option' => 'a',
                'topic_id' => rand(1,7),
                'a' => 'Skin',
                'b' => 'Liver',
                'c' => 'Brain',
                'd' => 'Heart',
                'difficulty' => 'easy',
            ],
            [
                'details' => 'What is the formula for the area of a rectangle?',
                'answer_option' => 'b',
                'topic_id' => rand(1,7),
                'a' => 'a + b',
                'b' => 'Length × Width',
                'c' => 'πr²',
                'd' => '1/2 × base × height',
                'difficulty' => 'easy',
            ],
            [
                'details' => 'Who discovered penicillin?',
                'answer_option' => 'c',
                'topic_id' => rand(1,7),
                'a' => 'Marie Curie',
                'b' => 'Louis Pasteur',
                'c' => 'Alexander Fleming',
                'd' => 'Robert Koch',
                'difficulty' => 'medium',
            ],
        ];
        foreach ($questions as $question) {
            Question::create($question);
        }
    }
}
