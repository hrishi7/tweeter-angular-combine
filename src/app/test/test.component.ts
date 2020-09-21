import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-test',
  template: `
    <div *ngFor="let d of tweets; index as i" style="width:400px; height:auto; margin-top: 20px;">
    <br>
    <ngx-tweet tweetId={{d.id}}></ngx-tweet>
    <br>
    </div>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public tweets = [
        // {
        //     "id": "1307974786929299456",
        //     "text": "RT @ishtkam: #किसान_बिल  पर PM @narendramodi - \n1.कृषि सुधारों ने हर किसान को आजादी दी है कि वो किसी को भी, कहीं पर भी अपनी फसल, अपने फल-स…"
        // },
        // {
        //     "id": "1307974786010710016",
        //     "text": "RT @SoonaaPaanaa: பஞ்சாப்ல செருப்பாலயே அடிக்குறானுங்க #FarmersProtest #FarmerBill #விவசாயிகளின்_விரோதி_அதிமுக https://t.co/i3BvO7qK80"
        // },
        // {
        //     "id": "1307974780746825728",
        //     "text": "RT @JaiveerShergill: Farmers of India wants a simple assurance in WRITING that irrespective of point of sale he/she will get MSP -In India…"
        // },
        // {
        //     "id": "1307974778230157314",
        //     "text": "RT @AnchorSolanki: मीडिया अब सवाल नहीं बवाल करता है\n\nकिसान, अर्थव्यवस्था, कोरोना, बेरोजगारी - बॉलीवुड बवाल सब पर भारी \n\n#कनिष्ठ_लेखाकार2013…"
        // },
        // {
        //     "id": "1307974769334087680",
        //     "text": "It’s a no green signal from the farm world..🚫\n\n#FarmBills #FarmBill2020 #FarmersProtest #FarmBills2020 #BJP #Congress https://t.co/bHs0Rv6Zln"
        // },
        // {
        //     "id": "1307974755299897345",
        //     "text": "RT @lightlo4: Aazadi Gang MUST support \"Agricultural produce freely sell karne ki\" aazadi!\n\n#FarmersProtest #farmersbill #25सितम्बर_भारतबंद"
        // },
        // {
        //     "id": "1307974692905443329",
        //     "text": "RT @FahadBombay: Suggestions for #FarmersProtest\n\nEveryone should not run towards Delhi &amp; state capital \n\nMake your local MP accountable, d…"
        // },
        // {
        //     "id": "1307974674135957504",
        //     "text": "RT @meera95339643: मीडिया अब सवाल नहीं बवाल करता है\n\nकिसान, अर्थव्यवस्था, कोरोना, बेरोजगारी - बॉलीवुड बवाल सब पर भारी \n\n#कनिष्ठ_लेखाकार2013…"
        // },
        // {
        //     "id": "1307974509639598081",
        //     "text": "RT @AkhileshPSingh: हम देश नहीं बचने देंगे !!\n:- चौकिदार \n\n#किसान_विरोधी_मोदी_सरकार \n#FarmersProtest"
        // },
        // {
        //     "id": "1307974509044142080",
        //     "text": "RT @Congress_Army: #25Sep5Baje25Minute Now or Never. Save our Annadata, #save_our_farmers #FarmersProtest #FarmerBill #KisanVirodhiNarendra…"
        // }
    ];
  
  
  public todos=[];
  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    // this._todoService.getTodos().subscribe((data) => (this.todos = data));
    this._todoService.getTweets('FarmersProtest').subscribe((response) =>{
      console.log(response);
this.tweets = response.data
    } );
  }
}
