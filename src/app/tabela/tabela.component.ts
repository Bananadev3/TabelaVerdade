import { Component } from '@angular/core';
import { inject, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css',
})
export class TabelaComponent {
  private modalService = inject(NgbModal);

  a: string = '';
  b: string = '';
  r1: boolean = false;
  r4: boolean = false;
  r3: boolean = false;
  r2: boolean = false;

  open(content: TemplateRef<any>) {
    if (this.a === '' || this.b === '') {
      alert('Ensira os Valores');
    } else {
      this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    }

    if (this.a === this.b) {
      this.r1 = true;
      this.r2 = true;
      this.r3 = true;
      this.r4 = true;
    } else {
      this.r1 = true;
    }
  }
}
