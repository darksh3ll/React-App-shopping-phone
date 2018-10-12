// AFFICHAGE API
import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
class User extends Component {
    render() {
        return (

                <Card>
                    <CardImg top width="100%" src={this.props.user.picture} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.user.name}</CardTitle>
                        <CardSubtitle>{this.props.user.email}</CardSubtitle>
                        <CardText>{this.props.user.company.catchPhrase}</CardText>
                        <Button color="primary">Ajouter au panier</Button>{' '}
                    </CardBody>
                </Card>

        );
    }
}

export default User;