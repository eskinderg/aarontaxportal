<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('users')->insert( array (
      'firstname'=> "Esk",
      'lastname'=>'Get',
      'email'=>"eskinderget@gmail.com",
      'bio'=>'eskbio',
      'address'=>'7097 Leewood Forst Dr',
      'password'=> Hash::make("123001"),
      'created_at'=>date('Y-m-d H:m:s')
      ));
     DB::table('users')->insert( array (
         'firstname'=> "User",
         'lastname'=>'Second',
         'email'=>"eskrock@gmail.com",
         'bio'=>'User Second Biography',
         'address'=>'7095 Leewood Forst Dr',
         'password'=> Hash::make("123001"),
         'created_at'=>date('Y-m-d H:m:s')
     ));
     DB::table('users')->insert( array (
         'firstname'=> "Yahoo",
         'lastname'=>'User',
         'email'=>"eskrock@yahoo.com",
         'bio'=>'Yahoo Bio',
         'address'=>'7080 Leewood Forst Dr',
         'password'=> Hash::make("123001"),
         'created_at'=>date('Y-m-d H:m:s')
     ));
     //Social\Models\User::find(1)->roles()->attach(1); //assign eskider with admin role
     factory(App\User::class,15)->create();
    }
}
