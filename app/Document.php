<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
   protected $table = 'documents';


   protected $fillable = ['id','filename','filepath','user_id'];

   public function user()
   {
       return $this->belongsTo('App\User');
   }

}
