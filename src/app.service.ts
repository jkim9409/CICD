import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!-updated-github-action-applied-pushWithPRFromFeature-test2';
  }
}
