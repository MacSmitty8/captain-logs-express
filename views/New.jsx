import React from 'react';

module.exports = function New() {
    return (
        <div>
            <h1>Create A New Entry!</h1>
            <form action="/logs" method="POST">
                <label htmlFor="title">Title: </label>
                <input name="title" type="text" />
                <br />
                <label htmlFor="entry">Entry: </label>
                <input name="entry" type="textarea" />
                <br />
                <label htmlFor="ship-is-broken">Is the Ship Broken?</label>
                <input name="ship-is-broken" type="checkbox" />
                <br />
                <input type="submit" value="create log" />
                <br />
            </form>
        </div>

    );
};