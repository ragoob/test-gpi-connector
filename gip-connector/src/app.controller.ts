import { Controller, Get, HttpService } from '@nestjs/common';
import { RSA_NO_PADDING } from 'constants';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private httpService: HttpService) { }

  @Get()
  async getHello(): Promise<any> {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const res = await this.httpService.get("https://gapi.aptar.mobi").toPromise();
    return {
      api: "gpi",
      data: res.data
    }
  }
}
