import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { TestingService } from './testing.service';
import { mockData } from '../Mock/Data';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('TestingService', () => {
  let service: TestingService;
  let httpMock: HttpTestingController;
  let url='https://jsonplaceholder.typicode.com'

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [TestingService]
    });
    service = TestBed.inject(TestingService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  it('should  get posts', fakeAsync(() => {
   service.getpost().subscribe(data=>{

      expect(data).toEqual(mockData);
   })

 const req = httpMock.expectOne(`${url}/posts`);

  expect(req.request.method).toBe('GET');
  req.flush(mockData);
}))
  
  });

