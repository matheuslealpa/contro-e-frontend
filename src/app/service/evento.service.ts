import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {StandardNgService} from "../@core/template/standard-ng-service";

@Injectable({
providedIn: 'root'
})
export class EventoService extends StandardNgService {

    URL_API: string = `${environment.contextPath}api/eventos`
    constructor(httpClient: HttpClient) {
        super(httpClient);
    }

}
