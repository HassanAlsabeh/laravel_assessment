<?php

namespace App\Interfaces;

use App\Http\Requests\EmployeeRequest;

interface EmployeeInterface
{
    /**
     * Get all Employees
     *
     * @method  GET api/employees
     * @access  public
     */
    public function getAllEmployees();

    /**
     * Get Employee By ID
     *
     * @param   integer     $id
     *
     * @method  GET api/employees/{id}
     * @access  public
     */
    public function getEmployeeById($id);

    /**
     * Create | Update Employee
     *
     * @param   \App\Http\Requests\EmployeeRequest    $request
     * @param   integer                           $id
     *
     * @method  POST    api/employees       For Create
     * @method  PUT     api/employees/{id}  For Update
     * @access  public
     */
    public function requestEmployee(EmployeeRequest $request, $id = null);

    /**
     * Delete Employee
     *
     * @param   integer     $id
     *
     * @method  DELETE  api/employees/{id}
     * @access  public
     */
    public function deleteEmployee($id);
}
