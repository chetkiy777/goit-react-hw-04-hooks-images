import styles from './styles.module.css';
import { ImSearch } from 'react-icons/im';
import { setState } from 'react';
import PropTypes from 'prop-types';

export const Searchbar = ({ onFormSubmit }) => {
  const [searchValue, setSearchValue] = setState('');

  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit(searchValue);
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
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
          value={searchValue}
          onChange={e => setSearchValue(e)}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func,
};

// class Searchbar extends React.Component {
//   state = {
//     inputValue: '',
//   };

//   onInputChange = e => {
//     this.setState({ inputValue: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     let data = e.currentTarget.query.value;
//     this.props.onFormSubmit(data);
//   };

//   render() {
//     return (
//       <header className={styles.Searchbar}>
//         <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={styles.SearchFormButton}>
//             <ImSearch />
//           </button>

//           <input
//             className={styles.SearchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus="off"
//             placeholder="Search images and photos"
//             name="query"
//             value={this.state.inputValue}
//             onChange={e => this.onInputChange(e)}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;
