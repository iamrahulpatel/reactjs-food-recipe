import React from 'react';

//function
// function Header() {
//     return(
//         <h1>Header Hai bhai</h1>
//     );
// }
//we can use any one of them function/arrow function
//arrow function
const Header = props => {
    const {search, onInputChange, onSearchClick} = props;

    return (
        <div className="jumbotron">
            <h1 className="display-1">
                <span class="material-icons brand-icon">
                    fastfood
                </span>
                Food Recipe</h1>


            <div class="input-group w-50 mx-auto">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Search Your Recipes....."
                    value={search}
                    onChange={onInputChange}
                />
                <div class="input-group-append">
                    <button className="btn btn-dark" onClick={onSearchClick}>Search Recipe</button>
                </div>
            </div>
        </div>
    );
};

export default Header;