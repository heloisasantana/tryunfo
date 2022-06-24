import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input name="nome" type="text" data-testid="name-input" />
        </label>

        <label htmlFor="description-input">
          Descrição
          <textarea name="description" type="text" data-testid="description-input" />
        </label>

        <label htmlFor="attr1-input">
          Poder
          <textarea name="attribute-one" type="number" data-testid="attr1-input" />
        </label>

        <label htmlFor="attr2-input">
          Energia
          <textarea name="attribute-two" type="number" data-testid="attr2-input" />
        </label>

        <label htmlFor="aattr3-input">
          Defesa
          <textarea name="attribute-three" type="number" data-testid="attr3-input" />
        </label>

        <label htmlFor="image-input">
          Imagem
          <textarea name="image" type="text" data-testid="image-input" />
        </label>

        <label htmlFor="rare-input">
          Raridade
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Super Trunfo
          <input name="nome" type="checkbox" data-testid="trunfo-input" />
        </label>

        <label htmlFor="save-button">
          Salvar
          <input name="button" type="button" data-testid="save-button" />
        </label>
      </form>
    );
  }
}

export default Form;
