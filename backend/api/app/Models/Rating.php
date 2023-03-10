<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;
    protected $fillable = ['id_location', 'id_user', 'rating'];
    
    protected $with = ['location','user'];

    public function location()
    {
        return $this->belongsTo('App\Models\Location', 'id_location', 'id');
    }
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'id_user', 'id');
    }
}
