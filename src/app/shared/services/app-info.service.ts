import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'CTRL-E';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
