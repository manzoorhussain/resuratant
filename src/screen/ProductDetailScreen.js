import React from 'react';
import {View,Text,StyleSheet,Image,Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Spacer from '../component/Spacer';



class ProductDetailScreen extends React.Component{

    
    constructor(props){
        super(props)
    }

    render(){

    const { params } = this.props.navigation.state;
    const prodURL = params ? params.prodURL : null;
    const prodName = params ? params.prodName : null;
    const prodDesc = params ? params.prodDesc : null;
    const prodPrice = params ? params.prodPrice : null;


        return(
        <View style={styles.containerStyle}>
       
        
        <View style={styles.headerView}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Product')}>
        <Icon name="arrow-left" size={25} color="black"  style={styles.backArrow}/>
        </TouchableOpacity>
        <Text style={styles.headingTextView}>Product Detail</Text>
        </View>
        <Spacer/>
        
        <View style={styles.imageView}>
        <Image style={styles.imageThumbnail} source={{uri: `data:image/png;base64,${prodURL}`}}/>
        </View>
        
        <Spacer/>
        <View style={styles.imageDetailView}>
        <Text style={styles.textView}>Name</Text>
        <Text style={styles.textView}>{prodName}</Text>
        </View>


        <View style={styles.imageDetail}>
        <Text style={styles.textView}>Details</Text>
        <Text style={styles.textImageDetail}>{prodDesc}</Text>
        </View>

        <View style={styles.imageDetailView}>
        <Text style={styles.textView}>Price</Text>
        <Text style={styles.textView}>{prodPrice}</Text>
        </View>
        

        
      
        


        

         </View>
        )
    }

}

export default ProductDetailScreen;


const styles=StyleSheet.create({
    containerStyle:{
     flexDirection:'column',
    justifyContent:'center'
  
  },
   headerView:{
       
       alignItems:'center',
       backgroundColor:'white',
       borderColor:'white',
       borderWidth:2,
       borderRadius:2,
       height:50,
       marginTop:10,
       flexDirection:'row',
       

       

   },   
   headingTextView:{
       fontFamily:'sans-serif',
       fontSize:20,
       fontWeight:'bold',
       paddingTop:10,
       justifyContent:'center',
       paddingLeft:100
       
       
   }
   ,backArrow:{
       paddingLeft:10,

   }
,imageView:{
  paddingLeft:0
   

},
imageDetailView:{
    
       flexDirection:'row',
       justifyContent:'space-between',
       backgroundColor:'white',
       borderColor:'black',
       borderWidth:1,
       borderRadius:2,
       height:50,
       paddingTop:10,
     

},
imageThumbnail:{
    width:Dimensions.get('window').width,
    height:250,
    
}
,textView:{
    fontSize:25,
    flexDirection: 'row',
},
imageDetail:{
    
    flexDirection:'column',
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:1,
    borderRadius:2,
    height:200,
    paddingTop:10,
  

},
textImageDetail:{
    fontSize:20
}

  });
  