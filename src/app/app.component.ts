import { Disciplina } from './disciplina.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selecionado: any;

  editando: any;

  nome: any;

  descricao: any;

  disciplinas = [
    new Disciplina(
      'Lingua portuguesa',
      'A Língua Portuguesa está entre os 10 idiomas mais' +
        'falados do mundo e possui uma significativa lista de regras e' +
        'que estuda as palavras isoladamente; sintaxe, responsável por estudar' +
        'acordos coordenados pela Academia Brasileira de Letras.' +
        'Dentre as áreas mais importantes da disciplina, estão: morfologia,' +
        'as palavras enquanto elementos de uma frase; e semântica, que estuda o' +
        'significado das palavras e os sentidos que elas podem tomar de acordo com o contexto.'
    ),

    new Disciplina(
      'Arte',
      'A arte possui um caráter estético e está intimamente relacionada com as sensações' +
        'e emoções dos indivíduos. Como exemplo, podemos citar a pintura, a dança, a música, o cinema,' +
        'a literatura, a arquitetura, etc.'
    ),

    new Disciplina(
      'Educação Física',
      'A Educação Física é uma disciplina que integra o educando na cultura corporal,' +
        'formando o cidadão que irá produzi-la, reproduzi-la e transformá-la através dos jogos, dos' +
        'esportes, das lutas, da ginástica e das danças, na busca do exercício crítico da cidadania e' +
        'de uma melhor qualidade de vida. Ela é considerada como um meio educativo privilegiado, pois' +
        'abrange o ser na sua totalidade, objetivando o equilíbrio, a saúde do corpo, a aptidão física' +
        'para a ação e o desenvolvimento dos valores morais.'
    ),

    new Disciplina(
      'Matemática',
      'Matemática é a área do conhecimento que envolve o estudo da aritmética,' +
        'geometria, trigonometria, estatística e cálculo, em busca da sistematização de quantidades,' +
        'medidas, espaços, estruturas e variações. A palavra matemática é originada do grego μ?θημα' +
        '(mathema), que, em tradução livre, significa “aquilo que pode ser aprendido”.'
    ),
  ];

  selecionar(disciplina: any) {
    this.selecionado = disciplina;
  }

  salvar() {
    if (this.editando) {
      this.editando.nome = this.nome;
      this.editando.descricao = this.descricao;
    } else {
      const novaDisciplina = new Disciplina(this.nome, this.descricao);
      this.disciplinas.push(novaDisciplina);
    }
    this.nome = '';
    this.descricao = '';
    this.editando = '';
  }

  excluir(disciplina: any) {
    if (this.editando == disciplina) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (
        confirm(
          'Tem certeza que deseja excluir a disciplina "' +
            disciplina.nome +
            '"?'
        )
      ) {
        const index = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(index, 1);
      }
    }
  }

  editar(disciplina: any) {
    this.nome = disciplina.nome;
    this.descricao = disciplina.descricao;
    this.editando = disciplina;
  }

  cancelar() {
    this.nome = '';
    this.descricao = '';
    this.editando = '';
  }

}
