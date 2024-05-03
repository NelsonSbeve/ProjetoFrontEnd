import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProjetosComponent } from './projetos.component';
import { ApiService } from '../api.service';
import Spy = jasmine.Spy;

describe('ProjetoComponent', () => {
  let component: ProjetosComponent;
  let fixture: ComponentFixture<ProjetosComponent>;
  let getItemsSpy: Spy;
  let createItemSpy: Spy;

  beforeEach(async () => {
    const apiSpy = jasmine.createSpyObj('ApiService', ['getItemsProjeto', 'createItemProjeto']);
    getItemsSpy = apiSpy.getItemsProjeto.and.returnValue(of([])); // Now TypeScript knows this is a Spy
    createItemSpy = apiSpy.createItemProjeto.and.returnValue(of({})); // Now TypeScript knows this is a Spy

    await TestBed.configureTestingModule({
      imports: [ProjetosComponent],
      providers: [{ provide: ApiService, useValue: apiSpy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch items on initialization', () => {
    const mockItems = [{ name: 'John Doe', startDate: '12/12/12', endDate: '12/12/12' }];
    getItemsSpy.and.returnValue(of(mockItems)); // Use the Spy here

    component.ngOnInit();

    expect(getItemsSpy).toHaveBeenCalled();
    expect(component.items).toEqual(mockItems);
    expect(component.filteredItems).toEqual(mockItems);
  });

  it('should filter items based on search term', () => {
    const mockItems = [{ name: 'John Doe', startDate: '12/12/12', endDate: '12/12/12' }];
    component.items = mockItems;
    component.searchTerm = 'John';

    component.searchProjects();

    expect(component.filteredItems).toEqual(mockItems);
  });

  it('should create a new Project', () => {
    const formData = {name: 'John Doe', startDate: '12/12/12', endDate: '12/12/12' };
    const newItem = { name: formData.name, startDate: formData.startDate, endDate: formData.endDate};
    createItemSpy.and.returnValue(of(newItem)); // Use the Spy here

    component.createNewItem(formData);

    expect(createItemSpy).toHaveBeenCalledWith(newItem);
  });
});
