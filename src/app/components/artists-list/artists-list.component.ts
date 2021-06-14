import { Artist} from '../../shared/artist';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DeezerService } from 'src/app/shared/deezer.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})

export class ArtistsListComponent implements OnInit {

  ArtistData: any = [];
  dataSource: MatTableDataSource<Artist>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'name', 'nb_fan', 'type', 'action'];
  searchArtistForm: FormGroup

  constructor(
    public formBuilder: FormBuilder,
    private deezerApi : DeezerService
  ) {

    this.deezerApi.getSavedArtists().subscribe(data => {
      this.ArtistData = data;
      this.dataSource = new MatTableDataSource<Artist>(this.ArtistData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    

    this.searchArtistForm = formBuilder.group({
      query: ['',  [Validators.required]]
    });
    this.deezerApi.getSavedArtists().subscribe(data => {
      this.ArtistData = data;
      this.dataSource = new MatTableDataSource<Artist>(this.ArtistData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  ngOnInit() {

  }



  get Query() {
    return this.searchArtistForm.controls.query
  }

  submitArtistForm(){
    const payload = {
      Query: this.Query.value
    }

    console.log("dfddd", payload)

    return this.deezerApi.searchArtist(payload.Query).subscribe(res => {
      console.log('Returmed Promsie from CI=> ', res)
  
     // this.router.navigate(['/dashboard/clients'])
    })
  }

 /* 

}
 */
}