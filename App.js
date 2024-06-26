import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { RAZORPAY_KEY_ID,RAZORPAY_KEY_SECRET } from "@env";
import RazorpayCheckout from 'react-native-razorpay';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const startPayment = async () => {
    const options = {
      description: 'Payment Test',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: RAZORPAY_KEY_ID,
      amount: '1000',
      name: 'Acme Corp',
      order_id: 'order_'+uuidv4(),//Replace this with an order_id created using Orders API.
      prefill: {
        email: 'shrawan@filevile.com',
        contact: '9167186662',
        name: 'Shrawan SHinde'
      },
      theme: {color: '#53a20e'}
    }
    console.log(options);
   // console.log(RazorpayCheckout.onExternalWalletSelection);
   RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      console.log(error);
      alert(`Error: ${error.code} | ${error.description}`);
    });
  };

  const styles = {
    container: {
      flex: 1,
      // backgroundColor: "#000",
      // alignItems: "center",
      justifyContent: "center",
      // padding: 12,
      margin: 4,
    },
    scrollView: {
      // margin: 12,
      paddingHorizontal: 24,
      width: "100%",
    },
    text: {
      color: "#fff",
      // fontWeight: "bold",
      fontSize: 16,
    },
    title: {
      fontSize: 14,
      color: "#fff",
      fontWeight: "500",
    },
    buttonCss:{
      borderColor: "green",
      borderWidth: 1,
      borderRadius: 10,
      margin:10,
      padding:12,
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor:"green",
    }
  };

  return (
    <View style={styles.container}>
      <View>
      <TouchableOpacity
        style={styles.buttonCss}
         onPress={() => {
          startPayment();
        }}
      >
         <Text style={styles.title}>Start Payment</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


