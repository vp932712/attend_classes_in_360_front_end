import React from 'react';
     import {
       Text,
       View,
       VrButton
     } from 'react-vr';


     class Demo extends React.Component {
       render() {
         return (
           <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#1AC8F7'}}>
             <VrButton>
               <Text style={{fontSize: 0.2, textAlign: 'center'}}>
               DEMO
               </Text>
             </VrButton>
           </View>
         )
       }
     }

    export default Demo
