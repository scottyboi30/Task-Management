import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';

import { TasksService } from '../../tasks/tasks.service';
import { AddHeaderInterceptor } from './add-header-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../../../environments/environment';

describe(`AuthHttpInterceptor`, () => {
  let httpMock: HttpTestingController;
  let service: TasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TasksService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AddHeaderInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.get(TasksService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add an X-TEST-ID header', () => {
    service.getTask('1').subscribe(response => {
      expect(response).toBeTruthy();
    });

    const request: TestRequest = httpMock
      .expectOne(`${environment.baseUrl}/1`);

    expect(request.request.headers.has('X-TEST-ID')).toEqual(true);
  });
});
