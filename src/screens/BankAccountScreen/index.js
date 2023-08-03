import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import CustomButton from "../../components/CustomButton";
import { Actions } from "react-native-router-flux";
import PaymentDetailsBox from "../../components/PaymentDetailsBox";
import AccountSettingsHeader from "../../components/AccountsSettingsHeader";
import UpdateInformation from "../../components/UpdateInformation";

export default function BankAccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* ----------------------header navigation container -------------*/}
      <AccountSettingsHeader
        headerTitle="BANK ACCOUNT"
        navigation={navigation}
      />

      {/* ----------------------Payment detatils box container----------------- */}
      <View style={styles.debitCardContainer}>
        <Text style={styles.infoTitle}>Bank Accounts</Text>
        <View style={styles.debitCardContent}>
          <View>
            <PaymentDetailsBox
              paymentType="ECOBANK"
              lastDigits="........7372"
              primaryStatus="Primary Bank Account"
              validationStatus="Valid"
              validationImage="check-circle"
              imageName="bank"
            />
            <PaymentDetailsBox
              paymentType="UBA BANK"
              lastDigits="........7272"
              primaryStatus="Secondary Bank Account"
              validationStatus="Invalid"
            />
            <PaymentDetailsBox
              paymentType="NFC BANK"
              lastDigits="........2892"
              primaryStatus="Secondary Bank Account"
              validationStatus="Valid"
            />
          </View>
        </View>
      </View>

      {/* -----------------add payment details button container---------------- */}
      <UpdateInformation editValue="Bank" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    PaddingBottom: 40,
    // paddingRight: 10, 
    // paddingLeft: 10,
    backgroundColor: "white",
    flexDirection: "column",
  },
  buttonContainer: {
    flex: 2,
    padding: 20,
    width: "100%",
  },
  cardBox: {
    marginTop: 20,
  },
  debitCardContainer: {
    // flex: 6,
    // flexDirection: "column",
    // alignItems: "center",
    // margin: 20,
    marginTop: 30,
  },
  debitCardContent: {
    marginTop: 30,
    alignItems: "stretch",
    alignItems: "center",
    // margin: 10,
    marginTop: 50,
  },
  debitCardContent: {
    // marginTop: 10,
    flexDirection: "column",
    width: '100%',
    // flexDirection: "column",
    // alignItems: "center",
    // margin: 20,
    marginTop: 30,
  },
  debitCardContent: {
    marginTop: 30,
    alignItems: "stretch",
    alignItems: "center",
    // margin: 10,
    marginTop: 50,
  },
  debitCardContent: {
    // marginTop: 10,
    flexDirection: "column",
    width: '100%',
    // marginLeft: 20,
    // marginRight: 20,
  },
  infoTitle: {
    fontWeight: 600,
    fontSize: 23,
    textAlign: 'center',
    marginTop: 40,
    textAlign: 'center',
    marginTop: 40,
  },
});
