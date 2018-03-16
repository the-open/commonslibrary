import React from 'react';

import { SearchOptionManager } from './search_option_manager';

const searchData = require('../data_sample/search.json');
const newSearchData = require('../data_sample/new_search.json');


export class Search extends React.Component {
  constructor () {
    super()
    this.state = {
      searchOptions: searchData,
      searchQuery: ''
    }

    // handler binds
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let query = event.target.value;

    this.setState({
      searchQuery: query
    });

    if (query.length > 2) {
      // fake API call, replace with real one
      this.setState({
        searchOptions: newSearchData
      })
    } else {
      this.setState({
        searchOptions: searchData
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let tags = this.searchTags.state.selectedOptions;
    let groups = this.searchGroups.state.selectedOptions;
    let people = this.searchPeople.state.selectedOptions;
    let query = this.state.searchQuery
  }

  render() {
    return(
      <div className="search-bar">
        <form onSubmit={this.handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Type here to search for resource"
            onChange={this.handleChange}/>
          <button type="submit">
            <svg className="icon">
              <use xlinkHref="#search"></use>
            </svg>
          </button>
        </form>

        <div className="search-filter">
          <div className="search-filter__tags">
            <div className="search-filter__type">
              <span>Tags</span>
              <svg className="icon">
                <use xlinkHref="#tag"></use>
              </svg>
            </div>
            <SearchOptionManager
              ref={(searchTags) => {this.searchTags = searchTags;}}
              searchOptions={this.state.searchOptions.tags}
              type="tags"/>
          </div>
          <div className="search-filter__groups">
            <div className="search-filter__type">
              <span>Groups</span>
              <svg className="icon">
                <use xlinkHref="#groups"></use>
              </svg>
            </div>
            <SearchOptionManager
              ref={(searchGroups) => {this.searchGroups = searchGroups;}}
              searchOptions={this.state.searchOptions.groups}
              type="groups"/>
          </div>
          <div className="search-filter__people">
            <div className="search-filter__type">
              <span>People</span>
              <svg className="icon">
                <use xlinkHref="#directory"></use>
              </svg>
            </div>
            <SearchOptionManager
              ref={(searchPeople) => {this.searchPeople = searchPeople;}}
              searchOptions={this.state.searchOptions.people}
              type="people"/>
          </div>
        </div>
      </div>
    )
  }
}
