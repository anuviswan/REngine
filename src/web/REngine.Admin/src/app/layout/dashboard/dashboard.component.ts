import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ApiService } from '../../shared';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    TotalUsers = 0;

    constructor(private apiSrv:ApiService) {
        apiSrv.getRequest('dashboard/GetDashboardResults',{}).subscribe(data=>{
            this.TotalUsers = data.data.TotalUsers;
            console.log(this.TotalUsers);
        });

        console.log(this.TotalUsers);

        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates est animi quibusdam praesentium quam, et perspiciatis,
            consectetur velit culpa molestias dignissimos
            voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        }, {
            id: 2,
            type: 'warning',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates est animi quibusdam praesentium quam, et perspiciatis,
            consectetur velit culpa molestias dignissimos
            voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        });
    }

    ngOnInit() {
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
