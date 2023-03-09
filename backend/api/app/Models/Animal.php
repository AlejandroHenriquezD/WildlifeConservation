<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'scientific_name', 'img', 'short_description', 'long_description', 'type', 'id_location'];
    
    protected $with = ['location'];

    public function location()
    {
        return $this->belongsTo('App\Models\Location', 'id_location', 'id');
    }
}
