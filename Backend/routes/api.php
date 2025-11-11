<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;

Route::post('/usuarios/registrar', [UsuarioController::class, 'registrar']);
