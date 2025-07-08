import { Component } from '@angular/core';
import { Boletim } from './boletim';

@Component({
  selector: 'app-calcula-media',
  standalone: false,
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.css'
})

export class CalculaMedia {
media = 0;
  situacao = '';

  calcular(n1: string, n2: string, n3: string, n4: string, provaFinal: string) {
  const notas = [parseFloat(n1), parseFloat(n2), parseFloat(n3), parseFloat(n4)];

  const boletim = new Boletim(notas);
  let media = boletim.calcularMedia();
  let provaFinalAplicada = false;

  if (media < 60 && provaFinal && parseFloat(provaFinal) > 0) {
    provaFinalAplicada = true;
    media = boletim.aplicarProvaFinal(parseFloat(provaFinal));
  }

  this.media = media;
  this.situacao = boletim.situacaoAluno(media, provaFinalAplicada);
}

}
