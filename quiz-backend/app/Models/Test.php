<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'topic_id',
        'difficulty',
        'questions',
        'is_attempted'
    ];

    public function questions()
    {
        return $this->belongsToMany(Question::class)->withPivot('user_answer');
    }

    public function topic() {
        return $this->belongsTo(Topic::class);
    }
}
