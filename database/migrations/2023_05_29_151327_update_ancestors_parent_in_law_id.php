<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateAncestorsParentInLawId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('law_id', function (Blueprint $table) {
            DB::table('ancestors')
            ->join('ancestors AS spouse_ancestors', 'ancestors.spouse_id', '=', 'spouse_ancestors.id')
            ->whereNull('ancestors.parent_id')
            ->whereNotNull('ancestors.spouse_id')
            ->update(['ancestors.parent_in_law_id' => DB::raw('spouse_ancestors.parent_id')]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('law_id', function (Blueprint $table) {
            //
        });
    }
}
