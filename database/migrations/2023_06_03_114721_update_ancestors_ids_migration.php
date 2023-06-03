<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateAncestorsIdsMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('ancestors')->orderBy('id', 'desc')->chunk(200, function ($ancestors) {
            foreach ($ancestors as $ancestor) {
                DB::table('ancestors')->where('id', $ancestor->id)->update(['id' => $ancestor->id + 100]);
            }
        });
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
