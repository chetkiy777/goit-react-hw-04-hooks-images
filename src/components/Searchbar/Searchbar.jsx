import styles from './styles.module.css';
import { ImSearch } from 'react-icons/im';
import React from 'react';

class Searchbar extends React.Component {
  state = {
    inputValue: '',
  };

  onInputChange = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let data = e.currentTarget.query.value;
    this.props.onFormSubmit(data);
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <ImSearch />
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus="off"
            placeholder="Search images and photos"
            name="query"
            value={this.state.inputValue}
            onChange={e => this.onInputChange(e)}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
