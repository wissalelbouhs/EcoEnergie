import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const Carousel =() =>{
   const flatListRef=useRef();
   const screenWidth = Dimensions.get("window").width;

   const [activeIndex,setActiveIndex] = useState(0);
   useEffect(()=>{
      let interval= setInterval(() => {
        if(activeIndex == carouselData.length - 1) {
          flatListRef.current.scrollToIndex({
            index: 0,
            animation:true,
        });
        }else{
          flatListRef.current.scrollToIndex({
            index: activeIndex + 1,
          animation:true,
          });
        }
      },2000);
      return ()=>clearInterval(interval);
    });
      
   

   const getItemLayout=(data,index)=>({
    length:screenWidth,
    offset: screenWidth*index,
    index:index,
   });
   const carouselData =[
     {
      id:"01",
      image: require("../assets/panneau.jpg"),
     },
     {
     id:"02",
     image: require("../assets/panneau.jpg"),
     },
     {
      id:"03",
     image: require("../assets/panneau.jpg"),
     },
   ];

const renderItem = ({item,index})=>{
  return(
    <View>
      <Image source={item.image} style={{height:200,width:screenWidth}}/>
    </View>
  )
};
const handleScroll =(event)=>{
  const scrollPosition = event.nativeEvent.content0ffset.x;
  console.log({scrollPosition});

  const index =scrollPosition/screenWidth;
  console.log(index);
  setActiveIndex(index);


};

const renderDoIndicators =() =>{
    return carouselData.map((dot,index) =>{
      if(activeIndex == index){
        return(
          <View 
          key ={index}
          style={{
            backgroundColor:"green",
            height:10,
            width:10,
            borderRaduis:5,
            marginHorizontal:6,
            }}
            ></View>
        );
       }
      
       
    else{  
    return(
      <View 
      key ={index}
      style={{
        backgroundColor:"red",
        height:10,
        width:10,
        borderRaduis:5,
        marginHorizontal:6,
        }}
        >

      </View>
    );
   }
   });
};

    
   return (
    <View>
      <Text>Carousel</Text>
      <FlatList 
      data ={carouselData} 
      ref={flatListRef}
      getItemLayout={getItemLayout}
      renderItem={renderItem} 
      keyExtractor={(item)=>item.id}
      horizontal={true} 
      pagingEnabled={true}
      onScroll={handleScroll}
      />
      {
        <View style={{
               flexDirection:'row',
               justifyContent:'center',
               marginTop:30


        }}>
          {renderDoIndicators()}
        </View>

       
      }
    </View>
   );
};
export default  Carousel;
