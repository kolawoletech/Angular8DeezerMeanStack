import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeezerService } from 'src/app/shared/deezer.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {
  id: string;
  ArtistResult: any;

  constructor(
    private deezerApi: DeezerService,

    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")

    console.log("logging", this.id)

    this.getArtistDetails(this.id)
  }

  getArtistDetails(id){

    return this.deezerApi.getArtist(id).subscribe(res => {
      console.log('Returmed Promsie from CI=> ', res)

      // this.router.navigate(['/dashboard/clients'])

      this.ArtistResult = res.data;
    })

  }

  saveArtistLocally(data){

    return this.deezerApi.saveArtist(data).subscribe(res => {
      console.log('Returmed Promsie from CI=> ', res)

      // this.router.navigate(['/dashboard/clients'])

      this.ArtistResult = res.data;
    })

  }

}
