import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IconMaterial from 'react-native-vector-icons/FontAwesome';
import IconFoundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHr from '../../components/CustomHr';

export default function BalanceSummary({navigation}) {

  return (
    <View style={styles.container}>
      <Header text="Balance Summary" />
      <ScrollView>
        <View style={styles.sumary}>
          <Text style={{fontSize: 35, fontWeight: 700}}>XAF 100,000</Text>
          <View style={styles.updateSection}>
            <IconMaterial  
              name="refresh"
              size={10} 
              color="black" 
            />
            <Text style={{fontWeight: "bold", fontSize: 12, margin: 5}}>last updated 15 Feb 2023</Text>
            <IconFoundation 
              name="info"
              sie={10}
              color="black" 
            />
          </View>
          <Text 
            style={{fontSize: 13, color: "#3F5F90", fontWeight: 700, marginTop: 20, justifyContent: "center"}}
            onPress={() => navigation.navigate("BalanceDetails")}
          >
            View Balance and Shift Details 
            <Ionicons  
              name="arrow-forward"
              size={15} 
              color="#3F5F90"
            />
          </Text>
        </View>
        <View style={styles.transferSection}>
          <Text style={{marginBottom: -15, fontSize: 15}}>From December 1st till today</Text>
          <View style={styles.sumaryInfo}>
            <View style={styles.row}>
              <IconMaterial 
                name="building-o"
                size={40}
                color="#063B87"
              />
              <View style={styles.middleRow}>
                <Text style={styles.sumaryTextHeader}>You earned</Text>
                <Text>Total earnings reported by your employer</Text>
              </View>
              <Text style={styles.balanceText}>XAF 200 000</Text>
            </View>
            <View style={styles.row}>
              <IconMaterial 
                name="minus-circle"
                size={40}
                color="#063B87"
              />
              <View style={styles.middleRow}>
                <Text style={styles.sumaryTextHeader}>Estimated Withholdings</Text>
                <Text>Estimated Taxes and any other deductions</Text>
              </View>
              <Text style={styles.balanceText}>XAF 100 000</Text>
            </View>
            <View style={styles.row}>
              <IconMaterial 
                name="database"
                size={40}
                color="#063B87"
              />
              <View style={styles.middleRow}>
                <Text style={styles.sumaryTextHeader}>Savings</Text>
                <Text>Total savings made for this pay period</Text>
              </View>
              <Text style={styles.balanceText}>XAF 20 000</Text>
            </View>
            <View style={styles.row}>
              <IconMaterial 
                name="file-text-o"
                size={40}
                color="#063B87"
              />
              <View style={styles.middleRow}>
                <Text style={styles.sumaryTextHeader}>Others</Text>
                <Text>Total savings made for this pay period</Text>
              </View>
              <Text style={styles.balanceText}>XAF 0</Text>
            </View>
            <View style={styles.row}>
              <IconMaterial 
                name="institution"
                size={30}
                color="#063B87"
              />
              <View style={styles.middleRow}>
                <Text style={styles.sumaryTextHeader}>You Transfered</Text>
                <Text>Total savings made for this pay period</Text>
              </View>
              <Text style={styles.balanceText}>XAF 80 000</Text>
            </View>
            <CustomHr color="#063B87" width={1}/>
            <View style={[styles.row, {alignItems: "center"}]}>
              <Ionicons 
                name="logo-angular"
                size={40}
                color="#063B87"
                style={styles.icon}
              />
              <View style={styles.middleRow}>
                <Text style={styles.sumaryTextHeader}>You Transfered</Text>
              </View>
              <Text style={styles.balanceText}>XAF 80 000</Text>
            </View>
            <CustomHr color="#063B87" width={1}/>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: "white",
    padding: 40,
    flexDirection: "column"
  },
  header: {
    
  },
  sumary: {
    alignItems: "center",
    marginTop: 40,
  },
  updateSection: {
    flexDirection: "row",
    alignItems: "center"
  },
  transferSection: {
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 10
  },
  middleRow: {
    marginHorizontal: 10,
    flex: 4
  },
  sumaryInfo: {
    marginTop: 20
  },
  sumaryTextHeader: {
    fontWeight: 700,
    fontSize: 15
  },
  balanceText: {
    fontWeight: 700,
    fontSize: 15,
  },
  footer: {

  }
  
});