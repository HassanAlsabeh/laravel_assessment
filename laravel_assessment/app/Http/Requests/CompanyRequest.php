<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompanyRequest extends FormRequest
{
    /**
     * Determine if the company is authorized to make this request.
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
            'name' => 'required|unique|max:50',
            'address' => 'required|max:50',
            'website' => 'required|max:50',
            // I want to check the employee if exists first
            // If exists, will pass the email for unique validation
            // This is efficient, rather than we creating another validation for create or update

        ];
    }
}
