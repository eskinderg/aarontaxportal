import {Component} from 'angular2/core';
//import {HeroComponent} from '../hero/hero';
interface IFile
{
   name:string,
   path:string
}
@Component({
    selector: 'file',
    template: `<ul class="heroes">
                  <li *ngFor="#file of files" class="filelist">
                    <span >{{file.path}}</span> {{file.name}}
                  </li>
               </ul>`,
   styles:[`
      .filelist{
         list-style-type:none;
      }


   `]
})
export class FileComponent
{
       public files = Files;
}
   var Files: IFile[] = [
        { "path": "c:ddddddd", "name": "Mr. Nice" },
        { "path": "c:ddddddd", "name": "Narco" },
        { "path": "c:ddddddd", "name": "Bombasto" },
        { "path": "c:ddddddd", "name": "Celeritas" },
        { "path": "c:ddddddd", "name": "Magneta" },
        { "path": "c:ddddddd", "name": "RubberMan" },
        { "path": "c:ddddddd", "name": "Dynama" },
        { "path": "c:ddddddd", "name": "Dr IQ" },
        { "path": "c:ddddddd", "name": "Magma" },
        { "path": "c:ddddddd", "name": "Magma" },
        { "path": "c:ddddddd", "name": "Magma" },
        { "path": "c:ddddddd", "name": "Magma" },
        { "path": "c:ddddddd", "name": "Magma" },
        { "path": "c:ddddddd", "name": "Magma" },
        { "path": "c:ddddddd", "name": "Magma" },
        { "path": "c:ddddddd", "name": "Magma" },
        { "path": "c:ddddddd", "name": "Magma" },


   ];
