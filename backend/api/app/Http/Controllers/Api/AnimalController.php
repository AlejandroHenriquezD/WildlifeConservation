<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Animal;
use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public function index()
    {
        $animal = Animal::all();
        return $animal;
    }

    public function store(Request $request)
    {
        $animal = new Animal();
        $animal->name = $request->name;
        $animal->scientific_name = $request->scientific_name;
        $animal->img = $request->img;
        $animal->short_description = $request->short_description;
        $animal->long_description = $request->long_description;
        $animal->type = $request->type;
        $animal->id_location = $request->id_location;

        if ($request->hasFile('img')) {
            $file = $request->file('img');
            $destinationPath = 'images/animalTable/';
            $filename = time() . '-' . $file->getClientOriginalName();
            $uploadSuccess = $request->file('img')->move($destinationPath, $filename);
            $animal->img = $destinationPath . $filename;
        }
        
        $animal->save();
    }
    public function show($id)
    {
        $animal = Animal::find($id);
        return $animal;
    }
    public function update(Request $request, $id)
    {
        $animal = Animal::findOrFail($request->id);
        $animal->name = $request->name;
        $animal->scientific_name = $request->scientific_name;
        $animal->img = $request->img;
        $animal->short_description = $request->short_description;
        $animal->long_description = $request->long_description;
        $animal->type = $request->type;
        $animal->id_location = $request->id_location;

        $animal->save();
        return $animal;
    }
    public function destroy($id)
    {
        $animal = Animal::destroy($id);
        return $animal;
    }
}
