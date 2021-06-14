// Angular Modules
import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = 'https://api.deezer.com/search';
    public readonly API_MOCK_ENDPOINT: string = 'mock-domain/api';
}