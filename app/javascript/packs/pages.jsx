import React from 'react';


class Pages extends React.Component {
  state = {}

  constructor(props) {
    super(props);
  }

  render () {
    return (
	<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
	  <div className="carousel-inner">
	    <div className="carousel-item active">
	    	<Page />
	    </div>
	    <div className="carousel-item">
	    	<Page />
	    </div>
	    <div className="carousel-item">
	    	<Page />
	    </div>
	  </div>
	</div>
    )
  }
}

class Page extends React.Component {
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
          <h2 className="card-title">Page: 1</h2>
          <h6 className="card-subtitle mb-3 text-muted">Page: 1</h6>
          <p className="card-text">The story would go here</p>
          <p className="card-subtitle text-muted">Page: 1</p>
          <div className="row">
            <div className="col-sm-auto">
              <div className="callout callout-info">
                <small className="text-muted">Page</small>
                <br />
                <strong className="h5">1</strong>
              </div>
            </div>
            <div className="col-sm-auto">
              <div className="callout callout-success">
                <small className="text-muted">Page</small>
                <br />
                <h5>1</h5>
              </div>
            </div>
            <div className="col-sm-auto">
              <div className="callout callout-primary">
                <small className="text-muted">Page</small>
                <br />
                <strong className="h5">1</strong>
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

export default Pages