import { Component } from '@angular/core';

@Component({
  selector: 'app-museum-header',
  templateUrl: './museum-header.html',
  styleUrl: './museum-header.scss'
})
export class MuseumHeaderComponent {
  protected readonly activeNotice = {
    counter: '1/4',
    text: 'Museu do TJSP premia obras de servidores no 2º Salão de Belas Artes'
  };

  protected readonly sectionLinks = [
    { label: 'Apresentação', accent: 'gold' },
    { label: 'Textos e artigos', accent: 'red' },
    { label: 'Redação Forense', accent: 'green' },
    { label: 'Exposições Virtuais', accent: 'orange' }
  ];

  protected readonly secondaryLinks = [
    'Venha nos visitar',
    'Novidades e Eventos',
    'Acervo',
    'Comunicados',
    'Videos'
  ];
}
