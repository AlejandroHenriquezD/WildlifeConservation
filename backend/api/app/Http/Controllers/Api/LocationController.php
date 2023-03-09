<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function index()
    {
        $location = Location::all();
        return $location;
    }

    public function store(Request $request)
    {
        $location = new Location();
        $location->name = $request->name;
        $location->img = $request->img;
        $location->short_description = $request->short_description;
        $location->long_description = $request->long_description;
        $location->country = $request->country;
        $location->tags = $request->tags;

        if ($request->hasFile('img')) {
            $file = $request->file('img');
            $destinationPath = 'images/locationTable/';
            $filename = time() . '-' . $file->getClientOriginalName();
            $uploadSuccess = $request->file('img')->move($destinationPath, $filename);
            $location->img = $destinationPath . $filename;
        }
        
        $location->save();
    }
    public function show($id)
    {
        $location = Location::find($id);
        return $location;
    }
    public function update(Request $request, $id)
    {
        $location = Location::findOrFail($request->id);
        $location->name = $request->name;
        $location->img = $request->img;
        $location->short_description = $request->short_description;
        $location->long_description = $request->long_description;
        $location->country = $request->country;
        $location->tags = $request->tags;

        $location->save();
        return $location;
    }
    public function destroy($id)
    {
        $location = Location::destroy($id);
        return $location;
    }
}
