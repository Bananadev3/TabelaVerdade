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

  open(content: TemplateRef<any>) {
    if (this.p === '' || this.q === '') {
      alert('Ensira os Valores');
    } else {
      this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    }
  }

  p: string = '';
  q: string = '';
}
