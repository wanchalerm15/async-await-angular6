import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    url: string = 'https://jsonplaceholder.typicode.com/posts';
    items: any = [];

    constructor(private http: HttpClient) { }

    async ngOnInit() {
        await this.getPosts();
        console.log(this.items);
    }

    async getPosts() {
        this.items = await this.http.get(this.url).toPromise();
        console.log(this.items);
    }

    syncFunction() {
        confirm('Confirm!!!');
        console.log('2 Sync Function');
    }

    asyncFunction() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('2 Async Function');
                resolve();
            }, 100);
        });
    }
}
