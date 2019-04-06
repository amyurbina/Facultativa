import React, {Component} from 'react';
import Lista from './../component/lista';
import firebase from 'react-native-firebase';

class ListaContainer extends Component {
    constructor(props) 
    {
        super(props)

        this.state ={
            datos: [],
        }
    }

    render() {
        const {datos} = this.state
        return(
            <Lista
                datos={datos}
            />
        )
    }

    componentDidMount(){
        const db = firebase.firestore();
        db.collection('photos'). onSnapshot((instantanea) =>{
            const{datos} = this.state;
            instantanea.docChanges.forEach((cambio) => {
                const indice = datos.findIndex(item=> item.key === cambio.doc.id);
                switch(cambio.type){
                    case'added':{
                        datos.push({
                            key: cambio.doc.id,
                            title: cambio.doc.data().title,
                            url:cambio.doc.data().url,

                        });
                        break;


                    }

                    case'modified':{
                        if(indice !== -1){
                            datos[indice].title=cambio.doc.data().title;
                            datos[indice].url = cambio.doc.data().url;
                        }
                        break;
                    }

                    case'removed':{
                        if(indice !== -1){
                            datos.splice(indice, 1);
                        }
                        break;
                    }
                }
            })
            this.setState({
                datos: datos,
            });
        });
    }
}

export default ListaContainer

