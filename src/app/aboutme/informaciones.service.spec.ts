/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InformacionesService } from './informaciones.service';

describe('Service: Informaciones', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InformacionesService]
    });
  });

  it('should ...', inject([InformacionesService], (service: InformacionesService) => {
    expect(service).toBeTruthy();
  }));
});
