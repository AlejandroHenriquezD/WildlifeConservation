<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Plant;
use Illuminate\Http\Request;

class PlantController extends Controller
{
    public function index()
    {
        $plant = Plant::all();
        return $plant;
    }

    public function store(Request $request)
    {
        $plant = new Plant();
        $plant->name = $request->name;
        $plant->scientific_name = $request->scientific_name;
        $plant->img = $request->img;
        $plant->short_description = $request->short_description;
        $plant->long_description = $request->long_description;
        $plant->type = $request->type;
        $plant->id_location = $request->id_location;

        if ($request->hasFile('img')) {
            $file = $request->file('img');
            $destinationPath = 'images/plantTable/';
            $filename = time() . '-' . $file->getClientOriginalName();
            $uploadSuccess = $request->file('img')->move($destinationPath, $filename);
            $plant->img = $destinationPath . $filename;
        }
        
        $plant->save();
    }
    public function show($id)
    {
        $plant = Plant::find($id);
        return $plant;
    }
    public function update(Request $request, $id)
    {
        $plant = Plant::findOrFail($request->id);
        $plant->name = $request->name;
        $plant->scientific_name = $request->scientific_name;
        $plant->img = $request->img;
        $plant->short_description = $request->short_description;
        $plant->long_description = $request->long_description;
        $plant->type = $request->type;
        $plant->id_location = $request->id_location;

        $plant->save();
        return $plant;
    }
    public function destroy($id)
    {
        $plant = Plant::destroy($id);
        return $plant;
    }
}
