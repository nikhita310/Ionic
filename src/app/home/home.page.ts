import {
    Component
} from '@angular/core';
import {
    Router,
    RouterModule
} from '@angular/router';
import {
    ToastController
} from '@ionic/angular';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    public productDetails: any[];


    constructor(private router: Router, public toastController: ToastController) {
        this.productDetails = [{
                'id': '1',
                'name': 'Television'
            },
            {
                'id': '2',
                'name': 'Mobile'
            },
            {
                'id': '3',
                'name': 'Laptop'
            }
        ];


    }
    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Success.Preference has been saved',
            duration: 2000
        });
        toast.present();
    }



    public getProductDetails(url, id) {

        this.router.navigateByUrl(url + "/" + id).then(e => {
            if (e) {
                console.log("Navigation is successful!");
            } else {
                console.log("Navigation has failed!");
            }
        });
    }

    public getNextPage(url) {

        this.router.navigateByUrl(url).then(e => {
            if (e) {
                console.log("Navigation is successful!");
            } else {
                console.log("Navigation has failed!");
            }
        });
    }
}