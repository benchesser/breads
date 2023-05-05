const React = require('react');
const Default = require('./layouts/default');

function New (title) {
    return (
        <Default title>
            <h2>Add a new bread</h2>
            <form action='/breads' method='POST'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' required />

                <label htmlFor='image'>Image URL</label>
                <input type='text' name='image' id='image' />

                <label>
                    Has Gluten?
                    <input type='checkbox' name='hasGluten' id='hasGluten' defaultChecked />
                </label>

                <label htmlFor='baker'>Baker</label>
                <select name='baker' id='baker'>
                    <option value='Rachel'>Rachel</option>
                    <option value='Monica'>Monica</option>
                    <option value='Joey'>Joey</option>
                    <option value='Chandler'>Chandler</option>
                    <option value='Ross'>Ross</option>
                    <option value='Phoebe'>Phoebe</option>
                </select>

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