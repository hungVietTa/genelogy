<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateAncestorsNth extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('ancestors')
        ->join('ancestors AS spouse_ancestors', 'ancestors.spouse_id', '=', 'spouse_ancestors.id')
        ->whereNotNull('ancestors.spouse_id')
        ->update(['ancestors.nth' => DB::raw('spouse_ancestors.nth')]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
