<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
{
    /**
     * Determine if the employee is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // Set this to true if you want to authorize the validation
        // The default is false
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required|max:40',
            'last_name' => 'required|max:40',
            // I want to check the employee if exists first
            // If exists, will pass the email for unique validation
            // This is efficient, rather than we creating another validation for create or update
            'email' => request()->route('employees')
                ? 'required|email|max:255|unique:employees,email,' . request()->route('employees')
                : 'required|email|max:255|unique:employees,email',
        ];
    }
}
