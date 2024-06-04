import { TestBed } from '@angular/core/testing';

import { TasksDataServiceService } from './tasks-data-service.service';

describe('TasksDataServiceService', () => {
  let service: TasksDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
