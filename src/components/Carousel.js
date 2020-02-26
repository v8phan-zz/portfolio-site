import React from 'react';

import Card from '../components/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import jackie from '../assets/images/jackie.PNG';
import savanah from '../assets/images/savanah.jpg';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Project One',
                    subTitle: 'whatever the project is',
                    imgSrc: jackie,
                    link: 'https://whatever',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Project Two',
                    subTitle: 'whatever the project is',
                    imgSrc: savanah,
                    link: 'https://whatever',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
       let items = [...this.state.items];
       
       items[id].selected = items[id].selected ? false : true;

       items.forEach(item => {
           if(item.id !== id) {
               item.selected = false;
           }
       });

       this.setState({
           items
       });

    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick = {(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>        
        );
    }

}

export default Carousel;