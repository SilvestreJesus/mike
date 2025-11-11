<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    public function registrar(Request $request)
    {
        $request->validate([
            'usuario' => 'required|string|max:60',
            'email' => 'required|string|email|max:60|unique:usuarios',
            'contrasena' => 'required|string|min:6',
        ]);

        $usuario = Usuario::create([
            'usuario' => $request->usuario,
            'email' => $request->email,
            'contrasena' => Hash::make($request->contrasena),
        ]);

        return response()->json([
            'message' => 'Usuario registrado correctamente',
            'usuario' => $usuario
        ], 201);
    }
}
