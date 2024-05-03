import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { ProjetosComponent } from './projetos/projetos.component';

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [HttpClientModule], // Import HttpClientModule here
    providers: [ApiService] // Add any necessary providers here
  }).compileComponents();
});

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
