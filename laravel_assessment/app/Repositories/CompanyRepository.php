<?php

namespace App\Repositories;

use App\Http\Requests\CompanyRequest;
use App\Interfaces\CompanyInterface;
use App\Models\Company;
use App\Traits\ResponseAPI;
use Illuminate\Support\Facades\DB;

class CompanyRepository implements CompanyInterface
{
    // Uemployeesse ResponseAPI Trait in this repository
    use ResponseAPI;

    public function getAllCompanies()
    {
        try {
            $company = Company::all();
            return $this->success("All Companies", $company);
        } catch(\Exception $e) {
            return $this->error($e->getMessage(), $e->getCode());
        }
    }

    public function getCompanyById($id)
    {
        try {
            $company = Company::find($id);

            // Check the Company
            if(!$company) return $this->error("No company with ID $id", 404);

            return $this->success("Company Detail", $company);
        } catch(\Exception $e) {
            return $this->error($e->getMessage(), $e->getCode());
        }
    }

    public function requestCompany(CompanyRequest $request, $id = null)
    {
        DB::beginTransaction();
        try {
            $company = $id ? Company::find($id) : new Company();
            if($id && !$company) return $this->error("No company with ID $id", 404);
            $company->name = $request->name;
            $company->website = $request->website;
            $company->address = $request->address;
            $company->logo = $request->file('logo')->store('public');

            $company->save();

            DB::commit();
            return $this->success(
                $id ? "company updated"
                    : "Company created",
                $company, $id ? 200 : 201);
        } catch(\Exception $e) {
            DB::rollBack();
            return $this->error($e->getMessage(), $e->getCode());
        }
    }

    public function deleteCompany($id)
    {
        DB::beginTransaction();
        try {
            $company = Company::find($id);

            // Check the company
            if(!$company) return $this->error("No company with ID $id", 404);

            // Delete the company
            $company->delete();

            DB::commit();
            return $this->success("Company deleted", $company);
        } catch(\Exception $e) {
            DB::rollBack();
            return $this->error($e->getMessage(), $e->getCode());
        }
    }
}
