<?php

namespace App\Interfaces;

use App\Http\Requests\CompanyRequest;

interface CompanyInterface
{
    /**
     * Get all Companies
     *
     * @method  GET api/companies
     * @access  public
     */
    public function getAllCompanies();

    /**
     * Get Company By ID
     *
     * @param   integer     $id
     *
     * @method  GET api/companies/{id}
     * @access  public
     */
    public function getCompanyById($id);

    /**
     * Create | Update Company
     *
     * @param   \App\Http\Requests\CompanyRequest    $request
     * @param   integer                           $id
     *
     * @method  POST    api/companies       For Create
     * @method  PUT     api/companies/{id}  For Update
     * @access  public
     */
    public function requestCompany(CompanyRequest $request, $id = null);

    /**
     * Delete Company
     *
     * @param   integer     $id
     *
     * @method  DELETE  api/companies/{id}
     * @access  public
     */
    public function deleteCompany($id);
}
