<?php

namespace App\Repositories;

use App\Http\Requests\EmployeeRequest;
use App\Interfaces\EmployeeInterface;
use App\Models\Employee;
use App\Traits\ResponseAPI;
use Illuminate\Support\Facades\DB;

class EmployeeRepository implements EmployeeInterface
{
    // Use ResponseAPI Trait in this repository
    use ResponseAPI;

    public function getAllEmployees()
    {
        try {
            $employee = Employee::all();
            return $this->success("All Employees", $employee);
        } catch(\Exception $e) {
            return $this->error($e->getMessage(), $e->getCode());
        }
    }

    public function getEmployeeById($id)
    {
        try {
            $employee = Employee::find($id);

            // Check the Employee
            if(!$employee) return $this->error("No employee with ID $id", 404);

            return $this->success("Employee Detail", $employee);
        } catch(\Exception $e) {
            return $this->error($e->getMessage(), $e->getCode());
        }
    }

    public function requestEmployee(EmployeeRequest $request, $id = null)
    {
        DB::beginTransaction();
        try {
            // If Employee exists when we find it
            // Then update the employee
            // Else create the new one.
            $employee = $id ? Employee::find($id) : new Employee();

            // Check the employee
            if($id && !$employee) return $this->error("No employee with ID $id", 404);
            $employee->first_name = $request->first_name;
            $employee->last_name = $request->last_name;
            $employee->email = preg_replace('/\s+/', '', strtolower($request->email));
            $employee->dob = $request->dob;
            $employee->phone_status = $request->phone_status;
            $employee->phone_number = $request->phone_number;
            $employee->profile_photo = $request->file('profile_photo')->store('public');
//            if ($image = $request->file('profile_photo')) {
//                $destinationPath = 'image/';
//                $profileImage = $employee->getATime() . "." . $image->getClientOriginalExtension();
//                $image->move($destinationPath, $profileImage);
//                $employee->file_path= $destinationPath . $profileImage;
//            }

            // Save the employee
            $employee->save();

            DB::commit();
            return $this->success(
                $id ? "employee updated"
                    : "Employee created",
                $employee, $id ? 200 : 201);
        } catch(\Exception $e) {
            DB::rollBack();
            return $this->error($e->getMessage(), $e->getCode());
        }
    }

    public function deleteEmployee($id)
    {
        DB::beginTransaction();
        try {
            $employee = Employee::find($id);

            // Check the employee
            if(!$employee) return $this->error("No employee with ID $id", 404);

            // Delete the employee
            $employee->delete();

            DB::commit();
            return $this->success("Employee deleted", $employee);
        } catch(\Exception $e) {
            DB::rollBack();
            return $this->error($e->getMessage(), $e->getCode());
        }
    }
}
