<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'img', 'short_description', 'long_description', 'country', 'tags'];

    public function animals()
    {
        return $this->hasMany('App\Models\Animal');
    }
    public function plants()
    {
        return $this->hasMany('App\Models\Plant');
    }
    public function ratings()
    {
        return $this->hasMany('App\Models\Rating');
    }
}
