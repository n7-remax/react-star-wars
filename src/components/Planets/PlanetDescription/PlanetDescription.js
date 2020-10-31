import { Component } from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';

class PlanetDescription extends Component {
    state = {
        planetId: this.props.match.params.url,
        name: "",
        rotationPeriod: "",
        diameter: "",
        climate: "",
        gravity: "",
        terrain: "",
        population: "",
        residents: [],

    }

    getPlanetDescription = async (id) => {
        const response = await axios(id)
        return response
    }

    getResidents = async (url) => {
        const response = await axios(url)
        return response
    }

    componentDidMount() {
        console.log('planet desc mounted')
        this.getPlanetDescription(`planets/${this.state.planetId}/`).then(res => {
            console.log(res)
            this.setState({
                name: res.data.name,
                rotationPeriod: res.data.rotation_period,
                diameter: res.data.diameter,
                climate: res.data.climate,
                gravity: res.data.gravity,
                terrain: res.data.terrain,
                population: res.data.population,
            })
            if (Array.isArray(res.data.residents) && res.data.residents.length) {
                console.log('true')
                const peopleId = res.data.residents.map(item => item.match(/(\d+)/)[0])
                peopleId.forEach(element => {
                    this.getResidents(`people/${element}/`).then(res => {
                        this.setState({
                            residents: [...this.state.residents, res.data.name]
                        })
                    })

                });

            } else {
                console.log('false')
                this.setState({
                    residents: "No data available"
                })
            }
        })
    }

    render() {
        const planet = this.state;
        return (
            <div className="planet-description">
                <Container maxWidth='sm'>
                    <h2>{planet.name}</h2>
                    <div className="planet-description-list">
                        <p> Rotation Period: {planet.rotationPeriod}</p>
                        <p> Diameter: {planet.diameter}</p>
                        <p> Climate: {planet.climate}</p>
                        <p> Gravity: {planet.gravity}</p>
                        <p> Terrain: {planet.terrain}</p>
                        <p> Population: {planet.population}</p>
                        <p> Residents: {planet.residents}</p>
                    </div>
                </Container>
            </div>
        )
    }
}

export default PlanetDescription