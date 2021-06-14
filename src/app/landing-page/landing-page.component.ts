import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DeezerService } from 'src/app/shared/deezer.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  ArtistResultsData = [];
  searchArtistForm: FormGroup
  title = 'Card View Demo';

  gridColumns = 3;
  id: string;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  constructor(
    public formBuilder: FormBuilder,
    private deezerApi: DeezerService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,

  ) {

    this.searchArtistForm = formBuilder.group({
      query: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    

  }

  get Query() {
    return this.searchArtistForm.controls.query
  }

  submitArtistForm() {
    const payload = {
      Query: this.Query.value
    }

    console.log("dfddd", payload)

    return this.deezerApi.searchArtist(payload.Query).subscribe(res => {
      console.log('Returmed Promsie from CI=> ', res)

      // this.router.navigate(['/dashboard/clients'])

      this.ArtistResultsData = res.data;
    })
  }

  viewArtist(id){
    this.router.navigate(['/artist-page', id]);

  }

  saveToDb(data){
    this.deezerApi.saveArtist(data).subscribe(res=>{
      this.ngZone.run(() => this.router.navigateByUrl('/artist-list'))

    })

    
  }

    /* Get errors */
    public handleError = (controlName: string, errorName: string) => {
    }  

}
