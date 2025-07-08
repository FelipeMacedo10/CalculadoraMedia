export class Boletim {
  notas: number[] = [];

  constructor(notas: number[]) {
    this.notas = notas;
  }

  calcularMedia(): number {
    const pesos = [2, 2, 3, 3];
    let soma = 0;
    let totalPesos = 0;

    for (let i = 0; i < this.notas.length; i++) {
      soma += this.notas[i] * pesos[i];
      totalPesos += pesos[i];
    }

    return parseFloat((soma / totalPesos).toFixed(2));
  }

  aplicarProvaFinal(notaFinal: number): number {
    const menorIndice = this.notas.indexOf(Math.min(...this.notas));
    if (notaFinal > this.notas[menorIndice]) {
      this.notas[menorIndice] = notaFinal;
    }
    return this.calcularMedia();
  }

  situacaoAluno(media: number, provaFinalAplicada: boolean): string {
  if (media >= 60) {
    return provaFinalAplicada ? 'Aprovado após Prova Final' : 'Aprovado';
  } else {
    return provaFinalAplicada ? 'Reprovado após Prova Final' : 'Em Prova Final';
  }
}


}