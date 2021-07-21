import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchDrinkIngredientsAction } from '../actions/ingredientsActions';
import IngredientCard from '../components/IngredientCard';

class ExploreDrinksIngredients extends Component {
  componentDidMount() {
    const { requestDrinkIngredients } = this.props;
    requestDrinkIngredients();
  }

  render() {
    const { ingredients, location: { pathname } } = this.props;
    return (
      ingredients ? (
        <div className="page">
          <div className="perfil-container">
            <section className="ingredients-container">
              <Header title="Explorar Ingredientes" searchIcon />
              <IngredientCard ingredients={ ingredients } pathname={ pathname } />
            </section>
            <Footer />
          </div>
        </div>)
        : null
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestDrinkIngredients: () => dispatch(fetchDrinkIngredientsAction()),
});

const mapStateToProps = (state) => ({
  ingredients: state.drink.ingredients,
});

ExploreDrinksIngredients.propTypes = {
  requestDrinkIngredients: PropTypes.func,
  ingredients: PropTypes.arrayOf(Object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExploreDrinksIngredients);
