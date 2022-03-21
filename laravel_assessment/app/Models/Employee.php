<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Employee extends Model
{
    use HasFactory,Notifiable;
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'dob',
        'phone_status',
        'phone_number',
        'profile_photo',
    ];

}
