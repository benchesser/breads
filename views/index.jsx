const React = require('react');
const Default = require('./layouts/default');


function Index ({breads, title}) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            <div className='newButton'>
                <a href='/breads/new'>
                    Add a new bread
                </a>
            </div>
            <ul>
                {
                    breads.map( (bread) => {
                        return (
                            <li key={bread.id}>
                                <a href={`/breads/${bread.id}`}>
                                    {bread.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </Default>
    );
};

module.exports = Index;