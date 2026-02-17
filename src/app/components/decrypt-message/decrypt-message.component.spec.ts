import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of, throwError } from 'rxjs';
import { DecryptMessageComponent } from './decrypt-message.component';
import { SendEncryptMessageUseCase } from '../../core/use-cases/send-encrypt-message.usecase';
import { DialogDataModel } from '../../shared/models/DialogData.model';
import { DecryptHttpMessageModel } from '../../shared/models/decrypt-http-message.model';

describe('DecryptMessageComponent', () => {
  let component: DecryptMessageComponent;
  let fixture: ComponentFixture<DecryptMessageComponent>;
  let mockUseCase: jasmine.SpyObj<SendEncryptMessageUseCase>;
  const mockDialogData: DialogDataModel = {
    encryptedMessage: 'encrypted_test_message'
  };

  beforeEach(async () => {
    mockUseCase = jasmine.createSpyObj('SendEncryptMessageUseCase', ['execute']);

    await TestBed.configureTestingModule({
      imports: [DecryptMessageComponent],
      providers: [
        { provide: SendEncryptMessageUseCase, useValue: mockUseCase },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecryptMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.isDecrypted()).toBe(false);
    expect(component.decrytedMessage()).toBe('');
  });

  it('should inject dialog data correctly', () => {
    expect(component.data).toEqual(mockDialogData);
    expect(component.data.encryptedMessage).toBe('encrypted_test_message');
  });

  it('should inject SendEncryptMessageUseCase correctly', () => {
    expect(component.sendEncryptMessageUseCase).toEqual(mockUseCase);
  });

  describe('decryptMessage', () => {
    it('should set isDecrypted to true when decryptMessage is called', () => {
      mockUseCase.execute.and.returnValue(of({ decrypted: 'decrypted_text' }));
      
      component.decryptMessage();
      
      expect(component.isDecrypted()).toBe(true);
    });

    it('should call execute with the encrypted message', () => {
      mockUseCase.execute.and.returnValue(of({ decrypted: 'decrypted_text' }));
      
      component.decryptMessage();
      
      expect(mockUseCase.execute).toHaveBeenCalledWith('encrypted_test_message');
    });

    it('should handle errors gracefully', (done) => {
      const mockError = { status: 400, message: 'Invalid encrypted message' };
      mockUseCase.execute.and.returnValue(throwError(() => mockError));

      spyOn(console, 'log');

      component.decryptMessage();

      fixture.whenStable().then(() => {
        expect(console.log).toHaveBeenCalledWith(mockError, 'error');
        expect(component.isDecrypted()).toBe(true);
        expect(component.decrytedMessage()).toBe('');
        done();
      });
    });

    it('should handle null response from execute', (done) => {
      mockUseCase.execute.and.returnValue(null as any);

      component.decryptMessage();

      fixture.whenStable().then(() => {
        expect(component.isDecrypted()).toBe(true);
        done();
      });
    });

    it('should set isDecrypted before calling the use case', () => {
      mockUseCase.execute.and.returnValue(of({ decrypted: 'decrypted_text' }));
      
      const spy = spyOn(component, 'decryptMessage').and.callThrough();
      component.decryptMessage();
      
      expect(component.isDecrypted()).toBe(true);
    });
  });
});
