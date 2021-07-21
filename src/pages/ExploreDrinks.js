import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchDrinkRandom } from '../actions/index';

import '../css/Buttons.css';

class ExploreDrinks extends Component {
  constructor() {
    super();

    this.randomDrink = this.randomDrink.bind(this);
  }

  componentDidMount() {
    this.randomDrink();
  }

  randomDrink() {
    const { requestDrinkRandom } = this.props;
    requestDrinkRandom();
  }

  render() {
    const { drinkRandom } = this.props;
    return (
      drinkRandom[0]
        ? (
          <div className="page">
            <div className="perfil-container">
              <Header title="Explorar Bebidas" searchIcon />
              <div className="explore-buttons">
                <Link to="/explorar/bebidas/ingredientes">
                  <button
                    className="buttons-explore"
                    type="button"
                    data-testid="explore-by-ingredient"
                  >
                    Por Ingredientes
                  </button>
                </Link>
                <Link to={ `/bebidas/${drinkRandom[0].idDrink}` }>
                  <button
                    className="buttons-explore"
                    type="button"
                    data-testid="explore-surprise"
                  >
                    Me Surpreenda!
                  </button>
                </Link>
              </div>

              <Footer />
            </div>
          </div>
        )
        : null
    );
  }
}

const mapStateToProps = (state) => ({
  drinkRandom: state.drink.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  requestDrinkRandom: () => dispatch(fetchDrinkRandom()),
});

ExploreDrinks.propTypes = {
  requestDrinkRandom: PropTypes.func.isRequired,
  drinkRandom: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreDrinks);
