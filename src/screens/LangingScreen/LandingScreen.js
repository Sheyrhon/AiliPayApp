import { 
  StyleSheet,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton';
import DisplayBox from '../../components/DisplayBox';

export default function LandingScreen2({navigation}) {
  const goToLoginScreen = () => {
    navigation.navigate("LoginScreen")
  }

  const goToGettingStartedEmailScreen = () => {
    navigation.navigate("GettingStartedEmailScreen")
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <CustomButton 
          title="login" 
          backgroundColor="#3F5F90"
          color="white" 
          onPress={goToLoginScreen}
        />
      </View>
      <View style={styles.image}>

      </View>
      <View style={styles.info}>
        <DisplayBox 
          header="Get Instant Access to your Earnings When you need it the most"
          body="On demand pay enables fiinancial control you need to minimize borrowing 
                and improve your financial well-being"
          footer={
            <CustomButton 
              title="Get started" 
              backgroundColor="#063B87" 
              color="white"
              onPress={goToGettingStartedEmailScreen}
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#063B87',
    color: "white",
    padding: 40,
  },
  header: {
    flexDirection: "row",
    top: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 160,
    backgroundColor: "#D9D9D9",
    marginTop: 70,
    borderRadius: 30
  },
  info: {
    marginTop: 30
  }
});