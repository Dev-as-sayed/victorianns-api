import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import useGetContests from '../../../Hooks/useGetContests/useGetContests';
import ContestCret from '../../../Components/ContestCret/ContestCret';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchContest, setSearchContest] = useState([]);

  const [ contest ] = useGetContests();
  // Mock data for seven types of suggestions
  const suggestionTypes = ['physics', 'chemistry', 'math', 'writing', 'spots', 'offerd'];

  const handleSearch = async (query) => {
    // Filter suggestion types based on the current input
    const matchedSuggestions = suggestionTypes.filter((type) =>
      type.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(matchedSuggestions);
  };

  const handleSuggestionClick = (item) => {
    // Set the search term when a suggestion is clicked
    setSearchTerm(item);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const searchResult = contest.filter( item => item.categories === searchTerm).slice(0, 6);
    setSearchContest(searchResult);
    // Perform a search or any other action when the form is submitted
    console.log('Performing search with query:', searchTerm);
    setSearchTerm(''); // Clear the search term after search
  };
  return (
    <div className=''>
      {/* search  */}
      <form
        className="relative w-fit mx-auto"
        onSubmit={handleSearchSubmit}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(e.target.value);
          }}
          className="p-2 border w-80 border-gray-300  rounded mr-2"
        />
        <FaSearch
          className="absolute top-3 right-6"
          onClick={handleSearchSubmit}
        />

        { suggestions.length > 0 ? (
          <ul className="bg-slate-100 w-80 mx-auto">
            {suggestions.map((item) => (
              <li
                key={item}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  handleSuggestionClick(item)
                  setSearchTerm(item)
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : 
          null
        }
      </form>


      {/* search result */}
      <div>
        <div className='grid lg:grid-cols-3 my-10 gap-6'>
          {
            searchContest?.map( item => <ContestCret
              key={item._id}
              item={item}
            ></ContestCret>)
          }
        </div>
      </div>
    </div>
  );
};

export default Search;
