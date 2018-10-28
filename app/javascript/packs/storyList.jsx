import React from 'react';

class StoryList extends React.Component {
  render() {
    return (
    	<div>
          <Label />
          <SortButtons />
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
    )
  }
}

class Label extends React.Component {
    render() {
        return <p className="display-4">Fantasy Short Stories</p>;
    }
}

class SortButtons extends React.Component {
  state = {
    filterText: 'mostViewed',
    filterTimePeriodText: 'today'
  }

  constructor(props) {
    super(props);
    this.selectFilter = this.selectFilter.bind(this);
    this.selectTimePeriodFilter = this.selectTimePeriodFilter.bind(this);
  }

  selectFilter = (text) => {
    this.setState({filterText: text});
      console.log(this.state);
  }

  selectTimePeriodFilter = (text) => {
    this.setState({filterTimePeriodText: text});
      console.log(this.state);
  }

  render() {
    return (
      <div className="mb-4">
        <div className="m-1">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary active">
              <input type="radio" className="options" id="mostViewed" autoComplete= "off"
              checked={this.state.filterText === 'mostViewed'}
              onChange={ () => this.selectFilter('mostViewed')}
              />
               Most Viewed
            </label>
            <label className="btn btn-secondary">
              <input type="radio" className="options" id="mostRead" autoComplete="off"
              checked={this.state.filterText === 'mostRead'}
              onChange={ () => this.selectFilter('mostRead')}
              />
               Most Read
            </label>
            <label className="btn btn-secondary">
              <input type="radio" className="options" id="mostDiscussed" autoComplete="off"
              checked={this.state.filterText === 'mostDiscussed'}
              onChange={() => this.selectFilter('mostDiscussed')}
              />
               Most Discussed
            </label>
          </div>
        </div>
        <div className="m-1">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary active">
              <input type="radio" className="options" id="today" autoComplete= "off"
              checked={this.state.filterText === 'today'}
              onChange={ () => this.selectTimePeriodFilter('today')}
              />
               Today
            </label>
            <label className="btn btn-secondary">
              <input type="radio" className="options" id="thisWeek" autoComplete="off"
              checked={this.state.filterText === 'thisWeek'}
              onChange={ () => this.selectTimePeriodFilter('thisWeek')}
              />
               This Week
            </label>
            <label className="btn btn-secondary">
              <input type="radio" className="options" id="allTime" autoComplete="off"
              checked={this.state.filterText === 'allTime'}
              onChange={() => this.selectTimePeriodFilter('allTime')}
              />
               All Time
            </label>
          </div>
        </div>
      </div>
    )
  }
}

class StoryCard extends React.Component {
  state = {}

  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div className="my-2">
      <div className="mx-auto">
        <div className="card" >
          <div className="card-body">
          <h2 className="card-title">My First Short Story</h2>
          <h6 className="card-subtitle mb-3 text-muted">By: Jake Massmann</h6>
          <p className="card-text">My first short story is a story about characters who develop over the course of an adventure.</p>
          <p className="card-subtitle text-muted">5 days ago</p>
          <div className="row">
            <div className="col-sm-auto">
              <div className="callout callout-info">
                <small className="text-muted">Views</small>
                <br />
                <strong className="h5">100</strong>
              </div>
            </div>
            <div className="col-sm-auto">
              <div className="callout callout-success">
                <small className="text-muted">Reads</small>
                <br />
                <h5>13</h5>
              </div>
            </div>
            <div className="col-sm-auto">
              <div className="callout callout-primary">
                <small className="text-muted">Pages</small>
                <br />
                <strong className="h5">8</strong>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default StoryList;
