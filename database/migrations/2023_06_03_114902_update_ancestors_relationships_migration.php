<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateAncestorsRelationshipsMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $ancestors = App\Models\Ancestor::orderBy('id', 'desc')->get();

        foreach ($ancestors as $ancestor) {
            $ancestor->parent_id += 100;
            $ancestor->spouse_id += 100;
            $ancestor->save();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ancestors', function (Blueprint $table) {
            //
        });
    }
}
