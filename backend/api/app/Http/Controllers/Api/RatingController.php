<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Rating;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    public function index()
    {
        $rating = Rating::all();
        return $rating;
    }

    public function store(Request $request)
    {
        $rating = new Rating();
        $rating->id_user = $request->id_user;
        $rating->id_location = $request->id_location;
        $rating->rating = $request->rating;
        
        $rating->save();
    }
    public function show($id)
    {
        $rating = Rating::find($id);
        return $rating;
    }
    public function update(Request $request, $id)
    {
        $rating = Rating::findOrFail($request->id);
        $rating->id_user = $request->id_user;
        $rating->id_location = $request->id_location;
        $rating->rating = $request->rating;

        $rating->save();
        return $rating;
    }
    public function destroy($id)
    {
        $rating = Rating::destroy($id);
        return $rating;
    }
}
