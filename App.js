import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import React from 'react';
import {Text} from 'react-native';
import StarterScreen from './src/screen/StarterScreen';
import ProductScreen from './src/screen/ProductScreen';
import ProductDetailScreen from './src/screen/ProductDetailScreen';
import {setNavigator} from './src/navigationRef';
const switchNavigator=createStackNavigator({


  Product:ProductScreen,
 

  //ProductDetail:ProductDetailScreen,
  ProductDetail: {
    screen: ProductDetailScreen,
    
    
}
  },
  
  
{
  initialRouteName:'Product',
  headerMode: '',
  
}
);//end switchNavigator



const App= createAppContainer(switchNavigator);

export default()=>{

  return (
              
               <App  ref={(navigator)=>{setNavigator(navigator)}}/>
              
  
         
 );

}