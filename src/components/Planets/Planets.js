import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import tattoine from '../../assets/image/tattoine.png'

class Planets extends Component {
    state = {
        initialPage: this.props.match.params.page,
        count: null,
        nextPage: 1,
        prevPage: null,
        currentPage: 1,
        planets: []
    }

    getPlanets = async (page) => {
        const response = await axios(page)
        return response
    }

    componentDidMount() {
        this.getPlanets(`planets/?page=${this.state.initialPage}`).then(res => {
            this.setState({
                count: res.data.count,
                nextPage: res.data.next,
                prevPage: res.data.previous,
                planets: res.data.results
            })
        })
    }
    // if currentPage is changed, update component
    componentDidUpdate(nextProps, nextState) {
        if (this.state.currentPage !== nextState.currentPage) {
            this.getPlanets(`planets/?page=${this.state.currentPage}`).then(res => {
                this.setState({
                    count: res.data.count,
                    nextPage: res.data.next,
                    prevPage: res.data.previous,
                    planets: res.data.results
                })
            })
        }

    }
    // merge url param props to trigger component update
    static getDerivedStateFromProps(props, state) {
        return {
            currentPage: props.match.params.page
        }
    }

    render() {
        const maxPages = Math.ceil(this.state.count / 10);
        const PlanetsList = this.state.planets.slice(0,4).map((planet, i) => {
            return (
                <div className="planets-item" key={i}>
                    {/* <Link to={`/react-star-wars/planet/${planet.url.match(/(\d+)/)[0]}`} className="card-link">
                    </Link> */}
                        <img src={tattoine} alt={planet.name}/>
                        <div className="preview">
                            <h2>
                                {planet.name}
                            </h2>
                            <p>
                                {planet.climate}
                            </p>
                            </div>
                    
                </div>
            )
        })
        return (
            <div className="planets">
                <div className="planets-list">
                <Link to={`/react-star-wars/planets/${this.state.currentPage > 1 ? +this.state.currentPage - 1 : this.state.currentPage}`}>
                        <Button variant="contained" color="primary" disabled={this.state.prevPage ? false : true}>
                            Prev
                        </Button>
                    </Link>
                    {PlanetsList}
                    <Link to={`/react-star-wars/planets/${this.state.currentPage < maxPages ? +this.state.currentPage + 1 : this.state.currentPage}`}>
                        <Button variant="contained" color="primary" disabled={this.state.nextPage ? false : true}>
                            Next
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}


export default Planets;
