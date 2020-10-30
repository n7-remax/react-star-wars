import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = theme => ({
    root: {
        margin: 10,
        flex: '0 33%',
    },
    pos: {
        marginBottom: 12,
    },
});

class Planets extends Component {
    state = {
        initialPage: this.props.match.params.page,
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
        console.log('mounted')
        console.log(this.props.match.params.page)
        this.getPlanets(`planets/?page=${this.state.initialPage}`).then(res => {
            console.log(res)
            this.setState({
                count: res.data.count,
                nextPage: res.data.next,
                prevPage: res.data.previous,
                planets: res.data.results
            })
            console.log(this.state.planets)
        })
    }
    // if currentPage is changed, update component
    componentDidUpdate(nextProps, nextState) {
        if (this.state.currentPage !== nextState.currentPage) {
            this.getPlanets(`planets/?page=${this.state.currentPage}`).then(res => {
                console.log(res)
                this.setState({
                    count: res.data.count,
                    nextPage: res.data.next,
                    prevPage: res.data.previous,
                    planets: res.data.results
                })
            })
            console.log('update')
        }

    }
    // merge url param props to trigger component update
    static getDerivedStateFromProps(props, state) {
        return {
            currentPage: props.match.params.page
        }
    }

    render() {
        const { classes } = this.props;
        console.log(this.props.match)
        const PlanetsList = this.state.planets.map((planet, i) => {
            return (
                <Card className={classes.root} key={i}>
                    <a href="/" className="card-link">
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {planet.name}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {planet.climate}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Population: {planet.population}
                            </Typography>
                        </CardContent>
                    </a>
                </Card>
            )
        })
        return (
            <div className="planets">
                <div className="planets-list">
                    {PlanetsList}
                </div>
                <div className="planets-buttons">
                    <Link to={`/${+this.state.currentPage - 1}`}>
                        <Button variant="contained" color="primary" disabled={this.state.prevPage ? false : true}>
                            Prev
                        </Button>
                    </Link>
                    <Link to={`/${+this.state.currentPage + 1}`}>
                        <Button variant="contained" color="primary" disabled={this.state.nextPage ? false : true}>
                            Next
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}


export default withStyles(styles, { withTheme: true })(Planets);
