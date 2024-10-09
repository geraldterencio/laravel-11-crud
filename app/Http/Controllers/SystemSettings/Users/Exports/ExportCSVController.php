<?php

namespace App\Http\Controllers\SystemSettings\Users\Exports;

use App\Models\User;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStrictNullComparison;

class ExportCSVController implements FromQuery, WithHeadings, WithMapping, WithStrictNullComparison
{
    use Exportable;
   
    public function query()
    {
        return User::orderBy('name','asc');  
    }

    public function map($row): array{
        $fields = [
            $row->name,
            $row->email,

        ];
        return $fields;
    }

    public function headings(): array{
        $fields = [
          'Name',
          'Email',
        ];
        return $fields;
    }
}
