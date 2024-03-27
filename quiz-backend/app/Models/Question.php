<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $fillable = [
        'details',
        'answer_option',
        'topic_id',
        'a',
        'b',
        'c',
        'd',
        'difficulty',
    ];

    public function tests()
    {
        return $this->belongsToMany(Test::class)->withPivot('user_answer');
    }

    public function topic() {
        return $this->belongsTo(Topic::class);
    }
}
