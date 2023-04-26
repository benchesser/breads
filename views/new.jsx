const React = require('react');
const Default = require('./layouts/default');

function New () {
    return (
        <Default>
            <h2>Add a new bread</h2>
            <form action='/breads' method='POST'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' />

                <label htmlFor='image'>Image URL</label>
                <input type='text' name='image' id='image' />

                <label>
                    Has Gluten?
                    <input type='checkbox' name='hasGluten' id='hasGluten' defaultChecked />
                </label>

                <br />

                <input type='submit' />
            </form>
            <div className="backButton">
                <a href="/breads"><button>Go back to the index</button></a>
            </div>
        </Default>
    );
};

module.exports = New;