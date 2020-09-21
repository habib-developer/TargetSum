import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
class Game extends React.Component
{
    randomNumbers=Array.from({length:this.props.totalNumberCount})
    .map(()=>1+Math.floor(10*Math.random()));
    target=this.randomNumbers.slice(0,this.props.totalNumberCount-2)
    .reduce((acc,curr)=>acc+curr,0);
    render(){
        return(
        <View style={style.container}>
        <Text style={style.target}>{this.target}</Text>
        {this.randomNumbers.map((number,index)=>
            <Text style={style.random} key={index}>{number}</Text>
        )}
        </View>
        );
    }
}
const style=StyleSheet.create({
    container:{
        backgroundColor:'#ddd',
        flex:1,
        paddingTop:50
    },
    target:{
        backgroundColor:'#aaa',
        fontSize:40,
        textAlign:"center",
        marginHorizontal:50
    },
    random:{
        fontSize:30,
        backgroundColor:'#aaa',
        margin:10,
        width:50,
        textAlign:'center'
    }
});

export default Game;