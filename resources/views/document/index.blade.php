@extends('layout.master')

@section('title','Documents')


@section('content')


        <div ng-controller="AppController" nv-file-drop="" uploader="uploader" filters="queueLimit, customFilter">

                <div class="container">
                   <div class="panel panel-default">

                      <div class="panel-body">
                           <div class="panel-heading">     <h4>My Documents Page </h4> </div>
                             <div class="row">

                                 <div class="col-md-10">


                                     <!-- Example: nv-file-select="" uploader="{Object}" options="{Object}" filters="{String}" -->


                                     <span class="btn btn-success fileinput-button" ng-class="{disabled: disabled}">
                                         <i class="glyphicon glyphicon-plus"></i>
                                         <span>Add files...</span>
                                          <input type="file" class="inputfile" nv-file-select="" uploader="uploader" multiple  /><br/>
                                     </span>
                                    <!--
                                     Single
                                     <input type="file" nv-file-select="" uploader="uploader" />
                                  -->
                                 </div>

                                 <div class="col-md-11" style="margin-bottom: 40px">
                                 <!--
                                     <h3>Upload queue</h3>
                                     <p>Queue length: <% uploader.queue.length %></p>
                                 -->
                                     <table class="table">
                                         <thead>
                                             <tr>
                                                 <th width="50%">Name</th>
                                                 <th ng-show="uploader.isHTML5">Size</th>
                                                 <th ng-show="uploader.isHTML5">Progress</th>
                                                 <th>Status</th>
                                                 <th>Actions</th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                             <tr ng-repeat="item in uploader.queue">
                                                 <td><strong><% item.file.name %></strong></td>
                                                 <td ng-show="uploader.isHTML5" nowrap><% item.file.size/1024/1024|number:2 %> MB</td>
                                                 <td ng-show="uploader.isHTML5">
                                                     <div class="progress" style="margin-bottom: 0;">
                                                         <div class="progress-bar" role="progressbar" ng-style="{ 'width': item.progress + '%' }"></div>
                                                     </div>
                                                 </td>
                                                 <td class="text-center">
                                                     <span ng-show="item.isSuccess"><i class="glyphicon glyphicon-ok"></i></span>
                                                     <span ng-show="item.isCancel"><i class="glyphicon glyphicon-ban-circle"></i></span>
                                                     <span ng-show="item.isError"><i class="glyphicon glyphicon-remove"></i></span>
                                                 </td>
                                                 <td nowrap>
                                                     <button type="button" class="btn btn-success btn-xs" ng-click="item.upload()" ng-disabled="item.isReady || item.isUploading || item.isSuccess">
                                                         <span class="glyphicon glyphicon-upload"></span> Upload
                                                     </button>
                                                     <button type="button" class="btn btn-warning btn-xs" ng-click="item.cancel()" ng-disabled="!item.isUploading">
                                                         <span class="glyphicon glyphicon-ban-circle"></span> Cancel
                                                     </button>
                                                     <button type="button" class="btn btn-danger btn-xs" ng-click="item.remove()">
                                                         <span class="glyphicon glyphicon-trash"></span> Remove
                                                     </button>
                                                 </td>
                                             </tr>
                                         </tbody>
                                     </table>

                                     <div>
                                         <div>
                                             Queue progress:
                                             <div class="progress" style="">
                                                 <div class="progress-bar" role="progressbar" ng-style="{ 'width': uploader.progress + '%' }"></div>
                                             </div>
                                         </div>
                                         <button type="button" class="btn btn-success btn-s" ng-click="uploader.uploadAll()" ng-disabled="!uploader.getNotUploadedItems().length">
                                             <span class="glyphicon glyphicon-upload"></span> Upload all
                                         </button>
                                         <button type="button" class="btn btn-warning btn-s" ng-click="uploader.cancelAll()" ng-disabled="!uploader.isUploading">
                                             <span class="glyphicon glyphicon-ban-circle"></span> Cancel all
                                         </button>
                                         <button type="button" class="btn btn-danger btn-s" ng-click="uploader.clearQueue()" ng-disabled="!uploader.queue.length">
                                             <span class="glyphicon glyphicon-trash"></span> Remove all
                                         </button>
                                     </div>

                                 </div>

                             </div>
                       </div>
                  </div>

                </div>

         </div>

            {!! HTML::script('scripts/controllers/uploadcontroller.js') !!}


@endsection
