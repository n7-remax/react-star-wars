import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
        count: null,
        nextPage: "planets/?page=1",
        prevPage: null,
        planets: []

    }

    getPlanets = async (page) => {
        const response = await axios(page)
        return response
    }

    componentDidMount() {
        console.log('mounted')
        this.getPlanets(this.state.nextPage).then(res => {
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

    render() {
        const { classes } = this.props;
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
            <div className="planets-list">
                {PlanetsList}

            </div>
        )
    }
}


export default withStyles(styles, { withTheme: true })(Planets);
