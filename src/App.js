import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
    this.submitingCard = this.submitingCard.bind(this);
  }

  handleChange(event) {
    const { name, type, value, checked } = event.target;
    this.setState({
      [name]: (type !== 'checkbox' ? value : checked) }, this.validateSubmit);
  }

  validateSubmit() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    let errorsForm = 0;
    const convertedAttr1 = parseInt(cardAttr1, 10);
    const convertedAttr2 = parseInt(cardAttr2, 10);
    const convertedAttr3 = parseInt(cardAttr3, 10);
    const sum = convertedAttr1 + convertedAttr2 + convertedAttr3;
    const min = 0;
    const max = 90;
    const limitSum = 210;
    if (sum > limitSum) {
      errorsForm += 1;
    }
    if (convertedAttr1 < min
     || convertedAttr2 < min
     || convertedAttr3 < min
     || convertedAttr1 > max
     || convertedAttr2 > max
     || convertedAttr3 > max) {
      errorsForm += 1;
    }
    if (errorsForm === 0
      && cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  submitingCard() {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false });
    }
    this.setState((state) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [state, ...state.savedCards],
    }));
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      savedCards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.submitingCard }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <span>
          { savedCards.map((savedCard, index) => (
            <Card
              key={ index }
              cardName={ savedCard.cardName }
              cardDescription={ savedCard.cardDescription }
              cardAttr1={ savedCard.cardAttr1 }
              cardAttr2={ savedCard.cardAttr2 }
              cardAttr3={ savedCard.cardAttr3 }
              cardImage={ savedCard.cardImage }
              cardRare={ savedCard.cardRare }
              cardTrunfo={ savedCard.cardTrunfo }
            />
          ))}
        </span>
      </div>
    );
  }
}

export default App;
